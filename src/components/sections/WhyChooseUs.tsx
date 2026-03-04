import { motion } from "motion/react";
import { Quote, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    title: "Improved Quality of Life",
    content: [
      "Direct support in-home care provides an invaluable solution for individuals who prioritize comfort and familiarity. By receiving caregiving services in the environment they know best, individuals can maintain a higher quality of life and preserve their independence.",
      "The presence of familiar sounds and cherished memories contributes to emotional well-being, reducing feelings of anxiety and isolation. In-home care fosters a strong sense of community and connection with loved ones.",
      "Family members can maintain close relationships without the strain of visiting a care facility, ensuring that emotional and social needs are also fulfilled."
    ],
    image: "https://i.ibb.co.com/BKNnh3ds/whychoose-image-1.webp",
    color: "bg-teal-50",
    textColor: "text-teal-900",
    accentColor: "text-[#00766A]"
  },
  {
    title: "Customized Approach",
    content: [
      "At Reliance Care Solutions, we prioritize a tailored approach to our direct support caregiving services. Understanding that each client has unique needs, we work around their schedules to develop customized plans that effectively assist with everyday tasks and long-term goals.",
      "Our dedicated caregiving providers are committed to providing the right support at the right time. Our caregivers ensure that physical needs are addressed, helping with daily activities such as bathing, medication management, and meal preparation, all tailored to individual preferences.",
      "This level of personalized attention allows individuals to enjoy their favorite routines and comforts, from homemade meals to peaceful evenings in their own space."
    ],
    image: "https://i.ibb.co.com/d03QqVtG/whychoose-image-2.webp",
    color: "bg-coral-50",
    textColor: "text-coral-900",
    accentColor: "text-[#FF7865]"
  },
  {
    title: "Community & Family Focused",
    content: [
      "To provide a more vibrant and fulfilling life, we offer weekly outings and activities including trips to Cedar Point, the Metroparks, go-cart racing, bowling, swimming, out of town trips, and more!",
      "Along with weekly activities, we provide monthly family nights to get everyone together which provides the comforts of community and friendship amongst the families and clients.",
      "Our clients also look forward to our annual group vacations, creating memories that last a lifetime."
    ],
    image: "https://i.ibb.co.com/cKgp3wYT/whychoose-image-3.webp",
    color: "bg-amber-50",
    textColor: "text-amber-900",
    accentColor: "text-[#FFA801]"
  }
];

export function WhyChooseUs() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-heading"
          >
            Why choose <br/>
            <span className="text-[#00766A]">Reliance Care Solutions?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            The best in home care services in Northwest Ohio.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Image Section (Desktop) */}
          <div className="hidden lg:block w-1/2 h-[600px] sticky top-32">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white bg-gray-100">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activePillar === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80">Reason 0{index + 1}</p>
                    <h3 className="text-3xl font-heading font-bold">{pillar.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative blobs behind sticky image */}
            <div className={`absolute -top-10 -right-10 w-64 h-64 rounded-full blur-[80px] transition-colors duration-700 -z-10 ${
              activePillar === 0 ? 'bg-teal-200' : activePillar === 1 ? 'bg-coral-200' : 'bg-amber-200'
            }`} />
             <div className={`absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-[80px] transition-colors duration-700 -z-10 ${
              activePillar === 0 ? 'bg-teal-200' : activePillar === 1 ? 'bg-coral-200' : 'bg-amber-200'
            }`} />
          </div>

          {/* Scrolling Content Section */}
          <div className="lg:w-1/2 space-y-24 lg:space-y-0 lg:pb-[20vh]">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                onViewportEnter={() => setActivePillar(index)}
                className="lg:min-h-[80vh] flex flex-col justify-center py-12"
              >
                {/* Mobile Image (Visible only on mobile) */}
                <div className="lg:hidden mb-8 rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] relative">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold tracking-widest uppercase mb-1 opacity-80">Reason 0{index + 1}</p>
                    <h3 className="text-2xl font-heading font-bold">{pillar.title}</h3>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${pillar.color} ${pillar.accentColor} text-sm font-bold tracking-wide mb-6 w-fit`}>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Benefit 0{index + 1}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading hidden lg:block">
                  {pillar.title}
                </h3>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  {pillar.content.map((paragraph, i) => (
                    <p key={i} className="pl-6 border-l-2 border-gray-100 hover:border-gray-300 transition-colors">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 relative"
        >
          <div className="max-w-5xl mx-auto text-center relative z-10 bg-[#F8FAFC] rounded-[3rem] p-12 md:p-20 border border-slate-100">
            <Quote className="w-16 h-16 text-[#FFA801] mx-auto mb-8 opacity-80" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00766A] font-heading leading-tight italic mb-6">
              "Our fingerprints do not fade from the lives we touch."
            </h3>
            <div className="w-24 h-1 bg-[#FFA801] mx-auto rounded-full opacity-30" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
