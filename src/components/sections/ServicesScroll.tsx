import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Home, Users, Activity, Briefcase, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    title: "Home Health Care",
    description: "Skilled nursing, therapy, and medical assistance delivered with compassion in the comfort of your own home.",
    icon: Home,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    link: "/services/home-health"
  },
  {
    id: "02",
    title: "Respite Services",
    description: "Reliable, short-term relief for primary caregivers. We step in so you can take a well-deserved break.",
    icon: Clock,
    color: "text-coral-500",
    bg: "bg-coral-50",
    border: "border-coral-100",
    link: "/services/respite"
  },
  {
    id: "03",
    title: "Adult Day Center",
    description: "A vibrant, safe community space for seniors to socialize, engage in activities, and receive daily care.",
    icon: Users,
    color: "text-[#FFA801]",
    bg: "bg-orange-50",
    border: "border-orange-100",
    link: "/services/adult-day"
  },
  {
    id: "04",
    title: "Vocational Rehab",
    description: "Empowering individuals with disabilities to build skills, find employment, and achieve independence.",
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    link: "/services/vocational-rehab"
  },
  {
    id: "05",
    title: "CANS Assessments",
    description: "Comprehensive Child and Adolescent Needs and Strengths assessments to guide effective care planning.",
    icon: Activity,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    link: "/services/cans"
  },
  {
    id: "06",
    title: "Transportation",
    description: "Safe, accessible, and reliable non-emergency medical transportation for appointments and errands.",
    icon: Truck,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    link: "/services/transportation"
  }
];

export function ServicesScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={targetRef} className="relative bg-white">
      
      {/* Desktop View: Sticky Horizontal Scroll */}
      <div className="hidden lg:block h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          {/* Left: Sticky Header */}
          <div className="w-[35%] h-full flex flex-col justify-center px-12 xl:px-20 z-20 bg-white border-r border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
                <motion.div style={{ scaleX }} className="h-full bg-[#00766A] origin-left" />
              </div>

              <span className="text-[#00766A] font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#00766A]" />
                Our Expertise
              </span>
              
              <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-8 font-heading leading-[1.1]">
                  Holistic Care <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00766A] to-teal-500">For Every Need.</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-md">
                  We provide a full spectrum of services designed to support independence, dignity, and quality of life at every stage.
              </p>
              
              <div className="flex gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">
                      <img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="Staff" className="w-full h-full rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-gray-900">Expert Team</span>
                  <span className="text-xs text-gray-500">Ready to help you</span>
                </div>
              </div>
          </div>

          {/* Right: Horizontal Track */}
          <div className="w-[65%] h-full flex items-center pl-20 overflow-hidden bg-[#F8FAFC]">
              <motion.div style={{ x }} className="flex gap-10 pr-20">
                  {services.map((service) => (
                      <Link to={service.link} key={service.id} className="group relative block">
                          <div className={`w-[420px] h-[580px] bg-white rounded-[2rem] p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 border ${service.border} group-hover:-translate-y-2`}>
                              
                              {/* Top */}
                              <div>
                                  <div className="flex justify-between items-start mb-12">
                                      <div className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center ${service.color} transition-transform duration-500 group-hover:rotate-6`}>
                                          <service.icon className="w-10 h-10" />
                                      </div>
                                      <span className="text-6xl font-bold text-gray-100 font-heading select-none">
                                          {service.id}
                                      </span>
                                  </div>
                                  
                                  <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading group-hover:text-[#00766A] transition-colors">
                                      {service.title}
                                  </h3>
                                  
                                  <p className="text-lg text-gray-600 leading-relaxed">
                                      {service.description}
                                  </p>
                              </div>

                              {/* Bottom */}
                              <div className="flex items-center gap-4 text-[#00766A] font-semibold group-hover:gap-6 transition-all">
                                  <span>Learn More</span>
                                  <ArrowRight className="w-5 h-5" />
                              </div>
                          </div>
                      </Link>
                  ))}
              </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden py-24 px-4 bg-[#F8FAFC]">
         <div className="container mx-auto">
            <div className="mb-16 text-center">
                <span className="text-[#00766A] font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-heading">
                    Holistic Care <br/> For Every Need.
                </h2>
                <p className="text-gray-600 max-w-md mx-auto text-lg">
                    We provide a full spectrum of services designed to support independence and dignity.
                </p>
            </div>
            
            <div className="space-y-6">
                {services.map((service) => (
                    <Link to={service.link} key={service.id} className="block group">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:items-center hover:shadow-lg transition-all">
                            <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center ${service.color} shrink-0`}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <div className={`w-10 h-10 rounded-full ${service.bg} flex items-center justify-center ${service.color} shrink-0 group-hover:bg-[#00766A] group-hover:text-white transition-colors`}>
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <Link to="/services">
                    <Button className="rounded-full bg-[#00766A] hover:bg-[#006056] text-white px-8 py-6 text-lg w-full md:w-auto shadow-lg shadow-teal-900/10">
                        View All Services
                    </Button>
                </Link>
            </div>
         </div>
      </div>
    </section>
  );
}
