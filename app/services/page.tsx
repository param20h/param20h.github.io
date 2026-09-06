import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Freelance Services & Client Work | Paramjit Singh",
  description: "Hire Paramjit Singh for freelance web development, AI integration, and UI/UX design. Delivered projects include Auto Care On Wheels, ZenithFlow SaaS, and Star Computer Center. Full Stack React, Node.js, Next.js expert.",
  openGraph: {
    title: "Freelance Services & Client Work | Paramjit Singh",
    description: "Full-stack freelance developer specializing in Web Development, AI/LLM Integration, and UI/UX Design. View live client case studies.",
    url: "https://param20h.me/services",
    images: [
      { url: "https://param20h.me/media/zenith/1.png", width: 1200, height: 800, alt: "ZenithFlow - Built by Paramjit Singh" },
    ],
  },
  alternates: { canonical: "https://param20h.me/services" },
  keywords: [
    "Freelance Web Developer India", "Hire React Developer", "Next.js Freelancer",
    "Full Stack Developer for Hire", "AI Integration Developer", "Node.js Freelancer India",
    "Web App Development", "SaaS Developer", "Paramjit Singh Freelance",
  ],
};

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden pt-24 bg-black">
            <BackgroundEffects />
            <Navigation />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <Services />
            </div>
            <Footer />
        </main>
    );
}
