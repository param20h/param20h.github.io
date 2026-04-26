"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faLightbulb, faBullseye } from "@fortawesome/free-solid-svg-icons";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "24+" },
];

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-white/5">
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-4xl font-bold"
            >
              P
            </motion.div>
            <h3 className="text-3xl font-bold mb-2">Paramjit Singh</h3>
            <p className="text-white/60 text-xl">Python Developer • AI Systems Builder • Web Developer</p>
          </div>

          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faRocket} className="text-primary-400 mt-1 text-xl flex-shrink-0" />
              <span>
                I&apos;m a developer from <strong className="text-primary-400">Lovely Professional University</strong> focused on building intelligent systems that solve real problems, not just demos that look good on GitHub.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faLightbulb} className="text-accent-400 mt-1 text-xl flex-shrink-0" />
              <span>
                My work sits at the intersection of <strong className="text-accent-400">AI/ML and backend engineering</strong>. From designing RAG-based AI systems to building production-focused tools, I enjoy turning complex ideas into working products.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faBullseye} className="text-primary-400 mt-1 text-xl flex-shrink-0" />
              <span>
                I&apos;ve also worked closely with NGO initiatives where impact matters more than theory. Currently building <strong className="text-primary-400">AI-driven financial systems</strong> and experimenting with <strong className="text-accent-400">next-gen interactive applications</strong>, always chasing the edge where engineering meets imagination.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-primary-500/20 hover:border-primary-500/50 transition-all"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
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
              className="inline-flex items-center gap-2 rounded-xl border border-primary-500/40 bg-primary-500/10 px-6 py-3 text-base font-semibold text-primary-300 transition-all hover:border-primary-500 hover:bg-primary-500/20 hover:text-primary-200"
            >
              Visit My Blog Page
            </a>
          </motion.div>
        </Card>
      </div>
    </Section>
  );
}
