import React from "react";
import * as motion from "motion/react-client";

type Props = {
    children: React.ReactNode;
};

const Container = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
            className="w-full text-green-300 font-mono tracking-tight overflow-hidden"
        >
            <div
                className="w-full lg:w-6xl mx-auto bg-gray-900 bg-opacity-70 border-4 border-green-500  overflow-hidden 
        relative
        shadow-[0_0_50px_rgba(34,197,94,0.4)]"
            >
                {props.children}
            </div>
        </motion.div>
    );
};

export default Container;
