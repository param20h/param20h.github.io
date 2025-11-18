"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faJava,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faAws,
  faLinux,
  faDocker,
  faFigma,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faBrain,
  faDatabase,
  faCloud,
  faChartLine,
  faGamepad,
  faLink,
  faGlobe,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "Python", icon: faPython, color: "#3776AB" },
  { name: "C++", icon: faCode, color: "#00599C" },
  { name: "Java", icon: faJava, color: "#007396" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "Next.js", icon: faCode, color: "#000000" },
  { name: "Node.js", icon: faNodeJs, color: "#339933" },
  { name: "TensorFlow", icon: faBrain, color: "#FF6F00" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
  { name: "GitHub", icon: faGithub, color: "#181717" },
  { name: "AWS", icon: faAws, color: "#FF9900" },
  { name: "Linux", icon: faLinux, color: "#FCC624" },
  { name: "Docker", icon: faDocker, color: "#2496ED" },
  { name: "MongoDB", icon: faDatabase, color: "#47A248" },
  { name: "PostgreSQL", icon: faDatabase, color: "#4169E1" },
  { name: "GraphQL", icon: faChartLine, color: "#E10098" },
  { name: "TypeScript", icon: faCode, color: "#3178C6" },
  { name: "Tailwind", icon: faBolt, color: "#06B6D4" },
  { name: "Figma", icon: faFigma, color: "#F24E1E" },
  { name: "Unity", icon: faUnity, color: "#000000" },
  { name: "Blockchain", icon: faLink, color: "#00D4FF" },
  { name: "Web3", icon: faGlobe, color: "#F16822" },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.02 }}
            whileHover={{ y: -10, scale: 1.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-all group cursor-pointer"
          >
            <div className="text-center">
              <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  style={{ color: skill.color }}
                  className="group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                />
              </div>
              <div className="font-semibold text-sm md:text-base text-white/90 group-hover:text-primary-400 transition-colors">
                {skill.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
