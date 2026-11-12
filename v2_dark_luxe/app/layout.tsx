import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import FloatingContactBtn from "@/components/FloatingContactBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J Interiors | Luxury Interior Design",
  description: "Curated luxury interior design, tailored for modern living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mesh text-gray-100">
        <SplashScreen />
        <Navbar />
        <main className="flex-grow pt-20">{/* pt-20 to account for fixed navbar */}
          {children}
        </main>
        <Footer />
        <FloatingContactBtn />
      </body>
    </html>
  );
}
