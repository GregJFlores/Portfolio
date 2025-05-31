import ProfileSectionTitle from "@/components/ProfileSectionTitle";
import React from "react";
import ContactForm from "@/components/ContactForm";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const metadata = {
    title: "Contact - Gregory Flores",
    description: "Contact Gregory Flores, Software Engineer in San Antonio, TX. Available for new opportunities and collaborations.",
};

const page = () => {
    return <Contact />;
};

export default page;

function Contact() {
    return (
        <div className="space-y-4">
            <ProfileSectionTitle text="Contact Me" />
            <p className="mt-5">Feel free to reach out for collaboration, questions, or just to say hello!</p>
            <ContactForm />
            <div className="flex gap-x-12 justify-center items-center mt-8">
                <a href="mailto:greg.jflores@gmail.com" className="hover:text-green-200 transition-colors">
                    <Send className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>

                <a href="https://www.linkedin.com/in/gregjflores/" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                    <FaLinkedin className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>
                <a href="https://github.com/GregJFlores" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                    <FaGithub className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>
                <a href="https://x.com/GregJFlores" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">
                    <FaSquareXTwitter className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>
            </div>
        </div>
    );
}
