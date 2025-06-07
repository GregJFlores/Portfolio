import SectionTitle from "@/components/SectionTitle";
import ProjectsGrid, { ProjectItem } from "@/components/ProjectsGrid";
import React from "react";
import * as motion from "motion/react-client";

type Props = {};

export const metadata = {
    title: "Projects Portfolio - Gregory Flores",
    description: "Software development projects showcasing problem-solving skills, technology expertise, and innovative solutions.",
};

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
            imageUrl: "/mpat1.jpg",
            link: {
                href: "https://www.caci.com/automatic-test-systems",
                label: "Learn More",
            },
            description: "Developed the hardware abstraction layer that controls the various instruments inside the MPAT Test Station. ",
            technologies: ["C", "NI TestStand", "NI LabWindows/CVI"],
        },
        {
            title: "Portfolio Website",
            type: "Personal",
            githubUrl: "https://github.com/GregJFlores/Portfolio",
            imageUrl: "/about_portfolio.png",
            liveUrl: "https://www.gregjflores.com/about",
            imageFocus: "left",
            description: "A terminal themed portfolio website built with Next.js to showcase my projects, skills, and professional experience.",
            technologies: ["Next.js", "Tailwind CSS"],
        },
        {
            title: "Weather App",
            type: "Personal",
            githubUrl: "https://github.com/GregJFlores/NextWeather",
            imageUrl: "/weather_app.png",
            liveUrl: "https://next-weather-kohl.vercel.app/",

            description:
                "A weather application built with Next.js and Tailwind CSS that provides allows the user to query the current weather and five day forecast. It uses the OpenWeatherMap API to fetch weather data.",
            technologies: ["Next.js", "Tailwind CSS", "OpenWeatherMap API"],
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
            <SectionTitle text="Projects" />
            <ProjectsGrid projects={projects} />
        </motion.div>
    );
}
