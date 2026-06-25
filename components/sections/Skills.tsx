"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import Section from "@/components/ui/Section";
import * as SimpleIcons from "simple-icons";

import { skills } from "@/data/portfolio";

const categories = ["All", "Language", "Framework", "AI", "Tool"];
type SimpleIconData = {
  hex: string;
  title: string;
  path: string;
};

const simpleIconsMap = SimpleIcons as unknown as Record<string, SimpleIconData>;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "All" ? true : skill.category.toLowerCase() === activeCategory.toLowerCase()
  );

  // Mouse X position for the dock's magnification effect
  const mouseX = useMotionValue(Infinity);

  return (
    <Section id="skills" title="Skills & Technologies">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dock Area Container */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
        {/* Glow behind the dock */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-[36px] blur-2xl -z-10 opacity-70 pointer-events-none" />

        {/* macOS Style Dock */}
        <motion.div
          onMouseMove={(e) => {
            if (!isMobile) {
              mouseX.set(e.clientX);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              mouseX.set(Infinity);
            }
          }}
          className="relative flex items-end h-20 md:h-24 gap-3 px-6 pb-3 mx-auto rounded-[28px] md:rounded-[32px] bg-white/[0.01] border border-white/5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-x-auto md:overflow-visible max-w-full md:w-max no-scrollbar"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const iconData = simpleIconsMap[skill.icon];
              return (
                <DockIcon
                  key={skill.name}
                  mouseX={mouseX}
                  isMobile={isMobile}
                  skillName={skill.name}
                >
                  {iconData ? (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[50%] h-[50%] transition-colors duration-300"
                      fill={`#${iconData.hex}`}
                    >
                      <title>{iconData.title}</title>
                      <path d={iconData.path} />
                    </svg>
                  ) : (
                    <span className="text-[10px] md:text-xs text-white/95 font-bold uppercase tracking-wider">
                      {skill.name.substring(0, 2)}
                    </span>
                  )}
                </DockIcon>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Instruction footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/40 font-mono tracking-wider">
            {isMobile
              ? "← Swipe horizontally to view all tools →"
              : "Hover to magnify • Click to bounce"}
          </p>
        </div>
      </div>
    </Section>
  );
}

interface DockIconProps {
  mouseX: MotionValue<number>;
  isMobile: boolean;
  skillName: string;
  children: React.ReactNode;
}

function DockIcon({ mouseX, isMobile, skillName, children }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  // We only run client-side calculations for scale on desktop
  const distance = useTransform(mouseX, (val: number) => {
    if (isMobile || !ref.current) return 0;
    const bounds = ref.current.getBoundingClientRect();
    // Distance from the center of the icon
    return val - bounds.x - bounds.width / 2;
  });

  // Scale calculations using Framer Motion
  // Maps viewport distance to sizes
  const widthTransform = useTransform(distance, [-120, 0, 120], [44, 76, 44], {
    clamp: true,
  });

  const widthSpring = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // Bouncing animation state on click
  const [isBouncing, setIsBouncing] = useState(false);

  const handleIconClick = () => {
    if (isBouncing) return;
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 800);
  };

  if (isMobile) {
    return (
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/5 cursor-pointer relative group">
        {children}
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900/90 text-white text-[10px] font-semibold rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md border border-white/10 whitespace-nowrap z-50">
          {skillName}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ width: widthSpring, height: widthSpring }}
      whileTap={{ scale: 0.9 }}
      onClick={handleIconClick}
      animate={isBouncing ? { y: [0, -20, 0, -10, 0, -5, 0] } : { y: 0 }}
      transition={isBouncing ? { duration: 0.8, ease: "easeInOut" } : undefined}
      className="flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 cursor-pointer relative group transition-colors duration-200"
    >
      {children}
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900/95 text-white text-xs font-semibold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-top-14 transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-white/15 whitespace-nowrap z-50">
        {skillName}
      </div>
    </motion.div>
  );
}
