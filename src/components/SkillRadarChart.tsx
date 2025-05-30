"use client";
import React from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import * as motion from "motion/react-client";
export type SkillDataItem = {
    subject: string;
    grade: number;
    fullMark: number;
};

type Props = {
    skillData: SkillDataItem[];
};

const SkillRadarChart = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
            className="border-2 border-green-500 p-4 intense-glow-container"
        >
            <h4
                className="text-lg uppercase mb-4 border-b border-green-700 pb-2 
                      text-green-100
                      drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
            >
                Skill Proficiency
            </h4>
            <div className="flex items-center justify-center w-100% h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius="80%" data={props.skillData}>
                        <PolarGrid stroke="#22c55e" strokeOpacity={0.3} />
                        <PolarAngleAxis dataKey="subject" stroke="#22c55e" />
                        <PolarRadiusAxis angle={20} domain={[0, 100]} stroke="#22c55e" strokeOpacity={0.5} />
                        <Radar
                            name="Skills"
                            dataKey="grade"
                            stroke="#22c55e"
                            fill="#22c55e"
                            fillOpacity={0.6}
                            isAnimationActive={true}
                            animationDuration={1000}
                            animationBegin={200}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default React.memo(SkillRadarChart);
