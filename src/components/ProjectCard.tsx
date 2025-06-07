import * as motion from "motion/react-client";
import ImageKitComponent from "./ImageKitComponent";
import { ProjectItem } from "./ProjectsGrid";
import ExternalLink from "./ExternalLink";
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
                            alt={"project image"}
                            loading="eager"
                            className="object-cover"
                            width={200} // Display size
                            height={200}
                            transformation={{ width: 200, height: 200, quality: 80, crop: "at_max", focus: props.project.imageFocus || "center" }}
                        />
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
