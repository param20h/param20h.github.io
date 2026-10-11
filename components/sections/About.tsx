"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faLightbulb, faBullseye } from "@fortawesome/free-solid-svg-icons";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects", value: "20+" },
  { label: "Technologies", value: "24+" },
];

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-white/5">
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-6 bg-[#e2e8f0] shadow-[6px_6px_14px_rgba(163,177,198,0.55),-6px_-6px_14px_rgba(255,255,255,0.95)] rounded-full flex items-center justify-center text-3xl font-extrabold text-slate-800 border border-white/60"
            >
              P
            </motion.div>
            <h3 className="text-3xl font-extrabold mb-2 text-slate-800">Paramjit Singh</h3>
            <p className="text-slate-600 text-base md:text-lg font-medium">
              AI Engineer • Backend Developer • AI Systems Builder • ML eng
            </p>
          </div>

          <div className="space-y-5 text-base md:text-lg text-slate-700 leading-relaxed">
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faRocket} className="text-slate-800 mt-1 text-lg md:text-xl flex-shrink-0" />
              <span>
                I&apos;m a Computer Science and Engineering student at <strong className="text-slate-900">Lovely Professional University</strong>, passionate about building intelligent systems that solve real-world problems.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faLightbulb} className="text-slate-800 mt-1 text-lg md:text-xl flex-shrink-0" />
              <span>
                My work lies at the intersection of <strong className="text-slate-900">AI engineering, backend architecture, and full-stack development</strong>. I build AI agents, RAG pipelines, and intelligent applications, focusing on turning emerging technologies into reliable, scalable, and production-ready systems.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faBullseye} className="text-slate-800 mt-1 text-lg md:text-xl flex-shrink-0" />
              <span>
                From developing agentic workflows and AI-powered financial research tools to designing backend services, authentication systems, and data-driven applications, I enjoy working across the stack — from system architecture and API design to the user-facing experience.
              </span>
            </p>
            <p className="flex items-start gap-3 pl-8 md:pl-9">
              <span>
                Beyond engineering, I&apos;ve contributed to community-driven and NGO initiatives, with a strong interest in open-source development and technology that creates meaningful impact. I&apos;m continuously exploring the evolving AI ecosystem, distributed systems, and next-generation interactive applications.
              </span>
            </p>
            <p className="flex items-start gap-3 pl-8 md:pl-9 font-medium text-slate-800">
              <span>
                My goal is simple: build technology that goes beyond experimentation and delivers measurable value.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-5 md:p-6 bg-[#e2e8f0] rounded-3xl shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] border border-white/40 transition-all"
              >
                <div className="text-4xl font-extrabold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-center"
          >
            <a
              href="https://param20h.me/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-[#e2e8f0] px-8 py-3.5 text-sm font-bold text-slate-800 shadow-[6px_6px_14px_rgba(163,177,198,0.55),-6px_-6px_14px_rgba(255,255,255,0.95)] hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] active:scale-95 transition-all"
            >
              Visit My Blog ↗
            </a>
          </motion.div>
        </Card>
      </div>
    </Section>
  );
}
