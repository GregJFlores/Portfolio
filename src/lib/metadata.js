// lib/metadata.js - Centralized SEO metadata configuration

export const baseMetadata = {
    title: {
        default: "Gregory Flores - Software Engineer | San Antonio, TX",
        template: "%s | Gregory Flores - Software Engineer",
    },
    description: "Software Engineer with 4+ years experience creating streamlined solutions. Passionate about problem-solving and technology excellence.",
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
        description: "Software Engineer with 4+ years experience creating streamlined solutions and delivering efficient results.",
        siteName: "Gregory Flores Portfolio",
        images: [
            {
                url: "/og-image.jpg", // You'll need to create this image
                width: 1600,
                height: 2000,
                alt: "Gregory Flores - Software Engineer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gregory Flores - Software Engineer",
        description: "Software Engineer with 4+ years experience in San Antonio, TX. Passionate about technology and problem-solving.",
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
        title: "Gregory Flores",
        description: "Software Engineer with B.S. from St. Mary's University, San Antonio. Passionate about creating streamlined technology solutions.",
        openGraph: {
            title: "About Gregory Flores - Software Engineer",
            description: "Software Engineer with expertise in creating streamlined solutions and delivering efficient results.",
            url: "https://www.gregjflores.com/about",
        },
    },
    skills: {
        title: "Technical Skills - Gregory Flores",
        description: "Technical skills and technologies used by Gregory Flores: programming languages, frameworks, and development tools.",
        openGraph: {
            title: "Technical Skills - Gregory Flores",
            description: "Technical skills and technologies used by Gregory Flores as a Software Engineer.",
            url: "https://www.gregjflores.com/skills",
        },
    },
    experience: {
        title: "Professional Experience - Gregory Flores",
        description: "4+ years Software Engineering experience working effectively in dynamic environments and delivering quality solutions.",
        openGraph: {
            title: "Professional Experience - Gregory Flores",
            description: "4+ years Software Engineering experience in dynamic environments and quality solution delivery.",
            url: "https://www.gregjflores.com/experience",
        },
    },
    projects: {
        title: "Projects Portfolio - Gregory Flores",
        description: "Software development projects showcasing problem-solving skills, technology expertise, and innovative solutions.",
        openGraph: {
            title: "Projects Portfolio - Gregory Flores",
            description: "Software development projects showcasing problem-solving skills and technology expertise.",
            url: "https://www.gregjflores.com/projects",
        },
    },
    contact: {
        title: "Contact - Gregory Flores",
        description: "Contact Gregory Flores, Software Engineer in San Antonio, TX. Available for new opportunities and collaborations.",
        openGraph: {
            title: "Contact Gregory Flores - Software Engineer",
            description: "Contact Gregory Flores, Software Engineer based in San Antonio, TX for opportunities.",
            url: "https://www.gregjflores.com/contact",
        },
    },
};
