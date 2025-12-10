import { motion } from "framer-motion";
import architectureImg from "@assets/generated_images/system_architecture_diagram_for_smart_farming.png";
import { CheckCircle2 } from "lucide-react";

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl transform -rotate-2 scale-105" />
            <img
              src={architectureImg}
              alt="System Architecture"
              className="relative rounded-3xl shadow-2xl border border-border w-full"
            />
          </motion.div>

          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                System Architecture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A robust, scalable architecture designed to handle real-time data processing and complex ML inference.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Data Acquisition",
                    desc: "IoT sensors and user inputs collect soil, weather, and image data."
                  },
                  {
                    title: "Processing Layer",
                    desc: "Data is preprocessed and normalized in the cloud backend (Node.js/Django)."
                  },
                  {
                    title: "ML Inference Engine",
                    desc: "TensorFlow models analyze data to generate predictions and classifications."
                  },
                  {
                    title: "Client Application",
                    desc: "Results are delivered to farmers via the cross-platform Flutter/React app."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
