import ProfileAwardListItem from "@/components/ProfileAwardListItem";
import ProfileHighlightsList from "@/components/ProfileHighlightsList";
import ProfileInformation from "@/components/ProfileInformation";
import ProfilePublicationListItem from "@/components/ProfilePublicationListItem";
import ProfileSectionTitle from "@/components/ProfileSectionTitle";
import React from "react";
import * as motion from "motion/react-client";
import { GraduationCap, MapPin } from "lucide-react";

function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="grid md:grid-cols-3 gap-6"
        >
            <div className="col-span-2 space-y-4">
                <ProfileSectionTitle text="About Me" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="space-y-4"
                >
                    <p>
                        Forward-thinking Software Engineer with background working effectively in dynamic environments. Adept at creating streamlined solutions and delivering
                        efficient results. Passionate about problem-solving and utilizing technology to drive excellence.
                    </p>
                    <ProfileInformation
                        items={[
                            { label: "Location", value: "San Antonio, TX", icon: MapPin },
                            { label: "Experience", value: "4+ Years in Software Engineering" },
                            {
                                label: "Education",
                                value: (
                                    <div>
                                        <p>B.S. Software Engineering</p>
                                        <p>St. Mary's University</p>
                                        <p>San Antonio, TX</p>
                                    </div>
                                ),
                                icon: GraduationCap,
                            },
                        ]}
                    />
                </motion.div>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
                <ProfileHighlightsList listTitle="Awards">
                    <ProfileAwardListItem
                        title="Technical Innovation - CACI Champions"
                        imageUrl="/caci_champ_award_2024.JPG"
                        width={200}
                        height={200}
                        description="CACI Champions Award for Technical Innovation"
                        link="https://www.linkedin.com/feed/update/urn:li:activity:7184549331754983424/"
                    />
                </ProfileHighlightsList>
                <ProfileHighlightsList listTitle="Publications">
                    <ProfilePublicationListItem
                        publicationTitle="Bringing Legacy Technical Data out of the Shadows Using Modern Digital Engineering Tools"
                        publisher="IEEE"
                        publicationDate="Oct, 2024"
                        publicationLink="https://ieeexplore.ieee.org/document/10697525"
                    />
                    <ProfilePublicationListItem
                        publicationTitle="Initial Experiences in Use of Model Based Development in the ATE Industry"
                        publisher="IEEE"
                        publicationDate="Nov, 2023"
                        publicationLink="https://ieeexplore.ieee.org/document/10296272"
                    />
                </ProfileHighlightsList>
            </div>
        </motion.div>
    );
}

export default AboutMe;
