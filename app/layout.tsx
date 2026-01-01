import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "./metadata";
import { SiteNav } from "@/components/site-nav";
import Footer from "@/components/footer";
import "@/app/globals.css";

const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/200-YekanBakh-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/300-YekanBakh-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/400-YekanBakh-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/500-YekanBakh-SemiBold.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/600-YekanBakh-Bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/700-YekanBakh-ExtraBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/800-YekanBakh-Black.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/900-YekanBakh-ExtraBlack.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekanbakh",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,  
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${yekanBakh.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
