// lib/metadata.js - Centralized SEO metadata configuration

export const baseMetadata = {
    title: {
        default: "Gregory Flores - Software Engineer | San Antonio, TX",
        template: "%s | Gregory Flores - Software Engineer",
    },
    description:
        "Forward-thinking Software Engineer with 4+ years of experience in creating streamlined solutions and delivering efficient results. Passionate about problem-solving and utilizing technology to drive excellence.",
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
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.gregjflores.com",
        title: "Gregory Flores - Software Engineer | San Antonio, TX",
        description: "Forward-thinking Software Engineer with 4+ years of experience in creating streamlined solutions and delivering efficient results.",
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
        description: "Forward-thinking Software Engineer with 4+ years of experience in San Antonio, TX",
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
        description: "Learn more about Gregory Flores, a forward-thinking Software Engineer with a B.S. in Software Engineering from St. Mary's University in San Antonio, TX.",
        openGraph: {
            title: "About Gregory Flores - Software Engineer",
            description: "Learn more about Gregory Flores, a forward-thinking Software Engineer with expertise in creating streamlined solutions.",
            url: "https://www.gregjflores.com",
        },
    },
    /* skills: {
    title: 'Technical Skills - Gregory Flores',
    description: 'Explore the technical skills and technologies that Gregory Flores uses as a Software Engineer, including programming languages, frameworks, and tools.',
    openGraph: {
      title: 'Technical Skills - Gregory Flores',
      description: 'Explore the technical skills and technologies that Gregory Flores uses as a Software Engineer.',
      url: 'https://www.gregjflores.com/skills',
    },
  },
  experience: {
    title: 'Professional Experience - Gregory Flores',
    description: 'Discover Gregory Flores\' professional experience with 4+ years in Software Engineering, working effectively in dynamic environments.',
    openGraph: {
      title: 'Professional Experience - Gregory Flores',
      description: 'Discover Gregory Flores\' professional experience with 4+ years in Software Engineering.',
      url: 'https://www.gregjflores.com/experience',
    },
  },
  projects: {
    title: 'Projects Portfolio - Gregory Flores',
    description: 'View Gregory Flores\' software development projects showcasing problem-solving skills and technology expertise.',
    openGraph: {
      title: 'Projects Portfolio - Gregory Flores',
      description: 'View Gregory Flores\' software development projects showcasing problem-solving skills and technology expertise.',
      url: 'https://www.gregjflores.com/projects',
    },
  },
  contact: {
    title: 'Contact - Gregory Flores',
    description: 'Get in touch with Gregory Flores, Software Engineer based in San Antonio, TX. Available for new opportunities and collaborations.',
    openGraph: {
      title: 'Contact Gregory Flores - Software Engineer',
      description: 'Get in touch with Gregory Flores, Software Engineer based in San Antonio, TX.',
      url: 'https://www.gregjflores.com/contact',
    },
  }, */
};
