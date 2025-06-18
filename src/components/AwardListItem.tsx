import { FaCalendarAlt } from "react-icons/fa";
import ExternalLink from "./ExternalLink";
import ImageKitComponent from "./ImageKitComponent";
import { IoBusinessSharp } from "react-icons/io5";

type Props = {
    title: string;
    link: string;
    imageUrl: string;
    description: string;
    company?: string;
    date?: string;
};

const AwardListItem = (props: Props) => {
    return (
        <li className="flex items-center justify-between gap-x-2">
            <div className="max-w-2/3">
                <p className="font-semibold text-pretty">{props.title}</p>
                {props.description && <p className="text-sm text-pretty py-1">{props.description}</p>}
                {props.company && (
                    <p className="text-sm text-pretty py-1 flex items-center gap-1">
                        <IoBusinessSharp className="text-green-500" /> {props.company}
                    </p>
                )}
                {props.date && (
                    <p className="text-sm text-pretty py-1 flex items-center gap-1">
                        <FaCalendarAlt className="text-green-500" /> {props.date}
                    </p>
                )}
                <ExternalLink href={props.link} title="View Award" />
            </div>
            {props.imageUrl && (
                <div className="relative w-30 h-24 rounded-sm overflow-hidden border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                    <ImageKitComponent
                        src={props.imageUrl}
                        alt={props.description}
                        loading="lazy"
                        className="object-cover"
                        fill
                        width={240} // 2x for retina displays (~120px * 2)
                        height={192} // 2x for retina displays (~96px * 2)
                        transformation={{
                            width: 240,
                            height: 192,
                            quality: 80,
                            format: "webp",
                            crop: "maintain_ratio",
                            focus: "auto",
                        }}
                    />
                </div>
            )}
        </li>
    );
};

export default AwardListItem;
