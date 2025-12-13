"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faUnity } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faCode, faGamepad, faRobot } from "@fortawesome/free-solid-svg-icons";

const roles = [
  "Python Developer",
  "AI/ML Engineer",
  "Web3 Developer",
  "Full Stack Developer",
  "Blockchain Developer",
];

const floatingIcons = [
  { icon: faPython, color: "#3776AB" },
  { icon: faGamepad, color: "#00D4FF" },
  { icon: faBrain, color: "#FF6B6B" },
  { icon: faCode, color: "#4ECDC4" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-12 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl">
              <img
                src="/media/circle-photo.png"
                alt="Paramjit Singh - Python Developer & AI/ML Expert"
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                loading="eager"
                fetchPriority="high"
                width="256"
                height="256"
              />
              <img
                src="/media/circle-hoverphoto.JPG"
                alt="Paramjit Singh Profile"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                loading="lazy"
                width="256"
                height="256"
              />
            </div>
            {/* Floating Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10"
            >
              {floatingIcons.map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                    left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                    color: item.color,
                    willChange: 'transform',
                  }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Paramjit Singh</span>
            </h1>

            <div className="h-20 md:h-24 mb-8">
              <motion.h2
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-3xl md:text-5xl font-semibold text-primary-500"
              >
                {roles[currentRole]}
              </motion.h2>
            </div>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              <strong>Expert Python Developer </strong> passionate about{" "}
              <span className="text-primary-400">Artificial Intelligence</span>,{" "}
              <span className="text-primary-400">Machine Learning</span>,{" "}
              <span className="text-primary-400">Web3 Blockchain</span>, and creating{" "}
              <span className="text-primary-400">innovative solutions</span>
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Quote & Coffee Button */}
      <motion.a
        href="https://www.buymeacoffee.com/param20h"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-gradient-to-r from-red-700 to-blue-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all z-40 hidden md:flex items-center gap-2"
        whileHover={{ scale: 1.05, y: -2 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ☕ Buy me a coffee
      </motion.a>
    </section>
  );
}
