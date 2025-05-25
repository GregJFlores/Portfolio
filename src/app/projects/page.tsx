import ProfileSectionTitle from "@/components/ProfileSectionTitle";
import ProjectsGrid, { ProjectItem } from "@/components/ProjectsGrid";
import React from "react";
import * as motion from "motion/react-client";

type Props = {};

const page = (props: Props) => {
    return <Projects />;
};

export default page;

function Projects() {
    const projects: ProjectItem[] = [
        {
            title: "Power Supply eXtension Roll-Up (PSXR)",
            type: "Work",
            company: "CACI International Inc.",
            imageUrl: "/PSXR.jpg",
            link: {
                href: "https://www.caci.com/automatic-test-systems",
                label: "Learn More",
            },
            description:
                "Developed the hardware abstraction layer that controls the various instruments inside the PSXR Test Station. This test station was designed to test legacy LRUs (Line Replaceable Units) for the US Air Force's E-3 Aircraft.",
            technologies: ["C", "NI TestStand", "NI LabWindows/CVI"],
        },
        {
            title: "Multi-Platform Automatic Tester (MPAT)",
            type: "Work",
            company: "CACI International Inc.",
            imageUrl: "/mpat.jpg",
            link: {
                href: "https://www.caci.com/automatic-test-systems",
                label: "Learn More",
            },
            description: "Developed the hardware abstraction layer that controls the various instruments inside the MPAT Test Station. ",
            technologies: ["C", "NI TestStand", "NI LabWindows/CVI"],
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
            <ProfileSectionTitle text="Projects" />
            <ProjectsGrid projects={projects} />
        </motion.div>
    );
}
