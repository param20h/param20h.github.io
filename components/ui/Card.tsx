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
      whileHover={hover ? { y: -4 } : {}}
      className={cn(
        "bg-[#e2e8f0] rounded-3xl p-8 transition-all duration-300",
        "shadow-[12px_12px_24px_rgba(163,177,198,0.55),-12px_-12px_24px_rgba(255,255,255,0.95)]",
        "border border-white/50",
        hover && "hover:shadow-[16px_16px_32px_rgba(163,177,198,0.65),-16px_-16px_32px_rgba(255,255,255,1)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
