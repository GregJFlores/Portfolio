import { Image, ImageKitProvider } from "@imagekit/next";

type ImageKitComponentProps = {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    className?: string;
    loading?: "lazy" | "eager";
    fill?: boolean; // Optional prop to allow for fill mode
    priority?: boolean; // Optional prop to allow for priority loading
    transformation?: {
        width?: number;
        height?: number;
        crop?: "force" | "at_max" | "at_max_enlarge" | "at_least" | "maintain_ratio" | undefined;
        focus?: "center" | "top" | "bottom" | "left" | "right" | "auto";
        aiUpscale?: true | undefined;
        quality?: number; // Optional quality setting
        format?: "webp" | "jpeg" | "png" | "avif" | undefined; // Optional format setting
        dpr?: number | undefined; // Optional DPR setting
        zoom?: number | undefined; // Optional zoom setting
    };
};

const ImageKitComponent = (props: ImageKitComponentProps) => {
    return (
        <ImageKitProvider urlEndpoint={"https://ik.imagekit.io/gregjflores"}>
            <Image
                src={props.src}
                width={props.fill ? undefined : props.width || 500} // Default width to 500 if not provided
                height={props.fill ? undefined : props.height || 500} // Default height to 500 if not provided
                alt={props.alt || "Image"}
                fill={props.fill || false} // Default to false if not provided
                loading={props.loading || "lazy"} // Default to lazy loading
                className={props.className || "object-cover"}
                priority={props.priority || false} // Default to false if not provided
                transformation={[
                    {
                        width: props.transformation?.width || 500,
                        height: props.transformation?.height || 500,
                        crop: props.transformation?.crop || "force", // Default crop to force
                        focus: props.transformation?.focus || "center", // Default focus to center// Default focus to center
                        aiUpscale: props.transformation?.aiUpscale || undefined, // Default AI upscale to false
                        quality: props.transformation?.quality || 80, // Default quality to 80
                        format: props.transformation?.format || "webp", // Default format to webp
                        dpr: props.transformation?.dpr || undefined, // Default DPR to auto
                        zoom: props.transformation?.zoom || undefined, // Default zoom to undefined
                        sharpen: true,
                    },
                ]}
            />
        </ImageKitProvider>
    );
};

export default ImageKitComponent;
