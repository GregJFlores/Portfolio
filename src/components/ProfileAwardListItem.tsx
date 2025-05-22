import React from "react";

type Props = {
    title: string;
    link: string;
    imageUrl: string;
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
            {props.imageUrl && <img src={props.imageUrl} alt="Award" className="w-auto h-16 ml-2 rounded-lg shadow-lg hover:h-40 transition-all duration-500" />}
        </li>
    );
};

export default ProfileAwardListItem;
