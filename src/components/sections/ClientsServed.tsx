import { motion } from "motion/react";
import { CheckCircle2, MapPin, FileText, ShieldCheck } from "lucide-react";

export function ClientsServed() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#00766A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Stat */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block relative"
            >
              <h2 className="text-[8rem] md:text-[12rem] font-bold text-[#00766A]/5 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0">
                88 COUNTIES
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 relative z-10 font-heading">
                Certified Care Across <br />
                <span className="text-[#00766A]">All of Ohio.</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mt-6"
            >
              We are proudly certified with The Ohio Department of Developmental Disabilities, bringing compassionate support to every corner of the state.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Who We Serve (Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-[#00766A]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">Who We Serve</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    "Developmental Disabilities",
                    "Physical Disabilities",
                    "Senior Care Support",
                    "Cancer Care Support",
                    "Respite for Families",
                    "24/7 Complex Care"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100/50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#00766A]" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Waivers (Dark Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 bg-[#00766A] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decor */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#FFA801] backdrop-blur-sm">
                    <FileText className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Waiver Options</h3>
                </div>

                <p className="text-teal-100 mb-8 leading-relaxed">
                  We accept various waivers to make quality care accessible for your family.
                </p>

                <div className="space-y-3">
                  {["IO Waiver", "Level 1 Waiver", "SELF Waiver"].map((waiver, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/10 flex items-center justify-between group hover:bg-white/20 transition-colors cursor-default">
                      <span className="font-bold text-lg">{waiver}</span>
                      <CheckCircle2 className="w-5 h-5 text-[#FFA801] opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
