import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan J. — Executive Chauffeur",
  description:
    "Executive chauffeur service in Baltimore by Ryan J. Day and night experiences, curated fleet, white-glove arrivals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&family=DM+Mono:wght@300;400;500&family=Geist:wght@200;300;400;500;600&family=Manrope:wght@200;300;400;500;600;700&family=Marcellus&family=Italiana&family=Inter:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
