import ExternalLink from "./ExternalLink";
import ImageKitComponent from "./ImageKitComponent";

type Props = {
    title: string;
    link: string;
    imageUrl: string;
    description: string;
    width: number;
    height: number;
};

const AwardListItem = (props: Props) => {
    return (
        <li className="flex items-center justify-between gap-x-2">
            <div className="max-w-2/3">
                <p className="font-semibold text-pretty">{props.title}</p>
                <p className="text-sm text-pretty py-1 leading-relaxed">{props.description}</p>
                <ExternalLink href={props.link} title="View Award" />
            </div>
            {props.imageUrl && (
                <div className="relative w-30 h-24 rounded-sm overflow-hidden border-2 border-green-500 shadow-lg drop-shadow-[0_0_8px_rgba(34,197,94,1)]">
                    <ImageKitComponent
                        src={props.imageUrl}
                        alt={props.description}
                        loading="eager"
                        className="object-cover"
                        fill
                        width={props.width} // Display size
                        height={props.height}
                        transformation={{
                            width: props.width,
                            height: props.height,
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
