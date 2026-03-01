"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faRocket } from "@fortawesome/free-solid-svg-icons";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" className="bg-white/5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col glassmorphism overflow-hidden group hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 flex-shrink-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl mb-6 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.iconName === "brain" && (
                      <FontAwesomeIcon icon={faBrain} className="text-primary-400 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
                    )}
                    {project.iconName === "rocket" && (
                      <FontAwesomeIcon icon={faRocket} className="text-accent-400 drop-shadow-[0_0_15px_rgba(255,107,107,0.5)]" />
                    )}
                  </div>
                )}
                {project.status === "live" && (
                  <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    LIVE
                  </div>
                )}
                {project.status === "research" && (
                  <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    RESEARCH
                  </div>
                )}
                {project.status === "coming-soon" && (
                  <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                    COMING SOON
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <div className="mb-4 flex-grow">
                  <p className="text-white/70 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded-lg text-xs font-medium border border-primary-500/20 group-hover:border-primary-500/40 group-hover:bg-primary-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-white/5 text-white/50 rounded-lg text-xs font-medium border border-white/10">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-semibold tracking-wide"
                    >
                      <ExternalLink size={16} />
                      LIVE DEMO
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold tracking-wide"
                    >
                      <Github size={16} />
                      SOURCE CODE
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section >
  );
}
