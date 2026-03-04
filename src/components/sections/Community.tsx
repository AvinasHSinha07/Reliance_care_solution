import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, CheckCircle2, Star } from "lucide-react";

export function Community() {
  return (
    <section className="py-24 md:py-32 bg-[#FFF8F0] relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-orange-100/50 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#E65100] text-sm font-bold tracking-wide shadow-sm">
                <Heart className="w-4 h-4 fill-current" />
                <span>Our Community Promise</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 font-heading leading-[1.1]">
                Where Care Feels <br />
                <span className="text-[#FF7865]">Like Family.</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                We are more than a healthcare provider. We are neighbors, friends, and advocates working together to build a world where everyone belongs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Compassionate Support",
                  "Listening & Understanding",
                  "Trusting Relationships",
                  "Celebrating Milestones"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#00766A] shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button className="bg-[#00766A] hover:bg-[#006056] text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-teal-900/10 w-full sm:w-auto">
                    Join Our Mission
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Visual Story */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] rotate-2 border-[8px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2068&auto=format&fit=crop" 
                  alt="Caregiver holding hands with senior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFA801] fill-current" />
                    ))}
                  </div>
                  <p className="font-medium italic text-lg leading-relaxed">
                    "They treat my mother with such dignity and love. It truly feels like family."
                  </p>
                  <p className="mt-2 font-bold text-sm opacity-80">— Sarah M., Family Member</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFA801] rounded-full blur-[60px] opacity-30" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00766A] rounded-full blur-[60px] opacity-30" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
