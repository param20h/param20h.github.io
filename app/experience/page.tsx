import Experience from "@/components/sections/Experience";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

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
