"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import * as SimpleIcons from "simple-icons";

// Using simple-icons for official brand logos
const skills = [
  // Core Languages
  { name: "Python", icon: "siPython" },
  { name: "C++", icon: "siCplusplus" },
  { name: "C", icon: "siC" },
  { name: "JavaScript", icon: "siJavascript" },
  { name: "TypeScript", icon: "siTypescript" },
  { name: "Go", icon: "siGo" },
  { name: "Java", icon: "siOpenjdk" },
  
  // Web Frontend
  { name: "HTML5", icon: "siHtml5" },
  { name: "CSS3", icon: "siCss" },
  { name: "Tailwind CSS", icon: "siTailwindcss" },
  { name: "React", icon: "siReact" },
  { name: "Next.js", icon: "siNextdotjs" },
  { name: "React Native", icon: "siReact" },
  
  // Backend & APIs
  { name: "Node.js", icon: "siNodedotjs" },
  { name: "Express", icon: "siExpress" },
  { name: "FastAPI", icon: "siFastapi" },
  { name: "Flask", icon: "siFlask" },
  
  // Databases
  { name: "MongoDB", icon: "siMongodb" },
  { name: "PostgreSQL", icon: "siPostgresql" },
  { name: "MySQL", icon: "siMysql" },
  
  // Data Science & ML
  { name: "TensorFlow", icon: "siTensorflow" },
  { name: "PyTorch", icon: "siPytorch" },
  { name: "Keras", icon: "siKeras" },
  { name: "OpenCV", icon: "siOpencv" },
  { name: "NumPy", icon: "siNumpy" },
  { name: "Pandas", icon: "siPandas" },
  { name: "Matplotlib", icon: "siPlotly" },
  { name: "Scikit-learn", icon: "siScikitlearn" },
  { name: "Jupyter", icon: "siJupyter" },
  { name: "Anaconda", icon: "siAnaconda" },
  { name: "Streamlit", icon: "siStreamlit" },
  
  // DevOps & Cloud
  { name: "Git", icon: "siGit" },
  { name: "GitHub", icon: "siGithub" },
  { name: "Docker", icon: "siDocker" },
  { name: "AWS", icon: "siAmazon" },
  { name: "Google Cloud", icon: "siGooglecloud" },
  { name: "Jenkins", icon: "siJenkins" },
  { name: "Cloudflare", icon: "siCloudflare" },
  
  // Tools & Platforms
  { name: "Linux", icon: "siLinux" },
  { name: "Kali Linux", icon: "siKalilinux" },
  { name: "PowerShell", icon: "siWindowsterminal" },
  { name: "NPM", icon: "siNpm" },
  { name: "Yarn", icon: "siYarn" },
  { name: "Postman", icon: "siPostman" },
  { name: "VS Code", icon: "siVisualstudio" },
  { name: "Netlify", icon: "siNetlify" },
  { name: "Discord", icon: "siDiscord" },
  { name: "Canva", icon: "siCanva" },
  { name: "Figma", icon: "siFigma" },
  { name: "Markdown", icon: "siMarkdown" },
  
  // Game Development
  { name: "Unity", icon: "siUnity" },
  { name: "Unreal Engine", icon: "siUnrealengine" },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {skills.map((skill, index) => {
          // Get the icon from simple-icons
          const iconData = (SimpleIcons as any)[skill.icon];
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ y: -10, scale: 1.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-all group cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-3 group-hover:scale-110 transition-transform flex items-center justify-center">
                  {iconData && (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                      fill={`#${iconData.hex}`}
                    >
                      <title>{iconData.title}</title>
                      <path d={iconData.path} />
                    </svg>
                  )}
                </div>
                <div className="font-semibold text-sm md:text-base text-white/90 group-hover:text-primary-400 transition-colors">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
