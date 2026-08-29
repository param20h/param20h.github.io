"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="w-full relative py-12 pb-32">
            {/* Background glow effects */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Hero Header */}
            <div className="text-center mb-24 relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white mb-6"
                >
                    Professional Journey
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    A timeline of my professional experience, showcasing roles where I&apos;ve built scalable systems and delivered impactful digital solutions.
                </motion.p>
            </div>

            <div ref={containerRef} className="max-w-5xl mx-auto relative z-10 px-4">
                {/* Central Timeline Background Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />
                
                {/* Animated Scroll Progress Line */}
                <motion.div 
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,212,255,0.5)] z-0" 
                />

                <div className="space-y-12 md:space-y-24">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className="relative flex flex-col md:flex-row items-start md:justify-center">
                                
                                {/* Timeline Node */}
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute left-4 md:left-1/2 top-6 md:top-12 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border-[3px] border-primary-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
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
                                                <stop offset="0%" stopColor="rgba(0,212,255,0.5)" />
                                                <stop offset="100%" stopColor="rgba(255,107,107,0.1)" />
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
                                    <div className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
                                        
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Background Watermark */}
                                        <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-white/10 transition-colors duration-500 transform -rotate-12">
                                            <Briefcase size={120} strokeWidth={1} />
                                        </div>

                                        <div className="relative z-10">
                                            <div className="flex flex-col gap-2 mb-6">
                                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                                                    <div className="flex items-center gap-1.5 text-primary-400 font-semibold">
                                                        <Briefcase size={14} />
                                                        <span>{exp.company}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-white/50">
                                                        <Calendar size={14} />
                                                        <span className="font-mono">{exp.date}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-white/60 leading-relaxed mb-8">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((t, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/5 border border-white/10 text-white/80 group-hover:border-white/20 transition-colors"
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
