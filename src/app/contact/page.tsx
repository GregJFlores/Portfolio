import ProfileSectionTitle from "@/components/ProfileSectionTitle";
import React from "react";
import * as motion from "motion/react-client";
type Props = {};

export const metadata = {
    title: "Contact - Gregory Flores",
    description: "Contact Gregory Flores, Software Engineer in San Antonio, TX. Available for new opportunities and collaborations.",
};

const page = (props: Props) => {
    return <Contact />;
};

export default page;

function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="space-y-4"
        >
            <ProfileSectionTitle text="Contact Me" />
            <p>If you would like to get in touch, please reach out via email or connect with me on LinkedIn.</p>
            <ul className="list-disc pl-5">
                <li>
                    <a href="mailto:greg.jflores@gmail.com" className="text-blue-500 hover:underline">
                        Email
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gregjflores/" className="text-blue-500 hover:underline">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GregJFlores" className="text-blue-500 hover:underline">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://x.com/GregJFlores" className="text-blue-500 hover:underline">
                        X (formerly Twitter)
                    </a>
                </li>
            </ul>
            <p>Feel free to reach out for collaboration, questions, or just to say hello!</p>
        </motion.div>
    );
}
