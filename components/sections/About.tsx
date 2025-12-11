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
            <p className="text-white/60 text-xl">Python Developer • AI Enthusiast • Web Dev</p>
          </div>

          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faRocket} className="text-primary-400 mt-1 text-xl flex-shrink-0" />
              <span>
                Passionate <strong className="text-primary-400">Python Developer</strong> from{" "}
                <strong className="text-primary-400">Lovely Professional University</strong> specializing in cutting-edge technologies.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faLightbulb} className="text-accent-400 mt-1 text-xl flex-shrink-0" />
              <span>
                Expert in <strong className="text-accent-400">AI/ML, Web3 Blockchain, and Game Development</strong>{" "}
                with real-world experience in NGO projects and innovative solutions.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faBullseye} className="text-primary-400 mt-1 text-xl flex-shrink-0" />
              <span>
                Currently developing <strong className="text-primary-400">AI Financial Systems</strong> and exploring{" "}
                <strong className="text-accent-400">Unity Web3 Gaming</strong> - always pushing the boundaries of technology.
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
        </Card>
      </div>
    </Section>
  );
}
