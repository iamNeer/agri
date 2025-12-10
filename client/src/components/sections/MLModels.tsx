import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import soilAnalysisImg from "@assets/generated_images/digital_soil_analysis_concept.png";

export default function MLModels() {
  const models = [
    {
      name: "Soil Classifier",
      algo: "Convolutional Neural Network (CNN)",
      accuracy: "96.5%",
      desc: "Classifies soil images into 5 major types to determine suitability.",
      tags: ["TensorFlow", "Image Processing"]
    },
    {
      name: "Crop Recommendation",
      algo: "Random Forest / XGBoost",
      accuracy: "99.2%",
      desc: "Analyzes N-P-K values, temperature, and rainfall to suggest crops.",
      tags: ["Scikit-learn", "Tabular Data"]
    },
    {
      name: "Disease Detection",
      algo: "MobileNetV2 / ResNet50",
      accuracy: "94.8%",
      desc: "Identifies plant diseases from leaf images in milliseconds.",
      tags: ["Transfer Learning", "Keras"]
    }
  ];

  return (
    <section id="ml-models" className="py-24 bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Under The Hood: ML Models
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage state-of-the-art architectures to ensure precise predictions and reliable analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
           <div className="space-y-6">
             {models.map((model, index) => (
               <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                 <Card className="hover:border-primary/50 transition-colors">
                   <CardHeader>
                     <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-xl font-bold">{model.name}</CardTitle>
                            <p className="text-primary font-medium text-sm mt-1">{model.algo}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                            Acc: {model.accuracy}
                        </Badge>
                     </div>
                   </CardHeader>
                   <CardContent>
                     <p className="text-muted-foreground mb-4">{model.desc}</p>
                     <div className="flex gap-2">
                       {model.tags.map(tag => (
                         <span key={tag} className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-foreground/70">
                           {tag}
                         </span>
                       ))}
                     </div>
                   </CardContent>
                 </Card>
               </motion.div>
             ))}
           </div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl"
           >
              <img 
                src={soilAnalysisImg} 
                alt="ML Analysis Visualization" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-2xl mb-2">Real-time Inference</h3>
                <p className="text-gray-200">Our models are optimized for edge devices, allowing offline processing directly on the farmer's smartphone.</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
