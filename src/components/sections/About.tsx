import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-coral-100 rounded-full z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-50 rounded-full z-0" />
            <img
              src="https://i.ibb.co.com/YTFVtKLX/loved-one-image.webp"
              alt="Caregiver with loved one"
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Certified Care</p>
                  <p className="text-xs text-gray-500">Professional & Trusted</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Dedicated to Providing <span className="text-teal-600">Exceptional Care</span> for Your Family
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Reliance Care Solutions, we understand that finding the right care for your loved one 
              is a significant decision. Our mission is to provide compassionate, professional, and 
              personalized support that empowers individuals to live their best lives in the comfort 
              of their own homes.
            </p>
            <div className="space-y-4 pt-2">
              {[
                "Personalized Care Plans",
                "Compassionate & Trained Staff",
                "24/7 Support Available",
                "Community Integration Focus"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-coral-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-coral-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
