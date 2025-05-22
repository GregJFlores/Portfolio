"use client";
import TypedText from "@/components/TypedText";
import { useEffect, useState } from "react";

export default function Home() {
    const [loadingDots, setLoadingDots] = useState(".");

    useEffect(() => {
        setTimeout(() => {
            if (loadingDots === "...") setLoadingDots(".");
            else if (loadingDots === ".") setLoadingDots("..");
            else if (loadingDots === "..") setLoadingDots("...");
        }, 500);
    }, [loadingDots]);

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/profile";
        }, 5000);
    }, [loadingDots]);

    return (
        // Console boot style loading screen
        <div className="min-w-full min-h-56  text-gray-50 font-[family-name:var(--jbmono-title)] flex justify-center items-center scanlines">
            <div className="text-center">
                <TypedText text={`Welcome to my portfolio! Loading`} speed={50} showPrompt={true} promptText="[system@portfolio ~]$" />
            </div>
        </div>
    );
}
