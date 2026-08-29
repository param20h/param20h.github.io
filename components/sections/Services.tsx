"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Palette, Smartphone, Layers, CheckCircle, Monitor } from "lucide-react";

// Same services from your portfolio but mapped to bento layout
const SERVICES = [
  {
    id: "01",
    title: "Web Development",
    tagline: "Code that performs.",
    description: "End-to-end web applications built for scale and speed. Using React, Next.js, and scalable backends to deliver fast, secure experiences.",
    icon: <Code2 size={120} strokeWidth={1} />,
    features: ["React & Next.js", "Node.js & Express", "Database Design", "Secure Auth"],
    colSpan: "md:col-span-6 lg:col-span-8",
    bgClass: "bg-black text-white border border-white/10",
    accent: "text-primary-400"
  },
  {
    id: "02",
    title: "AI & LLM Integration",
    tagline: "Intelligent capabilities.",
    description: "Adding intelligent capabilities to business workflows.",
    icon: <Layers size={80} strokeWidth={1} />,
    features: ["RAG Systems", "Custom GPTs", "Agentic Workflows"],
    colSpan: "md:col-span-3 lg:col-span-4",
    bgClass: "bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-black border border-white/10 shadow-lg",
    accent: "text-accent-400"
  },
  {
    id: "03",
    title: "UI/UX Design",
    tagline: "Designed to convert.",
    description: "Research-driven interfaces that turn complexity into clarity with modern glassmorphism.",
    icon: <Palette size={80} strokeWidth={1} />,
    features: ["Responsive", "Framer Motion", "Tailwind CSS"],
    colSpan: "md:col-span-6 lg:col-span-12",
    bgClass: "bg-white/5 text-white border border-white/10 backdrop-blur-sm",
    accent: "text-primary-500"
  }
];

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Helper component for shuffling images
function ImageCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Shuffle every 4 seconds to allow time to read
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

const caseStudies = [
  {
    title: "Auto Care On Wheels",
    subtitle: "Car Service Booking Platform",
    description: "A complete, full-stack car service booking application deployed on Hostinger. Features advanced scheduling, authentication, and admin dashboards.",
    tech: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "MySQL"],
    url: "https://autocareonwheels.com.au",
    images: [
      "/media/autocare/1.png",
      "/media/autocare/2.png",
      "/media/autocare/3.png",
    ],
    highlights: ["FullCalendar.io Integration", "Secure Admin Portal", "Automated Workflows"]
  },
  {
    title: "ZenithFlow",
    subtitle: "Productivity & Wellness Ecosystem",
    description: "A premium, all-in-one productivity and wellness ecosystem with AI-powered biometric coaching and Razorpay integration.",
    tech: ["Next.js", "Supabase Auth", "Node.js", "Razorpay API", "PostgreSQL"],
    url: "https://zenithflow.dev/",
    images: [
      "/media/zenith/1.png",
      "/media/zenith/2.png",
      "/media/zenith/3.png",
      "/media/zenith/4.png"
    ],
    highlights: ["Subscription Management", "Habit Analytics", "Real-time Sync"]
  },
  {
    title: "Star Computer Center",
    subtitle: "Educational Institution Portal",
    description: "A modern digital presence for an educational center, highlighting courses, admissions, and institutional information with a responsive design.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    url: "https://www.starcomputercenter.in/",
    images: [
      "/media/starcomputer/1.png",
      "/media/starcomputer/2.png",
      "/media/starcomputer/3.png"
    ],
    highlights: ["Course Management", "Responsive UI", "Student Inquiry Flow"]
  }
];

export default function Services() {
  return (
    <div className="w-full relative">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="pt-12 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white mb-6"
        >
          What We Do Best
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white/60 text-xl max-w-2xl leading-relaxed"
        >
          We craft digital products that combine stunning design with powerful functionality. From concept to launch, we&apos;re your partner in building remarkable experiences.
        </motion.p>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mb-32">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            className={`${service.colSpan} ${service.bgClass} min-h-[320px] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-2xl`}
          >
            {/* Background Icon (Low Opacity) */}
            <div className="absolute -bottom-8 -right-8 text-white/5 group-hover:text-primary-500/10 group-hover:scale-110 transition-all duration-700 transform rotate-12">
              {service.icon}
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-colors duration-700 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className={`font-mono text-sm font-bold mb-4 block ${service.accent}`}>{service.id}</span>
                <h3 className="text-3xl md:text-4xl font-black mb-3 tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="font-bold mb-4 text-white/80">{service.tagline}</p>
                <p className="text-base leading-relaxed mb-8 text-white/60 max-w-lg">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fIdx) => (
                  <span 
                    key={fIdx} 
                    className="px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/5 border border-white/10 text-white/80 group-hover:border-white/20 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      {/* Case Studies */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Featured Case Studies</h2>
        <p className="text-white/60 text-xl max-w-2xl mx-auto">
          Explore interactive previews of live client projects I&apos;ve designed and developed.
        </p>
      </div>

      <div className="space-y-24 pb-24">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          >
            {/* Context/Pitch Side */}
            <div className={`lg:w-1/3 flex flex-col gap-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div>
                <h4 className="text-accent-400 font-bold uppercase tracking-wider text-xs mb-2">{study.subtitle}</h4>
                <h3 className="text-3xl font-extrabold text-white mb-4">{study.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {study.description}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Key Highlights</h5>
                <ul className="space-y-2">
                  {study.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl w-fit hover:bg-gray-200 transition-colors"
              >
                Visit Live Site
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Browser Window Side */}
            <div className={`lg:w-2/3 w-full ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="w-full rounded-2xl border border-white/10 bg-black/40 shadow-2xl overflow-hidden backdrop-blur-md hover:scale-[1.02] transition-transform duration-500">
                
                {/* Mock Browser Header */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex-1 flex justify-center px-4">
                    <div className="bg-black/50 border border-white/10 rounded-md px-4 py-1 text-xs text-white/50 font-mono w-full max-w-sm flex items-center justify-center truncate">
                      {study.url}
                    </div>
                  </div>
                  <div className="flex gap-2 text-white/40">
                    <Monitor size={14} />
                    <Smartphone size={14} className="hidden sm:block" />
                  </div>
                </div>

                {/* Browser Content - Screenshot Carousel */}
                <div 
                  className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#080811] flex items-center justify-center cursor-pointer overflow-hidden group"
                  onClick={() => window.open(study.url, '_blank')}
                >
                  <ImageCarousel images={study.images} title={study.title} />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm z-20">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Launch Site <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}
