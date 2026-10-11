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
      borderColor: "group-hover/card:border-cyan-500/30",
      glowColor: "rgba(0, 212, 255, 0.15)",
      skills: skills.filter((s) => s.category === "language"),
    },
    {
      id: "frameworks",
      title: "Frameworks & Web",
      icon: Code2,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover/card:border-purple-500/30",
      glowColor: "rgba(168, 85, 247, 0.15)",
      skills: skills.filter((s) => s.category === "framework"),
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover/card:border-amber-500/30",
      glowColor: "rgba(245, 158, 11, 0.15)",
      skills: skills.filter((s) => s.category === "ai"),
    },
    {
      id: "tools",
      title: "Tools & Infrastructure",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover/card:border-emerald-500/30",
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
              className="relative overflow-hidden rounded-3xl bg-[#e2e8f0] p-7 transition-all duration-300 shadow-[12px_12px_24px_rgba(163,177,198,0.55),-12px_-12px_24px_rgba(255,255,255,0.95)] hover:shadow-[16px_16px_32px_rgba(163,177,198,0.65),-16px_-16px_32px_rgba(255,255,255,1)] border border-white/50"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] flex items-center justify-center text-slate-800 border border-white/40">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-800">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Icons Flow */}
              <div className="flex flex-wrap gap-3.5">
                {cat.skills.map((skill) => {
                  const iconData = simpleIconsMap[skill.icon];

                  return (
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      key={skill.name}
                      style={{
                        "--brand-color": iconData ? `#${iconData.hex}` : "#1e293b",
                      } as React.CSSProperties}
                      className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#e2e8f0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] transition-all duration-200 cursor-pointer relative group border border-white/40"
                    >
                      {iconData ? (
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 fill-[var(--brand-color)] transition-all duration-300"
                        >
                          <title>{iconData.title}</title>
                          <path d={iconData.path} />
                        </svg>
                      ) : (
                        <span className="text-[10px] text-slate-700 uppercase font-bold">
                          {skill.name.substring(0, 2)}
                        </span>
                      )}

                      {/* Smooth Tooltip */}
                      <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-mono tracking-wide rounded-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-top-11 transition-all duration-200 shadow-[4px_4px_10px_rgba(0,0,0,0.3)] whitespace-nowrap z-50">
                        {skill.name}
                      </div>
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
