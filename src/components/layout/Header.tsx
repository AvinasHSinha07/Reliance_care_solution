import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/#about" },
  { name: "Careers", href: "/#careers" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-gray-100" 
          : "bg-white py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        {/* Logo - Always Original Colors */}
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <img
            src="https://i.ibb.co.com/r20Dh3ZH/logoreliancecare.webp"
            alt="Reliance Care Solutions Logo"
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-base font-medium text-gray-600 hover:text-[#00766A] transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7865] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
            <div className="hidden lg:flex flex-col items-end mr-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Need help?</span>
              <span className="text-sm font-bold text-[#00766A]">24/7 Support</span>
            </div>
            <Button 
              className="bg-[#00766A] hover:bg-[#006056] text-white rounded-full px-8 h-12 shadow-lg shadow-teal-900/10 transition-all hover:shadow-teal-900/20 hover:-translate-y-0.5 text-base"
            >
              Contact Us
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-800 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl border-b border-gray-100 p-6 pt-28 md:hidden flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between text-lg font-medium text-gray-800 p-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              ))}
              <Button className="w-full bg-[#00766A] text-white h-14 text-lg rounded-xl mt-4">
                Contact Us
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
