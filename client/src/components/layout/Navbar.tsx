import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Architecture", href: "/architecture" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Team", href: "/team" },
    { name: "Demo", href: "/demo" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || location !== "/" ? "glass py-2 border-b border-border/50" : "bg-transparent py-4"
      }`}
    >
      <div className="container-width flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-foreground">
              Agri<span className="text-primary">Vision</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span 
                className={`text-sm font-medium cursor-pointer transition-colors relative ${
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
                  />
                )}
              </span>
            </Link>
          ))}
          <Link href="/demo">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full px-6">
              Get Started
            </Button>
          </Link>
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
                <Link key={link.name} href={link.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium py-2 border-b border-border/50 ${
                      location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <Link href="/demo">
                 <Button className="w-full bg-primary text-white rounded-full mt-2" onClick={() => setIsOpen(false)}>
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
