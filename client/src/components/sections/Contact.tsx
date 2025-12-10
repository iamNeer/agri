import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import type { InsertContactSubmission } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
  });

  const submitContact = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to send message. Please try again.");
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContact.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Interested in our research or want to collaborate? Reach out to us.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Department of Computer Science</h4>
                  <p className="text-muted-foreground">University of Technology, Science Campus<br />Building 4, Lab 202</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">research@agrivision-project.edu</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-border"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" data-testid="label-firstname">First Name</label>
                  <Input 
                    placeholder="John" 
                    {...register("firstName")}
                    data-testid="input-firstname"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" data-testid="label-lastname">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    {...register("lastName")}
                    data-testid="input-lastname"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" data-testid="label-email">Email</label>
                <Input 
                  placeholder="john@example.com" 
                  type="email" 
                  {...register("email")}
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" data-testid="label-message">Message</label>
                <Textarea 
                  placeholder="Tell us about your inquiry..." 
                  className="min-h-[120px]" 
                  {...register("message")}
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12"
                disabled={submitContact.isPending}
                data-testid="button-submit"
              >
                {submitContact.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
