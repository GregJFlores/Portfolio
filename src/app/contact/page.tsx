import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import * as motion from "motion/react-client";
import ExternalLink from "@/components/ExternalLink";

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="space-y-2"
        >
            <SectionTitle text="Contact Me" />
            <div className="mt-6 space-y-4 text-center">
                <p className="text-lg leading-relaxed">Interested in working together or have a question? Let’s connect!</p>
                <div className="inline-flex items-center gap-2 ">
                    <span>Feel free to check out my</span>

                    <ExternalLink href="/Gregory_Flores_Resume.pdf" title="resume" />
                </div>
            </div>

            <ContactForm />
            <div className="flex gap-x-12 justify-center items-center mt-8 text-green-200/90 transition-colors">
                <a href="mailto:greg@gregjflores.com" className="hover:text-green-100">
                    <Send className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>

                <a href="https://www.linkedin.com/in/gregjflores/" target="_blank" rel="noopener noreferrer" className="hover:text-green-100 ">
                    <FaLinkedin className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>
                <a href="https://github.com/GregJFlores" target="_blank" rel="noopener noreferrer" className="hover:text-green-100 ">
                    <FaGithub className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>
                <a href="https://x.com/GregJFlores" target="_blank" rel="noopener noreferrer" className="hover:text-green-100 ">
                    <FaSquareXTwitter className="drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" size={24} />
                </a>
            </div>
        </motion.div>
    );
}
