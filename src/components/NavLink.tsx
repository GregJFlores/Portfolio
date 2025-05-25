"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    href: string;
    label: string;
};

const NavLink = (props: Props) => {
    const pathname = usePathname();
    const activeHref = pathname; // Remove trailing slash for comparison
    const currentHref = `/${props.href.replace(/^\//, "")}`; // Ensure href starts with a slash
    return (
        <Link
            href={props.href}
            aria-label={props.label}
            className={`px-4 py-2 uppercase text-xs md:text-sm lg:text-md text-center border-r border-green-700 relative
                transition-all duration-300 no-underline
                ${activeHref === currentHref ? "bg-green-800 bg-opacity-50 text-white intense-glow text-center" : "hover:bg-green-800 hover:bg-opacity-30"}
                `}
        >
            {props.label}
            {activeHref === currentHref && (
                <span
                    className="absolute bottom-0 left-0 right-0 h-1 
                  bg-green-400 
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                ></span>
            )}
        </Link>
    );
};

export default NavLink;
