import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "./LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakarta Barat - Pusat Chinatown & Kuliner Legendaris",
  description: "Jelajahi keindahan Jakarta Barat sebagai pusat Chinatown Indonesia dan surga kuliner legendaris. Temukan warisan budaya, wisata kuliner, dan destinasi wisata menarik di Glodok dan sekitarnya.",
  keywords: ["Jakarta Barat", "Chinatown", "Glodok", "Kuliner Legendaris", "Wisata Jakarta", "Pecinan", "Kuliner Indonesia"],
  authors: [{ name: "Jakarta Tourism Board" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Jakarta Barat - Pusat Chinatown & Kuliner Legendaris",
    description: "Jelajahi keindahan Jakarta Barat sebagai pusat Chinatown Indonesia dan surga kuliner legendaris.",
    url: "https://jakartabarat.com",
    siteName: "Jakarta Barat Tourism",
    type: "website",
    images: [{
      url: "/images/hero-banner.jpg",
      width: 1440,
      height: 720,
      alt: "Jakarta Barat Chinatown"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakarta Barat - Pusat Chinatown & Kuliner Legendaris",
    description: "Jelajahi keindahan Jakarta Barat sebagai pusat Chinatown Indonesia dan surga kuliner legendaris.",
    images: ["/images/hero-banner.jpg"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
