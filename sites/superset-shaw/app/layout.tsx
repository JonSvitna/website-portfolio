import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Superset Shaw | Discipline Builds Legacy",
  description:
    "Former college athlete turned transformational fitness coach. Faith. Family. Fitness. Start your transformation today.",
  openGraph: {
    title: "Superset Shaw | Discipline Builds Legacy",
    description:
      "Faith-driven coaching that transforms your body, mindset, and life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
