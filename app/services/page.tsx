import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Client Platforms & Services | Paramjit Singh",
  description: "Production web platforms, API microservices, and AI integrations built for real clients by Paramjit Singh. Case studies include Auto Care On Wheels, ZenithFlow, and Star Computer Center.",
  openGraph: {
    title: "Client Platforms & Services | Paramjit Singh",
    description: "Production web platforms, API microservices, and AI integrations shipped for real businesses. View live case studies and outcomes.",
    url: "https://param20h.me/services",
    images: [
      { url: "https://param20h.me/media/zenith/1.png", width: 1200, height: 800, alt: "ZenithFlow - Built by Paramjit Singh" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Platforms & Services | Paramjit Singh",
    description: "Production web platforms, API microservices, and AI integrations shipped for real businesses. View live case studies and outcomes.",
    images: ["https://param20h.me/media/zenith/1.png"],
  },
  alternates: { canonical: "https://param20h.me/services" },
};

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden pt-24 ">
            <BackgroundEffects />
            <Navigation />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <Services />
            </div>
            <Footer />
        </main>
    );
}
