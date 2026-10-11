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
    icon: <Code2 size={24} className="text-slate-800" />,
    features: ["React & Next.js", "Node.js & Express", "Database Design", "Secure Auth"],
    colSpan: "md:col-span-6 lg:col-span-8",
  },
  {
    id: "02",
    title: "AI & LLM Integration",
    tagline: "Intelligent capabilities.",
    description: "Adding intelligent capabilities to business workflows.",
    icon: <Layers size={24} className="text-slate-800" />,
    features: ["RAG Systems", "Custom GPTs", "Agentic Workflows"],
    colSpan: "md:col-span-6 lg:col-span-4",
  },
  {
    id: "03",
    title: "UI/UX Design",
    tagline: "Designed to convert.",
    description: "Research-driven interfaces that turn complexity into clarity with modern tactile design.",
    icon: <Palette size={24} className="text-slate-800" />,
    features: ["Responsive", "Framer Motion", "Tailwind CSS"],
    colSpan: "md:col-span-6 lg:col-span-12",
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

      {/* Hero Header */}
      <div className="pt-12 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black mb-6"
        >
          What We Do Best
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-black/60 text-xl max-w-2xl leading-relaxed"
        >
          We craft digital products that combine stunning design with powerful functionality. From concept to launch, we&apos;re your partner in building remarkable experiences.
        </motion.p>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 mb-32">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            className={`${service.colSpan} bg-[#e2e8f0] min-h-[320px] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group transition-all duration-500 shadow-[12px_12px_24px_rgba(163,177,198,0.55),-12px_-12px_24px_rgba(255,255,255,0.95)] hover:shadow-[16px_16px_32px_rgba(163,177,198,0.65),-16px_-16px_32px_rgba(255,255,255,1)] hover:-translate-y-1.5 border border-white/50`}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                {/* Header row with embossed Icon well */}
                <div className="mb-6 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#e2e8f0] shadow-[4px_4px_10px_rgba(163,177,198,0.5),-4px_-4px_10px_rgba(255,255,255,0.95)] group-hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] transition-all flex items-center justify-center border border-white/60">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight text-slate-800">
                  {service.title}
                </h3>
                <p className="font-semibold mb-3 text-slate-600 text-sm">{service.tagline}</p>
                <p className="text-sm md:text-base leading-relaxed mb-8 text-slate-600 max-w-lg">
                  {service.description}
                </p>
              </div>

              {/* Extruded Neumorphic Feature Pills */}
              <div className="flex flex-wrap gap-2.5">
                {service.features.map((feature, fIdx) => (
                  <span 
                    key={fIdx} 
                    className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-[#e2e8f0] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.95)] transition-all cursor-default select-none border border-white/50"
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
        <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Featured Case Studies</h2>
        <p className="text-black/60 text-xl max-w-2xl mx-auto">
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
                <h3 className="text-3xl font-extrabold text-black mb-4">{study.title}</h3>
                <p className="text-black/70 leading-relaxed text-sm">
                  {study.description}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold text-black/50 uppercase tracking-wider mb-3">Key Highlights</h5>
                <ul className="space-y-2">
                  {study.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-sm text-black/80">
                      <CheckCircle size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map(t => (
                    <span key={t} className="px-3.5 py-1.5 bg-[#e2e8f0] border border-white/50 rounded-full text-xs font-semibold text-slate-700 shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.95)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#e2e8f0] text-slate-800 font-bold rounded-full shadow-[6px_6px_14px_rgba(163,177,198,0.55),-6px_-6px_14px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] active:scale-95 transition-all border border-white/60 w-fit"
              >
                Visit Live Site
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Browser Window Side */}
            <div className={`lg:w-2/3 w-full ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="w-full rounded-3xl border border-white/60 bg-[#e2e8f0] shadow-[14px_14px_28px_rgba(163,177,198,0.55),-14px_-14px_28px_rgba(255,255,255,0.95)] overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                
                {/* Mock Browser Header */}
                <div className="bg-[#e2e8f0] border-b border-white/40 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex-1 flex justify-center px-4">
                    <div className="bg-[#e2e8f0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 rounded-full px-5 py-1 text-xs text-slate-600 font-mono w-full max-w-sm flex items-center justify-center truncate">
                      {study.url}
                    </div>
                  </div>
                  <div className="flex gap-2 text-slate-500">
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
