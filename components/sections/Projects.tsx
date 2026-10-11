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
    return isFeatured ? "text-black font-bold" : "text-primary-400";
  };

  // Get project display name for tabs (truncated)
  const getTabDisplayName = (title: string) => {
    const cleanTitle = title.split(" — ")[0].split(" - ")[0];
    return cleanTitle.length > 18 ? cleanTitle.slice(0, 16) + "..." : cleanTitle;
  };

  return (
    <Section id="projects" title="Featured Projects Workspace" className="bg-white/5 relative">
      
      {/* Background glow effects */}

      {/* Main IDE Glass Container (Desktop only) */}
      <div className="hidden md:flex w-full rounded-3xl border border-white/60 bg-[#e2e8f0] shadow-[14px_14px_28px_rgba(163,177,198,0.55),-14px_-14px_28px_rgba(255,255,255,0.95)] overflow-hidden min-h-[600px] flex-col font-sans">
        
        {/* IDE Top Window Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#e2e8f0] border-b border-white/40 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs text-slate-700 font-mono tracking-wider flex items-center gap-2 font-medium">
            <Terminal size={12} className="text-slate-800 animate-pulse" />
            projects_workspace — param20h.github.io
          </div>
          <div className="w-16" /> {/* Spacer */}
        </div>

        {/* Workspace Body */}
        <div className="flex flex-1 flex-col md:flex-row relative">
          
          {/* MOBILE SIDEBAR TOGGLE */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="md:hidden absolute top-4 left-4 z-30 p-2 rounded-lg bg-black/70 border border-white/10 text-black/80 hover:text-black"
          >
            {isMobileSidebarOpen ? <ArrowLeft size={18} /> : <Menu size={18} />}
          </button>

          {/* LEFT EXPLORER SIDEBAR */}
          <div
            className={`
              ${isMobileSidebarOpen ? "flex" : "hidden"} 
              md:flex flex-col w-full md:w-[300px] bg-[#e2e8f0] border-r border-white/40 shrink-0 z-20 
              ${isMobileSidebarOpen ? "absolute md:relative inset-0" : ""}
            `}
          >
            {/* Explorer Title & Search */}
            <div className="p-4 border-b border-white/40 bg-[#e2e8f0]">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3 font-mono">
                Project Explorer
              </p>
              
              {/* Search input */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search projects or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#e2e8f0] border border-white/40 rounded-full text-xs text-slate-800 placeholder-slate-500 shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] focus:outline-none transition font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-black/70 hover:text-black"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>

            {/* Folder Navigation Directory Tree */}
            <div className="flex-1 overflow-y-auto p-2 font-mono text-xs text-black/80 select-none">
              
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
                  <span className="font-semibold text-black/90 group-hover:text-black font-bold">
                    Featured
                  </span>
                  <span className="text-[10px] text-black/70 ml-auto font-sans">
                    ({filteredFeatured.length})
                  </span>
                </button>

                {isFeaturedExpanded && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-white/20 ml-3.5">
                    {filteredFeatured.map((p) => {
                      const isActive = activeProjectId === p.title;
                      return (
                        <button
                          key={p.title}
                          onClick={() => handleOpenProject(p.title)}
                          className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-xl transition text-left text-xs ${
                            isActive
                              ? "bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-900 font-bold border border-white/40"
                              : "hover:bg-white/40 text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          <FileCode size={14} className={getFileIconColor(p)} />
                          <span className="truncate">{p.title.split(" — ")[0].split(" - ")[0]}</span>
                        </button>
                      );
                    })}
                    {filteredFeatured.length === 0 && (
                      <p className="text-[10px] text-slate-400 pl-6 py-1 italic">
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
                  className="flex items-center gap-1.5 w-full hover:bg-white/20 px-2 py-1.5 rounded-xl transition text-left group"
                >
                  {isArchiveExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  {isArchiveExpanded ? (
                    <FolderOpen size={14} className="text-slate-700" />
                  ) : (
                    <Folder size={14} className="text-slate-700" />
                  )}
                  <span className="font-semibold text-slate-700 group-hover:text-black">
                    Creations
                  </span>
                  <span className="text-[10px] text-slate-500 ml-auto font-sans font-medium">
                    ({filteredOthers.length})
                  </span>
                </button>

                {isArchiveExpanded && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-white/20 ml-3.5">
                    {filteredOthers.map((p) => {
                      const isActive = activeProjectId === p.title;
                      return (
                        <button
                          key={p.title}
                          onClick={() => handleOpenProject(p.title)}
                          className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-xl transition text-left text-xs ${
                            isActive
                              ? "bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-900 font-bold border border-white/40"
                              : "hover:bg-white/40 text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          <FileCode size={14} className={getFileIconColor(p)} />
                          <span className="truncate text-ellipsis overflow-hidden">{p.title.split(" — ")[0].split(" - ")[0]}</span>
                        </button>
                      );
                    })}
                    {filteredOthers.length === 0 && (
                      <p className="text-[10px] text-black/70 pl-6 py-1 italic">
                        No matches found
                      </p>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* MAIN EDITOR AREA */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#e2e8f0]">
            
            {/* EDITOR TABS BAR */}
            <div className="flex items-center bg-[#e2e8f0] border-b border-white/40 overflow-x-auto scrollbar-none select-none pl-12 md:pl-0">
              {openTabs.map((tabTitle) => {
                const project = projects.find((p) => p.title === tabTitle);
                if (!project) return null;
                const isActive = activeProjectId === tabTitle;
                return (
                  <div
                    key={tabTitle}
                    onClick={() => setActiveProjectId(tabTitle)}
                    className={`
                      flex items-center gap-2 px-5 py-2.5 border-r border-white/30 text-xs font-mono cursor-pointer transition shrink-0
                      ${
                        isActive
                          ? "bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] text-slate-900 font-bold border-b-2 border-slate-800"
                          : "text-slate-500 hover:text-slate-800 hover:bg-white/20"
                      }
                    `}
                  >
                    <FileCode size={12} className={getFileIconColor(project)} />
                    <span>{getTabDisplayName(tabTitle)}</span>
                    <button
                      onClick={(e) => handleCloseTab(e, tabTitle)}
                      className="ml-1.5 p-0.5 rounded-full hover:bg-black/10 text-slate-500 hover:text-slate-800 transition"
                    >
                      <X size={10} />
                    </button>
                  </div>
                );
              })}
              {openTabs.length === 0 && (
                <div className="px-4 py-2.5 text-xs text-slate-400 font-mono italic">
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
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/40">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          {activeProject.status === "live" && (
                            <span className="bg-[#e2e8f0] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] border border-white/40 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                              LIVE
                            </span>
                          )}
                          {activeProject.status === "research" && (
                            <span className="bg-[#e2e8f0] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] border border-white/40 text-purple-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                              RESEARCH
                            </span>
                          )}
                          {activeProject.status === "coming-soon" && (
                            <span className="bg-[#e2e8f0] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] border border-white/40 text-amber-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                              COMING SOON
                            </span>
                          )}
                          {activeProject.tags?.includes("open-source") && (
                            <span className="bg-[#e2e8f0] shadow-[2px_2px_5px_rgba(163,177,198,0.5),-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/60 text-slate-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                              OPEN SOURCE
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
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
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#e2e8f0] hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] text-slate-800 border border-white/60 rounded-full text-xs font-bold shadow-[4px_4px_10px_rgba(163,177,198,0.5),-4px_-4px_10px_rgba(255,255,255,0.95)] transition-all duration-200"
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
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#e2e8f0] text-slate-800 border border-white/60 rounded-full text-xs font-bold shadow-[4px_4px_10px_rgba(163,177,198,0.5),-4px_-4px_10px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] transition-all duration-200"
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
                          <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2.5 font-mono">
                            {"// PROJECT DESCRIPTION"}
                          </h4>
                          <p className="text-slate-700 leading-relaxed text-sm md:text-base whitespace-pre-line bg-[#e2e8f0] p-6 rounded-3xl shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.95)] border border-white/60">
                            {activeProject.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3 font-mono">
                            {"// TECH STACK & TOOLING"}
                          </h4>
                          <div className="flex flex-wrap gap-2.5">
                            {activeProject.tech.map((t) => (
                              <span
                                key={t}
                                className="px-4 py-2 bg-[#e2e8f0] text-slate-700 rounded-full text-xs font-semibold shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] border border-white/50 transition-all select-none"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Block: Dynamic Mock Editor Code Output */}
                      <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="w-full rounded-3xl border border-white/50 bg-[#e2e8f0] shadow-[inset_3px_3px_8px_rgba(163,177,198,0.55),inset_-3px_-3px_8px_rgba(255,255,255,0.95)] overflow-hidden font-mono text-[11px] md:text-xs">
                          {/* File header */}
                          <div className="bg-[#e2e8f0] px-5 py-2.5 text-slate-600 border-b border-white/40 flex items-center justify-between font-semibold">
                            <span>meta_info.json</span>
                            <Code size={12} />
                          </div>
                          
                          {/* Code Lines layout */}
                          <div className="p-5 space-y-1.5 text-slate-700 leading-5">
                            <div><span className="text-slate-400 select-none mr-4">01</span>{"{"}</div>
                            <div><span className="text-slate-400 select-none mr-4">02</span>  <span className="text-slate-900 font-bold">{"\"project_name\""}</span>: <span className="text-slate-700">{"\""}{activeProject.title.split(" — ")[0].split(" - ")[0]}{"\""}</span>,</div>
                            <div><span className="text-slate-400 select-none mr-4">03</span>  <span className="text-slate-900 font-bold">{"\"status\""}</span>: <span className="text-slate-700">{"\""}{activeProject.status || "live"}{"\""}</span>,</div>
                            <div><span className="text-slate-400 select-none mr-4">04</span>  <span className="text-slate-900 font-bold">{"\"open_source\""}</span>: <span className="text-slate-700 italic">{activeProject.tags?.includes("open-source") ? "true" : "false"}</span>,</div>
                            <div><span className="text-slate-400 select-none mr-4">05</span>  <span className="text-slate-900 font-bold">{"\"core_technologies\""}</span>: [</div>
                            {activeProject.tech.slice(0, 3).map((tech, idx, arr) => (
                              <div key={tech}>
                                <span className="text-slate-400 select-none mr-4">{`0${6 + idx}`}</span>
                                {"    "}<span className="text-slate-700">{"\""}{tech}{"\""}</span>{idx < arr.length - 1 ? "," : ""}
                              </div>
                            ))}
                            <div><span className="text-slate-400 select-none mr-4">09</span>  ],</div>
                            <div><span className="text-slate-400 select-none mr-4">10</span>  <span className="text-slate-900 font-bold">{"\"repository_configured\""}</span>: <span className="text-slate-700 italic">{activeProject.githubUrl ? "true" : "false"}</span></div>
                            <div><span className="text-slate-400 select-none mr-4">11</span>{"}"}</div>
                          </div>
                        </div>

                        {/* Interactive Project Core Highlights */}
                        <div className="bg-[#e2e8f0] rounded-3xl border border-white/60 p-5 shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.95)] flex flex-col justify-center">
                          <div className="flex items-center gap-2.5 mb-2 text-slate-800 font-bold text-sm">
                            <Sparkles size={16} className="text-slate-700" />
                            <span>Quick Insights</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-sans">
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
                    
                    <h3 className="text-lg font-bold text-black mb-2">
                      Workspace Dashboard
                    </h3>
                    
                    <p className="text-xs text-black/70 max-w-sm leading-relaxed mb-6 font-sans">
                      Select a file from the explorer sidebar, search a tech keyword, or expand the directories to read project logs.
                    </p>

                    {/* Stats or shortcut hints */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg w-full mt-4 font-sans text-left">
                      <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                        <p className="text-2xl font-black text-black">{projects.length}</p>
                        <p className="text-[10px] font-bold text-black/70 uppercase tracking-wider mt-1">
                          Total Projects
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                        <p className="text-2xl font-black text-black">3</p>
                        <p className="text-[10px] font-bold text-black/70 uppercase tracking-wider mt-1">
                          Featured
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center col-span-2 md:col-span-1">
                        <p className="text-2xl font-black text-black">93%</p>
                        <p className="text-[10px] font-bold text-black/70 uppercase tracking-wider mt-1">
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
        <div className="flex gap-2 p-1.5 bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/50 rounded-2xl">
          <button
            onClick={() => setActiveCategoryMobile("featured")}
            className={`flex-grow py-2.5 text-xs font-mono font-bold rounded-xl transition-all ${
              activeCategoryMobile === "featured"
                ? "bg-[#e2e8f0] shadow-[3px_3px_8px_rgba(163,177,198,0.5),-3px_-3px_8px_rgba(255,255,255,0.95)] text-slate-900 border border-white/60"
                : "text-slate-600 hover:text-black"
            }`}
          >
            Featured ({featuredProjects.length})
          </button>
          <button
            onClick={() => setActiveCategoryMobile("creations")}
            className={`flex-grow py-2.5 text-xs font-mono font-bold rounded-xl transition-all ${
              activeCategoryMobile === "creations"
                ? "bg-[#e2e8f0] shadow-[3px_3px_8px_rgba(163,177,198,0.5),-3px_-3px_8px_rgba(255,255,255,0.95)] text-slate-900 border border-white/60"
                : "text-slate-600 hover:text-black"
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
                  rounded-3xl border border-white/50 transition-all duration-300 overflow-hidden bg-[#e2e8f0]
                  ${isExpanded ? "shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]" : "shadow-[8px_8px_16px_rgba(163,177,198,0.5),-8px_-8px_16px_rgba(255,255,255,0.95)]"}
                `}
              >
                {/* Header (always visible) */}
                <div
                  onClick={() => setExpandedProjectMobile(isExpanded ? null : p.title)}
                  className="p-5 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <span className="text-[9px] font-bold font-mono tracking-wider px-3 py-1 rounded-full border border-white/40 mb-2 inline-block bg-[#e2e8f0] shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.95)] text-slate-700">
                      {p.status?.toUpperCase() || "LIVE"}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 truncate font-sans">
                      {p.title.split(" — ")[0].split(" - ")[0]}
                    </h3>
                  </div>
                  <div className="text-slate-600 shrink-0">
                    {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="border-t border-white/40 p-5 space-y-4">
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {p.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-[#e2e8f0] text-slate-700 rounded-full text-[10px] font-semibold border border-white/50 shadow-[2px_2px_5px_rgba(163,177,198,0.4),-2px_-2px_5px_rgba(255,255,255,0.9)]"
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
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#e2e8f0] border border-white/60 rounded-full text-xs font-bold text-slate-800 shadow-[3px_3px_8px_rgba(163,177,198,0.5),-3px_-3px_8px_rgba(255,255,255,0.95)] active:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] transition"
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
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#e2e8f0] border border-white/60 rounded-full text-xs font-bold text-slate-800 shadow-[3px_3px_8px_rgba(163,177,198,0.5),-3px_-3px_8px_rgba(255,255,255,0.95)] active:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] transition"
                        >
                          <ExternalLink size={13} />
                          Live Demo
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
