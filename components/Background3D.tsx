"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background3D() {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Interactive Parallax Container */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          x: mouse.x * -60,
          y: mouse.y * -60,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* 3D Perspective Grid - Floor */}
        <div className="absolute bottom-0 left-[-50%] w-[200%] h-[70vh]" style={{ perspective: "1000px" }}>
          <motion.div 
            animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            className="w-full h-full"
            style={{
              transform: "rotateX(75deg)",
              transformOrigin: "top center",
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)"
            }}
          />
        </div>

        {/* 3D Perspective Grid - Ceiling */}
        <div className="absolute top-0 left-[-50%] w-[200%] h-[50vh]" style={{ perspective: "1000px" }}>
          <motion.div 
            animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            className="w-full h-full"
            style={{
              transform: "rotateX(-75deg)",
              transformOrigin: "bottom center",
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
              maskImage: "linear-gradient(to top, transparent 0%, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 60%, transparent 100%)"
            }}
          />
        </div>

      </motion.div>
    </div>
  );
}
