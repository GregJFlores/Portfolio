import SectionTitle from "@/components/SectionTitle";
import SkillList, { SkillCategory } from "@/components/SkillList";
import SkillRadarChart, { SkillDataItem } from "@/components/SkillRadarChart";
import Tabs, { Tab } from "@/components/Tabs";
import COriginal from "devicons-react/icons/COriginal";
import CSS3Original from "devicons-react/icons/Css3Original";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import FlaskOriginal from "devicons-react/icons/FlaskOriginal";
import GitHubOriginal from "devicons-react/icons/GithubOriginal";
import GitlabOriginal from "devicons-react/icons/GitlabOriginal";
import HTML5Original from "devicons-react/icons/Html5Original";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import PostgreSQLOriginal from "devicons-react/icons/PostgresqlOriginal";
import prismaOriginal from "devicons-react/icons/PrismaOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import SqlalchemyOriginal from "devicons-react/icons/SqlalchemyOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import VisualStudioCodeOriginal from "devicons-react/icons/VscodeOriginal";
import * as motion from "motion/react-client";
import Image from "next/image";
import { FaCodeBranch, FaDatabase, FaGitAlt, FaGlobe } from "react-icons/fa";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
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
    const startDate = new Date("2021-01-01");
    const currentDate = new Date();
    const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));

    const skills: SkillCategory[] = [
        {
            icon: <HiMiniCodeBracketSquare className="text-green-300" />,
            name: "Programming Languages",
            skills: [
                { name: "C", icon: COriginal },
                { name: "Python", icon: PythonOriginal },
                { name: "Javascript", icon: JavascriptOriginal },
                { name: "Typescript", icon: TypescriptOriginal },
            ],
        },
        {
            icon: <FaGlobe className="text-green-300" />,
            name: "Web Development",
            skills: [
                { name: "HTML5", icon: HTML5Original },
                { name: "CSS3", icon: CSS3Original },
                { name: "TailwindCSS", icon: TailwindcssOriginal },
                { name: "Flask", icon: FlaskOriginal, iconIsDark: true }, // Flask icon is dark, so we set iconIsDark to true
                { name: "React", icon: ReactOriginal },
                { name: "Next.js", icon: NextjsOriginal, iconIsDark: true }, // Next.js icon is dark, so we set iconIsDark to true
            ],
        },

        {
            icon: <FaDatabase className="text-green-300" />,
            name: "Databases & ORMs",
            skills: [
                { name: "PostgreSQL", icon: PostgreSQLOriginal },
                { name: "Prisma", icon: prismaOriginal, iconIsDark: true }, // Using TypeScript icon as placeholder for Prisma
                { name: "SQLAlchemy", icon: SqlalchemyOriginal, iconIsDark: true }, // Using Python icon as placeholder for SQLAlchemy
            ],
        },
        {
            icon: <FaCodeBranch className="text-green-300" />,
            name: "DevOps & Tools",
            skills: [
                { name: "Docker", icon: DockerOriginal },
                { name: "VS Code", icon: VisualStudioCodeOriginal },
                { name: "GitHub", icon: GitHubOriginal, iconIsDark: true }, // GitHub icon is dark, so we set iconIsDark to true
                { name: "GitLab", icon: GitlabOriginal },
            ],
        },
        {
            icon: <Image src={"/dmm.svg"} alt="dmm" width={20} height={20} className="bg-green-300 p-0.5 rounded-xs" />,
            name: "Automated Test",
            skills: [{ name: "NI TestStand" }, { name: "NI CVI" }, { name: "NI LabVIEW" }],
        },
    ];

    const programmingSkillData: SkillDataItem[] = [
        { subject: "TypeScript", grade: 3, fullMark: yearsOfExperience },
        { subject: "Python", grade: 4, fullMark: yearsOfExperience },
        { subject: "C", grade: 4, fullMark: yearsOfExperience },
        { subject: "JavaScript", grade: 4, fullMark: yearsOfExperience },
    ];

    const webSkillData: SkillDataItem[] = [
        { subject: "Flask", grade: 4, fullMark: yearsOfExperience },
        { subject: "React", grade: 4, fullMark: yearsOfExperience },
        { subject: "Next.js", grade: 3, fullMark: yearsOfExperience },
        { subject: "Tailwind", grade: 4, fullMark: yearsOfExperience },
    ];

    const databasesSkillData: SkillDataItem[] = [
        { subject: "PostgreSQL", grade: 4, fullMark: yearsOfExperience },
        { subject: "SQLAlchemy", grade: 4, fullMark: yearsOfExperience },
        { subject: "Prisma", grade: 2, fullMark: yearsOfExperience },
    ];

    const otherSkillData: SkillDataItem[] = [
        { subject: "TestStand", grade: 4, fullMark: yearsOfExperience },
        { subject: "CVI", grade: 4, fullMark: yearsOfExperience },
        { subject: "LabVIEW", grade: 3, fullMark: yearsOfExperience },
    ];

    const skillRadarChartTabs: Tab[] = [
        {
            id: "programming-technical-expertise",
            label: "Programming Languages",
            content: (
                <SkillRadarChart
                    icon={<HiMiniCodeBracketSquare className="text-green-300" />}
                    skillData={programmingSkillData}
                    chartTitle="Programming"
                    yearsOfExperience={yearsOfExperience}
                />
            ),
        },
        {
            id: "web-technical-expertise",
            label: "Web Development",
            content: <SkillRadarChart icon={<FaGlobe className="text-green-300" />} skillData={webSkillData} chartTitle="Web" yearsOfExperience={yearsOfExperience} />,
        },
        {
            id: "databases-technical-expertise",
            label: "Databases & ORMs",
            content: (
                <SkillRadarChart icon={<FaDatabase className="text-green-300" />} skillData={databasesSkillData} chartTitle="DBs & ORMs" yearsOfExperience={yearsOfExperience} />
            ),
        },
        {
            id: "other-technical-expertise",
            label: "Automated Test",
            content: (
                <SkillRadarChart
                    icon={<Image src={"/dmm.svg"} alt="dmm" width={20} height={20} className="bg-green-300 p-0.5 rounded-xs" />}
                    skillData={otherSkillData}
                    chartTitle="Automated Test"
                    yearsOfExperience={yearsOfExperience}
                />
            ),
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
            className="grid md:grid-cols-2 gap-8"
        >
            <div className="col-span-1 space-y-4">
                <SectionTitle text="Technical Skills" />
                <SkillList skills={skills} />
            </div>
            <Tabs tabs={skillRadarChartTabs} />
        </motion.div>
    );
}
