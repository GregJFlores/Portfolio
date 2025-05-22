"use client";

import { useEffect, useState } from "react";

interface TypedTextProps {
    text: string; // The text to be typed
    speed?: number; // Typing speed (ms per character)
    showPrompt?: boolean; // Whether to show a command prompt
    promptText?: string; // Custom prompt text
    showCursorBlink?: boolean; // Whether the cursor is visible
}

const TypedText = ({ text, speed = 25, showPrompt = false, promptText = "[system@portfolio ~]$", showCursorBlink = false }: TypedTextProps) => {
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
        if (!showCursorBlink) {
            return;
        }
        const interval = setInterval(() => {
            setCursorVisible((v) => !v);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!showCursorBlink && typingComplete) {
            setCursorVisible(false);
        }
    }, [showCursorBlink, typingComplete]);

    return (
        <div className="relative">
            {showPrompt && <div className="absolute -top-5 left-0 opacity-50 text-sm">{promptText}</div>}
            <p className="">
                {typingText}
                {cursorVisible && <span className="text-green-100">_</span>}
            </p>
        </div>
    );
};
export default TypedText;
