import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Blog",
    "React",
    "MiPiBoy Blog",
    "MiPiBoy Modern Blog",
    "وبلاگ MiPiBoy",
    "وبلاگ MiPiBoy با Next.js",
    "وبلاگ MiPiBoy با Tailwind",
    "وبلاگ MiPiBoy با Shadcn",
    "وبلاگ MiPiBoy با React",
    "وبلاگ MiPiBoy با MDX",
    "وبلاگ مدرن MiPiBoy",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "MiPiBoy Team",
            url: "https://mipiboy.github.io/",
        },
    ],
    creator: "MiPiBoy",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@mipiboy",
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