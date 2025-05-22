import React from "react";

type Props = {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const ProfileNavigation = (props: Props) => {
    return (
        <div className="border-b border-green-700 flex relative z-10">
            {props.tabs.map((tab) => (
                <button
                    key={tab}
                    className={`px-4 py-2 uppercase text-sm border-r border-green-700 relative
                transition-all duration-300
                ${props.activeTab === tab ? "bg-green-700 bg-opacity-50 text-green-100 intense-glow" : "hover:bg-green-800 hover:bg-opacity-30"}
                `}
                    onClick={() => props.setActiveTab(tab)}
                >
                    {tab}
                    {props.activeTab === tab && (
                        <span
                            className="absolute bottom-0 left-0 right-0 h-1 
                  bg-green-400 
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                        ></span>
                    )}
                </button>
            ))}
        </div>
    );
};

export default ProfileNavigation;
