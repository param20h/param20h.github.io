"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Code2,
  Folder,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const mobileNavItems = [
  { name: "Home", href: "/#home", id: "home", icon: Home },
  { name: "Experience", href: "/experience", id: "experience", icon: Briefcase },
  { name: "Skills", href: "/#skills", id: "skills", icon: Code2 },
  { name: "Projects", href: "/#projects", id: "projects", icon: Folder },
  { name: "Contact", href: "/#contact", id: "contact", icon: MessageSquare },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy logic for active tab highlight
      const scrollPosition = window.scrollY + 300; // Offset for screen viewport

      // Force "experience" active if on the subpage
      if (window.location.pathname === "/experience") {
        setActiveSection("experience");
        return;
      }

      const sections = ["home", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP TOP NAVIGATION BAR (hidden on mobile) */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`pointer-events-auto transition-all duration-500 rounded-full border border-white/5 backdrop-blur-sm bg-white/[0.01] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]
            ${isScrolled ? "w-[95%] max-w-5xl" : "w-full max-w-7xl md:w-[95%] md:max-w-5xl"}`}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            <motion.a
              href="/#home"
              className="text-2xl md:text-3xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Param20h
            </motion.a>

            <div className="flex items-center gap-8">
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
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white"
              >
                Resume
              </a>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE TOP TAB BAR (iOS style - hidden on desktop) */}
      <div className="md:hidden fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-full max-w-[300px] pointer-events-auto"
        >
          <div className="flex items-center justify-around rounded-full border border-white/5 backdrop-blur-sm bg-white/[0.01] py-1 px-2 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]">
            {mobileNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className="flex-1 flex flex-col items-center justify-center py-0.5 select-none relative group cursor-pointer"
                >
                  {/* Active capsule outline behind icon (iOS style) */}
                  <motion.div 
                    whileTap={{ scale: 0.85 }}
                    className="relative mb-0.5 flex items-center justify-center"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 bg-primary-500/20 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 22 }}
                      />
                    )}
                    <div className={`p-1.5 rounded-full transition-colors duration-300 flex items-center justify-center ${
                      isActive ? "text-primary-400" : "text-white/40 group-hover:text-white/60"
                    }`}>
                      <item.icon size={14} />
                    </div>
                  </motion.div>
                  
                  <span className={`
                    text-[8px] font-sans font-medium tracking-wide transition-colors duration-300
                    ${isActive ? "text-primary-400 font-bold" : "text-white/40"}
                  `}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
}
