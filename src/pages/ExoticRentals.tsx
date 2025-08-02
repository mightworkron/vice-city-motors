
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Car, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingCallButton from "@/components/FloatingCallButton";
import ProblemSection from "@/components/conversion/ProblemSection";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";

const ExoticRentals = () => {
  const problems = [
    "Want to make an impression at your next event?",
    "Special event coming up and need luxury transportation?", 
    "Business meeting needs that executive edge?",
    "Celebrating a milestone and want something unforgettable?",
    "Need to impress clients or close an important deal?",
    "Want to experience Miami in true luxury style?"
  ];

  const benefits = [
    "Curated fleet of exotic and luxury vehicles for any occasion",
    "Concierge delivery service straight to your location",
    "Comprehensive insurance coverage included with every rental",
    "24/7 concierge support during your rental period",
    "Flexible rental periods from hourly to monthly options",
    "Special event and wedding packages available"
  ];

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      location: "South Beach, Miami",
      rating: 5,
      text: "Rented a Lamborghini for my wedding day. The delivery was perfect and the car was absolutely stunning. Made our day unforgettable!"
    },
    {
      name: "Sarah Chen",
      location: "Downtown Miami",
      rating: 5,
      text: "Needed luxury transportation for a client meeting. The Rolls-Royce Ghost impressed everyone and helped close the biggest deal of my career."
    },
    {
      name: "David Thompson",
      location: "Aventura, FL",
      rating: 5,
      text: "The concierge service was incredible. They handled everything from insurance to delivery. I felt like a VIP the entire weekend."
    }
  ];

  const faqs = [
    {
      question: "What are the requirements to rent an exotic car?",
      answer: "You must be at least 25 years old with a valid driver's license and clean driving record. We require a security deposit and comprehensive insurance verification. International licenses are accepted with additional documentation."
    },
    {
      question: "Is the car available for my dates?",
      answer: "Our fleet availability changes daily. Call us at 305-419-8379 to check real-time availability for your specific dates and preferred vehicle. We recommend booking at least 48 hours in advance for best selection."
    },
    {
      question: "What insurance coverage is included?",
      answer: "All rentals include comprehensive insurance coverage for collision, theft, and liability. We also offer additional coverage options for peace of mind. Your existing auto insurance may provide additional protection."
    },
    {
      question: "Do you deliver the vehicle?",
      answer: "Yes! We provide concierge delivery service throughout Miami-Dade County. Delivery fees vary by location and distance. We'll bring the vehicle to your hotel, event venue, or preferred location."
    }
  ];

  const vehicles = [{
    category: "Supercars",
    examples: ["Lamborghini Huracán", "Ferrari 488", "McLaren 570S"],
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&h=250&fit=crop"
  }, {
    category: "Luxury Sedans",
    examples: ["Rolls-Royce Ghost", "Bentley Flying Spur", "Mercedes S-Class"],
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=250&fit=crop"
  }, {
    category: "Convertibles",
    examples: ["Porsche 911 Cabriolet", "BMW i8 Roadster", "Audi R8 Spyder"],
    image: "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=400&h=250&fit=crop"
  }];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.2
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors duration-300 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              <span className="neon-text">Exotic & Luxury</span>
              <br />
              <span className="text-white">Car Rentals</span>
            </h1>
            <p className="text-2xl text-neon-cyan font-rajdhani font-bold mb-4">
              Drive Your Dream Car Today
            </p>
            <p className="text-lg text-gray-300 font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
              Concierge delivery service • All paperwork handled • Insurance included
            </p>
          </div>
        </div>
      </section>

      <ProblemSection 
        title="Ready to Make an Impression?"
        problems={problems}
      />

      <SolutionSection 
        title="Your Luxury Experience Awaits"
        subtitle="From exotic supercars to luxury sedans, we deliver unforgettable experiences with white-glove service."
        benefits={benefits}
      />

      {/* Vehicle Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-text">Our Fleet</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our carefully curated collection of the world's most desirable vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((category, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-neon-purple/30 group hover:border-neon-pink/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={category.image} alt={category.category} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-pink transition-colors duration-300">
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.examples.map((vehicle, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="text-neon-cyan mr-2 flex-shrink-0" size={14} />
                        <span className="text-sm">{vehicle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      <CTASection 
        title="Ready for the Ultimate Drive?"
        subtitle="Book your exotic rental today and experience Miami like never before. Our team is ready to help you select the perfect vehicle for your needs."
      />

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default ExoticRentals;
