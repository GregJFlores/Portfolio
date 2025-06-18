"use client";
import React, { ReactNode } from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Legend } from "recharts";
import * as motion from "motion/react-client";
export type SkillDataItem = {
    subject: string;
    grade: number;
    fullMark: number;
};

type Props = {
    skillData: SkillDataItem[];
    chartTitle?: string;
    yearsOfExperience?: number;
    icon?: ReactNode;
};

const SkillRadarChart = (props: Props) => {
    // Calculate optimal angle to avoid legend overlap
    //normalize angle starting from top
    const angleOffset = 90;
    const normalizedData = props.skillData.map((item, index) => ({
        ...item,
        angle: (angleOffset + index * (360 / props.skillData.length)) % 360,
    }));
    const optimalAngle = normalizedData.reduce((acc, item) => {
        return Math.max(acc, item.angle);
    }, 0);

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
                className="text-lg uppercase flex items-center gap-x-2 mb-4 border-b border-green-700 pb-2 
                      text-green-100
                      drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
            >
                {props.icon} {props.chartTitle || "Skill Radar Chart"}
            </h4>
            <div className="flex items-center justify-center w-100% h-64 md:h-80">
                <div className="w-full h-full flex items-center justify-center flex-col">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart outerRadius="75%" data={props.skillData}>
                            <PolarGrid stroke="#22c55e" strokeOpacity={0.3} />
                            <PolarAngleAxis
                                dataKey="subject"
                                stroke="#22c55e"
                                tick={{ fontSize: 14, fill: "#22c55e" }}
                                tickFormatter={(value) => value}
                                className="text-xs"
                                tickSize={15}
                                tickLine={false}
                            />
                            <PolarRadiusAxis angle={optimalAngle} domain={[0, props.yearsOfExperience || 0]} stroke="#22c55e" strokeOpacity={0.5} />

                            <Radar
                                name="Years of Experience"
                                dataKey="grade"
                                stroke="#22c55e"
                                fill="#22c55e"
                                fillOpacity={0.4}
                                isAnimationActive={true}
                                animationDuration={800}
                                animationBegin={0}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                    <div className="my-2 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-green-400">
                            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-green-400"></div>
                            <span className="text-sm font-medium">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default React.memo(SkillRadarChart);
