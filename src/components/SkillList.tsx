import React from "react";
import * as motion from "motion/react-client";

export type SkillCategory = {
    name: string;
    skills: string[];
};

type Props = {
    skills: SkillCategory[];
};

const SkillList = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="space-y-2"
        >
            {props.skills.map((category, index) => (
                <div key={index}>
                    <p
                        className="text-green-500 
                        drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                    >
                        {category.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, index) => {
                            if (index === category.skills.length - 1) {
                                return <p key={index}>{skill}</p>;
                            }
                            return <p key={index}>{skill},</p>;
                        })}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default SkillList;
