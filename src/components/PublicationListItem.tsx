import React from "react";
import ExternalLink from "./ExternalLink";

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
                <p className="text-sm text-pretty py-1">
                    {props.publisher} · {props.publicationDate}
                </p>
                <ExternalLink href={props.publicationLink} title="View Publication" />
            </div>
        </li>
    );
};

export default PublicationListItem;
