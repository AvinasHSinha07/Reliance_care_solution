import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const servicesList = [
  { id: "respite", title: "Respite Services", category: "Caregiver Support" },
  { id: "adult-day", title: "Adult Day Services", category: "Adult Services" },
  { id: "community-group", title: "Community Group Activities", category: "Community" },
  { id: "vocational-rehab", title: "Vocational Rehabilitation", category: "Employment" },
  { id: "horse-therapy", title: "Horse & Animal Interactions", category: "Therapy" },
  { id: "cans-assessment", title: "CANS Assessment", category: "Youth Services" },
  { id: "nurse-services", title: "On-call Nurse Services", category: "Medical" },
  { id: "youth-group-home", title: "Group Home for Children", category: "Youth Services" },
  { id: "emergency-respite", title: "Emergency Respite (Youth)", category: "Youth Services" },
  { id: "staff-training", title: "Staff Training", category: "Training" },
  { id: "transportation", title: "Non-Medical Transportation", category: "Support" },
];

export function ServicesIndex() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <div className="bg-teal-50 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive care solutions tailored to meet the diverse needs of our community.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group block bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-teal-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-md">
                    {service.category}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-teal-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  Click to learn more about our {service.title.toLowerCase()} program.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
