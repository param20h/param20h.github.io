"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { CheckCircle, ExternalLink, Code, Layers, LayoutDashboard, Monitor, Smartphone } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web applications built for scale and speed.",
    icon: <Code size={24} />,
    features: ["React & Next.js", "Node.js & Express", "Database Design", "Secure Authentication"]
  },
  {
    title: "AI & LLM Integration",
    description: "Adding intelligent capabilities to business workflows.",
    icon: <Layers size={24} />,
    features: ["RAG Systems", "Custom GPTs", "Agentic Workflows", "OpenAI / Gemini APIs"]
  },
  {
    title: "UI/UX & Product Design",
    description: "High-converting, premium glassmorphic interfaces.",
    icon: <LayoutDashboard size={24} />,
    features: ["Responsive Design", "Modern Aesthetics", "Framer Motion", "Tailwind CSS"]
  }
];

const caseStudies = [
  {
    title: "Auto Care On Wheels",
    subtitle: "Car Service Booking Platform",
    description: "A complete, full-stack car service booking application deployed on Hostinger. Features advanced scheduling, authentication, and admin dashboards.",
    tech: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "MySQL"],
    url: "https://autocareonwheels.com.au",
    highlights: ["FullCalendar.io Integration", "Secure Admin Portal", "Automated Workflows"]
  },
  {
    title: "ZenithFlow",
    subtitle: "Productivity & Wellness Ecosystem",
    description: "A premium, all-in-one productivity and wellness ecosystem with AI-powered biometric coaching and Razorpay integration.",
    tech: ["Next.js", "Supabase Auth", "Node.js", "Razorpay API", "PostgreSQL"],
    url: "https://zenithflow.dev/",
    highlights: ["Subscription Management", "Habit Analytics", "Real-time Sync"]
  },
  {
    title: "Star Computer Center",
    subtitle: "Educational Institution Portal",
    description: "A modern digital presence for an educational center, highlighting courses, admissions, and institutional information with a responsive design.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    url: "https://starcomputercenter.com",
    highlights: ["Course Management", "Responsive UI", "Student Inquiry Flow"]
  }
];

export default function Services() {
  return (
    <Section id="services" title="Services & Client Work" className="bg-black relative">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Services Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary-500/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-white/60 text-sm mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map(feature => (
                <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle size={14} className="text-accent-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-extrabold text-white mb-4">Featured Case Studies</h3>
        <p className="text-white/60 max-w-2xl mx-auto">
          Explore interactive previews of live client projects I&apos;ve designed and developed.
        </p>
      </div>

      {/* Case Studies Interactive Previews */}
      <div className="space-y-24">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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

            {/* Iframe Preview Side */}
            <div className={`lg:w-2/3 w-full ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="w-full rounded-2xl border border-white/10 bg-black/40 shadow-2xl overflow-hidden backdrop-blur-md">
                
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

                {/* The Iframe */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-white">
                  <iframe
                    src={study.url}
                    className="absolute inset-0 w-full h-full border-0"
                    title={`${study.title} Preview`}
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </Section>
  );
}
