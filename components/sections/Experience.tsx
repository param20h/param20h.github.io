"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar, Code, Users } from "lucide-react";

export default function Experience() {
    const [selectedTab, setSelectedTab] = useState<"all" | "engineering" | "community">("all");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const filteredExperiences = experiences.filter((exp) => {
        if (selectedTab === "all") return true;
        return exp.category === selectedTab;
    });

    return (
        <div className="w-full relative py-12 pb-32">
            {/* Hero Header */}
            <div className="text-center mb-16 relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6"
                >
                    Professional Journey
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Track record of software engineering internships, AI model evaluation, and technical leadership across campus initiatives.
                </motion.p>

                {/* Filter Pills */}
                <div className="flex justify-center gap-3 mt-8">
                    <button
                        onClick={() => setSelectedTab("all")}
                        className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                            selectedTab === "all"
                                ? "bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-900 border border-white/40"
                                : "bg-[#e2e8f0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] text-slate-600 hover:text-slate-900 border border-white/60"
                        }`}
                    >
                        All Experience
                    </button>
                    <button
                        onClick={() => setSelectedTab("engineering")}
                        className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                            selectedTab === "engineering"
                                ? "bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-900 border border-white/40"
                                : "bg-[#e2e8f0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] text-slate-600 hover:text-slate-900 border border-white/60"
                        }`}
                    >
                        <Code size={13} />
                        Engineering Only
                    </button>
                    <button
                        onClick={() => setSelectedTab("community")}
                        className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                            selectedTab === "community"
                                ? "bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-900 border border-white/40"
                                : "bg-[#e2e8f0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] text-slate-600 hover:text-slate-900 border border-white/60"
                        }`}
                    >
                        <Users size={13} />
                        Leadership & Community
                    </button>
                </div>
            </div>

            <div ref={containerRef} className="max-w-5xl mx-auto relative z-10 px-4">
                {/* Central Timeline Background Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 transform md:-translate-x-1/2" />
                
                {/* Animated Scroll Progress Line */}
                <motion.div 
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform md:-translate-x-1/2 z-0" 
                />

                <div className="space-y-12 md:space-y-24">
                    {filteredExperiences.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={exp.company + exp.role} className="relative flex flex-col md:flex-row items-start md:justify-center">
                                
                                {/* Timeline Node */}
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute left-4 md:left-1/2 top-6 md:top-12 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#e2e8f0] border border-white/60 flex items-center justify-center z-20 shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.95)]"
                                >
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)]" />
                                </motion.div>

                                {/* Curved Connector (Desktop Only) */}
                                <div className="hidden md:block absolute left-1/2 top-12 w-1/2 h-20 -translate-y-1/2 z-0 pointer-events-none">
                                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className={`absolute top-0 ${isEven ? 'right-1/2 translate-x-[2px]' : 'left-0'}`}>
                                        <motion.path 
                                            d={isEven ? "M 100 0 C 50 0 50 100 0 100" : "M 0 0 C 50 0 50 100 100 100"}
                                            fill="none" 
                                            stroke="url(#gradient-line)" 
                                            strokeWidth="2"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                                        />
                                        <defs>
                                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="rgba(148, 163, 184, 0.6)" />
                                                <stop offset="100%" stopColor="rgba(203, 213, 225, 0.2)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                    className={`w-full md:w-5/12 pl-12 md:pl-0 mt-8 md:mt-0 ${isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                                >
                                    <div className="group relative bg-[#e2e8f0] border border-white/60 rounded-[2.5rem] p-8 shadow-[12px_12px_24px_rgba(163,177,198,0.55),-12px_-12px_24px_rgba(255,255,255,0.95)] hover:shadow-[16px_16px_32px_rgba(163,177,198,0.65),-16px_-16px_32px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                                        
                                        <div className="relative z-10">
                                            <div className="flex flex-col gap-2 mb-4">
                                                <span className="text-[10px] uppercase font-bold tracking-wider font-mono text-slate-500">
                                                    {exp.category === "engineering" ? "Engineering Role" : "Community & Leadership"}
                                                </span>
                                                <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                                                    <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                                                        <Briefcase size={14} />
                                                        <span>{exp.company}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-slate-500">
                                                        <Calendar size={14} />
                                                        <span className="font-mono">{exp.date}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((t, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#e2e8f0] text-slate-700 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.95)] border border-white/50"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
