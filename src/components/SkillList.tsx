import React, { ReactNode } from "react";
import * as motion from "motion/react-client";

export type Skill = {
    name: string;
    icon?: React.ElementType;
    iconIsDark?: boolean;
};

export type SkillCategory = {
    icon?: ReactNode;
    name: string;
    skills: Skill[];
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
            className="space-y-6"
        >
            {props.skills.map((category, index) => (
                <div key={index}>
                    <p
                        className="text-green-500 
                      drop-shadow-[0_0_5px_rgba(34,197,94,0.6)] text-md mb-2
                        uppercase tracking-widest flex items-center gap-2
                        "
                    >
                        {category.icon} {category.name}
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2">
                        {category.skills.map((skill, index) => (
                            <SkillItem key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default SkillList;

const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <div className="flex items-center gap-3 bg-gradient-to-r from-green-900/80 to-green-800/80 px-3 py-2 justify-center rounded-sm shadow-lg hover:shadow-xl hover:from-green-800/90 hover:to-green-700/90 transition-all duration-300 border border-green-700/50 backdrop-blur-sm">
            {skill.icon && <skill.icon className={`${skill.iconIsDark ? "bg-green-300 p-0.5 rounded-sm" : ""}`} size={20} />}
            <span className="text-green-100 font-medium text-sm">{skill.name}</span>
        </div>
    );
};
