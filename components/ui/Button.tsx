"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#e2e8f0] text-slate-800 shadow-[6px_6px_14px_rgba(163,177,198,0.55),-6px_-6px_14px_rgba(255,255,255,0.95)] hover:shadow-[8px_8px_18px_rgba(163,177,198,0.65),-8px_-8px_18px_rgba(255,255,255,1)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] border border-white/60",
    secondary:
      "bg-slate-900 !text-white shadow-[6px_6px_14px_rgba(163,177,198,0.6),-4px_-4px_10px_rgba(255,255,255,0.85)] hover:bg-slate-800 hover:shadow-[8px_8px_18px_rgba(163,177,198,0.7),-4px_-4px_12px_rgba(255,255,255,0.95)] active:scale-95 border border-slate-700/40",
    outline:
      "bg-[#e2e8f0] text-slate-700 shadow-[inset_3px_3px_6px_rgba(163,177,198,0.55),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] border border-white/40",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-3.5 text-sm",
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={cn(
        "rounded-full font-bold uppercase tracking-wider transition-all duration-300",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
