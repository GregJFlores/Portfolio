"use client";
import { type Score } from "@/lib/database";
import { AwardIcon, TrophyIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { GiTrophy } from "react-icons/gi";

interface Vector {
    x: number;
    y: number;
}

interface GameObject {
    pos: Vector;
    vel: Vector;
    angle: number;
    size: number;
}

interface Ship extends GameObject {
    thrust: boolean;
}

interface Asteroid extends GameObject {
    rotationSpeed: number;
    level: number;
}

interface Bullet extends GameObject {
    life: number;
}

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const SHIP_SIZE = 8;
const BULLET_SPEED = 8;
const BULLET_LIFE = 50;
const ASTEROID_LEVELS = [30, 20, 10];

export default function AsteroidsGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const keysRef = useRef<Set<string>>(new Set());

    const [gameState, setGameState] = useState<"playing" | "gameOver" | "enterName" | "leaderboard">("playing");
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [level, setLevel] = useState(1);
    const [playerName, setPlayerName] = useState("");
    const [highScores, setHighScores] = useState<Score[]>([]);
    const [isLoadingScores, setIsLoadingScores] = useState(false);
    const [isSavingScore, setIsSavingScore] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mobile controls state
    const [mobileControls, setMobileControls] = useState({
        left: false,
        right: false,
        thrust: false,
        shoot: false,
    });

    const [autoFire, setAutoFire] = useState(false);
    const autoFireIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const shipRef = useRef<Ship>({
        pos: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 },
        vel: { x: 0, y: 0 },
        angle: 0,
        size: SHIP_SIZE,
        thrust: false,
    });

    const asteroidsRef = useRef<Asteroid[]>([]);
    const bulletsRef = useRef<Bullet[]>([]);
    const invulnerableRef = useRef(0);

    // Check if mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const loadHighScores = useCallback(async () => {
        setIsLoadingScores(true);
        try {
            console.log("🔍 Fetching scores from API...");
            const response = await fetch("/api/scores");

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const scores = await response.json();
            console.log("✅ Successfully loaded scores:", scores);

            // Convert date strings back to Date objects
            const scoresWithDates = scores.map((score: any) => ({
                ...score,
                createdAt: new Date(score.createdAt),
            }));

            setHighScores(scoresWithDates);
        } catch (error) {
            console.error("Failed to load high scores from API:", error);

            // Fallback to localStorage if API fails
            const saved = localStorage.getItem("asteroids-highscores");
            if (saved) {
                try {
                    const localScores = JSON.parse(saved);
                    // Convert local format to Score format
                    const convertedScores = localScores.map((score: any) => ({
                        id: score.id,
                        name: score.name,
                        score: score.score,
                        createdAt: new Date(score.date),
                    }));
                    setHighScores(convertedScores);
                    console.log("📦 Loaded from localStorage as fallback");
                } catch (e) {
                    console.error("Failed to load local high scores:", e);
                }
            }
        } finally {
            setIsLoadingScores(false);
        }
    }, []);

    // Load scores on component mount
    useEffect(() => {
        loadHighScores();
    }, [loadHighScores]);

    const addHighScore = useCallback(
        async (name: string, playerScore: number) => {
            setIsSavingScore(true);
            try {
                const trimmedName = name.trim() || "Anonymous";
                console.log("💾 Saving score to API:", { name: trimmedName, score: playerScore });

                const response = await fetch("/api/scores", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name: trimmedName, score: playerScore }),
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
                    throw new Error(`API Error: ${response.status} - ${errorData.error || response.statusText}`);
                }

                const newScore = await response.json();
                console.log("✅ Score saved successfully:", newScore);

                // Reload scores to get updated leaderboard
                await loadHighScores();
            } catch (error) {
                console.error("Failed to save high score to API:", error);

                // Fallback to localStorage if API fails
                const newScore = {
                    id: Date.now().toString(),
                    name: name.trim() || "Anonymous",
                    score: playerScore,
                    level: level,
                    date: new Date().toLocaleDateString(),
                };

                const saved = localStorage.getItem("asteroids-highscores");
                let localScores = [];
                if (saved) {
                    try {
                        localScores = JSON.parse(saved);
                    } catch (e) {
                        console.error("Failed to parse local scores:", e);
                    }
                }

                const updatedScores = [...localScores, newScore].sort((a, b) => b.score - a.score).slice(0, 10);

                localStorage.setItem("asteroids-highscores", JSON.stringify(updatedScores));

                // Convert back to Score format for display
                const convertedScores = updatedScores.map((score: any) => ({
                    id: score.id,
                    name: score.name,
                    score: score.score,
                    createdAt: new Date(score.date),
                }));
                setHighScores(convertedScores);
                console.log("📦 Saved to localStorage as fallback");
            } finally {
                setIsSavingScore(false);
            }
        },
        [level, loadHighScores]
    );

    const createAsteroid = useCallback((x: number, y: number, level: number = 0): Asteroid => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 2;
        return {
            pos: { x, y },
            vel: {
                x: Math.cos(angle) * speed,
                y: Math.sin(angle) * speed,
            },
            angle: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            size: ASTEROID_LEVELS[level],
            level,
        };
    }, []);

    const initializeLevel = useCallback(() => {
        asteroidsRef.current = [];
        const asteroidCount = 4 + level - 1;

        for (let i = 0; i < asteroidCount; i++) {
            let x, y;
            do {
                x = Math.random() * CANVAS_WIDTH;
                y = Math.random() * CANVAS_HEIGHT;
            } while (Math.abs(x - shipRef.current.pos.x) < 100 && Math.abs(y - shipRef.current.pos.y) < 100);

            asteroidsRef.current.push(createAsteroid(x, y, 0));
        }
    }, [level, createAsteroid]);

    const wrapPosition = (pos: Vector): Vector => ({
        x: ((pos.x % CANVAS_WIDTH) + CANVAS_WIDTH) % CANVAS_WIDTH,
        y: ((pos.y % CANVAS_HEIGHT) + CANVAS_HEIGHT) % CANVAS_HEIGHT,
    });

    const updateShip = useCallback(() => {
        const ship = shipRef.current;

        // Rotation (keyboard or mobile)
        if (keysRef.current.has("ArrowLeft") || keysRef.current.has("a") || mobileControls.left) {
            ship.angle -= 0.15;
        }
        if (keysRef.current.has("ArrowRight") || keysRef.current.has("d") || mobileControls.right) {
            ship.angle += 0.15;
        }

        // Thrust (keyboard or mobile)
        ship.thrust = keysRef.current.has("ArrowUp") || keysRef.current.has("w") || mobileControls.thrust;
        if (ship.thrust) {
            const thrustPower = 0.3;
            ship.vel.x += Math.cos(ship.angle) * thrustPower;
            ship.vel.y += Math.sin(ship.angle) * thrustPower;
        }

        // Apply friction
        ship.vel.x *= 0.99;
        ship.vel.y *= 0.99;

        // Update position
        ship.pos.x += ship.vel.x;
        ship.pos.y += ship.vel.y;
        ship.pos = wrapPosition(ship.pos);

        // Limit speed
        const maxSpeed = 8;
        const speed = Math.sqrt(ship.vel.x ** 2 + ship.vel.y ** 2);
        if (speed > maxSpeed) {
            ship.vel.x = (ship.vel.x / speed) * maxSpeed;
            ship.vel.y = (ship.vel.y / speed) * maxSpeed;
        }
    }, [mobileControls]);

    const shoot = useCallback(() => {
        if (bulletsRef.current.length < 6) {
            const ship = shipRef.current;
            bulletsRef.current.push({
                pos: { x: ship.pos.x, y: ship.pos.y },
                vel: {
                    x: ship.vel.x + Math.cos(ship.angle) * BULLET_SPEED,
                    y: ship.vel.y + Math.sin(ship.angle) * BULLET_SPEED,
                },
                angle: 0,
                size: 2,
                life: BULLET_LIFE,
            });
        }
    }, []);

    const startAutoFire = useCallback(() => {
        if (autoFireIntervalRef.current) return;

        shoot();

        autoFireIntervalRef.current = setInterval(() => {
            if (gameState === "playing") {
                shoot();
            }
        }, 200);
    }, [shoot, gameState]);

    const stopAutoFire = useCallback(() => {
        if (autoFireIntervalRef.current) {
            clearInterval(autoFireIntervalRef.current);
            autoFireIntervalRef.current = null;
        }
        setAutoFire(false);
    }, []);

    const handleSpaceKey = useCallback(
        (pressed: boolean) => {
            if (pressed && !autoFire) {
                setAutoFire(true);
                startAutoFire();
            } else if (!pressed && autoFire) {
                stopAutoFire();
            }
        },
        [autoFire, startAutoFire, stopAutoFire]
    );

    const updateBullets = useCallback(() => {
        bulletsRef.current = bulletsRef.current.filter((bullet) => {
            bullet.pos.x += bullet.vel.x;
            bullet.pos.y += bullet.vel.y;
            bullet.pos = wrapPosition(bullet.pos);
            bullet.life--;

            const speed = Math.sqrt(bullet.vel.x ** 2 + bullet.vel.y ** 2);
            return bullet.life > 0 && speed > 1;
        });
    }, []);

    const updateAsteroids = useCallback(() => {
        asteroidsRef.current.forEach((asteroid) => {
            asteroid.pos.x += asteroid.vel.x;
            asteroid.pos.y += asteroid.vel.y;
            asteroid.pos = wrapPosition(asteroid.pos);
            asteroid.angle += asteroid.rotationSpeed;
        });
    }, []);

    const checkCollisions = useCallback(() => {
        // Bullet-asteroid collisions
        for (let i = bulletsRef.current.length - 1; i >= 0; i--) {
            const bullet = bulletsRef.current[i];

            for (let j = asteroidsRef.current.length - 1; j >= 0; j--) {
                const asteroid = asteroidsRef.current[j];
                const dx = bullet.pos.x - asteroid.pos.x;
                const dy = bullet.pos.y - asteroid.pos.y;
                const distance = Math.sqrt(dx ** 2 + dy ** 2);

                if (distance < asteroid.size) {
                    bulletsRef.current.splice(i, 1);
                    asteroidsRef.current.splice(j, 1);

                    setScore((prev) => prev + (3 - asteroid.level) * 20);

                    if (asteroid.level < 2) {
                        for (let k = 0; k < 2; k++) {
                            asteroidsRef.current.push(createAsteroid(asteroid.pos.x, asteroid.pos.y, asteroid.level + 1));
                        }
                    }
                    break;
                }
            }
        }

        // Ship-asteroid collisions
        if (invulnerableRef.current <= 0) {
            const ship = shipRef.current;

            for (const asteroid of asteroidsRef.current) {
                const dx = ship.pos.x - asteroid.pos.x;
                const dy = ship.pos.y - asteroid.pos.y;
                const distance = Math.sqrt(dx ** 2 + dy ** 2);

                if (distance < ship.size + asteroid.size * 0.8) {
                    setLives((prev) => {
                        const newLives = prev - 1;
                        if (newLives <= 0) {
                            // Check if score qualifies for high score entry
                            const isHighScore = highScores.length < 10 || score > highScores[highScores.length - 1]?.score;
                            if (isHighScore && score > 0) {
                                setGameState("enterName");
                            } else {
                                setGameState("gameOver");
                            }
                        }
                        return newLives;
                    });

                    ship.pos = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 };
                    ship.vel = { x: 0, y: 0 };
                    invulnerableRef.current = 120;
                    break;
                }
            }
        } else {
            invulnerableRef.current--;
        }
    }, [createAsteroid, score, highScores]);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Draw stars background
        ctx.fillStyle = "#22c55e";
        for (let i = 0; i < 100; i++) {
            const x = (i * 97) % CANVAS_WIDTH;
            const y = (i * 137) % CANVAS_HEIGHT;
            ctx.fillRect(x, y, 1, 1);
        }

        // Draw ship
        const ship = shipRef.current;
        if (invulnerableRef.current <= 0 || Math.floor(invulnerableRef.current / 10) % 2) {
            ctx.save();
            ctx.translate(ship.pos.x, ship.pos.y);
            ctx.rotate(ship.angle);
            ctx.strokeStyle = ship.thrust ? "#10b981" : "#22c55e";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(ship.size, 0);
            ctx.lineTo(-ship.size, -ship.size / 2);
            ctx.lineTo(-ship.size / 2, 0);
            ctx.lineTo(-ship.size, ship.size / 2);
            ctx.closePath();
            ctx.stroke();

            if (ship.thrust) {
                ctx.strokeStyle = "#ef4444";
                ctx.beginPath();
                ctx.moveTo(-ship.size, -3);
                ctx.lineTo(-ship.size * 1.5, 0);
                ctx.lineTo(-ship.size, 3);
                ctx.stroke();
            }
            ctx.restore();
        }

        // Draw asteroids
        ctx.strokeStyle = "#16a34a";
        ctx.lineWidth = 2;
        asteroidsRef.current.forEach((asteroid) => {
            ctx.save();
            ctx.translate(asteroid.pos.x, asteroid.pos.y);
            ctx.rotate(asteroid.angle);
            ctx.beginPath();
            const points = 8;
            for (let i = 0; i < points; i++) {
                const angle = (i / points) * Math.PI * 2;
                const radius = asteroid.size * (0.8 + Math.sin(i * 1.3) * 0.2);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        });

        // Draw bullets
        ctx.fillStyle = "#f59e0b";
        bulletsRef.current.forEach((bullet) => {
            ctx.beginPath();
            ctx.arc(bullet.pos.x, bullet.pos.y, bullet.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }, []);

    const gameLoop = useCallback(() => {
        if (gameState !== "playing") return;

        updateShip();
        updateBullets();
        updateAsteroids();
        checkCollisions();

        if (asteroidsRef.current.length === 0) {
            setLevel((prev) => prev + 1);
            setScore((prev) => prev + 1000);
        }

        draw();
        animationRef.current = requestAnimationFrame(gameLoop);
    }, [gameState, updateShip, updateBullets, updateAsteroids, checkCollisions, draw]);

    const resetGame = () => {
        stopAutoFire();

        setGameState("playing");
        setScore(0);
        setLives(3);
        setLevel(1);
        setPlayerName("");
        shipRef.current = {
            pos: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 },
            vel: { x: 0, y: 0 },
            angle: 0,
            size: SHIP_SIZE,
            thrust: false,
        };
        bulletsRef.current = [];
        invulnerableRef.current = 60;
        setMobileControls({ left: false, right: false, thrust: false, shoot: false });
    };

    const handleNameSubmit = async () => {
        if (isSavingScore) return;

        await addHighScore(playerName, score);
        setGameState("leaderboard");
    };

    // Handle mobile shooting with auto-fire
    useEffect(() => {
        if (mobileControls.shoot && gameState === "playing") {
            if (!autoFire) {
                setAutoFire(true);
                startAutoFire();
            }
        } else if (!mobileControls.shoot && autoFire) {
            stopAutoFire();
        }
    }, [mobileControls.shoot, autoFire, startAutoFire, stopAutoFire, gameState]);

    useEffect(() => {
        initializeLevel();
    }, [level, initializeLevel]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (gameState !== "playing") return;

            keysRef.current.add(e.key);
            if (e.key === " ") {
                e.preventDefault();
                handleSpaceKey(true);
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            keysRef.current.delete(e.key);
            if (e.key === " ") {
                handleSpaceKey(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [handleSpaceKey, gameState]);

    useEffect(() => {
        if (gameState === "playing") {
            animationRef.current = requestAnimationFrame(gameLoop);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [gameState, gameLoop]);

    useEffect(() => {
        return () => {
            if (autoFireIntervalRef.current) {
                clearInterval(autoFireIntervalRef.current);
            }
        };
    }, []);

    const canvasStyle = isMobile
        ? {
              width: "100%",
              maxWidth: "100vw",
              height: "auto",
              maxHeight: "60vh",
          }
        : {};

    return (
        <div
            className="flex flex-col items-center p-2 sm:p-4 bg-transparent min-h-screen select-none"
            style={{
                WebkitUserSelect: "none",
                WebkitTouchCallout: "none",
                WebkitTapHighlightColor: "transparent",
            }}
        >
            <div className="mb-4 sm:mb-6 flex items-center flex-col gap-4 sm:gap-8 text-green-400 font-mono justify-center bg-green-900/20 border border-green-500/30 rounded-xs px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 font-bold">Score:</span>
                        <span className="text-green-300 text-lg font-bold">{score}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 font-bold">Lives:</span>
                        <span className="text-green-300 text-lg font-bold">{lives}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 font-bold">Level:</span>
                        <span className="text-green-300 text-lg font-bold">{level}</span>
                    </div>
                </div>
                <button
                    onClick={() => setGameState("leaderboard")}
                    className="w-fit text-center px-3 py-1.5 bg-gradient-to-r from-green-600 flex items-center gap-x-2 to-green-500 hover:from-green-500 hover:to-green-400 text-black font-mono text-sm font-bold rounded-xs border border-green-400 transition-all duration-200 shadow-lg hover:shadow-green-400/30"
                >
                    🏆 Leaderboard
                </button>
            </div>

            <div className="relative">
                <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className="border-2 border-green-500 bg-black" style={canvasStyle} tabIndex={0} />

                {gameState === "gameOver" && (
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 rounded-xs border border-green-500/50">
                        <div className="bg-green-900/30 border border-green-500/50 rounded-xs p-6 text-center backdrop-blur-sm max-w-sm w-full">
                            <div className="text-green-400 font-mono text-2xl sm:text-4xl mb-4 drop-shadow-lg">GAME OVER</div>
                            <div className="text-green-300 font-mono text-lg sm:text-xl mb-6">
                                Final Score: <span className="text-green-400 font-bold">{score}</span>
                            </div>
                            <button
                                onClick={resetGame}
                                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-black font-mono text-sm sm:text-lg font-bold rounded-xs border-2 border-green-400 transition-all duration-200 shadow-lg hover:shadow-green-400/30"
                            >
                                PLAY AGAIN
                            </button>
                        </div>
                    </div>
                )}

                {gameState === "enterName" && (
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 rounded-xs border border-green-500/50">
                        <div className="bg-green-900/30 border border-green-500/50 rounded-xs p-2 text-center backdrop-blur-sm max-w-sm w-full">
                            <div className="text-green-400 font-mono text-xl sm:text-3xl mb-4 drop-shadow-lg">
                                {score > (highScores[0]?.score || 0) ? "🏆 YOU BEAT THE #1 HIGH SCORE!" : "🎉 HIGH SCORE!"}
                            </div>
                            <div className="text-green-300 font-mono text-lg mb-4">
                                Score: <span className="text-green-400 font-bold">{score}</span>
                            </div>
                            <div className="text-green-300 font-mono text-sm mb-4">Enter your name:</div>
                            <input
                                type="text"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value.slice(0, 15))}
                                onKeyPress={(e) => e.key === "Enter" && !isSavingScore && handleNameSubmit()}
                                className="px-3 py-2 bg-black/80 border-2 border-green-500 text-green-400 font-mono text-center rounded-xs mb-4 w-full max-w-xs focus:outline-none focus:border-green-400"
                                placeholder="Your Name"
                                maxLength={15}
                                autoFocus
                                disabled={isSavingScore}
                            />
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={handleNameSubmit}
                                    disabled={isSavingScore}
                                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:from-gray-600 disabled:to-gray-500 disabled:cursor-not-allowed text-black font-mono text-sm sm:text-lg font-bold rounded-xs border-2 border-green-400 transition-all duration-200 shadow-lg hover:shadow-green-400/30"
                                >
                                    {isSavingScore ? "SAVING..." : "SUBMIT"}
                                </button>
                                <button
                                    onClick={() => setGameState(lives > 0 ? "playing" : "gameOver")}
                                    disabled={isSavingScore}
                                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:from-gray-600 disabled:to-gray-500 disabled:cursor-not-allowed text-black font-mono text-sm sm:text-lg font-bold rounded-xs border-2 border-green-400 transition-all duration-200 shadow-lg hover:shadow-green-400/30"
                                >
                                    CANCEL
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {gameState === "leaderboard" && (
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 rounded-xs border border-green-500/50 overflow-y-auto">
                        <div className="bg-green-900/30 border border-green-500/50 rounded-xs p-3 w-full max-w-md backdrop-blur-sm my-auto">
                            <div className="text-green-400 font-mono text-xl sm:text-3xl mb-6 text-center drop-shadow-lg">🏆 HIGH SCORES</div>
                            <div className="space-y-2 mb-6 max-h-1/3 overflow-y-auto">
                                {isLoadingScores ? (
                                    <div className="text-green-300 font-mono text-center py-8">Loading scores...</div>
                                ) : highScores.length === 0 ? (
                                    <div className="text-green-300 font-mono text-center py-8">No high scores yet!</div>
                                ) : (
                                    highScores.slice(0, 10).map((scoreEntry, index) => (
                                        <div
                                            key={scoreEntry.id}
                                            className="flex justify-between items-center text-green-300 font-mono text-sm px-2 py-1.5 bg-green-900/40 border border-green-700/50 rounded-xs hover:bg-green-900/60 transition-colors"
                                        >
                                            <span className="text-green-400 font-bold">#{index + 1}</span>
                                            <span className="flex-1 mx-3 truncate">{scoreEntry.name}</span>
                                            <span className="text-green-400 font-bold">{scoreEntry.score}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setGameState(lives > 0 ? "playing" : "gameOver")}
                                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-black font-mono text-sm sm:text-lg font-bold rounded-xs border-2 border-green-400 transition-all duration-200 shadow-lg hover:shadow-green-400/30"
                                >
                                    BACK
                                </button>
                                <button
                                    onClick={loadHighScores}
                                    disabled={isLoadingScores}
                                    className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:from-gray-600 disabled:to-gray-500 disabled:cursor-not-allowed text-black font-mono text-sm font-bold rounded-xs border-2 border-blue-400 transition-all duration-200 shadow-lg hover:shadow-blue-400/30"
                                >
                                    {isLoadingScores ? "..." : "↻"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Controls */}
            {isMobile && gameState === "playing" && (
                <div className="mt-4 w-full max-w-lg">
                    <div className="flex justify-between items-center">
                        {/* Left side - rotation controls */}
                        <div className="flex gap-2">
                            <button
                                onTouchStart={() => setMobileControls((prev) => ({ ...prev, left: true }))}
                                onTouchEnd={() => setMobileControls((prev) => ({ ...prev, left: false }))}
                                onMouseDown={() => setMobileControls((prev) => ({ ...prev, left: true }))}
                                onMouseUp={() => setMobileControls((prev) => ({ ...prev, left: false }))}
                                className="w-16 h-16 bg-green-600 hover:bg-green-500 active:bg-green-400 text-black font-mono text-xl rounded border-2 border-green-400 select-none touch-manipulation"
                                onContextMenu={(e) => e.preventDefault()}
                                style={{
                                    WebkitUserSelect: "none",
                                    WebkitTouchCallout: "none",
                                    WebkitTapHighlightColor: "transparent",
                                    touchAction: "manipulation",
                                }}
                            >
                                ←
                            </button>
                            <button
                                onTouchStart={() => setMobileControls((prev) => ({ ...prev, right: true }))}
                                onTouchEnd={() => setMobileControls((prev) => ({ ...prev, right: false }))}
                                onMouseDown={() => setMobileControls((prev) => ({ ...prev, right: true }))}
                                onMouseUp={() => setMobileControls((prev) => ({ ...prev, right: false }))}
                                onContextMenu={(e) => e.preventDefault()}
                                className="w-16 h-16 bg-green-600 hover:bg-green-500 active:bg-green-400 text-black font-mono text-xl rounded border-2 border-green-400 select-none touch-manipulation"
                                style={{
                                    WebkitUserSelect: "none",
                                    WebkitTouchCallout: "none",
                                    WebkitTapHighlightColor: "transparent",
                                    touchAction: "manipulation",
                                }}
                            >
                                →
                            </button>
                        </div>

                        {/* Right side - action controls */}
                        <div className="flex gap-2">
                            <button
                                onTouchStart={() => setMobileControls((prev) => ({ ...prev, thrust: true }))}
                                onTouchEnd={() => setMobileControls((prev) => ({ ...prev, thrust: false }))}
                                onMouseDown={() => setMobileControls((prev) => ({ ...prev, thrust: true }))}
                                onMouseUp={() => setMobileControls((prev) => ({ ...prev, thrust: false }))}
                                onContextMenu={(e) => e.preventDefault()}
                                className="w-16 h-16 bg-green-600 hover:bg-green-500 active:bg-green-400 text-black font-mono text-sm rounded border-2 border-green-400 select-none touch-manipulation"
                                style={{
                                    WebkitUserSelect: "none",
                                    WebkitTouchCallout: "none",
                                    WebkitTapHighlightColor: "transparent",
                                    touchAction: "manipulation",
                                }}
                            >
                                ↑<br />
                                THRUST
                            </button>
                            <button
                                onTouchStart={() => setMobileControls((prev) => ({ ...prev, shoot: true }))}
                                onTouchEnd={() => setMobileControls((prev) => ({ ...prev, shoot: false }))}
                                onMouseDown={() => setMobileControls((prev) => ({ ...prev, shoot: true }))}
                                onMouseUp={() => setMobileControls((prev) => ({ ...prev, shoot: false }))}
                                onContextMenu={(e) => e.preventDefault()}
                                className={`w-16 h-16 ${autoFire ? "bg-red-400" : "bg-red-600"} hover:bg-red-500 active:bg-red-400 text-white font-mono text-sm rounded border-2 border-red-400 select-none touch-manipulation`}
                                style={{
                                    WebkitUserSelect: "none",
                                    WebkitTouchCallout: "none",
                                    WebkitTapHighlightColor: "transparent",
                                    touchAction: "manipulation",
                                }}
                            >
                                FIRE
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Controls info */}
            <div className="mt-4 w-full max-w-md">
                <button
                    onClick={() => setShowControls(!showControls)}
                    className="w-full text-green-400 font-mono text-sm hover:text-green-300 bg-green-900/30 hover:bg-green-900/50 border border-green-500/30 rounded-xs py-2 px-4 transition-all duration-200"
                >
                    {showControls ? "Hide" : "Show"} Controls & Instructions
                </button>
                {showControls && (
                    <div className="mt-3 bg-green-900/20 border border-green-500/30 rounded-xs p-4 backdrop-blur-sm">
                        <div className="text-green-300 font-mono text-sm space-y-3">
                            <div className="border-b border-green-500/30 pb-2">
                                <div className="text-green-400 font-bold mb-2 flex items-center gap-2">🎮 Desktop Controls:</div>
                                <div className="space-y-1 text-xs">
                                    <div className="flex justify-between">
                                        <span>Rotate:</span>
                                        <span className="text-green-400">← → or A/D</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Thrust:</span>
                                        <span className="text-green-400">↑ or W</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Auto-fire:</span>
                                        <span className="text-green-400">Space (hold)</span>
                                    </div>
                                </div>
                            </div>
                            {isMobile && (
                                <div className="border-b border-green-500/30 pb-2">
                                    <div className="text-green-400 font-bold mb-2 flex items-center gap-2">📱 Mobile Controls:</div>
                                    <div className="text-xs">
                                        <div>Use buttons above • Hold FIRE for auto-fire</div>
                                    </div>
                                </div>
                            )}
                            <div>
                                <div className="text-green-400 font-bold mb-2 flex items-center gap-2">🎯 Objective:</div>
                                <div className="text-xs space-y-1">
                                    <div>• Destroy all asteroids to advance levels</div>
                                    <div>• Large asteroids split into smaller ones</div>
                                    <div>• Avoid collisions to preserve lives</div>
                                    <div>• Scores are saved to the global leaderboard</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
