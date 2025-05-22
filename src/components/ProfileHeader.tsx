import { Send } from "lucide-react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ProfileHeader = () => {
    return (
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
    );
};

export default ProfileHeader;
