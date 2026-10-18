import type { Metadata } from "next";
import { Archivo, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bodyFont = Archivo({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const displayFont = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Aditya — Developer & Curious Human",
  description: "Blockchain developer, software engineer, and aspiring polymath. A collection of work, experiments, writing, and the interests in between.",
  authors: [{ name: "Aditya", url: "https://github.com/aditya-17-eth/" }],
  openGraph: {
    title: "Aditya — Developer & Curious Human",
    description: "Blockchain systems, AI experiments, and a polymath's curiosity. Explore Orakel, FlashPay, Wyrd, and Guardian.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    creator: "@Adity0ux",
    title: "Aditya — Developer & Curious Human",
    description: "Blockchain systems, AI experiments, and a polymath's curiosity.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}><body>{children}</body></html>;
}
