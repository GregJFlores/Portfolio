import { prisma } from "./prisma";

export interface ScoreData {
    name: string;
    score: number;
}

export interface Score {
    id: number;
    name: string;
    score: number;
    createdAt: Date;
}

// Store a new score
export async function storeScore(data: ScoreData): Promise<Score> {
    try {
        const newScore = await prisma.score.create({
            data: {
                name: data.name,
                score: data.score,
            },
        });
        return newScore;
    } catch (error) {
        console.error("Error storing score:", error);
        throw new Error("Failed to store score");
    }
}

// Fetch all scores (ordered by highest score first)
export async function fetchAllScores(): Promise<Score[]> {
    try {
        const scores = await prisma.score.findMany({
            orderBy: {
                score: "desc", // Highest scores first
            },
        });
        return scores;
    } catch (error) {
        console.error("Error fetching scores:", error);
        throw new Error("Failed to fetch scores");
    }
}

// Fetch top N scores
export async function fetchTopScores(limit: number = 5): Promise<Score[]> {
    try {
        const scores = await prisma.score.findMany({
            orderBy: {
                score: "desc",
            },
            take: limit,
        });
        return scores;
    } catch (error) {
        console.error("Error fetching top scores:", error);
        throw new Error("Failed to fetch top scores");
    }
}
