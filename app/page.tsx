"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import GitHubStats from "@/components/sections/GitHubStats";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <GitHubStats />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
