import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "../lib/metadata";

export const metadata = baseMetadata;

const jetBrainsMonoTitle = JetBrains_Mono({
    weight: "500",
    subsets: ["latin"],
    variable: "--jbmono-title",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-gray-900 text-gray-100">
            <head>
                {/* Additional SEO tags */}
                <link rel="canonical" href="https://www.gregflores.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#10B981" />
                <meta name="msapplication-TileColor" content="#10B981" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Gregory Flores",
                            alternateName: "Greg Flores",
                            url: "https://www.gregjflores.com",
                            image: "https://www.gregjflores.com/profile-pic.jpg",
                            sameAs: ["https://www.linkedin.com/in/gregjflores/", "https://github.com/gregjflores"],
                            jobTitle: "Software Engineer",
                            worksFor: {
                                "@type": "Organization",
                                name: "Software Engineering Professional",
                            },
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "San Antonio",
                                addressRegion: "TX",
                                addressCountry: "US",
                            },
                            alumniOf: {
                                "@type": "CollegeOrUniversity",
                                name: "St. Mary's University",
                                address: {
                                    "@type": "PostalAddress",
                                    addressLocality: "San Antonio",
                                    addressRegion: "TX",
                                    addressCountry: "US",
                                },
                            },
                            knowsAbout: ["Software Engineering", "Web Development", "JavaScript", "React", "Node.js", "Problem Solving", "Technology Solutions"],
                            description:
                                "Forward-thinking Software Engineer with background working effectively in dynamic environments. Adept at creating streamlined solutions and delivering efficient results.",
                        }),
                    }}
                />
            </head>
            <body className={`${jetBrainsMonoTitle.variable} flex items-center justify-center min-h-screen`}>{children}</body>
        </html>
    );
}
