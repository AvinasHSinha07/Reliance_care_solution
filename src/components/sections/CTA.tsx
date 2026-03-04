import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[#00766A] font-bold tracking-wider uppercase text-sm mb-6 block">Start Your Journey</span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-heading tracking-tight leading-tight">
            Ready to experience <br/>
            <span className="relative inline-block text-[#00766A]">
              better care?
              <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#FFA801]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Contact us today for a free consultation. Let's discuss how we can support you and your loved ones with dignity and respect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl rounded-full bg-[#FF7865] hover:bg-[#E66A5A] text-white shadow-xl shadow-coral-500/20 transition-all hover:-translate-y-1 w-full sm:w-auto">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl rounded-full border-gray-300 text-gray-600 hover:bg-white hover:text-[#00766A] hover:border-[#00766A] transition-all w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-teal-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-coral-50 rounded-full blur-3xl opacity-60 translate-x-1/3 translate-y-1/3 pointer-events-none" />
    </section>
  );
}
