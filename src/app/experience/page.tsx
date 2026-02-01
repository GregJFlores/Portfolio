import SectionTitle from "@/components/SectionTitle";
import WorkExperienceGrid, { WorkExperienceItem } from "@/components/WorkExperienceGrid";
import React from "react";
import * as motion from "motion/react-client";
type Props = {};

export const metadata = {
    title: "Professional Experience - Gregory Flores",
    description:
        "4+ years Software Engineering experience working effectively in dynamic environments and delivering quality solutions.",
};

const experience = (props: Props) => {
    return <WorkExperience />;
};

export default experience;

function WorkExperience() {
    const workExperience: WorkExperienceItem[] = [
        {
            title: "Engineering and Product Development Manager",
            company: "CACI International Inc.",
            startDate: "Feb 2026",
            endDate: "Present",
            location: "San Antonio, TX",
            description:
                "Architecting and overseeing the development of software solutions for automated test equipment (ATE), test program set (TPS) development.",
            technologies: [
                "C#",
                "Python",
                "PostgreSQL",
                "GitLab",
                "JIRA",
                "React",
                "NestJS",
                "Tauri",
                "Rust",
            ],
        },
        {
            title: "Software Engineer III",
            company: "CACI International Inc.",
            startDate: "Apr 2022",
            endDate: "Feb 2026",
            location: "San Antonio, TX",
            description:
                "Developed and maintained software solutions for automated test equipment (ATE), test program set (TPS) development, and internal tools.",
            technologies: [
                "C",
                "Python",
                "Flask",
                "PostgreSQL",
                "GitLab",
                "JIRA",
                "NI TestStand",
                "NI LabWindows/CVI",
                "NI LabVIEW",
                "React",
                "TypeScript",
            ],
        },
        {
            title: "Software Engineer I",
            company: "CACI International Inc.",
            startDate: "Feb 2021",
            endDate: "Apr 2022",
            location: "San Antonio, TX",
            description: "Developed and maintained software for automated test equipment (ATE).",
            technologies: ["C", "NI TestStand", "NI LabWindows/CVI", "NI LabVIEW"],
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
            title: "IT Intern",
            company: "Opportunity Home San Antonio",
            startDate: "Sep 2020",
            endDate: "Jan 2021",
            location: "San Antonio, TX",
            description: "Provided technical support to residents.",
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
            title: "Aerospace Medical Technician",
            company: "United States Air Force",
            startDate: "Mar 2012",
            endDate: "Feb 2018",
            location: "San Antonio, TX",
            description:
                "Served as a medical technician in the Air Force, providing EMT/Nursing support.",
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
            <SectionTitle text="Work Experience" />
            <WorkExperienceGrid workExperience={workExperience} />
        </motion.div>
    );
}
