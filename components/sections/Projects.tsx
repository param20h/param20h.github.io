"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  ExternalLink,
  Github,
  Folder,
  FolderOpen,
  FileCode,
  Search,
  X,
  ChevronRight,
  ChevronDown,
  Code,
  Terminal,
  Sparkles,
  ArrowLeft,
  Menu
} from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";

// User-requested main featured projects
const FEATURED_TITLES = [
  "ZenithFlow — Productivity & Wellness Ecosystem",
  "Vesta AI — Investment Research Agent",
  "ParkControl Sentinel — AI Parking Congestion Intelligence",
  "RAG PDF Assistant",
  "DeepFake Detector — AI Media Forensics System",
  "Weather App - Next.js Real-time Weather Application"
];

export default function Projects() {
  // Categorize projects based on titles
  const featuredProjects = useMemo(() => {
    return projects.filter((p) => FEATURED_TITLES.includes(p.title));
  }, []);

  const otherProjects = useMemo(() => {
    return projects.filter((p) => !FEATURED_TITLES.includes(p.title));
  }, []);

  // UI state

  // Mobile layout state
  const [activeCategoryMobile, setActiveCategoryMobile] = useState<"featured" | "creations">("featured");
  const [expandedProjectMobile, setExpandedProjectMobile] = useState<string | null>("RAG PDF Assistant");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeProjectId, setActiveProjectId] = useState<string | null>("RAG PDF Assistant");
  const [openTabs, setOpenTabs] = useState<string[]>([
    "RAG PDF Assistant",
    "DeepFake Detector — AI Media Forensics System",
    "Weather App - Next.js Real-time Weather Application"
  ]);

  const [isFeaturedExpanded, setIsFeaturedExpanded] = useState(true);
  const [isArchiveExpanded, setIsArchiveExpanded] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(true);

  // Automatically expand folders if there is a search query
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setIsFeaturedExpanded(true);
      setIsArchiveExpanded(true);
    }
  }, [searchQuery]);

  // Find active project details
  const activeProject = useMemo(() => {
    if (!activeProjectId) return null;
    return projects.find((p) => p.title === activeProjectId) || null;
  }, [activeProjectId]);

  // Filter projects based on search query (title or tech stack)
  const filteredFeatured = useMemo(() => {
    if (!searchQuery.trim()) return featuredProjects;
    const query = searchQuery.toLowerCase();
    return featuredProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query))
    );
  }, [searchQuery, featuredProjects]);

  const filteredOthers = useMemo(() => {
    if (!searchQuery.trim()) return otherProjects;
    const query = searchQuery.toLowerCase();
    return otherProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query))
    );
  }, [searchQuery, otherProjects]);

  // Handle opening a project tab
  const handleOpenProject = (projectTitle: string) => {
    if (!openTabs.includes(projectTitle)) {
      setOpenTabs([...openTabs, projectTitle]);
    }
    setActiveProjectId(projectTitle);
    // Close sidebar on mobile once a file is selected
    setIsMobileSidebarOpen(false);
  };

  // Handle closing a project tab
  const handleCloseTab = (e: React.MouseEvent, projectTitle: string) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((tab) => tab !== projectTitle);
    setOpenTabs(newTabs);

    if (activeProjectId === projectTitle) {
      if (newTabs.length > 0) {
        setActiveProjectId(newTabs[newTabs.length - 1]);
      } else {
        setActiveProjectId(null);
      }
    }
  };

  // Helper to get color code for file icons based on project type
  const getFileIconColor = (project: Project) => {
    const isFeatured = FEATURED_TITLES.includes(project.title);
    return isFeatured ? "text-accent-400" : "text-primary-400";
  };

  // Get project display name for tabs (truncated)
  const getTabDisplayName = (title: string) => {
    const cleanTitle = title.split(" — ")[0].split(" - ")[0];
    return cleanTitle.length > 18 ? cleanTitle.slice(0, 16) + "..." : cleanTitle;
  };

  return (
    <Section id="projects" title="Featured Projects Workspace" className="bg-white/5 relative">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main IDE Glass Container (Desktop only) */}
      <div className="hidden md:flex w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[600px] flex-col font-sans">
        
        {/* IDE Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs text-white/40 font-mono tracking-wider flex items-center gap-2">
            <Terminal size={12} className="text-primary-400 animate-pulse" />
            projects_workspace — param20h.github.io
          </div>
          <div className="w-16" /> {/* Spacer */}
        </div>

        {/* Workspace Body */}
        <div className="flex flex-1 flex-col md:flex-row relative">
          
          {/* MOBILE SIDEBAR TOGGLE */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="md:hidden absolute top-4 left-4 z-30 p-2 rounded-lg bg-black/70 border border-white/10 text-white/70 hover:text-white"
          >
            {isMobileSidebarOpen ? <ArrowLeft size={18} /> : <Menu size={18} />}
          </button>

          {/* LEFT EXPLORER SIDEBAR */}
          <div
            className={`
              ${isMobileSidebarOpen ? "flex" : "hidden"} 
              md:flex flex-col w-full md:w-[300px] bg-black/25 border-r border-white/10 shrink-0 z-20 
              ${isMobileSidebarOpen ? "absolute md:relative inset-0" : ""}
            `}
          >
            {/* Explorer Title & Search */}
            <div className="p-4 border-b border-white/10 bg-black/10">
              <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3 font-mono">
                Project Explorer
              </p>
              
              {/* Search input */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search projects or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-white/30 focus:outline-none focus:border-primary-500/50 transition font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>

            {/* Folder Navigation Directory Tree */}
            <div className="flex-1 overflow-y-auto p-2 font-mono text-xs text-white/70 select-none">
              
              {/* FEATURED PROJECTS FOLDER */}
              <div className="mb-2">
                <button
                  onClick={() => setIsFeaturedExpanded(!isFeaturedExpanded)}
                  className="flex items-center gap-1.5 w-full hover:bg-white/5 px-2 py-1.5 rounded transition text-left group"
                >
                  {isFeaturedExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  {isFeaturedExpanded ? (
                    <FolderOpen size={14} className="text-accent-500/80 fill-accent-500/20" />
                  ) : (
                    <Folder size={14} className="text-accent-500/80 fill-accent-500/20" />
                  )}
                  <span className="font-semibold text-white/90 group-hover:text-accent-400">
                    Featured
                  </span>
                  <span className="text-[10px] text-white/30 ml-auto font-sans">
                    ({filteredFeatured.length})
                  </span>
                </button>

                {isFeaturedExpanded && (
                  <div className="pl-4 mt-1 space-y-0.5 border-l border-white/5 ml-3.5">
                    {filteredFeatured.map((p) => {
                      const isActive = activeProjectId === p.title;
                      return (
                        <button
                          key={p.title}
                          onClick={() => handleOpenProject(p.title)}
                          className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded transition text-left ${
                            isActive
                              ? "bg-accent-500/10 text-accent-400 font-bold border-l-2 border-accent-500"
                              : "hover:bg-white/5 text-white/75 hover:text-white"
                          }`}
                        >
                          <FileCode size={14} className={getFileIconColor(p)} />
                          <span className="truncate">{p.title.split(" — ")[0].split(" - ")[0]}</span>
                        </button>
                      );
                    })}
                    {filteredFeatured.length === 0 && (
                      <p className="text-[10px] text-white/30 pl-6 py-1 italic">
                        No matches found
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* OTHER CREATIONS FOLDER */}
              <div>
                <button
                  onClick={() => setIsArchiveExpanded(!isArchiveExpanded)}
                  className="flex items-center gap-1.5 w-full hover:bg-white/5 px-2 py-1.5 rounded transition text-left group"
                >
                  {isArchiveExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  {isArchiveExpanded ? (
                    <FolderOpen size={14} className="text-primary-500/80 fill-primary-500/20" />
                  ) : (
                    <Folder size={14} className="text-primary-500/80 fill-primary-500/20" />
                  )}
                  <span className="font-semibold text-white/90 group-hover:text-primary-400">
                    Creations
                  </span>
                  <span className="text-[10px] text-white/30 ml-auto font-sans">
                    ({filteredOthers.length})
                  </span>
                </button>

                {isArchiveExpanded && (
                  <div className="pl-4 mt-1 space-y-0.5 border-l border-white/5 ml-3.5">
                    {filteredOthers.map((p) => {
                      const isActive = activeProjectId === p.title;
                      return (
                        <button
                          key={p.title}
                          onClick={() => handleOpenProject(p.title)}
                          className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded transition text-left ${
                            isActive
                              ? "bg-primary-500/10 text-primary-400 font-bold border-l-2 border-primary-500"
                              : "hover:bg-white/5 text-white/75 hover:text-white"
                          }`}
                        >
                          <FileCode size={14} className={getFileIconColor(p)} />
                          <span className="truncate text-ellipsis overflow-hidden">{p.title.split(" — ")[0].split(" - ")[0]}</span>
                        </button>
                      );
                    })}
                    {filteredOthers.length === 0 && (
                      <p className="text-[10px] text-white/30 pl-6 py-1 italic">
                        No matches found
                      </p>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* MAIN EDITOR AREA */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#080811]/90">
            
            {/* EDITOR TABS BAR */}
            <div className="flex items-center bg-black/40 border-b border-white/10 overflow-x-auto scrollbar-none select-none pl-12 md:pl-0">
              {openTabs.map((tabTitle) => {
                const project = projects.find((p) => p.title === tabTitle);
                if (!project) return null;
                const isActive = activeProjectId === tabTitle;
                const isFeatured = FEATURED_TITLES.includes(tabTitle);
                return (
                  <div
                    key={tabTitle}
                    onClick={() => setActiveProjectId(tabTitle)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 border-r border-white/10 text-xs font-mono cursor-pointer transition shrink-0
                      ${
                        isActive
                          ? `bg-[#080811]/90 ${isFeatured ? "text-accent-400 border-t-2 border-t-accent-500" : "text-primary-400 border-t-2 border-t-primary-500"} font-bold`
                          : "bg-black/10 text-white/40 hover:text-white/70 hover:bg-black/20"
                      }
                    `}
                  >
                    <FileCode size={12} className={getFileIconColor(project)} />
                    <span>{getTabDisplayName(tabTitle)}</span>
                    <button
                      onClick={(e) => handleCloseTab(e, tabTitle)}
                      className="ml-1.5 p-0.5 rounded-full hover:bg-white/10 text-white/30 hover:text-white transition"
                    >
                      <X size={10} />
                    </button>
                  </div>
                );
              })}
              {openTabs.length === 0 && (
                <div className="px-4 py-2.5 text-xs text-white/30 font-mono italic">
                  No active tabs open
                </div>
              )}
            </div>

            {/* EDITOR WORKSPACE STAGE */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeProject ? (
                  <motion.div
                    key={activeProject.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="h-full flex flex-col"
                  >
                    {/* Project Header Block */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          {activeProject.status === "live" && (
                            <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                              LIVE
                            </span>
                          )}
                          {activeProject.status === "research" && (
                            <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                              RESEARCH
                            </span>
                          )}
                          {activeProject.status === "coming-soon" && (
                            <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                              COMING SOON
                            </span>
                          )}
                          {activeProject.tags?.includes("open-source") && (
                            <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                              OPEN SOURCE
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                          {activeProject.title}
                        </h2>
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-3">
                        {activeProject.githubUrl && (
                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-semibold transition duration-200"
                          >
                            <Github size={14} />
                            Code Base
                          </a>
                        )}
                        {activeProject.liveUrl && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:opacity-90 text-white rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(0,212,255,0.25)] transition duration-200"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Workspace Content Layout */}
                    <div className="grid lg:grid-cols-12 gap-8 mt-6">
                      
                      {/* Left Block: Description & Tech Stack */}
                      <div className="lg:col-span-7 flex flex-col gap-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase text-white/40 tracking-wider mb-2.5 font-mono">
                            {"// Project Description"}
                          </h4>
                          <p className="text-white/80 leading-relaxed text-sm md:text-base whitespace-pre-line bg-white/5 p-4 rounded-xl border border-white/5">
                            {activeProject.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase text-white/40 tracking-wider mb-3 font-mono">
                            {"// Tech Stack & Tooling"}
                          </h4>
                          <div className="flex flex-wrap gap-2.5">
                            {activeProject.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1.5 bg-primary-500/10 text-primary-400 rounded-lg text-xs font-semibold border border-primary-500/20"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Block: Dynamic Mock Editor Code Output */}
                      <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="w-full rounded-xl border border-white/5 bg-black/40 overflow-hidden shadow-inner font-mono text-[11px] md:text-xs">
                          {/* File header */}
                          <div className="bg-black/50 px-4 py-2 text-white/40 border-b border-white/5 flex items-center justify-between">
                            <span>meta_info.json</span>
                            <Code size={12} />
                          </div>
                          
                          {/* Code Lines layout */}
                          <div className="p-4 space-y-1.5 text-white/80 leading-5">
                            <div><span className="text-white/20 select-none mr-4">01</span>{"{"}</div>
                            <div><span className="text-white/20 select-none mr-4">02</span>  <span className="text-accent-400">{"\"project_name\""}</span>: <span className="text-green-300">{"\""}{activeProject.title.split(" — ")[0].split(" - ")[0]}{"\""}</span>,</div>
                            <div><span className="text-white/20 select-none mr-4">03</span>  <span className="text-accent-400">{"\"status\""}</span>: <span className="text-green-300">{"\""}{activeProject.status || "live"}{"\""}</span>,</div>
                            <div><span className="text-white/20 select-none mr-4">04</span>  <span className="text-accent-400">{"\"open_source\""}</span>: <span className="text-purple-400">{activeProject.tags?.includes("open-source") ? "true" : "false"}</span>,</div>
                            <div><span className="text-white/20 select-none mr-4">05</span>  <span className="text-accent-400">{"\"core_technologies\""}</span>: [</div>
                            {activeProject.tech.slice(0, 3).map((tech, idx, arr) => (
                              <div key={tech}>
                                <span className="text-white/20 select-none mr-4">{`0${6 + idx}`}</span>
                                {"    "}<span className="text-green-300">{"\""}{tech}{"\""}</span>{idx < arr.length - 1 ? "," : ""}
                              </div>
                            ))}
                            <div><span className="text-white/20 select-none mr-4">09</span>  ],</div>
                            <div><span className="text-white/20 select-none mr-4">10</span>  <span className="text-accent-400">{"\"repository_configured\""}</span>: <span className="text-purple-400">{activeProject.githubUrl ? "true" : "false"}</span></div>
                            <div><span className="text-white/20 select-none mr-4">11</span>{"}"}</div>
                          </div>
                        </div>

                        {/* Interactive Project Core Highlights */}
                        <div className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-xl border border-white/5 p-4 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-2 text-white font-bold text-sm">
                            <Sparkles size={16} className="text-primary-400" />
                            <span>Quick Insights</span>
                          </div>
                          <p className="text-xs text-white/60 leading-relaxed font-sans">
                            This project showcases hands-on expertise in building structured {activeProject.tech.slice(0, 2).join(" & ")} architectures, aiming to deliver scalable results with clean developer interfaces.
                          </p>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ) : (
                  
                  // MOCK IDE WELCOME SCREEN (fallback when all tabs are closed)
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 font-mono select-none"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 border border-primary-500/20">
                      <Terminal size={32} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">
                      Workspace Dashboard
                    </h3>
                    
                    <p className="text-xs text-white/40 max-w-sm leading-relaxed mb-6 font-sans">
                      Select a file from the explorer sidebar, search a tech keyword, or expand the directories to read project logs.
                    </p>

                    {/* Stats or shortcut hints */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg w-full mt-4 font-sans text-left">
                      <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                        <p className="text-2xl font-black text-white">{projects.length}</p>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-wider mt-1">
                          Total Projects
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                        <p className="text-2xl font-black text-white">3</p>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-wider mt-1">
                          Featured
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center col-span-2 md:col-span-1">
                        <p className="text-2xl font-black text-white">93%</p>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-wider mt-1">
                          Open Source
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>

      {/* MOBILE LAYOUT (hidden on desktop) */}
      <div className="block md:hidden space-y-6">
        
        {/* Category Tab Selector */}
        <div className="flex gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl">
          <button
            onClick={() => setActiveCategoryMobile("featured")}
            className={`flex-grow py-2.5 text-xs font-mono font-bold rounded-xl transition-all ${
              activeCategoryMobile === "featured"
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Featured ({featuredProjects.length})
          </button>
          <button
            onClick={() => setActiveCategoryMobile("creations")}
            className={`flex-grow py-2.5 text-xs font-mono font-bold rounded-xl transition-all ${
              activeCategoryMobile === "creations"
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Creations ({otherProjects.length})
          </button>
        </div>

        {/* Projects Accordion Stack */}
        <div className="space-y-4">
          {(activeCategoryMobile === "featured" ? featuredProjects : otherProjects).map((p) => {
            const isExpanded = expandedProjectMobile === p.title;
            return (
              <div
                key={p.title}
                className={`
                  rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isExpanded ? "border-primary-500/30 bg-black/50 shadow-[0_0_20px_rgba(0,212,255,0.08)]" : "border-white/10 bg-black/25"}
                `}
              >
                {/* Header (always visible) */}
                <div
                  onClick={() => setExpandedProjectMobile(isExpanded ? null : p.title)}
                  className="p-5 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <span className={`text-[9px] font-bold font-mono tracking-wider px-2.5 py-0.5 rounded-full border mb-2 inline-block ${
                      activeCategoryMobile === "featured" 
                        ? "bg-accent-500/10 text-accent-400 border-accent-500/20" 
                        : "bg-primary-500/10 text-primary-400 border-primary-500/20"
                    }`}>
                      {p.status?.toUpperCase() || "LIVE"}
                    </span>
                    <h3 className="text-base font-bold text-white truncate font-sans">
                      {p.title.split(" — ")[0].split(" - ")[0]}
                    </h3>
                  </div>
                  <div className="text-white/40 shrink-0">
                    {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="border-t border-white/5 bg-black/10 p-5 space-y-4">
                    <p className="text-xs text-white/70 leading-relaxed font-sans">
                      {p.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-primary-500/5 text-primary-400 rounded-lg text-[10px] font-semibold border border-primary-500/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-1">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-white transition hover:bg-white/10"
                        >
                          <Github size={13} />
                          Code
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl text-xs font-bold shadow-[0_0_10px_rgba(0,212,255,0.15)] transition"
                        >
                          <ExternalLink size={13} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
