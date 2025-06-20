import React from "react";
import * as motion from "motion/react-client";
type Props = {
    listTitle: string;
    icon?: React.ElementType;
    children: React.ReactNode;
};

const HighlightsList = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
            className="border-2 border-green-500 p-4 intense-glow-container"
        >
            <h4
                className="text-lg uppercase mb-4 border-b border-green-700 pb-2 flex  items-center gap-x-1
                    text-green-100
                    drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
            >
                {props.icon && React.createElement(props.icon, { className: "mr-2 text-green-300", size: 16 })}
                {props.listTitle}
            </h4>
            <ul className="space-y-4 text-sm">{props.children}</ul>
        </motion.div>
    );
};

export default HighlightsList;
