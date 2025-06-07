import { Image, ImageKitProvider } from "@imagekit/next";

type ImageKitComponentProps = {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    className?: string;
    loading?: "lazy" | "eager";
    fill?: boolean;
    priority?: boolean;
    transformation?: {
        width?: number;
        height?: number;
        crop?: "force" | "at_max" | "at_max_enlarge" | "at_least" | "maintain_ratio" | undefined;
        focus?: "center" | "top" | "bottom" | "left" | "right" | "auto";
        aiUpscale?: true | undefined;
        quality?: number;
        format?: "webp" | "jpeg" | "png" | "avif" | undefined;
        dpr?: number | undefined;
        zoom?: number | undefined;
    };
};

const ImageKitComponent = (props: ImageKitComponentProps) => {
    // Calculate appropriate default sizes based on common display sizes
    const defaultWidth = props.width || 300;
    const defaultHeight = props.height || 300;

    return (
        <ImageKitProvider urlEndpoint={"https://ik.imagekit.io/gregjflores"}>
            <Image
                src={props.src}
                width={props.fill ? undefined : defaultWidth}
                height={props.fill ? undefined : defaultHeight}
                alt={props.alt || "Image"}
                fill={props.fill || false}
                loading={props.loading || "lazy"}
                className={props.className || "object-cover"}
                priority={props.priority || false}
                transformation={[
                    {
                        width: props.transformation?.width || defaultWidth,
                        height: props.transformation?.height || defaultHeight,
                        crop: props.transformation?.crop || "maintain_ratio", // Changed from "force"
                        focus: props.transformation?.focus || "auto", // Changed from "center"
                        aiUpscale: props.transformation?.aiUpscale || undefined,
                        quality: props.transformation?.quality || 80,
                        format: props.transformation?.format || "webp",
                        dpr: props.transformation?.dpr || undefined,
                        zoom: props.transformation?.zoom || undefined,
                        sharpen: true,
                    },
                ]}
                // Add sizes attribute for responsive images
                sizes={props.fill ? "(max-width: 768px) 100vw, 50vw" : undefined}
            />
        </ImageKitProvider>
    );
};

export default ImageKitComponent;
