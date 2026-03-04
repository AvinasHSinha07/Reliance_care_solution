import { motion } from "motion/react";
import { ArrowRight, Home, Users, Activity, Briefcase, Truck, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    title: "Home Health Care",
    description: "Skilled nursing, therapy, and medical assistance delivered with compassion in the comfort of your own home.",
    features: ["Skilled Nursing", "Physical Therapy", "Medication Management"],
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
    features: ["Flexible Scheduling", "Emergency Care", "Peace of Mind"],
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
    features: ["Social Activities", "Nutritious Meals", "Daily Health Monitoring"],
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
    features: ["Job Coaching", "Skill Building", "Employment Support"],
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
    features: ["Detailed Evaluation", "Care Planning", "Family Support"],
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
    features: ["Wheelchair Accessible", "Door-to-Door", "Reliable Scheduling"],
    icon: Truck,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    link: "/services/transportation"
  }
];

export function ServicesScroll() {
  return (
    <section className="relative bg-slate-50 py-24 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-teal-100 text-[#00766A] text-sm font-bold tracking-wide mb-8 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#00766A]" />
                <span>Our Expertise</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 font-heading leading-[1.1]"
              >
                Holistic Care <br/>
                <span className="text-[#00766A]">For Every Need.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed mb-12"
              >
                We provide a full spectrum of services designed to support independence, dignity, and quality of life at every stage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/services">
                  <Button className="bg-[#00766A] hover:bg-[#006056] text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-teal-900/10 w-full md:w-auto">
                    View All Services
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right: Stacking Cards */}
          <div className="lg:w-2/3 space-y-8 lg:space-y-0">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="sticky transition-all duration-500"
                style={{ 
                  top: `calc(120px + ${index * 20}px)`,
                  marginBottom: index === services.length - 1 ? 0 : '40vh' // Spacing for scroll
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className={`bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border ${service.border} relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 ${service.bg} rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Icon Side */}
                    <div className="shrink-0">
                      <div className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                        <service.icon className="w-10 h-10" />
                      </div>
                      <div className="mt-6 hidden md:block">
                         <span className="text-6xl font-bold text-gray-100 font-heading select-none">{service.id}</span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 font-heading group-hover:text-[#00766A] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className={`w-5 h-5 ${service.color} opacity-60`} />
                            <span className="text-gray-700 font-medium text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={service.link} className={`inline-flex items-center gap-2 font-bold ${service.color} group-hover:gap-4 transition-all`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
