"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import * as SimpleIcons from "simple-icons";

import { skills } from "@/data/portfolio";

const categories = ["All", "Language", "Framework", "AI", "Tool"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "All" ? true : skill.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <Section id="skills" title="Skills & Technologies">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid with AnimatePresence */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => {
            const iconData = (SimpleIcons as any)[skill.icon];

            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all group cursor-pointer flex flex-col items-center justify-center text-center"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform flex items-center justify-center">
                  {iconData && (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.6)] transition-all duration-300"
                      fill={`#${iconData.hex}`}
                    >
                      <title>{iconData.title}</title>
                      <path d={iconData.path} />
                    </svg>
                  )}
                </div>
                <div className="font-semibold text-sm md:text-base text-white/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 transition-all duration-300">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
