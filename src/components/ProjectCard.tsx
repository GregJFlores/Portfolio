import * as motion from "motion/react-client";
import ImageKitComponent from "./ImageKitComponent";
import { ProjectItem } from "./ProjectsGrid";
import ExternalLink from "./ExternalLink";
import { IoBusinessSharp } from "react-icons/io5";
import { FaUser, FaBriefcase } from "react-icons/fa";

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
            <div className="flex justify-between gap-x-2 mb-4">
                <h4
                    className="text-lg mb-2 text-green-100 text-pretty
                        drop-shadow-[0_0_6px_rgba(34,197,94,0.7)] mr-2"
                >
                    {props.project.title}
                </h4>
                {props.project.imageUrl && (
                    <div className="rounded-sm w-36 h-auto overflow-hidden border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                        <ImageKitComponent
                            src={props.project.imageUrl}
                            alt={`${props.project.title || "Project"} preview image`}
                            loading="lazy" // Changed to lazy since these are likely below the fold
                            className="object-cover"
                            width={288}
                            height={288}
                            transformation={{
                                width: 288,
                                height: 288,
                                quality: 80,
                                zoom: props.project.imageZoom || undefined,
                                crop: "at_max",
                                focus: props.project.imageFocus || "center",
                                format: "webp",
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Badge to indicate project type (Personal or Work)*/}
            {props.project.type && (
                <div className="mb-2.5">
                    <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-0.5 rounded-sm border ${
                            props.project.type === "Personal"
                                ? "bg-green-900/70 text-green-300 border-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.3)]"
                                : "bg-blue-900/70 text-blue-300 border-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                        } backdrop-blur-sm transition-all duration-200 hover:scale-105`}
                    >
                        {props.project.type === "Personal" ? <FaUser className="w-3 h-3" /> : <FaBriefcase className="w-3 h-3" />}
                        {props.project.type === "Personal" ? "Personal" : "Work"}
                    </span>
                </div>
            )}

            {/* Company name if available */}
            {props.project.company && (
                <div className="text-sm text-green-300 flex items-center gap-1 mb-2">
                    <IoBusinessSharp className="text-green-500" />
                    {props.project.company}
                </div>
            )}
            {props.project.link && (
                <div className="mb-2 text-sm">
                    <ExternalLink href={props.project.link.href} title={props.project.link.label || props.project.link.href} />
                </div>
            )}
            {props.project.liveUrl && (
                <div className="text-sm mb-2">
                    <ExternalLink href={props.project.liveUrl} title="Live Project" />
                </div>
            )}
            {props.project.githubUrl && (
                <div className="text-sm mb-2">
                    <ExternalLink href={props.project.githubUrl} title="GitHub Repository" />
                </div>
            )}

            {props.project.description && (
                <div className="border-t border-green-700 py-2">
                    <p className="text-green-500 text-xs">Description:</p>
                    <p className="text-sm text-pretty leading-relaxed">{props.project.description}</p>
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
