"use client";

import { motion } from "framer-motion";
import { ExternalLink, Download, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

export default function ResumeViewer() {
  const resumePath = "/media/Paramjit SIngh resume.pdf";

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glassmorphism p-6 rounded-2xl border border-white/10"
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all border border-white/10"
            title="Back to Home"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <FileText className="text-primary-400" size={20} />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Paramjit Singh <span className="gradient-text">— Resume</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Python Developer | AI/ML Specialist | Web3 & Full Stack Engineer
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-xs sm:text-sm font-medium text-white transition-all flex items-center gap-2"
          >
            <ExternalLink size={14} />
            <span>Open in New Tab</span>
          </a>

          <a
            href={resumePath}
            download
            className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/30 rounded-full text-xs sm:text-sm font-semibold text-white transition-all flex items-center gap-2"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </motion.div>

      {/* Embedded PDF Viewer Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full h-[75vh] sm:h-[82vh] rounded-2xl glassmorphism border border-white/10 overflow-hidden relative shadow-2xl bg-black/40"
      >
        <object
          data={`${resumePath}#toolbar=1`}
          type="application/pdf"
          className="w-full h-full border-none"
        >
          <iframe
            src={`${resumePath}#toolbar=1`}
            className="w-full h-full border-none"
            title="Paramjit Singh Resume PDF"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4">
              <FileText size={48} className="text-primary-400 animate-bounce" />
              <p className="text-white/80">
                Your browser does not support inline PDF preview.
              </p>
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary-500 text-white rounded-full text-sm font-semibold hover:bg-primary-600 transition-all"
              >
                View Resume PDF directly
              </a>
            </div>
          </iframe>
        </object>
      </motion.div>
    </div>
  );
}
