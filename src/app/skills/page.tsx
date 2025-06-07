import SkillList, { SkillCategory } from "@/components/SkillList";
import SkillRadarChart, { SkillDataItem } from "@/components/SkillRadarChart";
import React from "react";
import * as motion from "motion/react-client";
import SectionTitle from "@/components/SectionTitle";
type Props = {};

export const metadata = {
    title: "Technical Skills - Gregory Flores",
    description: "Technical skills and technologies used by Gregory Flores: programming languages, frameworks, and development tools.",
};

const skills = (props: Props) => {
    return <Skills />;
};

export default skills;

function Skills() {
    const skills: SkillCategory[] = [
        { name: "Programming Languages", skills: ["C", "Rust", "C#", "Python", "Javascript", "Typescript"] },
        { name: "Web", skills: ["HTML5", "CSS3", "TailwindCSS"] },
        { name: "Frameworks", skills: ["Flask", "React", "Next.js"] },
        { name: "Databases", skills: ["PostgreSQL", "MS SQL", "SQLite"] },
        { name: "DevOps & Tools", skills: ["Docker", "GitLab Pipelines", "Git", "JIRA", "Visual Studio Code", "GitHub", "GitLab"] },
        { name: "Other", skills: ["NI TestStand", "NI LabWindows/CVI", "NI LabVIEW"] },
    ];

    const skillData: SkillDataItem[] = [
        { subject: "TypeScript", grade: 80, fullMark: 100 },
        { subject: "Python", grade: 90, fullMark: 100 },
        { subject: "C", grade: 85, fullMark: 100 },
        { subject: "TestStand", grade: 85, fullMark: 100 },
        { subject: "CVI", grade: 90, fullMark: 100 },
        { subject: "Rust", grade: 45, fullMark: 100 },
        { subject: "C#", grade: 60, fullMark: 100 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="grid md:grid-cols-2 gap-6"
        >
            <div className="col-span-1 space-y-4">
                <SectionTitle text="Technical Skills" />
                <SkillList skills={skills} />
            </div>
            <SkillRadarChart skillData={skillData} />
        </motion.div>
    );
}
