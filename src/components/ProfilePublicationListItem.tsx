import React from "react";

type Props = {
    publicationTitle: string;
    publisher: string;
    publicationDate: string;
    publicationLink: string;
};

const ProfilePublicationListItem = (props: Props) => {
    return (
        <li className="flex items-center">
            <div>
                <p className="font-semibold">{props.publicationTitle}</p>
                <p>
                    {props.publisher} · {props.publicationDate}
                </p>
                <a href={props.publicationLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    View Publication{" "}
                </a>
            </div>
        </li>
    );
};

export default ProfilePublicationListItem;
