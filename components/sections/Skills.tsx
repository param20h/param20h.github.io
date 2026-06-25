"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import * as SimpleIcons from "simple-icons";
import { Terminal, Code2, Brain, Database } from "lucide-react";

import { skills } from "@/data/portfolio";

type SimpleIconData = {
  hex: string;
  title: string;
  path: string;
};

const simpleIconsMap = SimpleIcons as unknown as Record<string, SimpleIconData>;

export default function Skills() {
  // Group skills by category
  const categories = [
    {
      id: "languages",
      title: "Core Languages",
      icon: Terminal,
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "group-hover:border-cyan-500/30",
      glowColor: "rgba(0, 212, 255, 0.15)",
      skills: skills.filter((s) => s.category === "language"),
    },
    {
      id: "frameworks",
      title: "Frameworks & Web",
      icon: Code2,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-500/30",
      glowColor: "rgba(168, 85, 247, 0.15)",
      skills: skills.filter((s) => s.category === "framework"),
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/30",
      glowColor: "rgba(245, 158, 11, 0.15)",
      skills: skills.filter((s) => s.category === "ai"),
    },
    {
      id: "tools",
      title: "Tools & Infrastructure",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.15)",
      skills: skills.filter((s) => s.category === "tool"),
    },
  ];

  return (
    <Section id="skills" title="Skills & Technologies">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {categories.map((cat, idx) => {
          const IconComponent = cat.icon;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-3xl bg-white/[0.01] border border-white/5 p-6 backdrop-blur-md transition-all duration-300 group ${cat.borderColor}`}
            >
              {/* Background gradient card glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />
              <div
                className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-3xl rounded-full"
                style={{
                  background: `radial-gradient(circle, ${cat.glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/90 group-hover:text-white group-hover:border-white/20 transition-colors">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-lg font-bold text-white/95 group-hover:text-white transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags Flow */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const iconData = simpleIconsMap[skill.icon];

                  return (
                    <motion.div
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200 cursor-pointer"
                    >
                      {iconData ? (
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 transition-transform duration-300"
                          fill={`#${iconData.hex}`}
                        >
                          <title>{iconData.title}</title>
                          <path d={iconData.path} />
                        </svg>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      )}
                      <span className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors select-none">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
