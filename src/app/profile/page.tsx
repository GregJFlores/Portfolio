"use client";

import React, { useState } from "react";
import { User, Code, Terminal, Cpu, FileText, Award, Server, Send, Link, Globe, MapPin, FileSignatureIcon, GraduationCap } from "lucide-react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { BsLinkedin } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import TypedText from "@/components/TypedText";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("profile");

    // Skill data for radar chart
    const skillData = [
        { subject: "TypeScript", A: 80, fullMark: 100 },
        { subject: "Python", A: 90, fullMark: 100 },
        { subject: "C", A: 85, fullMark: 100 },
        { subject: "TestStand", A: 85, fullMark: 100 },
        { subject: "CVI", A: 90, fullMark: 100 },
        { subject: "Rust", A: 45, fullMark: 100 },
        { subject: "C#", A: 60, fullMark: 100 },
    ];

    // Project highlights
    const projects = [
        {
            name: "AI-Powered Task Manager",
            description: "Full-stack application with machine learning task prioritization",
            technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
        },
        {
            name: "Distributed Microservices Platform",
            description: "Scalable microservices architecture with containerization",
            technologies: ["Docker", "Kubernetes", "gRPC", "Golang"],
        },
        {
            name: "Real-time Collaboration Tool",
            description: "WebSocket-based collaborative editing platform",
            technologies: ["React", "Socket.io", "Express", "Redis"],
        },
    ];

    // Work experience
    const workExperience = [
        {
            title: "Software Engineer T3",
            company: "CACI International Inc.",
            duration: "Feb 2021, Present",
            description: "Developed and maintained software solutions for defense applications.",
            technologies: ["C", "Python", "Flask", "PostgreSQL", "GitLab", "JIRA", "NI TestStand", "NI LabWindows/CVI", "NI LabVIEW", "React", "TypeScript"],
        },
        {
            title: "WiFi Technical Support Analyst",
            company: "Opportunity Home San Antonio",
            duration: "Jan 2021, Feb 2021 ",
            description: "Provided technical support for WiFi services to residents.",
            technologies: ["WiFi", "Networking", "Customer Support", "Troubleshooting"],
        },
        {
            title: "Information Technology Intern",
            company: "Opportunity Home San Antonio",
            duration: "Sep 2020, Jan 2021",
            description: "Assisted in IT support.",
            technologies: ["Customer Support", "Troubleshooting"],
        },
        {
            title: "Engineering Intern",
            company: "Xenex Disinfection Services",
            duration: "May 2016, Aug 2016",
            description: "Worked on software/hardware development for disinfection robots.",
            technologies: ["NI LabVIEW", "Digital Circuit Design"],
        },
        {
            title: "Associate IT Technician",
            company: "St. Mary's University",
            duration: "Sep 2014, May 2015",
            description: "Provided IT support and troubleshooting for university systems.",
            technologies: ["Customer Support", "Troubleshooting"],
        },
        {
            title: "Aerospace Medical Technician",
            company: "United States Air Force",
            duration: "Mar 2012, Feb 2018",
            description: "Served as a medical technician in the Air Force, providing EMT/Nursing support.",
            technologies: ["EMT", "Nursing", "Medical Support", "EMT Instructor"],
        },
    ];

    return (
        <div className=" text-green-300 font-mono tracking-tight overflow-hidden">
            <div
                className="w-full md:w-6xl mx-auto bg-gray-900 bg-opacity-70 border-4 border-green-500 rounded-lg overflow-hidden 
        relative
        shadow-[0_0_50px_rgba(34,197,94,0.4)]"
            >
                {/* Header */}
                <div
                    className="bg-green-900 bg-opacity-50 p-4 flex justify-between items-center 
          relative z-10"
                >
                    <div className="flex items-center space-x-4">
                        <img
                            src={
                                "https://media.licdn.com/dms/image/v2/D5603AQHgCG30Gb9HnA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706481459792?e=1752710400&v=beta&t=X6lrnt4NzQkCzZInIu7ctfXxS2YzHNb56B2nI_1dx38"
                            }
                            alt="Profile"
                            className="w-16 h-16 rounded-full border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]"
                        />
                        <div>
                            <h1
                                className="text-2xl font-bold text-green-100 
                drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                            >
                                Gregory (Greg) Flores
                            </h1>
                            <p
                                className="text-green-400 
                drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                            >
                                Software Engineer
                            </p>
                        </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex space-x-4">
                        <a href="mailto:greg.jflores@gmail.com" className="hover:text-green-200 transition-colors">
                            <Send className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                        </a>

                        <a href="https://www.linkedin.com/in/gregjflores/" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                            <FaLinkedin className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="border-b border-green-700 flex relative z-10">
                    {["profile", "skills", "experience"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 uppercase text-sm border-r border-green-700 relative
                transition-all duration-300
                ${activeTab === tab ? "bg-green-700 bg-opacity-50 text-green-100 intense-glow" : "hover:bg-green-800 hover:bg-opacity-30"}
                `}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span
                                    className="absolute bottom-0 left-0 right-0 h-1 
                  bg-green-400 
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                                ></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-6 relative z-10 min-h-[35rem]">
                    {activeTab === "profile" && (
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Personal Details */}
                            <div className="col-span-2 space-y-4">
                                <div className="border-b border-green-700 pb-2">
                                    <h2
                                        className="text-xl uppercase tracking-widest 
                    text-green-100
                    drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                                    >
                                        About Me
                                    </h2>
                                </div>
                                <TypedText
                                    text={`Forward-thinking Software Engineer with background working effectively in dynamic environments. Adept at creating streamlined solutions and
                                    delivering efficient results. Passionate about problem-solving and utilizing technology to drive excellence.`}
                                    speed={10}
                                />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p
                                            className="text-green-500 
                      drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                                        >
                                            Location
                                        </p>
                                        <p className="flex items-center">
                                            <MapPin className="mr-2 text-green-300" size={16} />
                                            San Antonio, TX
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            className="text-green-500 
                      drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                                        >
                                            Experience
                                        </p>
                                        <p>4+ Years in Software Engineering</p>
                                    </div>
                                    <div>
                                        <p
                                            className="text-green-500 
                      drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                                        >
                                            Education
                                        </p>

                                        <p className="flex items-center">
                                            <GraduationCap className="mr-2 text-green-300" size={16} />
                                            B.S. Software Engineering
                                        </p>
                                        <p className="flex items-center">
                                            <MapPin className="mr-2 text-green-300" size={16} />
                                            St. Mary's University (San Antonio, TX)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="space-y-4 col-span-2 md:col-span-1">
                                <div className="border-2 border-green-500 p-4 intense-glow-container">
                                    <h3
                                        className="text-lg uppercase mb-4 border-b border-green-700 pb-2 
                    text-green-100
                    drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                                    >
                                        Awards
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <div>
                                                <p>Technical Innovation - CACI Champions</p>
                                                <a
                                                    href="https://www.linkedin.com/feed/update/urn:li:activity:7184549331754983424/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:underline"
                                                >
                                                    View Award{" "}
                                                </a>
                                            </div>
                                            <img
                                                src="https://media.licdn.com/dms/image/v2/D4D2DAQEIAikqEEHP5Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1712846920286?e=1747911600&v=beta&t=Nr_PshGQxvVLtoIzPreESffAl4qNa7UJr1l93BDkuuc"
                                                alt="Award"
                                                className="w-auto h-16 ml-2 rounded-lg shadow-lg hover:h-40 transition-all duration-500"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-2 border-green-500 p-4 intense-glow-container">
                                    <h3
                                        className="text-lg uppercase mb-4 border-b border-green-700 pb-2 
                    text-green-100
                    drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                                    >
                                        Publications
                                    </h3>
                                    <ul className="space-y-4 text-sm">
                                        <li className="flex items-center">
                                            <div>
                                                <p className="font-semibold">Bringing Legacy Technical Data out of the Shadows Using Modern Digital Enginering Tools</p>
                                                <p>IEEE · Oct 1, 2024</p>
                                                <a
                                                    href="https://ieeexplore.ieee.org/document/10697525"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:underline"
                                                >
                                                    View Publication{" "}
                                                </a>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <div>
                                                <p className="font-semibold">Initial Experiences in Use of Model Based Development in the ATE Industry</p>
                                                <p>IEEE · Nov 2, 2023</p>
                                                <a
                                                    href="https://ieeexplore.ieee.org/document/10296272"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:underline"
                                                >
                                                    View Publication{" "}
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "skills" && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Technical Skills */}
                            <div className="space-y-4">
                                <div className="border-b border-green-700 pb-2">
                                    <h2
                                        className="text-xl uppercase tracking-widest 
                    text-green-100
                    drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                                    >
                                        Technical Skills
                                    </h2>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { name: "OS", skills: "Windows, Linux (Ubuntu, Debian, REHL)" },
                                        { name: "System", skills: "C, Rust, C#" },
                                        { name: "Frontend", skills: "React, TypeScript, HTML5, CSS3, TailwindCSS" },
                                        { name: "Backend", skills: "Flask, Python, SQLAlchemy" },
                                        { name: "Database", skills: "PostgreSQL, MS SQL" },
                                        { name: "DevOps", skills: "Docker, GitLab Pipelines" },
                                        { name: "Tools and Services", skills: "Git, JIRA, Confluence, Visual Studio Code, GitHub, GitLab" },
                                        { name: "Other", skills: "NI TestStand, NI LabWindows/CVI, NI LabVIEW" },
                                    ].map((category, index) => (
                                        <div key={index}>
                                            <p
                                                className="text-green-500 
                        drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                                            >
                                                {category.name}
                                            </p>
                                            <p>{category.skills}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills Radar Chart */}
                            <div className="border-2 border-green-500 p-4 intense-glow-container">
                                <h3
                                    className="text-lg uppercase mb-4 border-b border-green-700 pb-2 
                  text-green-100
                  drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                                >
                                    Skill Proficiency
                                </h3>
                                <div className="flex items-center justify-center w-100% h-64 md:h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart outerRadius="80%" data={skillData}>
                                            <PolarGrid stroke="#22c55e" strokeOpacity={0.3} />
                                            <PolarAngleAxis dataKey="subject" stroke="#22c55e" />
                                            <PolarRadiusAxis angle={20} domain={[0, 100]} stroke="#22c55e" strokeOpacity={0.5} />
                                            <Radar name="Skills" dataKey="A" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "experience" && (
                        <div className="space-y-6">
                            <div className="border-b border-green-700 pb-2">
                                <h2
                                    className="text-xl uppercase tracking-widest 
                  text-green-100
                  drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                                >
                                    Work Experience
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {workExperience.map((job, index) => (
                                    <div key={index} className="border-2 border-green-500 p-4 intense-glow-container">
                                        <h3
                                            className="text-lg mb-2 text-green-100
                        drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                                        >
                                            {job.title}
                                        </h3>
                                        <p className="text-sm mb-2">{job.company}</p>
                                        <p className="text-xs text-green-500">{job.duration}</p>

                                        {job.description && (
                                            <div className="border-t border-green-700 pt-2">
                                                <p className="text-green-500 text-xs">Description:</p>
                                                <p className="text-sm">{job.description}</p>
                                            </div>
                                        )}
                                        {job.technologies && (
                                            <div className="border-t border-green-700 pt-2">
                                                <p className="text-green-500 text-xs">Technologies:</p>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {job.technologies.map((tech, techIndex) => (
                                                        <span key={techIndex} className="bg-green-800 bg-opacity-50 px-2 py-1 rounded text-xs">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === "projects" && (
                        <div className="space-y-6">
                            <div className="border-b border-green-700 pb-2">
                                <h2
                                    className="text-xl uppercase tracking-widest 
                  text-green-100
                  drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                                >
                                    Project Highlights
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {projects.map((project, index) => (
                                    <div key={index} className="border-2 border-green-500 p-4 intense-glow-container">
                                        <h3
                                            className="text-lg mb-2 text-green-100
                      drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                                        >
                                            {project.name}
                                        </h3>
                                        <p className="text-sm mb-2">{project.description}</p>
                                        <div className="border-t border-green-700 pt-2">
                                            <p className="text-green-500 text-xs">Technologies:</p>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="bg-green-800 bg-opacity-50 px-2 py-1 rounded text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div
                    className="bg-green-900 bg-opacity-50 p-2 text-center text-xs relative z-10
          text-green-100
          drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"
                >
                    © 2025 Gregory Flores | Software Engineer Portfolio
                </div>
            </div>
        </div>
    );
}
