import SkillList, { SkillCategory } from "@/components/SkillList";
import SkillRadarChart, { SkillDataItem } from "@/components/SkillRadarChart";
import React from "react";
import * as motion from "motion/react-client";
import SectionTitle from "@/components/SectionTitle";
type Props = {};
import COriginal from "devicons-react/icons/COriginal";
import CSharpOriginal from "devicons-react/icons/CsharpOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import RustOriginal from "devicons-react/icons/RustOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import HTML5Original from "devicons-react/icons/Html5Original";
import CSS3Original from "devicons-react/icons/Css3Original";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import FlaskOriginal from "devicons-react/icons/FlaskOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import PostgreSQLOriginal from "devicons-react/icons/PostgresqlOriginal";
import MsSqlOriginal from "devicons-react/icons/MicrosoftsqlserverOriginal";
import SQLiteOriginal from "devicons-react/icons/SqliteOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import GitlabOriginal from "devicons-react/icons/GitlabOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import JiraOriginal from "devicons-react/icons/JiraOriginal";
import VisualStudioCodeOriginal from "devicons-react/icons/VscodeOriginal";
import SqlalchemyOriginal from "devicons-react/icons/SqlalchemyOriginal";
import prismaOriginal from "devicons-react/icons/PrismaOriginal";
import Tabs, { Tab } from "@/components/Tabs";
export const metadata = {
    title: "Technical Skills - Gregory Flores",
    description: "Technical skills and technologies used by Gregory Flores: programming languages, frameworks, and development tools.",
};

const skills = (props: Props) => {
    return <Skills />;
};

export default skills;

