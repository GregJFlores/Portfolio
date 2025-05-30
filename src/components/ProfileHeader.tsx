import { Send } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProfileHeader = () => {
    return (
        <div
            className="bg-green-900 bg-opacity-50 p-4 flex justify-between items-center 
          relative z-10"
        >
            <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                    <Image src="/profile_pic.JPG" alt="Profile" fill className="object-cover" sizes="64px" priority />
                </div>

                <div>
                    <h1
                        className="text-2xl font-bold text-green-100 
                drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                    >
                        Gregory (Greg) Flores
                    </h1>
                    <h2
                        className="text-green-400 
                drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                    >
                        Software Engineer
                    </h2>
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
                <a href="https://github.com/GregJFlores" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                    <FaGithub className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>
            </div>
        </div>
    );
};

export default ProfileHeader;
