"use client";
import React, { useState } from "react";
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
{
    /* <div className="border-b border-green-700 flex relative z-10">
            {props.links.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
        </div> */
}
const ProfileNavigation = (props: Props) => {
    const [selected, setSelected] = useState<HeaderLink>(props.links[0]);

    const pathname = usePathname();
    const activeHref = pathname.replace("/", "");
    const router = useRouter();

    const handleSelectChange = (link: HeaderLink) => {
        setSelected(link);
        router.push(link.href);
    };

    return (
        <div className="border-b border-green-700 flex relative z-20">
            <Listbox value={selected} onChange={handleSelectChange}>
                <div className="relative w-full sm:hidden">
                    <ListboxButton className="grid w-full cursor-default grid-cols-1 py-2 pr-2 pl-3 text-left text-md/6  focus:outline-hidden bg-green-800/20 bg-opacity-50">
                        <div className="col-start-1 row-start-1 relative ">
                            <span className="truncate pr-6 text-green-400/80">{selected.label}</span>
                            <span className="absolute top-0 left-0 truncate animate-pulse pr-6 drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]">{selected.label}</span>
                        </div>

                        <ChevronsUpDownIcon aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-green-400 sm:size-4" />
                    </ListboxButton>

                    <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto py-1 text-base shadow-lg ring-1 bg-gray-900 ring-green-400 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                    >
                        {props.links.map((link) => (
                            <ListboxOption
                                key={link.label}
                                value={link}
                                className="group relative cursor-default py-2 pr-9 pl-3  select-none data-focus:bg-green-700 data-focus:text-white data-focus:outline-hidden"
                            >
                                <span className="block truncate font-normal group-data-selected:font-semibold">{link.label}</span>

                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-green-400 group-not-data-selected:hidden group-data-focus:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
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
