import React from "react";
import ExternalLink from "./ExternalLink";
import { IoBusinessSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

type Props = {
    publicationTitle: string;
    publisher: string;
    publicationDate: string;
    publicationLink: string;
};

const PublicationListItem = (props: Props) => {
    return (
        <li className="flex items-center">
            <div>
                <p className="font-semibold text-pretty">{props.publicationTitle}</p>
                <p className="text-sm text-pretty py-1 flex items-center gap-1">
                    <IoBusinessSharp className="text-green-500" /> {props.publisher}
                </p>
                <p className="text-sm text-pretty py-1 flex items-center gap-1">
                    <FaCalendarAlt className="text-green-500" /> {props.publicationDate}
                </p>
                <ExternalLink href={props.publicationLink} title="View Publication" />
            </div>
        </li>
    );
};

export default PublicationListItem;
