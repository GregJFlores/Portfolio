import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    link: string;
    imageUrl: string;
    description: string;
    width: number;
    height: number;
};

const ProfileAwardListItem = (props: Props) => {
    return (
        <li className="flex items-center">
            <div>
                <p>{props.title}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    View Award{" "}
                </a>
            </div>
            {props.imageUrl && (
                <div className="relative w-30 h-20 rounded-md overflow-hidden border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                    <Image src={props.imageUrl} alt={props.description} fill className="object-cover" />
                </div>
            )}
        </li>
    );
};

export default ProfileAwardListItem;
