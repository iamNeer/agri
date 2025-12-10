import { motion } from "framer-motion";
import { ScanLine, Sprout, Bug, CloudSun, Droplets, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: ScanLine,
    title: "Soil Analysis",
    description: "Advanced computer vision algorithms to analyze soil texture, color, and composition for optimal crop selection.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Sprout,
    title: "Crop Recommendation",
    description: "Machine learning models that suggest the most profitable and suitable crops based on soil and environmental data.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Bug,
    title: "Disease Detection",
    description: "Instant identification of leaf diseases using deep learning CNNs, providing cure suggestions immediately.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: CloudSun,
    title: "Weather Integration",
    description: "Real-time weather forecasting and historical climate data analysis for precise farming schedules.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation",
    description: "AI-driven water management suggestions to prevent wastage and ensure optimal soil moisture levels.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Smartphone,
    title: "Mobile Dashboard",
    description: "Comprehensive mobile and web dashboard for monitoring farm health and receiving alerts on the go.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of tools designed to modernize every aspect of agricultural management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="font-display text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
