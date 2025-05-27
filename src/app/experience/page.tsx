import ProfileSectionTitle from "@/components/ProfileSectionTitle";
import WorkExperienceGrid, { WorkExperienceItem } from "@/components/WorkExperienceGrid";
import React from "react";
import * as motion from "motion/react-client";
type Props = {};

export const metadata = {
    title: "Professional Experience - Gregory Flores",
    description: "4+ years Software Engineering experience working effectively in dynamic environments and delivering quality solutions.",
};

const experience = (props: Props) => {
    return <WorkExperience />;
};

export default experience;

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
