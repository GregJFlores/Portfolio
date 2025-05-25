import React, { useCallback } from "react";

import * as motion from "motion/react-client";
import { ProjectItem } from "./ProjectsGrid";
import Image from "next/image";
type Props = {
    project: ProjectItem;
    index: number;
};

const ProjectCard = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: props.index * 0.15,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
            className="border-2 border-green-500 p-4 intense-glow-container"
        >
            <div className="grid grid-cols-2 gap-2 mb-4">
                <h3
                    className="text-lg mb-2 text-green-100
                        drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                >
                    {props.project.title}
                </h3>
                {props.project.imageUrl && (
                    <div className="rounded-sm overflow-hidden border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                        <Image src={props.project.imageUrl} alt={"project image"} width={100} height={50} className="w-full h-auto object-cover" />
                    </div>
                )}
            </div>

            <div className="mb-2">
                <p className="text-green-500 text-xs">Type:</p>
                <p className="text-sm">{props.project.type}</p>
            </div>
            {props.project.company && (
                <div className="mb-2">
                    <p className="text-green-500 text-xs">Company:</p>
                    <p className="text-sm">{props.project.company}</p>
                </div>
            )}
            {props.project.link && (
                <div className="mb-2">
                    <a href={props.project.link.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        {props.project.link.label || props.project.link.href}
                    </a>
                </div>
            )}
            {props.project.liveUrl && (
                <div className="text-xs mb-2">
                    <a href={props.project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Live Project
                    </a>
                </div>
            )}
            {props.project.githubUrl && (
                <div className="text-xs mb-2">
                    <a href={props.project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        GitHub Repository
                    </a>
                </div>
            )}

            {props.project.description && (
                <div className="border-t border-green-700 pt-2">
                    <p className="text-green-500 text-xs">Description:</p>
                    <p className="text-sm">{props.project.description}</p>
                </div>
            )}
            {props.project.technologies && (
                <div className="border-t border-green-700 pt-2">
                    <p className="text-green-500 text-xs">Technologies/Skills:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {props.project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-green-800 bg-opacity-50 px-2 py-1 rounded text-xs">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
