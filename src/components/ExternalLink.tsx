import Link from "next/link";
import React from "react";

type Props = {
    href: string;
    target?: string;
    rel?: string;
    className?: string;
    title?: string;
};

const ExternalLink = (props: Props) => {
    return (
        <Link
            href={props.href}
            target={props.target || "_blank"}
            rel={props.rel || "noopener noreferrer"}
            className={`inline-flex items-center gap-1 text-fuchsia-50 hover:text-white font-medium transition-colors duration-200 hover:underline decoration-white/70 underline-offset-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]`}
        >
            {props.title || "View"}

            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </Link>
    );
};

export default ExternalLink;
