import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#001F1B] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 border-b border-white/10 pb-16">
          <div className="text-center lg:text-left">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://i.ibb.co.com/4RxPfzx3/Reliance-Care-Solutions-Logo.webp"
                alt="Reliance Care Solutions Logo"
                className="h-20 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 max-w-md text-lg">
              Empowering lives through compassionate, professional home care.
            </p>
          </div>

          <div className="w-full max-w-md">
            <p className="text-white font-bold mb-4">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00766A] transition-all"
              />
              <Button className="bg-[#00766A] hover:bg-[#006056] text-white px-6">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-[#FFA801] transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#FFA801] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFA801] transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-[#FFA801] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services/home-health" className="hover:text-[#FFA801] transition-colors">Home Health</Link></li>
              <li><Link to="/services/youth-programs" className="hover:text-[#FFA801] transition-colors">Youth Programs</Link></li>
              <li><Link to="/services/respite" className="hover:text-[#FFA801] transition-colors">Respite Care</Link></li>
              <li><Link to="/services/transportation" className="hover:text-[#FFA801] transition-colors">Transportation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00766A] mt-1" />
                <span>3454 Oak Alley Ct., Suite 108, Toledo, OH 43606</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00766A]" />
                <span>419-704-0316</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00766A]" />
                <span>info@reliancecaresolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Reliance Care Solutions. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00766A] hover:text-white transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
