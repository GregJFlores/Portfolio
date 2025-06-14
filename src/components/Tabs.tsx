"use client";
import React, { useState, useRef, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";

export type Tab = {
    id: string;
    label: string;
    content: React.ReactNode;
};

type TabsProps = {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
    tabClassName?: string;
    contentClassName?: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, className = "", tabClassName = "", contentClassName = "" }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const scrollPositionRef = useRef<number>(0);

    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label;

    // Prevent scroll restoration and capture scroll position
    useEffect(() => {
        if (typeof window !== "undefined") {
            const originalScrollRestoration = window.history.scrollRestoration;
            window.history.scrollRestoration = "manual";

            return () => {
                window.history.scrollRestoration = originalScrollRestoration;
            };
        }
    }, []);

    // Handle tab selection with scroll preservation
    const handleTabSelect = (tabId: string) => {
        // Capture current scroll position
        scrollPositionRef.current = window.scrollY;

        // Update active tab
        setActiveTab(tabId);

        // Close dropdown with animation
        setIsDropdownOpen(false);

        // Restore scroll position after a brief delay
        requestAnimationFrame(() => {
            window.scrollTo(0, scrollPositionRef.current);
        });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isDropdownOpen]);

    return (
        <div className={`w-full ${className}`}>
            {/* Mobile Dropdown */}
            <div className="sm:hidden relative mb-6" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 text-left bg-green-950/30 border border-green-500/20 rounded-xs text-green-400 font-medium flex justify-between items-center transition-colors duration-200 hover:bg-green-950/40"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="listbox"
                >
                    <span>{activeTabLabel}</span>
                    <motion.span
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="text-green-400 select-none"
                        aria-hidden="true"
                    >
                        ▼
                    </motion.span>
                </button>

                <AnimatePresence mode="wait">
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -4, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -4, scale: 0.98 }}
                            transition={{
                                duration: 0.12,
                                ease: "easeOut",
                            }}
                            className="absolute top-full left-0 right-0 mt-2 bg-green-950/95 border border-green-500/20 rounded-xs shadow-xl z-50 backdrop-blur-sm overflow-hidden"
                            role="listbox"
                        >
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabSelect(tab.id)}
                                    className={`
                                        w-full px-4 py-3 text-left transition-all duration-150
                                        ${index === 0 ? "rounded-t-xs" : ""}
                                        ${index === tabs.length - 1 ? "rounded-b-xs" : ""}
                                        ${
                                            activeTab === tab.id
                                                ? "text-green-300 bg-green-900/50 border-l-2 border-green-400"
                                                : "text-green-500 hover:text-green-300 hover:bg-green-900/30"
                                        }
                                    `}
                                    role="option"
                                    aria-selected={activeTab === tab.id}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden sm:block">
                <nav className="relative">
                    <div className="flex flex-wrap justify-center border-b border-green-500/20 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    relative px-4 md:px-4 py-3 text-sm md:text-base font-medium 
                                    transition-all duration-200 whitespace-nowrap
                                    ${activeTab === tab.id ? "text-green-300" : "text-green-500 hover:text-green-300"}
                                    ${tabClassName}
                                `}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                            >
                                {tab.label}

                                {/* Active tab indicator */}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Tab Content */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className={`min-h-[200px] ${contentClassName}`}
                        role="tabpanel"
                    >
                        {activeTabContent}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Tabs;
