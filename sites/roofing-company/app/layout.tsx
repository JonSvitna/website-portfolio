import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Source_Sans_3 } from "next/font/google";
import { images, site } from "@/lib/site-content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} | Maryland Paving & Construction`,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: images.heroPoster, width: 1920, height: 1080, alt: site.name }],
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${sourceSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-stone font-body text-ink">{children}</body>
    </html>
  );
}
