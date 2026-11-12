import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import FloatingContactBtn from "@/components/FloatingContactBtn";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imperial Housing | Luxury Interior Design",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-marble-bg text-ink font-sans">
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
