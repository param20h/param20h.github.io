"use client";

import { motion, MotionProps } from "framer-motion";
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
    primary: "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-accent-500 hover:to-primary-500",
    secondary: "bg-white/10 text-white border-2 border-primary-500 hover:bg-primary-500/20",
    outline: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={cn(
        "rounded-full font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl",
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
