import React, { useCallback } from "react";
import { WorkExperienceItem } from "./WorkExperienceGrid";
import * as motion from "motion/react-client";
type Props = {
    job: WorkExperienceItem;
    index: number;
};

const WorkExperienceCard = (props: Props) => {
    const getMonthByAbbreviation = (month: string) => {
        const monthMap: { [key: string]: number } = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11,
        };
        return monthMap[month] || -1;
    };
    const getYearFromDate = (date: string) => {
        const [month, year] = date.split(" ");
        return parseInt(year, 10);
    };

    const calculateJobDuration = useCallback(
        (startDate: string, endDate: string) => {
            const startMonth = getMonthByAbbreviation(startDate.split(" ")[0]);
            const startYear = getYearFromDate(startDate);
            let months = 0;
            let duration = "";

            if (endDate === "Present") {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth();
                months = (currentYear - startYear) * 12 + (currentMonth - startMonth);
            } else {
                const endYear = getYearFromDate(endDate);
                const endMonth = getMonthByAbbreviation(endDate.split(" ")[0]);
                months = (endYear - startYear) * 12 + (endMonth - startMonth);
            }

            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            if (years > 0) {
                duration += `${years} year${years > 1 ? "s" : ""}`;
            }
            if (remainingMonths > 0) {
                duration += `${duration ? " " : ""}${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
            }

            return duration || "Less than a month";
        },
        [props.job.startDate, props.job.endDate]
    );
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
            <h4
                className="text-lg mb-2 text-green-100
                        drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
            >
                {props.job.title}
            </h4>
            <p className="text-sm mb-2">{props.job.company}</p>
            <p className="text-xs text-green-500">
                {props.job.startDate} - {props.job.endDate}
            </p>
            <p className="text-xs text-green-500">
                <span className="text-green-500">Duration:</span> {""}
                {calculateJobDuration(props.job.startDate, props.job.endDate)}
            </p>
            <p className="text-xs text-green-500 pb-2">
                <span className="text-green-500">Location:</span> {props.job.location}
            </p>

            {props.job.description && (
                <div className="border-t border-green-700 py-2">
                    <p className="text-green-500 text-xs">Description:</p>
                    <p className="text-sm text-pretty">{props.job.description}</p>
                </div>
            )}
            {props.job.technologies && (
                <div className="border-t border-green-700 pt-2">
                    <p className="text-green-500 text-xs">Technologies/Skills:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {props.job.technologies.map((tech, techIndex) => (
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

export default WorkExperienceCard;
