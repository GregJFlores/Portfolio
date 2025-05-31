import React from "react";
import ProjectCard from "./ProjectCard";

export type ProjectItem = {
    title: string;
    type: "Personal" | "Work";
    company?: string;
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    link?: { href: string; label: string };
    description?: string;
    technologies?: string[];
};

type Props = {
    projects: ProjectItem[];
};

const ProjectsGrid = (props: Props) => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {props.projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
    );
};

export default ProjectsGrid;
