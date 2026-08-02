import type { Metadata } from "next";
import ResumeViewer from "@/components/sections/ResumeViewer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Resume | Paramjit Singh - Python Developer & AI/ML Specialist",
  description: "View Paramjit Singh's resume online. Python Developer, Artificial Intelligence & Machine Learning Expert, Web3 Blockchain Developer from LPU.",
};

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24">
      <BackgroundEffects />
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-16">
        <ResumeViewer />
      </div>
      <Footer />
    </main>
  );
}
