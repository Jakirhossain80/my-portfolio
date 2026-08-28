import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { SkipToContent } from "@/components/common/skip-to-content";
import { StructuredData } from "@/components/common/structured-data";
import { themeInitializer } from "@/components/common/theme-initializer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { getAbsoluteUrl, SITE_URL } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: SITE_URL } : {}),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.professionalTitle,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  sameAs: siteConfig.socialLinks.map(({ href }) => href),
  ...(getAbsoluteUrl("/") ? { url: getAbsoluteUrl("/") } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StructuredData data={personStructuredData} />
        <Script
          dangerouslySetInnerHTML={{ __html: themeInitializer }}
          id="theme-initializer"
          strategy="beforeInteractive"
        />
        <ThemeProvider>
          <SkipToContent />
          <div className="theme-transition flex min-h-svh flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="w-full flex-1" id="main-content" tabIndex={-1}>
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
