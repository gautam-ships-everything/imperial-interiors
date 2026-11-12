import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imperial Interiors | Architecture & Interior Design — Indore",
  description:
    "Premium architectural planning and luxury interior design in Indore, MP. Led by Jayesh. Residential, commercial, and turnkey projects crafted with precision.",
  keywords: [
    "interior design indore",
    "architect indore",
    "luxury interiors",
    "imperial interiors",
    "home design indore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
