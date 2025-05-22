import React from "react";

type Props = {
    listTitle: string;
    children: React.ReactNode;
};

const ProfileHighlightsList = (props: Props) => {
    return (
        <div className="border-2 border-green-500 p-4 intense-glow-container">
            <h3
                className="text-lg uppercase mb-4 border-b border-green-700 pb-2 
                    text-green-100
                    drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
            >
                {props.listTitle}
            </h3>
            <ul className="space-y-4 text-sm">{props.children}</ul>
        </div>
    );
};

export default ProfileHighlightsList;
