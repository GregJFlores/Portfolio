"use client";
import React, { useState, useRef, useEffect } from "react";

interface ExpandableTextProps {
    children: React.ReactNode;
    maxHeight?: number;
    className?: string;
    readMoreText?: string;
    readLessText?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ children, maxHeight = 200, className = "", readMoreText = "Read More", readLessText = "Read Less" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [fullHeight, setFullHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkHeight = () => {
            if (contentRef.current) {
                const actualHeight = contentRef.current.scrollHeight;
                setFullHeight(actualHeight);
                setShowButton(actualHeight > maxHeight);
            }
        };

        checkHeight();
        // Re-check on window resize
        window.addEventListener("resize", checkHeight);
        return () => window.removeEventListener("resize", checkHeight);
    }, [maxHeight, children]);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`relative ${className}`}>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all flex flex-col space-y-4 duration-500 ease-in-out"
                style={{
                    maxHeight: isExpanded ? `${fullHeight}px` : showButton ? `${maxHeight - 10}px` : "auto",
                }}
            >
                {children}
            </div>

            {showButton && !isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pointer-events-none" />
            )}

            {showButton && (
                <button
                    onClick={toggleExpanded}
                    className="mt-1 md:mt-0 px-1 py-0.5 text-green-400 drop-shadow-[0_0_5px_rgba(34,197,94,0.6)] flex items-center justify-center gap-x-2"
                >
                    {isExpanded ? readLessText : readMoreText}
                    <span className="text-xs text-gray-300 ml-1">{isExpanded ? "▲" : "▼"}</span>
                </button>
            )}
        </div>
    );
};

export default ExpandableText;
