export const baseMetadata = {
    title: {
        default: "Gregory (Greg) Flores - Software Engineer | San Antonio, TX",
        template: "%s | Software Engineer",
    },
    description:
        "Software Engineer Gregory (Greg) Flores brings comprehensive engineering expertise to full-stack development and innovative technology solutions. Based in San Antonio with a B.S. from St. Mary's University.",
    keywords: [
        "Gregory Flores",
        "Greg Flores",
        "Software Engineer",
        "San Antonio",
        "Texas",
        "Web Developer",
        "Full Stack Developer",
        "JavaScript",
        "React",
        "Node.js",
        "Software Development",
        "Programming",
        "Technology",
        "Portfolio",
    ],
    authors: [{ name: "Gregory Flores" }],
    creator: "Gregory Flores",
    publisher: "Gregory Flores",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://www.gregjflores.com"),
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.gregjflores.com",
        title: "Gregory Flores - Software Engineer | San Antonio, TX",
        description:
            "Software Engineer with 5+ years experience creating streamlined solutions and delivering efficient results.",
        siteName: "Gregory Flores Portfolio",
        images: [
            {
                url: "/og-image.jpg", // You'll need to create this image
                width: 1600,
                height: 2000,
                alt: "Gregory (Greg) Flores - Software Engineer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gregory Flores - Software Engineer",
        description:
            "Software Engineer with 5+ years experience in San Antonio, TX. Passionate about technology and problem-solving.",
        images: ["/og-image.jpg"], // Same image as OpenGraph
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

// Page-specific metadata
export const pageMetadata = {
    about: {
        title: "About - Gregory (Greg) Flores",
        description:
            "Software Engineer Gregory (Greg) Flores brings comprehensive engineering expertise to full-stack development and innovative technology solutions. Based in San Antonio with a B.S. from St. Mary's University.",
        openGraph: {
            title: "About - Gregory (Greg) Flores",
            description:
                "Software Engineer with expertise in creating streamlined solutions and delivering efficient results.",
            url: "https://www.gregjflores.com/about",
        },
    },
    skills: {
        title: "Technical Skills - Gregory (Greg) Flores",
        description:
            "Technical skills and technologies used by Gregory Flores: programming languages, frameworks, and development tools.",
        openGraph: {
            title: "Technical Skills - Gregory (Greg)  Flores",
            description:
                "Technical skills and technologies used by Gregory (Greg) Flores as a Software Engineer.",
            url: "https://www.gregjflores.com/skills",
        },
    },
    experience: {
        title: "Professional Experience - Gregory (Greg) Flores",
        description:
            "5+ years Software Engineering experience working effectively in dynamic environments and delivering quality solutions.",
        openGraph: {
            title: "Professional Experience - Gregory (Greg) Flores",
            description:
                "5+ years Software Engineering experience in dynamic environments and quality solution delivery.",
            url: "https://www.gregjflores.com/experience",
        },
    },
    projects: {
        title: "Projects Portfolio - Gregory (Greg) Flores",
        description:
            "Software development projects showcasing problem-solving skills, technology expertise, and innovative solutions.",
        openGraph: {
            title: "Projects Portfolio - Gregory (Greg) Flores",
            description:
                "Software development projects showcasing problem-solving skills and technology expertise.",
            url: "https://www.gregjflores.com/projects",
        },
    },
    contact: {
        title: "Contact - Gregory (Greg) Flores",
        description:
            "Contact Gregory Flores, Software Engineer in San Antonio, TX. Available for new opportunities and collaborations.",
        openGraph: {
            title: "Contact Gregory (Greg) Flores",
            description:
                "Contact Gregory (Greg) Flores, Software Engineer based in San Antonio, TX for opportunities.",
            url: "https://www.gregjflores.com/contact",
        },
    },
};
