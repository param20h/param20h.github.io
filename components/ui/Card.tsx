"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      className={cn(
        "bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl",
        "hover:border-primary-500/50 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
