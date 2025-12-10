import { motion } from "framer-motion";
import { Github, Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Alex Chen", role: "ML Engineer & Lead", links: ["#", "#"] },
  { name: "Sarah Miller", role: "Frontend Developer", links: ["#", "#"] },
  { name: "James Wilson", role: "Backend Architect", links: ["#", "#"] },
  { name: "Emily Davis", role: "Data Scientist", links: ["#", "#"] },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground">
            The brilliant minds behind AgriVision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[3/4] mb-4">
                 {/* Placeholder for real images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 group-hover:bg-primary/10 transition-colors">
                    <User className="w-20 h-20 text-gray-400" />
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-display font-bold text-lg text-foreground">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
