import React from "react";
import * as motion from "motion/react-client";

export type Skill = {
    name: string;
    icon?: React.ElementType;
    iconIsDark?: boolean;
};

export type SkillCategory = {
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
                        uppercase tracking-widest
                        "
                    >
                        {category.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, index) => {
                            if (index === category.skills.length - 1) {
                                return <SkillItem key={index} skill={skill} />;
                            }
                            return (
                                <React.Fragment key={index}>
                                    <SkillItem skill={skill} />
                                    <span className="text-green-500">|</span>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default SkillList;

const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <div className="flex items-center gap-2">
            {skill.icon && <skill.icon className={`${skill.iconIsDark ? "bg-green-400 p-0.5 rounded-sm" : ""}`} size={22} />}
            <span className="text-green-300">{skill.name}</span>
        </div>
    );
};
