import ProfileSectionTitle from "@/components/ProfileSectionTitle";
import React from "react";
import * as motion from "motion/react-client";
type Props = {};

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
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="space-y-4"
        >
            <ProfileSectionTitle text="Contact Me" />
            <p>If you would like to get in touch, please reach out via email or connect with me on LinkedIn.</p>
            <ul className="list-disc pl-5">
                <li>
                    Email:{" "}
                    <a href="mailto:greg.jflores@gmail.com" className="text-blue-500 hover:underline">
                        greg.jflores@gmail.com
                    </a>
                </li>
                <li>
                    LinkedIn:{" "}
                    <a href="https://www.linkedin.com/in/gregjflores/" className="text-blue-500 hover:underline">
                        linkedin.com/in/gregflores
                    </a>
                </li>
            </ul>
            <p>Feel free to reach out for collaboration, questions, or just to say hello!</p>
        </motion.div>
    );
}
