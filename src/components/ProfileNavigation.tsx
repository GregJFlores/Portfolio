import React from "react";
import NavLink from "./NavLink";

export type HeaderLink = {
    label: string;
    href: string;
};

type Props = {
    links: HeaderLink[];
};

const ProfileNavigation = (props: Props) => {
    return (
        <div className="border-b border-green-700 flex relative z-10">
            {props.links.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
        </div>
    );
};

export default ProfileNavigation;
