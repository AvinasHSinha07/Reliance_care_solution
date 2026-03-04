import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Clock, Sun, Users, Briefcase, Heart, Stethoscope, Car } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Respite Services",
    description: "Temporary relief for caregivers, ensuring loved ones receive quality care while you recharge.",
    icon: Clock,
    color: "bg-teal-50",
    accent: "text-teal-600",
    link: "/services/respite"
  },
  {
    title: "Adult Day Services",
    description: "Structured A.M. and P.M. programs offering social engagement and therapeutic activities.",
    icon: Sun,
    color: "bg-orange-50",
    accent: "text-orange-600",
    link: "/services/adult-day"
  },
  {
    title: "Community Activities",
    description: "Inclusive group outings designed to enhance community ties and social interaction.",
    icon: Users,
    color: "bg-blue-50",
    accent: "text-blue-600",
    link: "/services/community-group"
  },
  {
    title: "Vocational Rehab",
    description: "Skill-building and support to help individuals find and maintain meaningful employment.",
    icon: Briefcase,
    color: "bg-purple-50",
    accent: "text-purple-600",
    link: "/services/vocational-rehab"
  },
  {
    title: "Animal Therapy",
    description: "Therapeutic interactions with horses and animals to promote emotional healing.",
    icon: Heart,
    color: "bg-rose-50",
    accent: "text-rose-600",
    link: "/services/horse-therapy"
  },
  {
    title: "On-call Nursing",
    description: "Immediate medical support from trained staff to address concerns promptly.",
    icon: Stethoscope,
    color: "bg-emerald-50",
    accent: "text-emerald-600",
    link: "/services/nurse-services"
  },
  {
    title: "Transportation",
    description: "Safe, reliable non-medical transport for appointments and activities.",
    icon: Car,
    color: "bg-indigo-50",
    accent: "text-indigo-600",
    link: "/services/transportation"
  },
];

export function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-gray-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header (Absolute) */}
        <div className="absolute top-12 left-4 md:left-12 z-10 max-w-md">
          <span className="text-coral-500 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mt-2">
            Holistic Care <br /> for Every Stage.
          </h2>
        </div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 pt-20">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group relative flex-shrink-0 w-[350px] md:w-[450px] h-[500px] bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-white flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.accent}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
          
          {/* View All Card */}
          <Link to="/services" className="flex-shrink-0 w-[300px] h-[500px] flex items-center justify-center bg-teal-900 rounded-3xl p-12 shadow-xl hover:bg-teal-800 transition-colors">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">View All Services</h3>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto hover:bg-white hover:text-teal-900 transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
