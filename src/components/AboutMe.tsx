import AwardListItem from "@/components/AwardListItem";
import HighlightsList from "@/components/HighlightsList";
import ProfileInformation from "@/components/ProfileInformation";
import PublicationListItem from "@/components/PublicationListItem";
import SectionTitle from "@/components/SectionTitle";
import * as motion from "motion/react-client";
import { FaGraduationCap } from "react-icons/fa";
import { RiMapPinFill } from "react-icons/ri";
import ExpandableText from "@/components/ExpandableText";
function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="grid md:grid-cols-5 gap-8"
        >
            <div className="col-span-full md:col-span-3 space-y-4">
                <SectionTitle text="About Me" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="space-y-4"
                >
                    <ExpandableText maxHeight={125} className="text-pretty">
                        <p className="text-pretty leading-relaxed">
                            Hi, I’m Greg Flores, a software engineer based in San Antonio, Texas. I focus on building reliable, well-architected, and maintainable software systems.
                            I currently support government contracting efforts, where precision, traceability, and long-term support are essential.
                        </p>
                        <p className="text-pretty leading-relaxed">
                            I have over four years of experience in full-stack development with a strong emphasis on designing scalable APIs, automating workflows, and improving
                            developer efficiency. I have a low tolerance for inefficiency — if I find myself doing the same task more than three times, I automate it.
                        </p>
                        <p className="text-pretty leading-relaxed">
                            My approach to development combines planning and adaptability. For larger efforts, I typically start with diagrams or pen-and-paper designs to map out
                            system architecture before writing a line of code. I enjoy understanding how systems work at a low level and stay current with emerging technologies by
                            reading industry blogs and watching deep-dive technical content.
                        </p>
                        <p className="text-pretty leading-relaxed">
                            Outside of work, I spend time playing guitar and piano, gaming, and wrangling my three dogs and two cats. I believe curiosity, attention to detail, and
                            continuous learning are key to building systems that stand the test of time.
                        </p>
                    </ExpandableText>

                    <ProfileInformation
                        items={[
                            { label: "Location", value: "San Antonio, TX", icon: RiMapPinFill },
                            { label: "Experience", value: "4+ Years in Software Engineering" },
                            {
                                label: "Education",
                                value: (
                                    <div className="flex flex-col">
                                        <p>B.S. Software Engineering</p>
                                        <div className="flex flex-col text-xs text-green-200/70">
                                            <p>St. Mary's University</p>
                                            <p>San Antonio, TX</p>
                                        </div>
                                    </div>
                                ),
                                icon: FaGraduationCap,
                            },
                        ]}
                    />
                </motion.div>
            </div>
            <div className="space-y-6 md:col-span-2 col-span-full">
                <HighlightsList listTitle="Awards">
                    <AwardListItem
                        title="Technical Innovation - CACI Champions"
                        imageUrl="/caci_champ_award_2024.JPG"
                        description=""
                        link="https://www.linkedin.com/feed/update/urn:li:activity:7184549331754983424/"
                    />
                </HighlightsList>
                <HighlightsList listTitle="Publications">
                    <PublicationListItem
                        publicationTitle="Bringing Legacy Technical Data out of the Shadows Using Modern Digital Engineering Tools"
                        publisher="IEEE"
                        publicationDate="Oct, 2024"
                        publicationLink="https://ieeexplore.ieee.org/document/10697525"
                    />
                    <PublicationListItem
                        publicationTitle="Initial Experiences in Use of Model Based Development in the ATE Industry"
                        publisher="IEEE"
                        publicationDate="Nov, 2023"
                        publicationLink="https://ieeexplore.ieee.org/document/10296272"
                    />
                </HighlightsList>
            </div>
        </motion.div>
    );
}

export default AboutMe;
