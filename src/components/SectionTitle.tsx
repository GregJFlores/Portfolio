import React from "react";
import TypedText from "./TypedText";

type Props = {
    text: string;
};

const SectionTitle = (props: Props) => {
    return (
        <div className="border-b border-green-700 pb-2">
            <h3
                className="text-xl uppercase tracking-widest 
                    text-green-100
                    drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
            >
                <TypedText text={props.text} />
            </h3>
        </div>
    );
};

export default SectionTitle;
