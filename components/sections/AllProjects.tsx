"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Search,
  X,
  Terminal,
  Monitor,
  Code2,
  Sparkles,
  Layers,
  SlidersHorizontal,
} from "lucide-react";
import { allProjects, DetailedProject } from "@/data/allProjects";

// Helper component for shuffling images
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#080811]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
      </AnimatePresence>
    </div>
  );
}

// Simulated Architecture Terminal View for projects without static screenshots
function ArchitectureTerminal({ project }: { project: DetailedProject }) {
  const telemetry = project.telemetry;

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[360px] bg-[#090d16] p-5 sm:p-7 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
      {/* Background Matrix/Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-wider">
              {telemetry?.badge || "SYSTEM TELEMETRY"}
            </span>
          </div>
          <span className="text-slate-500 text-[10px] tracking-wider font-mono">
            ID: {project.id.toUpperCase()}
          </span>
        </div>

        {/* Live Metrics Row */}
        {telemetry?.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
            {telemetry.stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2.5"
              >
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block mb-0.5">
                  {s.label}
                </span>
                <span className="text-cyan-300 font-bold text-xs truncate block">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Terminal Log Console */}
      <div className="relative z-10 bg-black/60 border border-slate-800/70 rounded-xl p-3.5 space-y-1.5 overflow-hidden">
        <div className="flex items-center gap-1.5 text-slate-500 text-[9px] uppercase tracking-wider mb-2">
          <Terminal size={11} className="text-amber-400" />
          <span>Execution Output Log</span>
        </div>
        {telemetry?.terminalOutput ? (
          telemetry.terminalOutput.map((line, lIdx) => (
            <div
              key={lIdx}
              className={`leading-relaxed text-[11px] truncate ${
                line.includes("PASSED") || line.includes("0 Overbooking")
                  ? "text-emerald-400"
                  : line.includes("Verdict") || line.includes("DBSCAN")
                  ? "text-cyan-300"
                  : line.includes("Warning") || line.includes("Synthetic")
                  ? "text-amber-300"
                  : "text-slate-300"
              }`}
            >
              <span className="text-slate-600 mr-2">$</span>
              {line}
            </div>
          ))
        ) : (
          <div className="text-slate-400 text-[11px]">
            <span className="text-slate-600 mr-2">$</span>
            Compiled with {project.tech.slice(0, 3).join(", ")} | Status: {project.status.toUpperCase()}
          </div>
        )}
      </div>

      {/* Bottom Status Line */}
      <div className="relative z-10 mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <Sparkles size={11} className="text-amber-400" />
          Production Engineering Architecture
        </span>
        <span className="text-slate-500 font-mono">STABLE // VERIFIED</span>
      </div>
    </div>
  );
}

// Available filter categories
const CATEGORIES = [
  { id: "all", label: "All Projects", count: 17 },
  { id: "ai-ml", label: "AI & LLM Agents", count: 5 },
  { id: "research", label: "Machine Learning & Research", count: 4 },
  { id: "fullstack", label: "Full-Stack Applications", count: 6 },
  { id: "backend", label: "Backend & Systems", count: 4 },
];

// Popular tech stack quick filters
const TECH_FILTER_PILLS = [
  "All",
  "Python",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "React",
  "Node.js",
  "PyTorch",
  "MongoDB",
  "PostgreSQL",
  "LangGraph.js",
  "Scikit-Learn",
];

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter projects by category, tech stack, and search query
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      // 1. Category Filter
      const matchesCategory =
        selectedCategory === "all" ||
        p.category === selectedCategory ||
        (selectedCategory === "backend" && (p.category === "backend" || p.tech.includes("FastAPI") || p.tech.includes("Express.js") || p.tech.includes("MongoDB Atlas")));

      // 2. Tech Stack Filter
      const matchesTech =
        selectedTech === "All" ||
        p.tech.some(
          (t) => t.toLowerCase() === selectedTech.toLowerCase() || t.toLowerCase().includes(selectedTech.toLowerCase())
        );

      // 3. Search Query
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  return (
    <div className="w-full relative">
      {/* Hero Header */}
      <div className="pt-12 pb-12 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e2e8f0] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] border border-white/50 text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold mb-6"
        >
          <Layers size={13} className="text-cyan-600" />
          Complete Engineering Catalog
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6"
        >
          All Projects & Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Explore all 17+ production applications, autonomous AI agents, machine learning research systems, and backend platforms built with verifiable outcomes.
        </motion.p>
      </div>

      {/* Filter & Search Bar Section */}
      <div className="mb-20 max-w-5xl mx-auto">
        <div className="p-6 md:p-8 rounded-[2.5rem] bg-[#e2e8f0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),-12px_-12px_24px_rgba(255,255,255,0.95)] border border-white/60 space-y-6">
          
          {/* Search Box */}
          <div className="relative">
            <div className="flex items-center w-full px-5 py-3.5 rounded-full bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40">
              <Search size={18} className="text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, technology, or keywords (e.g. MongoDB, PyTorch, LangGraph, Concurrency)..."
                className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 transition"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Primary Domain Category Pills */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
              <SlidersHorizontal size={13} />
              Filter by Engineering Domain
            </div>
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                      isSelected
                        ? "bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.65),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-900 border-white/40"
                        : "bg-[#e2e8f0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] text-slate-600 hover:text-slate-900 border-white/60 hover:-translate-y-0.5"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Tech Stack Pills */}
          <div className="pt-2 border-t border-white/50">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
              <Code2 size={13} />
              Filter by Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_FILTER_PILLS.map((tech) => {
                const isSelected = selectedTech === tech;
                return (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 border ${
                      isSelected
                        ? "bg-[#e2e8f0] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] text-cyan-700 font-bold border-white/40"
                        : "bg-[#e2e8f0] shadow-[2px_2px_5px_rgba(163,177,198,0.45),-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-600 hover:text-slate-900 border-white/50 hover:-translate-y-0.5"
                    }`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Results Counter */}
          <div className="flex items-center justify-between pt-2 text-xs text-slate-500 font-mono">
            <span>
              Showing <strong className="text-slate-800">{filteredProjects.length}</strong> of{" "}
              {allProjects.length} projects
            </span>
            {(selectedCategory !== "all" || selectedTech !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedTech("All");
                  setSearchQuery("");
                }}
                className="text-accent-500 hover:underline font-bold"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects List (Rendered in the exact rich /services Case Study Format) */}
      <div className="space-y-28 pb-24">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-3xl bg-[#e2e8f0] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] border border-white/40 max-w-lg mx-auto">
            <p className="text-slate-700 font-bold mb-2">No projects matched your criteria.</p>
            <p className="text-slate-500 text-xs mb-5">Try resetting search keywords or switching filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedTech("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-[#e2e8f0] text-slate-800 font-bold text-xs rounded-full shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] border border-white/60"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project, idx) => {
            const hasImages = project.images && project.images.length > 0;
            const primaryUrl = project.liveUrl || project.githubUrl || "https://param20h.me";

            return (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
              >
                {/* Context & Pitch Side (Matching /services) */}
                <div
                  className={`lg:w-1/2 flex flex-col gap-6 ${
                    idx % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <div>
                    {/* Category Label + Subtitle */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#e2e8f0] shadow-[inset_1px_1px_3px_rgba(163,177,198,0.5),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-700 border border-white/40">
                        {project.categoryLabel}
                      </span>
                      <span className="text-slate-500 text-xs font-semibold">
                        • {project.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
                      {project.title}
                    </h3>

                    <p className="text-black/70 leading-relaxed text-sm mb-5">
                      {project.description}
                    </p>

                    {/* Sunken Neumorphic Outcome Box */}
                    <div className="p-4 rounded-2xl bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Key Architectural Highlights & Outcomes
                      </span>
                      <p className="text-xs font-medium text-slate-800 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Highlights List with Checkmarks */}
                  <div>
                    <h5 className="text-xs font-bold text-black/50 uppercase tracking-wider mb-3">
                      Key Capabilities
                    </h5>
                    <ul className="space-y-2">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-black/80"
                        >
                          <CheckCircle
                            size={16}
                            className="text-primary-500 mt-0.5 shrink-0"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 bg-[#e2e8f0] border border-white/50 rounded-full text-xs font-semibold text-slate-700 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.95)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3.5 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#e2e8f0] text-slate-800 font-bold text-sm rounded-full shadow-[6px_6px_14px_rgba(163,177,198,0.55),-6px_-6px_14px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] active:scale-95 transition-all border border-white/60 w-fit"
                      >
                        Visit Live Demo
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e2e8f0] text-slate-700 font-bold text-sm rounded-full shadow-[4px_4px_10px_rgba(163,177,198,0.5),-4px_-4px_10px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] active:scale-95 transition-all border border-white/60 w-fit"
                      >
                        Source Code
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Simulated Browser / Architecture Console Side (Matching /services) */}
                <div
                  className={`lg:w-1/2 w-full ${
                    idx % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="w-full rounded-3xl border border-white/60 bg-[#e2e8f0] shadow-[14px_14px_28px_rgba(163,177,198,0.55),-14px_-14px_28px_rgba(255,255,255,0.95)] overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                    {/* Mock Browser Header with Traffic Lights */}
                    <div className="bg-[#e2e8f0] border-b border-white/40 px-5 py-3.5 flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="flex-1 flex justify-center px-4">
                        <div className="bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 rounded-full px-5 py-1 text-xs text-slate-600 font-mono w-full max-w-sm flex items-center justify-center truncate">
                          {primaryUrl}
                        </div>
                      </div>
                      <div className="flex gap-2 text-slate-500">
                        {hasImages ? (
                          <>
                            <Monitor size={14} />
                            <Layers size={14} className="hidden sm:block" />
                          </>
                        ) : (
                          <>
                            <Terminal size={14} />
                            <Code2 size={14} className="hidden sm:block" />
                          </>
                        )}
                      </div>
                    </div>

                    {/* Window Content: Image Carousel or Live Architecture Terminal */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#080811] flex items-center justify-center overflow-hidden group">
                      {hasImages ? (
                        <div
                          className="w-full h-full cursor-pointer relative"
                          onClick={() => {
                            if (project.liveUrl) window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <ImageCarousel
                            images={project.images || []}
                            title={project.title}
                          />
                          {project.liveUrl && (
                            <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm z-20">
                              <div className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                Launch Site <ExternalLink size={16} />
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <ArchitectureTerminal project={project} />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Direct Contact & Collaboration CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-8 md:p-12 bg-[#e2e8f0] border border-white/60 rounded-[2.5rem] shadow-[12px_12px_24px_rgba(163,177,198,0.55),-12px_-12px_24px_rgba(255,255,255,0.95)] max-w-3xl mx-auto mb-20"
      >
        <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">
          Need an AI agent, backend system, or web platform?
        </h3>
        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          From high-concurrency database architectures to agentic multi-node graphs and end-to-end web apps, I build reliable, production-grade software.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 !text-white font-bold rounded-full shadow-[6px_6px_14px_rgba(163,177,198,0.6),-4px_-4px_10px_rgba(255,255,255,0.85)] hover:bg-slate-800 hover:shadow-[8px_8px_18px_rgba(163,177,198,0.7)] active:scale-95 transition-all text-sm uppercase tracking-wider"
        >
          Start a Conversation →
        </a>
      </motion.div>
    </div>
  );
}
