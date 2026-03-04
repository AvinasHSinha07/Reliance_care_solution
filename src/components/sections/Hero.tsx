import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#00766A] overflow-hidden pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#008c7e] rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#005c53] rounded-full blur-[100px] opacity-60" />
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-6 h-6 rounded-full border border-teal-900 bg-gray-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                   </div>
                 ))}
              </div>
              <span className="text-white/90 text-sm font-medium pl-2">Trusted by 500+ Families</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight font-heading">
              Care that feels <br />
              <span className="text-[#FFA801]">like family.</span>
            </h1>

            <p className="text-xl text-teal-50/90 leading-relaxed max-w-lg font-light">
              Professional, compassionate home health care designed around your life. We bring peace of mind directly to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/#contact">
                <Button className="h-14 px-8 text-lg rounded-full bg-[#FF7865] hover:bg-[#E66A5A] text-white shadow-xl shadow-coral-900/20 transition-all hover:-translate-y-1 w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all bg-transparent w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm font-medium text-teal-100/80 border-t border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FFA801]" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFA801]" />
                <span>24/7 Availability</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 border-[8px] border-white/10 aspect-[4/5] lg:aspect-square max-w-md mx-auto lg:max-w-full">
              <img 
                src="https://i.ibb.co.com/9HCkNK67/banner-reliance-care.webp" 
                alt="Caregiver helping senior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00766A]/60 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00766A] flex items-center justify-center text-white">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-[#00766A] font-bold text-lg">#1 Rated Service</p>
                    <p className="text-gray-500 text-sm">In Northwest Ohio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FFA801] rounded-full blur-[60px] opacity-40 z-0" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#FF7865] rounded-full blur-[60px] opacity-40 z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
