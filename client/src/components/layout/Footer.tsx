import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 border-t border-white/10">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">
              Agri<span className="text-primary">Vision</span>
            </span>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 AgriVision Project. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
