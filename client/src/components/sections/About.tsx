import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              About The Project
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              AgriVision represents a paradigm shift in modern agriculture. By integrating cutting-edge <span className="text-foreground font-semibold">Computer Vision</span> and <span className="text-foreground font-semibold">Machine Learning</span>, we provide farmers with actionable insights—from soil health analysis to disease detection. Our goal is to democratize precision farming, making it accessible, efficient, and sustainable for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { label: "Accuracy", value: "98.5%" },
              { label: "Crops Supported", value: "50+" },
              { label: "Response Time", value: "<2s" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
