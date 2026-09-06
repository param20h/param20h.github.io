"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      setVisible(false);
      return;
    }

    // SVG is 6 seconds — trigger exit at 6.3s
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("intro-seen", "true");
    }, 6300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* The animated SVG centered */}
          <motion.img
            src="/media/starting.svg"
            alt="Intro animation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full object-contain max-w-2xl"
          />

          {/* Skip button — subtle, bottom right */}
          <button
            onClick={() => {
              setVisible(false);
              sessionStorage.setItem("intro-seen", "true");
            }}
            className="absolute bottom-8 right-8 text-white/30 hover:text-white/70 text-xs font-mono tracking-widest uppercase transition-colors duration-300"
          >
            skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
