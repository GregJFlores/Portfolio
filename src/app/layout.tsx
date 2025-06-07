import Container from "@/components/Container";
import ContentContainer from "@/components/ContentContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation, { HeaderLink } from "@/components/Navigation";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { baseMetadata } from "../lib/metadata";
import "./globals.css";

export const metadata = baseMetadata;

const jetBrainsMonoTitle = JetBrains_Mono({
    weight: "500",
    subsets: ["latin"],
    variable: "--jbmono-title",
});

const links: HeaderLink[] = [
    { label: "About Me", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-gray-900 text-gray-100">
            <head>
                {/* Additional SEO tags */}
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
                <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
                    }}
                />
            </head>
            <body className={`${jetBrainsMonoTitle.variable} flex items-start md:items-center justify-center min-h-screen`}>
                <Container>
                    <Header />
                    <Navigation links={links} />
                    <ContentContainer>{children}</ContentContainer>
                    <Footer />
                </Container>
            </body>
        </html>
    );
}
