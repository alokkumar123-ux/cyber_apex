import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blaze — Dominate the Battleground | Free Fire Panel",
  description:
    "Premium undetected Free Fire panel with advanced aimbot, ESP, and anti-ban shield. Engineered for apex players.",
  authors: [{ name: "Blaze" }],
  openGraph: {
    title: "Blaze — Dominate the Battleground",
    description: "Premium undetected Free Fire panel. Aimbot, ESP, anti-ban shield.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600;700;800;900&family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
