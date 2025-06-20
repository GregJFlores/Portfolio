import ContactForm from "@/components/ContactForm";
import ExternalLink from "@/components/ExternalLink";
import GenericLink from "@/components/GenericLink";
import SectionTitle from "@/components/SectionTitle";
import SocialLink from "@/components/SocialLink";
import * as motion from "motion/react-client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiDocumentArrowDown } from "react-icons/hi2";

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

                    <ExternalLink href="/GregoryFloresResume.pdf" title="resume" />
                </div>
            </div>

            <ContactForm />
            <div className="flex gap-x-12 justify-center items-center mt-8 text-green-200/90 transition-colors">
                <ContactLinks />
            </div>
        </motion.div>
    );
}

const ContactLinks = () => {
    return (
        <>
            <SocialLink href="mailto:greg@gregjflores.com" icon={FaEnvelope} name="Email" />
            <SocialLink href="https://www.linkedin.com/in/gregjflores/" icon={FaLinkedin} name="LinkedIn" />
            <SocialLink href="https://github.com/GregJFlores" icon={FaGithub} name="GitHub" />
            <SocialLink href="https://x.com/GregJFlores" icon={FaSquareXTwitter} name="X" />
            <GenericLink href="/GregoryFloresResume.pdf" icon={HiDocumentArrowDown} name="Resume" />
        </>
    );
};
