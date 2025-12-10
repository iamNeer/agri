import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Features", to: "features" },
    { name: "Architecture", to: "architecture" },
    { name: "Tech Stack", to: "tech-stack" },
    { name: "Team", to: "team" },
    { name: "Demo", to: "demo" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-width flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="bg-primary p-1.5 rounded-lg group-hover:scale-105 transition-transform">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-foreground">
            Agri<span className="text-primary">Vision</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border absolute w-full left-0 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground py-2 border-b border-border/50 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full bg-primary text-white rounded-full mt-2">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
