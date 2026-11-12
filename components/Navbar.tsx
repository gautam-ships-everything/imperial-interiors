"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : hasDarkHero
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <span
                className={`text-xl font-serif font-bold tracking-[0.15em] uppercase transition-colors duration-500 ${
                  !scrolled && hasDarkHero ? "text-white" : "text-text"
                }`}
              >
                Imperial{" "}
                <span className="text-accent font-normal italic tracking-normal normal-case">
                  Interiors
                </span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    !scrolled && hasDarkHero
                      ? "text-white/80 hover:text-white"
                      : "text-text-muted hover:text-text"
                  } ${pathname === link.href ? "!text-accent" : ""}`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-2 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] bg-accent text-white hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                Get a Quote
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-text" />
              ) : (
                <Menu
                  className={`w-6 h-6 transition-colors ${
                    !scrolled && hasDarkHero ? "text-white" : "text-text"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-serif transition-colors ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-text hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="mt-4 px-10 py-4 bg-accent text-white font-bold uppercase tracking-[0.15em] text-sm hover:bg-accent-dark transition"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
