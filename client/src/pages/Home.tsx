import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import KeyFeatures from "@/components/sections/KeyFeatures";
import Architecture from "@/components/sections/Architecture";
import TechStack from "@/components/sections/TechStack";
import Team from "@/components/sections/Team";
import Demo from "@/components/sections/Demo";
import MLModels from "@/components/sections/MLModels";
import Downloads from "@/components/sections/Downloads";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <KeyFeatures />
        <Architecture />
        <TechStack />
        <Demo />
        <MLModels />
        <Team />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
