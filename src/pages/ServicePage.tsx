import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { useParams } from "react-router-dom";

// Data for services (simulating a database)
const servicesData: Record<string, { title: string; description: string; category: string; features: string[]; image: string }> = {
  "respite": {
    title: "Respite Services",
    description: "Our respite services offer temporary relief for caregivers, allowing them to take a break while ensuring their loved ones receive quality care and support.",
    category: "Caregiver Support",
    features: ["Temporary relief for primary caregivers", "Safe and supportive environment", "Professional staff supervision", "Flexible scheduling"],
    image: "https://i.ibb.co.com/YTFVtKLX/loved-one-image.webp"
  },
  "adult-day": {
    title: "Adult Day Services",
    description: "We provide structured adult day services in the morning and afternoon. Our program is designed to offer social engagement, therapeutic activities, and a safe environment for adults.",
    category: "Adult Services",
    features: ["Social engagement activities", "Therapeutic programs", "Morning and afternoon sessions", "Nutritious meals and snacks"],
    image: "https://i.ibb.co.com/cKgp3wYT/whychoose-image-3.webp"
  },
  "community-group": {
    title: "Community Group Activities",
    description: "Join us for a range of community group activities that promote inclusion and social interaction. These activities are designed to enhance community ties and encourage participation.",
    category: "Community",
    features: ["Inclusive group outings", "Social skill development", "Community integration", "Recreational events"],
    image: "https://i.ibb.co.com/d03QqVtG/whychoose-image-2.webp"
  },
  "vocational-rehab": {
    title: "Vocational Rehabilitation",
    description: "Our vocational rehabilitation services assist individuals in gaining the skills and support needed to find and maintain employment. We focus on personal strengths and career goals.",
    category: "Employment Support",
    features: ["Job skills training", "Career counseling", "Resume building", "Interview preparation"],
    image: "https://i.ibb.co.com/BKNnh3ds/whychoose-image-1.webp"
  },
  "horse-therapy": {
    title: "Horse and Animal Interactions",
    description: "Experience the therapeutic benefits of horse and animal interactions. These activities promote emotional healing and enhance personal development in a safe and nurturing environment.",
    category: "Therapy",
    features: ["Emotional healing support", "Confidence building", "Safe animal interaction", "Therapeutic environment"],
    image: "https://i.ibb.co.com/9HCkNK67/banner-reliance-care.webp"
  },
  "cans-assessment": {
    title: "Certified Assessment (CANS)",
    description: "We conduct certified assessments for children using the Child and Adolescent Needs and Strengths (CANS) tool. This ensures that each child's unique needs are identified and addressed promptly.",
    category: "Youth Services",
    features: ["Certified CANS assessors", "Comprehensive needs analysis", "Strength-based approach", "Individualized care planning"],
    image: "https://i.ibb.co.com/r20Dh3ZH/logoreliancecare.webp"
  },
  "nurse-services": {
    title: "On-call Nurse Services",
    description: "Our on-call nurse services provide immediate medical support when required. Our trained staff is available to address any medical concerns promptly and efficiently.",
    category: "Medical Support",
    features: ["24/7 medical availability", "Medication management support", "Health monitoring", "Emergency response coordination"],
    image: "https://i.ibb.co.com/4RxPfzx3/Reliance-Care-Solutions-Logo.webp"
  },
  "youth-group-home": {
    title: "Group Home Services for Children",
    description: "Our group home services offer a safe and supportive living environment for children. We focus on individual needs, personal growth, and overall well-being within a structured setting.",
    category: "Youth Services",
    features: ["24-hour supervision", "Structured living environment", "Life skills training", "Emotional support"],
    image: "https://i.ibb.co.com/YTFVtKLX/loved-one-image.webp"
  },
  "emergency-respite": {
    title: "Emergency Respite Placement",
    description: "We provide emergency respite placement for children in need of immediate support. Our program ensures a safe and nurturing environment during times of crisis.",
    category: "Youth Services",
    features: ["Immediate placement availability", "Crisis intervention", "Safe haven environment", "Trauma-informed care"],
    image: "https://i.ibb.co.com/cKgp3wYT/whychoose-image-3.webp"
  },
  "staff-training": {
    title: "Staff Training",
    description: "Our staff are trained in Crisis Prevention Institute (CPI) techniques to effectively manage challenging situations, ensuring safety and well-being. Additionally, our team is trained in Prevention (PFS).",
    category: "Professional Development",
    features: ["CPI Certification", "Crisis management techniques", "Safety protocols", "Ongoing professional development"],
    image: "https://i.ibb.co.com/d03QqVtG/whychoose-image-2.webp"
  },
  "transportation": {
    title: "Non-Medical Transportation",
    description: "Our non-medical transportation services offer safe and reliable transportation for individuals who need assistance getting to appointments, activities, or events.",
    category: "Support Services",
    features: ["Reliable scheduling", "Safe vehicles", "Door-to-door assistance", "Trained drivers"],
    image: "https://i.ibb.co.com/BKNnh3ds/whychoose-image-1.webp"
  }
};

export function ServicePage() {
  const { slug } = useParams();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <>
        <Header />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600">The service you are looking for does not exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ServiceDetail {...service} />
      <Footer />
    </>
  );
}
