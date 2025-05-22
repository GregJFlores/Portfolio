"use client";
import Footer from "@/components/Footer";
import ProfileAwardListItem from "@/components/ProfileAwardListItem";
import ProfileContainer from "@/components/ProfileContainer";
import ProfileContentContainer from "@/components/ProfileContentContainer";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileHighlightsList from "@/components/ProfileHighlightsList";
import ProfileInformation from "@/components/ProfileInformation";
import ProfileNavigation from "@/components/ProfileNavigation";
import ProfilePublicationListItem from "@/components/ProfilePublicationListItem";
import ProfileSectionTitle from "@/components/ProfileSectionTitle";
import SkillList, { SkillCategory } from "@/components/SkillList";
import SkillRadarChart, { SkillDataItem } from "@/components/SkillRadarChart";
import TypedText from "@/components/TypedText";
import WorkExperienceGrid, { WorkExperienceItem } from "@/components/WorkExperienceGrid";
import { GraduationCap, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

export default function Home() {
    const [loadingDots, setLoadingDots] = useState(".");
    const [activeTab, setActiveTab] = useState("About Me");
    const tabs = ["About Me", "Skills", "Experience"];
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (loadingDots === "...") setLoadingDots(".");
            else if (loadingDots === ".") setLoadingDots("..");
            else if (loadingDots === "..") setLoadingDots("...");
        }, 500);
    }, [loadingDots]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulate a loading time of 3 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex items-center justify-center">
                    <div className="text-green-300 font-mono text-lg">
                        <TypedText text={`Loading${loadingDots}`} speed={100} showPrompt={false} showCursorBlink />
                    </div>
                </div>
            )}

            {!isLoading && (
                <ProfileContainer>
                    <ProfileHeader />
                    <ProfileNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
                    <ProfileContentContainer>
                        {activeTab === "About Me" && <AboutMe />}
                        {activeTab === "Skills" && <Skills />}
                        {activeTab === "Experience" && <WorkExperience />}
                    </ProfileContentContainer>
                    <Footer />
                </ProfileContainer>
            )}
        </>
    );
}

function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="grid md:grid-cols-3 gap-6"
        >
            <div className="col-span-2 space-y-4">
                <ProfileSectionTitle text="About Me" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <p>
                        Forward-thinking Software Engineer with background working effectively in dynamic environments. Adept at creating streamlined solutions and delivering
                        efficient results. Passionate about problem-solving and utilizing technology to drive excellence.
                    </p>
                    <ProfileInformation
                        items={[
                            { label: "Location", value: "San Antonio, TX", icon: MapPin },
                            { label: "Experience", value: "4+ Years in Software Engineering" },
                            {
                                label: "Education",
                                value: (
                                    <div>
                                        <p>B.S. Software Engineering</p>
                                        <p>St. Mary's University</p>
                                        <p>San Antonio, TX</p>
                                    </div>
                                ),
                                icon: GraduationCap,
                            },
                        ]}
                    />
                </motion.div>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
                <ProfileHighlightsList listTitle="Awards">
                    <ProfileAwardListItem
                        title="Technical Innovation - CACI Champions"
                        imageUrl="https://media.licdn.com/dms/image/v2/D4D2DAQEIAikqEEHP5Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1712846920286?e=1747911600&v=beta&t=Nr_PshGQxvVLtoIzPreESffAl4qNa7UJr1l93BDkuuc"
                        link="https://www.linkedin.com/feed/update/urn:li:activity:7184549331754983424/"
                    />
                </ProfileHighlightsList>
                <ProfileHighlightsList listTitle="Publications">
                    <ProfilePublicationListItem
                        publicationTitle="Bringing Legacy Technical Data out of the Shadows Using Modern Digital Engineering Tools"
                        publisher="IEEE"
                        publicationDate="Oct, 2024"
                        publicationLink="https://ieeexplore.ieee.org/document/10697525"
                    />
                    <ProfilePublicationListItem
                        publicationTitle="Initial Experiences in Use of Model Based Development in the ATE Industry"
                        publisher="IEEE"
                        publicationDate="Nov, 2023"
                        publicationLink="https://ieeexplore.ieee.org/document/10296272"
                    />
                </ProfileHighlightsList>
            </div>
        </motion.div>
    );
}

function Skills() {
    const skills: SkillCategory[] = [
        { name: "OS", skills: ["Windows", "Linux"] },
        { name: "Programming Languages", skills: ["C", "Rust", "C#", "Python", "Javascript", "Typescript"] },
        { name: "Web", skills: ["HTML5", "CSS3", "TailwindCSS"] },
        { name: "Frameworks", skills: ["Flask", "React"] },
        { name: "Database", skills: ["PostgreSQL", "MS SQL"] },
        { name: "DevOps", skills: ["Docker", "GitLab Pipelines"] },
        { name: "Tools and Services", skills: ["Git", "JIRA", "Confluence", "Visual Studio Code", "GitHub", "GitLab"] },
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
                <ProfileSectionTitle text="Technical Skills" />
                <SkillList skills={skills} />
            </div>
            <SkillRadarChart skillData={skillData} />
        </motion.div>
    );
}

function WorkExperience() {
    const workExperience: WorkExperienceItem[] = [
        {
            title: "Software Engineer T3",
            company: "CACI International Inc.",
            startDate: "Feb 2021",
            endDate: "Present",
            location: "San Antonio, TX",
            description: "Developed and maintained software solutions for defense applications.",
            technologies: ["C", "Python", "Flask", "PostgreSQL", "GitLab", "JIRA", "NI TestStand", "NI LabWindows/CVI", "NI LabVIEW", "React", "TypeScript"],
        },
        {
            title: "WiFi Technical Support Analyst",
            company: "Opportunity Home San Antonio",
            startDate: "Jan 2021",
            endDate: "Feb 2021",
            location: "San Antonio, TX",
            description: "Provided technical support for WiFi services to residents.",
            technologies: ["WiFi", "Networking", "Customer Support", "Troubleshooting"],
        },
        {
            title: "Information Technology Intern",
            company: "Opportunity Home San Antonio",
            startDate: "Sep 2020",
            endDate: "Jan 2021",
            location: "San Antonio, TX",
            description: "Assisted in IT support.",
            technologies: ["Customer Support", "Troubleshooting"],
        },
        {
            title: "Engineering Intern",
            company: "Xenex Disinfection Services",
            startDate: "May 2016",
            endDate: "Aug 2016",
            location: "San Antonio, TX",
            description: "Worked on software/hardware development for disinfection robots.",
            technologies: ["NI LabVIEW", "Digital Circuit Design"],
        },
        {
            title: "Associate IT Technician",
            company: "St. Mary's University",
            startDate: "Sep 2014",
            endDate: "May 2015",
            location: "San Antonio, TX",
            description: "Provided IT support and troubleshooting for university systems.",
            technologies: ["Customer Support", "Troubleshooting"],
        },
        {
            title: "Aerospace Medical Technician",
            company: "United States Air Force",
            startDate: "Mar 2012",
            endDate: "Feb 2018",
            location: "San Antonio, TX",
            description: "Served as a medical technician in the Air Force, providing EMT/Nursing support.",
            technologies: ["EMT", "Nursing", "Medical Support", "EMT Instructor"],
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
            className="space-y-6"
        >
            <ProfileSectionTitle text="Work Experience" />
            <WorkExperienceGrid workExperience={workExperience} />
        </motion.div>
    );
}
