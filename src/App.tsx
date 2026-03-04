import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ServicePage } from "@/pages/ServicePage";
import { ServicesIndex } from "@/pages/ServicesIndex";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-teal-100 selection:text-teal-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}
