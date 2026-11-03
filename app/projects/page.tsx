import type { Metadata } from "next";
import AllProjects from "@/components/sections/AllProjects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "All Projects & Systems Directory | Paramjit Singh",
  description:
    "Explore the complete engineering archive of 17+ projects by Paramjit Singh: agentic AI workflows (LangGraph.js), high-concurrency database systems (MongoDB $expr, PostgreSQL RLS), ML research, and production web platforms.",
  openGraph: {
    title: "All Projects & Systems Directory | Paramjit Singh",
    description:
      "Complete catalog of 17+ production web platforms, AI agents, machine learning research, and backend systems. Filter by domain and tech stack.",
    url: "https://param20h.me/projects",
    images: [
      {
        url: "https://param20h.me/media/circle-photo.png",
        width: 1200,
        height: 630,
        alt: "Paramjit Singh - All Projects & Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Projects & Systems Directory | Paramjit Singh",
    description:
      "Complete catalog of 17+ production web platforms, AI agents, machine learning research, and backend systems. Filter by domain and tech stack.",
    images: ["https://param20h.me/media/circle-photo.png"],
  },
  alternates: { canonical: "https://param20h.me/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24">
      <BackgroundEffects />
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AllProjects />
      </div>
      <Footer />
    </main>
  );
}
