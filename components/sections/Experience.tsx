"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <div className="py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
                Professional Experience
            </h1>
            <div className="max-w-4xl mx-auto">
                <div className="relative border-l-2 border-primary-500/30 ml-3 md:ml-0 md:pl-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="mb-12 relative pl-8 md:pl-12"
                        >
                            {/* Timeline marker */}
                            <div className="absolute left-[-11px] top-6 bg-gradient-dark border-2 border-primary-500 rounded-full h-5 w-5 flex items-center justify-center glow-primary">
                                <div className="h-2 w-2 bg-primary-400 rounded-full" />
                            </div>

                            <Card className="glassmorphism !bg-white/5 border-white/10 hover:border-primary-500/30 transition-colors p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold gradient-text">{exp.role}</h3>
                                    <span className="text-primary-400 font-mono text-sm bg-primary-500/10 px-3 py-1 rounded-full w-fit">
                                        {exp.date}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-white/80">
                                    <Briefcase size={18} className="text-accent-400" />
                                    <span className="text-lg font-semibold">{exp.company}</span>
                                </div>

                                <p className="text-white/70 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
