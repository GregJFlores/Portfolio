"use client";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import { CheckIcon, ChevronDownIcon, ChevronsUpDownIcon } from "lucide-react";
import { classNames } from "@/lib/util";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

export type HeaderLink = {
    label: string;
    href: string;
};

type Props = {
    links: HeaderLink[];
};

const ProfileNavigation = (props: Props) => {
    const [selected, setSelected] = useState<HeaderLink>(props.links.find((link) => link.href === usePathname()) || props.links[0]);

    const pathname = usePathname();
    const activeHref = pathname.replace("/", "");
    const router = useRouter();

    const handleSelectChange = (link: HeaderLink) => {
        setSelected(link);
        router.push(link.href);
    };

    return (
        <div className="border-b border-green-700 flex relative z-20">
            <MobileNavigation links={props.links} />
            <div className="hidden sm:block">
                <nav className="-mb-px flex">
                    {props.links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            aria-current={link.href === activeHref ? "page" : undefined}
                            className={classNames(
                                link.href === activeHref ? "bg-green-800 bg-opacity-50 text-white intense-glow text-center" : "hover:bg-green-800 hover:bg-opacity-30",
                                "px-4 py-2 uppercase text-xs md:text-sm lg:text-md text-center border-r border-green-700 relative transition-all duration-300 no-underline"
                            )}
                        >
                            {link.label}
                            {link.href === activeHref && (
                                <span
                                    className="absolute bottom-0 left-0 right-0 h-1 
                  bg-green-400 
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                                ></span>
                            )}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default ProfileNavigation;

const MobileNavigation = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPulse, setShowPulse] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (showPulse) {
            setShowPulse(false);
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleMenu();
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav ref={navRef} className={`bg-gradient-to-b from-green-600/10 to-green-700/10 border-b-2 border-green-500 relative sm:hidden w-full`}>
            <button
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-menu"
                aria-label="Toggle navigation menu"
                className={`
          w-full bg-green-800 hover:bg-green-700
          text-white p-3 font-semibold cursor-pointer flex items-center justify-between
          transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl
           active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-400
          ${showPulse ? "animate-pulse" : ""}
        `}
            >
                <div className="flex items-center gap-3">
                    {/* Hamburger Menu Icon */}
                    <div className="flex flex-col gap-1 w-5">
                        <span
                            className={`
                h-0.5 w-full bg-white transition-all duration-300 ease-in-out
                ${isOpen ? "rotate-45 translate-y-1.5" : ""}
              `}
                        />
                        <span
                            className={`
                h-0.5 w-full bg-white transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-0" : ""}
              `}
                        />
                        <span
                            className={`
                h-0.5 w-full bg-white transition-all duration-300 ease-in-out
                ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}
              `}
                        />
                    </div>
                    <span className="text-lg">Navigation Menu</span>
                </div>

                {/* Dropdown Arrow */}
                <span className={`text-xl transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}>▼</span>
            </button>

            {/* Navigation Menu */}
            <div
                id="mobile-nav-menu"
                className={`
          overflow-hidden transition-all duration-300 ease-in-out
          bg-slate-900/95 backdrop-blur-sm
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
                role="menu"
            >
                {props.links.map((link, index) => (
                    <div key={index} className="border-b border-green-600/30 last:border-b-0 transition-all duration-300 hover:bg-green-600/20 hover:translate-x-1">
                        <Link
                            href={link.href}
                            onClick={closeMenu}
                            className="flex items-center gap-3 p-4 text-green-200 hover:text-white transition-colors duration-300 font-medium"
                            role="menuitem"
                        >
                            <span>{link.label}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    );
};
