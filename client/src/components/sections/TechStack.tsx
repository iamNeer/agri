import { motion } from "framer-motion";

const stacks = [
  { category: "Frontend", techs: ["React.js", "Flutter", "Tailwind CSS", "Redux"] },
  { category: "Backend", techs: ["Node.js", "Django", "Express", "REST APIs"] },
  { category: "Machine Learning", techs: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"] },
  { category: "Database & Cloud", techs: ["PostgreSQL", "Firebase", "AWS", "Docker"] },
  { category: "External APIs", techs: ["OpenWeather API", "NASA POWER", "AgroMonitoring"] },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Built with modern, scalable technologies to ensure performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <h3 className="font-display font-bold text-xl mb-4 border-b border-white/20 pb-2">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
