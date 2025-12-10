import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_smart_farm_with_drones_and_data_overlays.png";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Smart Agriculture Field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container-width relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next Gen Farming Tech
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-foreground">
            AI-Powered <br />
            <span className="text-gradient">Precision Farming</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Revolutionizing agriculture with Machine Learning, Computer Vision, and real-time climate data to optimize yields and ensure sustainability.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white text-lg shadow-lg shadow-primary/25 group">
              Live Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-primary/20 hover:bg-primary/5 text-foreground text-lg">
              Download Report
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Abstract animated elements on the right (optional, or just empty space to show BG) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative h-[600px]"
        >
          {/* We can add floating cards or data points here later if needed */}
        </motion.div>
      </div>
    </section>
  );
}
