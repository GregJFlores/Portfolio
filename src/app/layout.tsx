import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Greg Flores",
    description: "Greg's Portfolio",
};

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
            {/* Center middle of page */}
            <body className={`${jetBrainsMonoTitle.variable} flex items-center justify-center min-h-screen`}>{children}</body>
        </html>
    );
}
