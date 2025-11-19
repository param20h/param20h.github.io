"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faRocket } from "@fortawesome/free-solid-svg-icons";

const projects: Project[] = [
  {
    title: "Real-time Chat App - Node.js Socket.IO Application",
    description: "Full-featured real-time chat application built with Node.js, Express, and Socket.IO. Features live messaging, multiple users support, file sharing, emoji reactions, private messaging, room management, and responsive design.",
    image: "/media/char.png",
    tech: ["Node.js", "Socket.IO", "Express.js", "WebSocket"],
    liveUrl: "https://chat-app-fkk3.onrender.com",
    githubUrl: "https://github.com/param20h/chat-app",
    status: "live",
  },
  {
    title: "DSA Visualizer - React Data Structures & Algorithms Tool",
    description: "Interactive Data Structures and Algorithms visualizer built with React and modern JavaScript. Features algorithm animations, step-by-step execution, sorting visualizations, graph traversals, and educational interface.",
    image: "/media/Dsav.png",
    tech: ["React", "JavaScript", "Algorithms", "Open Source"],
    liveUrl: "https://dsa-visualizer-hazel-two.vercel.app/",
    githubUrl: "https://github.com/param20h/DSA-visual",
    status: "live",
  },
  {
    title: "AI Financial Identification System - Machine Learning Project",
    description: "Advanced Artificial Intelligence and Machine Learning system developed for the Indian Department of Posts. Uses Python, TensorFlow, and Data Science techniques to analyze demographic and economic data.",
    iconName: "brain",
    tech: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
    githubUrl: "https://github.com/param20h",
  },
  {
    title: "AI Summarizer - Google Gemini AI Text Summarization",
    description: "Advanced AI-powered text summarization application built with JavaScript and Google Gemini AI API. Features intelligent content analysis, automatic text summarization, and real-time AI processing.",
    image: "/media/ai.png",
    tech: ["Google Gemini AI", "JavaScript", "GenAI API"],
    liveUrl: "https://ai-sum-two.vercel.app/",
    githubUrl: "https://github.com/param20h/ai-sum",
    status: "live",
  },
  {
    title: "Weather App - Next.js Real-time Weather Application",
    description: "Modern Next.js weather application built with React and API integration. Features real-time weather data, server-side rendering, location-based forecasts, responsive design, and optimized performance.",
    image: "/media/weather.png",
    tech: ["Next.js", "React", "JavaScript", "API"],
    liveUrl: "https://weather-sum.netlify.app/",
    githubUrl: "https://github.com/param20h/weather",
    status: "live",
  },
  {
    title: "Python Space Invaders Game - Pygame Development",
    description: "Professional Python game development project using Pygame library. Features advanced object-oriented programming, collision detection algorithms, dynamic scoring system, and progressive difficulty mechanics.",
    iconName: "rocket",
    tech: ["Python", "Pygame", "Game Development", "OOP"],
    githubUrl: "https://github.com/param20h/space-invade",
  },
];

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
            <Card className="h-full flex flex-col">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl mb-6 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl">
                    {project.iconName === "brain" && (
                      <FontAwesomeIcon icon={faBrain} className="text-primary-400" />
                    )}
                    {project.iconName === "rocket" && (
                      <FontAwesomeIcon icon={faRocket} className="text-accent-400" />
                    )}
                  </div>
                )}
                {project.status === "live" && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Live
                  </div>
                )}
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-white/70 mb-4 flex-grow">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
