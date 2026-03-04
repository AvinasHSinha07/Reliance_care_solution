import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#00766A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFA801]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 text-white"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFA801] text-sm font-bold tracking-wide mb-6 backdrop-blur-sm">
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Let's Connect</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-[1.1]">
                Get in touch <br />
                <span className="text-[#FFA801]">with us today.</span>
              </h2>
              
              <p className="text-xl text-teal-100/90 leading-relaxed max-w-lg font-light">
                Have questions about our care services? Our compassionate team is ready to listen, answer your questions, and guide you through the process.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#FFA801] group-hover:text-teal-900 transition-all duration-300 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                  <a href="tel:419-704-0316" className="text-2xl font-bold text-[#FFA801] hover:text-white transition-colors block mb-1">
                    419-704-0316
                  </a>
                  <p className="text-teal-200 text-sm flex items-center gap-2">
                    <Clock className="w-3 h-3" /> Mon-Fri, 8am - 5pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#FFA801] group-hover:text-teal-900 transition-all duration-300 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                  <a href="mailto:info@reliancecaresolutions.com" className="text-xl font-medium text-white hover:text-[#FFA801] transition-colors block mb-1">
                    info@reliancecaresolutions.com
                  </a>
                  <p className="text-teal-200 text-sm">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#FFA801] group-hover:text-teal-900 transition-all duration-300 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Visit Our Office</h3>
                  <p className="text-teal-100 leading-relaxed">
                    3454 Oak Alley Ct., Suite 108<br />
                    Toledo, OH 43606
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/20 relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00766A] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00766A] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00766A] focus:border-transparent outline-none transition-all font-medium text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#00766A] focus:border-transparent outline-none transition-all font-medium text-gray-900 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Button className="w-full h-16 text-lg font-bold bg-[#FF7865] hover:bg-[#E66A5A] text-white rounded-xl shadow-lg shadow-coral-500/20 transition-transform hover:scale-[1.02]">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
