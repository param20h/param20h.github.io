"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Coffee } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/param20h", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/param20h", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/param.060/", label: "Instagram" },
  { icon: Coffee, href: "https://www.buymeacoffee.com/param20h", label: "Buy me a coffee" },
];

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/60 text-center md:text-left"
          >
            © 2026 Param20h. All rights reserved.
          </motion.p>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
