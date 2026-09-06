import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Professional Experience | Paramjit Singh",
  description: "Explore Paramjit Singh's professional journey — full-stack development roles, AI/ML engineering, and freelance work. 2+ years building scalable applications with React, Next.js, Node.js, Python, and more.",
  openGraph: {
    title: "Professional Experience | Paramjit Singh",
    description: "2+ years of professional experience in Full Stack Development, AI Engineering, and freelance software development.",
    url: "https://param20h.me/experience",
    images: [{ url: "https://param20h.me/media/profile.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://param20h.me/experience" },
};

export default function ExperiencePage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden pt-24">
            <BackgroundEffects />
            <Navigation />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <Experience />
            </div>
            <Footer />
        </main>
    );
}
