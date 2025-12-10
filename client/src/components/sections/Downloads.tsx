import { motion } from "framer-motion";
import { FileText, Github, Database, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  { icon: FileText, title: "Project Report", desc: "Complete documentation PDF", action: "Download PDF" },
  { icon: BookOpen, title: "Research Paper", desc: "Published methodology", action: "Read Paper" },
  { icon: Database, title: "Dataset", desc: "Kaggle / Mendeley Data", action: "View Data" },
  { icon: Github, title: "Source Code", desc: "Full repository", action: "Visit Repo" },
];

export default function Downloads() {
  return (
    <section id="downloads" className="py-20 bg-muted/50 border-y border-border">
      <div className="container-width">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-border text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
              <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 text-primary">
                {item.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
