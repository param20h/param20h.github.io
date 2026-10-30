import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Engineering & Leadership Experience | Paramjit Singh",
  description: "Explore Paramjit Singh's engineering career — backend microservices at FounDev Studio, AI model evaluation at Outlier, and cloud community leadership with AWS Cloud Club.",
  openGraph: {
    title: "Engineering & Leadership Experience | Paramjit Singh",
    description: "Backend microservices, LLM evaluation, and developer advocacy. Track record across production software engineering and technical communities.",
    url: "https://param20h.me/experience",
    images: [{ url: "https://param20h.me/media/circle-photo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Leadership Experience | Paramjit Singh",
    description: "Backend microservices, LLM evaluation, and developer advocacy. Track record across production software engineering and technical communities.",
    images: ["https://param20h.me/media/circle-photo.png"],
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
