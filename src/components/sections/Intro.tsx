import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export function Intro() {
  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5]">
              <img 
                src="https://i.ibb.co.com/YTFVtKLX/loved-one-image.webp" 
                alt="Caregiver and patient connection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-60" />
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-10 -right-4 md:bottom-10 md:-right-12 w-[90%] md:w-2/3 bg-white p-8 rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl border-l-4 border-[#FFA801]">
              <Quote className="w-8 h-8 text-[#FFA801] mb-4 opacity-50" />
              <p className="text-gray-900 font-medium text-lg leading-relaxed italic font-heading">
                "They didn't just help me heal. They helped me live with dignity."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                   <img src="https://i.pravatar.cc/100?img=12" alt="Patient" />
                </div>
                <div>
                   <p className="text-sm font-bold text-teal-900">Sarah Jenkins</p>
                   <p className="text-xs text-gray-500">Patient's Daughter</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#00766A]/20 rounded-full -z-10" />
          </motion.div>

          {/* Right: Typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3">
               <div className="w-12 h-[1px] bg-[#FFA801]" />
               <span className="text-[#00766A] font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] font-heading">
              Redefining what it means to be <span className="text-[#00766A]">cared for.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                At Reliance Care Solutions, we believe healthcare is more than a service—it’s a relationship. It’s about seeing the person behind the patient and understanding that true well-being comes from dignity, independence, and connection.
              </p>
              <p>
                Whether it's daily living assistance, specialized therapy, or youth support programs, our approach is simple: we treat your family like our own.
              </p>
            </div>
            
            <div className="pt-6">
              <Link to="/#about">
                <div className="group inline-flex items-center gap-2 text-[#00766A] font-semibold text-lg cursor-pointer">
                  <span className="border-b-2 border-[#00766A]/20 group-hover:border-[#FFA801] transition-colors pb-1">Read Our Full Story</span>
                  <div className="w-8 h-8 rounded-full bg-[#00766A]/10 flex items-center justify-center group-hover:bg-[#FFA801] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
