import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  title: string;
  description: string;
  features?: string[];
  image?: string;
  category?: string;
}

export function ServiceDetail({ title, description, features, image, category }: ServiceDetailProps) {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-teal-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src="https://i.ibb.co.com/9HCkNK67/banner-reliance-care.webp" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            {category && (
              <span className="inline-block py-1 px-3 rounded-full bg-teal-800 text-teal-200 text-sm font-medium mb-4">
                {category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                At Reliance Care Solutions, our {title} is designed with a person-centered approach. 
                We understand that every individual has unique needs and goals. Our dedicated team works 
                closely with families and individuals to ensure that our support fosters independence, 
                dignity, and a higher quality of life.
              </p>
              
              {image && (
                <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-auto object-cover max-h-[400px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our program includes comprehensive support tailored to specific requirements. 
                Whether it's daily assistance, therapeutic activities, or skill-building sessions, 
                we are committed to excellence in every interaction.
              </p>

              {features && features.length > 0 && (
                <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
                  <h4 className="text-lg font-bold text-teal-900 mb-4">Key Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* CTA Card */}
            <div className="bg-coral-500 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
              <p className="text-white/90 mb-6">
                Contact us today to discuss how our {title} can help you or your loved one.
              </p>
              <Button variant="secondary" className="w-full bg-white text-coral-600 hover:bg-gray-100 border-none">
                Get Started
              </Button>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Other Services</h3>
              <nav className="space-y-2">
                <Link to="/services/respite" className="block p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-teal-600">
                  Respite Services
                </Link>
                <Link to="/services/adult-day" className="block p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-teal-600">
                  Adult Day Services
                </Link>
                <Link to="/services/youth-group-home" className="block p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600 hover:text-teal-600">
                  Youth Group Homes
                </Link>
                <Link to="/services" className="block p-3 font-medium text-teal-600 hover:underline flex items-center gap-2">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
