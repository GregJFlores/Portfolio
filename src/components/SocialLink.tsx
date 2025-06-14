import Link from "next/link";
import React from "react";

type Props = {
    href: string;
    target?: string;
    rel?: string;
    className?: string;
    name?: string;
    icon?: React.ElementType;
    iconPosition?: "left" | "top";
    showName?: boolean;
    iconSize?: number;
};

const SocialLink = (props: Props) => {
    return (
        <Link
            href={props.href}
            target={props.target || "_blank"}
            rel={props.rel || "noopener noreferrer"}
            className={`${props.iconPosition === "top" ? "flex" : "flex flex-col"} ${props.className || ""} items-center gap-1 justify-center`}
        >
            <p> {props.icon && React.createElement(props.icon, { className: "mr-2 text-green-300 w-full", size: props.iconSize ? props.iconSize : 24 })}</p>
            <p className={`${props.showName ? "" : "sr-only"}`}>{props.name}</p>
        </Link>
    );
};

export default SocialLink;
