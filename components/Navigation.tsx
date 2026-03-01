"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto transition-all duration-300 rounded-full border border-white/10 ${isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-[95%] max-w-5xl"
          : "bg-white/5 backdrop-blur-md w-[100%] max-w-7xl md:w-[95%] md:max-w-5xl"
          }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              className="text-2xl md:text-3xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Param20h
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-primary-500 transition-colors font-medium relative group"
                >
                  <motion.span whileHover={{ y: -2 }} className="inline-block">
                    {item.name}
                  </motion.span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <a
                href="/media/Paramjit SIngh resume.pdf"
                download
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-primary-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/media/Paramjit SIngh resume.pdf"
                download
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-center"
              >
                Resume
              </a>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
