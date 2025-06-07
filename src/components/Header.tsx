import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ImageKitComponent from "./ImageKitComponent";
const Header = () => {
    return (
        <div
            className="bg-green-900 bg-opacity-50 p-4 flex justify-between items-center 
          relative z-10"
        >
            <div className="flex items-center gap-x-2 sm:gap-x-4">
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

                <div className="flex flex-col space-y-1 min-w-0">
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
                        Software Engineer
                    </h2>
                </div>
            </div>
            {/* Contact Links */}
            <div className="transition-all hidden sm:flex gap-6 text-green-200/90">
                <a href="mailto:greg@gregjflores.com" className="hover:text-green-100 ">
                    <Send className="" size={24} />
                </a>

                <a href="https://www.linkedin.com/in/gregjflores/" target="_blank" rel="noopener noreferrer" className="hover:text-green-100 ">
                    <FaLinkedin className="" size={24} />
                </a>
                <a href="https://github.com/GregJFlores" target="_blank" rel="noopener noreferrer" className="hover:text-green-100 ">
                    <FaGithub className="" size={24} />
                </a>
                <a href="https://x.com/GregJFlores" target="_blank" rel="noopener noreferrer" className="hover:text-green-100 ">
                    <FaSquareXTwitter className="" size={24} />
                </a>
            </div>
        </div>
    );
};

export default Header;
