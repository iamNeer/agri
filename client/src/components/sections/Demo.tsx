import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, PlayCircle } from "lucide-react";
import demoImg from "@assets/generated_images/mobile_app_dashboard_for_smart_farming.png";

export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              See It In Action
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the power of precision farming right in your pocket. Our user-friendly application provides real-time insights and recommendations instantly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <ExternalLink className="mr-2 w-5 h-5" />
                Web Demo
              </Button>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-sm mt-8">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <PlayCircle className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold">Watch Video Demo</h4>
                    <p className="text-sm text-muted-foreground">Walkthrough of key features (2:45)</p>
                 </div>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg w-full flex items-center justify-center relative overflow-hidden group cursor-pointer">
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                 <PlayCircle className="w-16 h-16 text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
             {/* Decorative circles */}
            <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            
            <img 
              src={demoImg} 
              alt="App Demo" 
              className="relative z-10 max-h-[600px] drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
