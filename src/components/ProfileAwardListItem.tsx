import { Image } from "@imagekit/next";
import React from "react";
import ImageKitComponent from "./ImageKitComponent";

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
                <div className="relative w-30 h-24 rounded-sm overflow-hidden border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                    <ImageKitComponent
                        src={props.imageUrl}
                        alt={props.description}
                        loading="eager"
                        className="object-cover"
                        fill
                        transformation={{ crop: "maintain_ratio", focus: "auto" }}
                    />
                </div>
            )}
        </li>
    );
};

export default ProfileAwardListItem;
