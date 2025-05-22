"use client";

import { useEffect, useState } from "react";

interface TypedTextProps {
    text: string; // The text to be typed
    speed?: number; // Typing speed (ms per character)
    showPrompt?: boolean; // Whether to show a command prompt
    promptText?: string; // Custom prompt text
}

const TypedText = ({ text, speed = 25, showPrompt = false, promptText = "[system@portfolio ~]$" }: TypedTextProps) => {
    const [typingText, setTypingText] = useState("");
    const [typingComplete, setTypingComplete] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    // Typing effect
    useEffect(() => {
        if (typingText.length < text.length) {
            const timeout = setTimeout(() => {
                setTypingText(text.slice(0, typingText.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            setTypingComplete(true);
        }
    }, [typingText, text, speed]);

    // Blinking cursor effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((v) => !v);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="terminal-container relative">
            {showPrompt && <div className="absolute -top-5 left-0 text-green-500 opacity-50 text-sm">{promptText}</div>}
            <p className="text-green-300 drop-shadow-[0_0_4px_rgba(34,197,94,0.5)]">
                {typingText}
                {cursorVisible && <span className="text-green-100">_</span>}
            </p>
        </div>
    );
};
export default TypedText;
