import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiDocumentArrowDown } from "react-icons/hi2";
import ImageKitComponent from "./ImageKitComponent";
import SocialLink from "./SocialLink";
const Header = () => {
    return (
        <div
            className="bg-green-900 bg-opacity-50 p-2 flex justify-center items-center 
          relative z-10"
        >
            <div className="flex items-center gap-x-4 w-full">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-green-500 shadow-xl drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                    <ImageKitComponent
                        src="/gregjflores.JPG"
                        alt="Profile"
                        loading="eager"
                        className="object-cover"
                        fill
                        priority
                        width={128} // 2x for retina displays (64px * 2)
                        height={128}
                        transformation={{
                            width: 128,
                            height: 128,
                            crop: "maintain_ratio",
                            focus: "auto",
                            quality: 85,
                            format: "webp",
                        }}
                    />
                </div>

                <div className="flex flex-col space-y-2 min-w-0">
                    <div>
                        <h1
                            className="text-2xl font-bold text-fuchsia-50 
                drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
                        >
                            Gregory (Greg) Flores
                        </h1>
                        <h2
                            className="text-green-100 
                drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                        >
                            Full Stack Software Engineer
                        </h2>
                        <h2
                            className="text-green-100 
                drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                        >
                            San Antonio, TX
                        </h2>
                    </div>
                    <div className="transition-all sm:hidden flex gap-x-10 text-green-200/90">
                        <ContactLinks smallScreen />
                    </div>
                </div>
            </div>
            {/* Contact Links */}
            <div className="transition-all hidden sm:flex gap-6 text-green-200/90">
                <ContactLinks />
            </div>
        </div>
    );
};

export default Header;

const ContactLinks = ({ smallScreen }: { smallScreen?: boolean }) => {
    return smallScreen ? (
        <>
            <SocialLink href="mailto:greg@gregjflores.com" icon={FaEnvelope} name="Email" iconSize={20} />
            <SocialLink href="https://www.linkedin.com/in/gregjflores/" icon={FaLinkedin} name="LinkedIn" iconSize={20} />
            <SocialLink href="/Gregory_Flores_Resume.pdf" icon={HiDocumentArrowDown} name="Resume" iconSize={20} />
        </>
    ) : (
        <>
            <SocialLink href="mailto:greg@gregjflores.com" icon={FaEnvelope} name="Email" />
            <SocialLink href="https://www.linkedin.com/in/gregjflores/" icon={FaLinkedin} name="LinkedIn" />
            <SocialLink href="/Gregory_Flores_Resume.pdf" icon={HiDocumentArrowDown} name="Resume" />
        </>
    );
};
