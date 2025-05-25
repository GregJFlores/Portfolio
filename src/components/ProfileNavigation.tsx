import React from "react";

export type HeaderLink = {
    label: string;
    href: string;
};

type Props = {
    links: HeaderLink[];
    currentPath?: string;
};

const ProfileNavigation = (props: Props) => {
    const activeHref = props.currentPath?.split("#")[1] || "";

    return (
        <div className="border-b border-green-700 flex relative z-10">
            {props.links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 uppercase text-sm border-r border-green-700 relative
                transition-all duration-300 no-underline
                ${activeHref === link.href ? "bg-green-700 bg-opacity-50 text-green-100 intense-glow" : "hover:bg-green-800 hover:bg-opacity-30"}
                `}
                >
                    {link.label}
                    {activeHref === link.href && (
                        <span
                            className="absolute bottom-0 left-0 right-0 h-1 
                  bg-green-400 
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                        ></span>
                    )}
                </a>
            ))}
        </div>
    );
};

export default ProfileNavigation;
