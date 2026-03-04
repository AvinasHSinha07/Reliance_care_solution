import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Sparkles, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function YouthPrograms() {
  return (
    <section className="py-24 md:py-32 bg-[#FFF5F5] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coral-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-coral-200 text-[#FF7865] text-sm font-bold tracking-wide mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Empowering Future Leaders</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-heading leading-[1.1]"
          >
            Empowering the <br />
            <span className="text-[#FF7865]">Next Generation.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light"
          >
            We provide safe havens, mentorship, and therapeutic support for youth. Because every young person deserves a foundation of stability and love.
          </motion.p>
        </div>

        {/* Hero Image & Cards */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] relative mb-12 md:mb-24"
          >
            <img 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop" 
              alt="Happy diverse youth group" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Building Brighter Futures</h3>
              <p className="text-white/90">Creating pathways for success through dedicated support and community.</p>
            </div>
          </motion.div>

          {/* Overlapping Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:-mt-32 relative z-20 px-4 md:px-12">
            {[
              {
                title: "Youth Group Homes",
                desc: "24/7 therapeutic residential care building life skills.",
                icon: Users,
                color: "bg-white",
                accent: "text-[#FF7865]",
                border: "border-coral-100"
              },
              {
                title: "Emergency Respite",
                desc: "Immediate crisis stabilization and short-term support.",
                icon: Shield,
                color: "bg-[#FF7865]",
                accent: "text-white",
                border: "border-[#FF7865]",
                dark: true
              },
              {
                title: "Therapeutic Mentoring",
                desc: "One-on-one guidance from positive role models.",
                icon: Star,
                color: "bg-white",
                accent: "text-[#FFA801]",
                border: "border-amber-100"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className={`${item.color} rounded-[2rem] p-8 shadow-xl ${item.border} border flex flex-col justify-between min-h-[280px] group hover:-translate-y-2 transition-transform duration-300`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.dark ? 'bg-white/20 text-white' : 'bg-gray-50 ' + item.accent} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${item.dark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`leading-relaxed ${item.dark ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
                
                <div className={`mt-6 flex items-center gap-2 font-bold ${item.dark ? 'text-white' : item.accent}`}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16 md:mt-20">
            <Link to="/contact">
              <Button className="bg-[#FF7865] hover:bg-[#E66A5A] text-white rounded-full px-10 h-14 text-lg shadow-lg shadow-coral-500/20 transition-transform hover:scale-105">
                Inquire About Youth Services
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
