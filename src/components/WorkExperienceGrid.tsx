import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";

export type WorkExperienceItem = {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    description?: string;
    technologies?: string[];
};

type Props = {
    workExperience: WorkExperienceItem[];
};

const WorkExperienceGrid = (props: Props) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {props.workExperience.map((job, index) => (
                <WorkExperienceCard key={index} job={job} />
            ))}
        </div>
    );
};

export default WorkExperienceGrid;
