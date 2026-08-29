import Services from "@/components/sections/Services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

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