function Skills() {
    const startDate = new Date("2021-01-01");
    const currentDate = new Date();
    const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));

    const skills: SkillCategory[] = [
        {
            name: "Programming Languages",
            skills: [
                { name: "C", icon: COriginal },
                { name: "Rust", icon: RustOriginal, iconIsDark: true }, // Rust icon is dark, so we set iconIsDark to true
                { name: "C#", icon: CSharpOriginal },
                { name: "Python", icon: PythonOriginal },
                { name: "Javascript", icon: JavascriptOriginal },
                { name: "Typescript", icon: TypescriptOriginal },
            ],
        },
        {
            name: "Web",
            skills: [
                { name: "HTML5", icon: HTML5Original },
                { name: "CSS3", icon: CSS3Original },
                { name: "TailwindCSS", icon: TailwindcssOriginal },
            ],
        },
        {
            name: "Frameworks",
            skills: [
                { name: "Flask", icon: FlaskOriginal, iconIsDark: true }, // Flask icon is dark, so we set iconIsDark to true
                { name: "React", icon: ReactOriginal },
                { name: "Next.js", icon: NextjsOriginal, iconIsDark: true }, // Next.js icon is dark, so we set iconIsDark to true
            ],
        },
        {
            name: "Databases & ORMs",
            skills: [
                { name: "PostgreSQL", icon: PostgreSQLOriginal },
                { name: "MS SQL", icon: MsSqlOriginal },
                { name: "SQLite", icon: SQLiteOriginal },
                { name: "Prisma", icon: prismaOriginal, iconIsDark: true }, // Using TypeScript icon as placeholder for Prisma
                { name: "SQLAlchemy", icon: SqlalchemyOriginal, iconIsDark: true }, // Using Python icon as placeholder for SQLAlchemy
            ],
        },
        {
            name: "DevOps & Tools",
            skills: [
                { name: "Docker", icon: DockerOriginal },
                { name: "GitLab Pipelines", icon: GitlabOriginal },
                { name: "Git", icon: GitOriginal },
                { name: "JIRA", icon: JiraOriginal },
                { name: "Visual Studio Code", icon: VisualStudioCodeOriginal },
                { name: "GitHub", icon: GitOriginal },
                { name: "GitLab", icon: GitlabOriginal },
            ],
        },
        { name: "Other", skills: [{ name: "NI TestStand" }, { name: "NI LabWindows/CVI" }, { name: "NI LabVIEW" }] },
    ];

    const programmingSkillData: SkillDataItem[] = [
        { subject: "TypeScript", grade: 3, fullMark: yearsOfExperience },
        { subject: "Python", grade: 4, fullMark: yearsOfExperience },
        { subject: "C", grade: 4, fullMark: yearsOfExperience },
        { subject: "TestStand", grade: 4, fullMark: yearsOfExperience },
        { subject: "CVI", grade: 4, fullMark: yearsOfExperience },
        { subject: "Rust", grade: 2, fullMark: yearsOfExperience },
        { subject: "C#", grade: 2, fullMark: yearsOfExperience },
    ];

    const webSkillData: SkillDataItem[] = [
        { subject: "Flask", grade: 3, fullMark: yearsOfExperience },
        { subject: "React", grade: 4, fullMark: yearsOfExperience },
        { subject: "Next.js", grade: 3, fullMark: yearsOfExperience },
        { subject: "HTML5", grade: 4, fullMark: yearsOfExperience },
        { subject: "CSS3", grade: 4, fullMark: yearsOfExperience },
        { subject: "TailwindCSS", grade: 3, fullMark: yearsOfExperience },
    ];

    const databasesSkillData: SkillDataItem[] = [
        { subject: "PostgreSQL", grade: 4, fullMark: yearsOfExperience },
        { subject: "MS SQL", grade: 3, fullMark: yearsOfExperience },
        { subject: "SQLite", grade: 3, fullMark: yearsOfExperience },
        { subject: "Prisma", grade: 2, fullMark: yearsOfExperience },
        { subject: "SQLAlchemy", grade: 2, fullMark: yearsOfExperience },
    ];

    const devOpsSkillData: SkillDataItem[] = [
        { subject: "Docker", grade: 3, fullMark: yearsOfExperience },
        { subject: "GitLab Pipelines", grade: 3, fullMark: yearsOfExperience },
        { subject: "Git", grade: 4, fullMark: yearsOfExperience },
        { subject: "JIRA", grade: 3, fullMark: yearsOfExperience },
        { subject: "Visual Studio Code", grade: 4, fullMark: yearsOfExperience },
    ];

    const otherSkillData: SkillDataItem[] = [
        { subject: "NI TestStand", grade: 4, fullMark: yearsOfExperience },
        { subject: "NI LabWindows/CVI", grade: 4, fullMark: yearsOfExperience },
        { subject: "NI LabVIEW", grade: 3, fullMark: yearsOfExperience },
    ];

    const skillRadarChartTabs: Tab[] = [
        {
            id: "programming-technical-expertise",
            label: "Programming Languages",
            content: <SkillRadarChart skillData={programmingSkillData} chartTitle="Programming Languages Experience" yearsOfExperience={yearsOfExperience} />,
        },
        {
            id: "web-technical-expertise",
            label: "Web Development",
            content: <SkillRadarChart skillData={webSkillData} chartTitle="Web Development Experience" yearsOfExperience={yearsOfExperience} />,
        },
        {
            id: "databases-technical-expertise",
            label: "Databases & ORMs",
            content: <SkillRadarChart skillData={databasesSkillData} chartTitle="Databases & ORMs Experience" yearsOfExperience={yearsOfExperience} />,
        },
        {
            id: "devops-technical-expertise",
            label: "DevOps & Tools",
            content: <SkillRadarChart skillData={devOpsSkillData} chartTitle="DevOps & Tools Experience" yearsOfExperience={yearsOfExperience} />,
        },
        {
            id: "other-technical-expertise",
            label: "Other Technologies",
            content: <SkillRadarChart skillData={otherSkillData} chartTitle="Other Skills Experience" yearsOfExperience={yearsOfExperience} />,
        },
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
            <Tabs tabs={skillRadarChartTabs} />
        </motion.div>
    );
}
