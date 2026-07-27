import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, AlertTriangle, CheckCircle, Shield, Clock, Truck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData, generateFAQStructuredData } from "@/utils/seo";
import TrustBadge from "@/components/conversion/TrustBadge";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";
import FloatingCallButton from "@/components/FloatingCallButton";

const EmergencyTowing = () => {
  const benefits = [
    "15-minute average response time throughout Miami-Dade County",
    "Low car-safe hydraulic flatbeds that won't damage your vehicle", 
    "24/7 availability including holidays and bad weather",
    "Insurance accepted - minimal out-of-pocket costs",
    "GPS tracking so you know exactly when we'll arrive",
    "Professional drivers trained in luxury vehicle handling"
  ];

  const testimonials = [
    {
      name: "Alexandra Martinez",
      location: "South Beach, Miami", 
      rating: 5,
      text: "Broke down on Collins Ave at midnight. They arrived in 12 minutes with the perfect equipment for my McLaren. No damage whatsoever!"
    },
    {
      name: "Roberto Silva",
      location: "Brickell, Miami",
      rating: 5,
      text: "Battery died in downtown Miami. Called these guys and they were there in 20 minutes. Professional service and fair pricing."
    },
    {
      name: "Jennifer Chen",
      location: "Coral Gables, Miami",
      rating: 5,
      text: "Flat tire on my Lamborghini on I-95. Their hydraulic flatbed was perfect - my car arrived at the shop without a single scratch."
    }
  ];

  const faqs = [
    {
      question: "What areas in Miami do you serve?",
      answer: "We cover all of Miami-Dade County including South Beach, Brickell, Coral Gables, Aventura, Doral, Kendall, Homestead, and everywhere in between."
    },
    {
      question: "How quickly can you respond to my emergency?",
      answer: "Our average response time is 15-30 minutes throughout Miami-Dade County. We have strategically positioned trucks across the metro area for fastest possible response."
    },
    {
      question: "Are your tow trucks safe for luxury and exotic cars?",
      answer: "Absolutely! We use hydraulic flatbed tow trucks specifically designed for high-end vehicles. Your Ferrari, Lamborghini, or other exotic car will be completely protected."
    },
    {
      question: "Do you provide 24/7 emergency towing service?",
      answer: "Yes, we operate 24 hours a day, 7 days a week, including holidays. Miami traffic doesn't stop, and neither do we."
    }
  ];
  
  return (
    <>
      <SEOHead seoData={pageSEO.emergencyTowing} structuredData={[generateStructuredData('service', 'Emergency Towing'), generateFAQStructuredData(faqs)]} />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: "url('/lovable-uploads/e7771961-42ae-4e8d-811f-084d9b13f8db.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors duration-300 mb-8" aria-label="Back to Home">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">Emergency Towing</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-6 max-w-3xl mx-auto">
                15-minute response • Low car-safe equipment • No scratches guaranteed
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:305-419-8379">
                  <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2" size={20} />
                    Call 305-419-8379 Now
                  </Button>
                </a>
              </div>
              
              <p className="text-neon-cyan text-sm mb-8">
                Hydraulic flatbeds • 24/7 availability • Exotic car specialists
              </p>
              
              {/* Trust Badge at bottom of hero */}
              <div className="mt-8">
                <TrustBadge className="mx-auto" />
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Emergency Features */}
          <section className="py-16" aria-labelledby="emergency-features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="emergency-features" className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Why Choose Us for Emergencies?</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Not all towing companies are created equal. Here's why Miami drivers trust us with their most valuable vehicles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast Response",
                    description: "Average 15-30 minute response time across Miami-Dade. We're positioned strategically throughout the city."
                  },
                  {
                    icon: Shield,
                    title: "Zero-Damage Guarantee", 
                    description: "Hydraulic flatbeds designed specifically for luxury vehicles. Your Lambo arrives exactly as it left."
                  },
                  {
                    icon: Clock,
                    title: "24/7 Availability",
                    description: "Breakdowns don't wait for business hours. Neither do we. Call anytime, day or night."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border border-neon-purple/30 text-center">
                    <feature.icon className="text-neon-cyan mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-orbitron font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Equipment Showcase */}
          <section className="py-16 miami-bg" aria-labelledby="equipment-showcase">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img src="/lovable-uploads/e7771961-42ae-4e8d-811f-084d9b13f8db.png" alt="The Showroom Miami professional hydraulic flatbed tow truck transporting a luxury Mercedes-AMG vehicle in Miami" className="rounded-lg neon-border" loading="eager" width="600" height="400" />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                    <Truck className="text-white" size={32} />
                  </div>
                </div>
                
                <article>
                  <h2 id="equipment-showcase" className="text-3xl font-orbitron font-bold mb-6">
                    <span className="neon-text">Low Car-Safe Equipment</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Our hydraulic flatbed tow trucks are specifically designed for low sitting vehicles. 
                    No wheel-lift or dolly systems that can damage suspension or scrape expensive bumpers.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Every truck is equipped with soft tie-downs, protective padding, and GPS tracking. 
                    Our drivers are trained in luxury vehicle handling and understand that your car 
                    isn't just transportation - it's an investment.
                  </p>
                  
                  <a href="tel:305-419-8379">
                    <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                      <Phone className="mr-2" size={20} />
                      Get Emergency Help Now
                    </Button>
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <SocialProof testimonials={testimonials} />

          {/* Mid-Page CTA */}
          <CTASection 
            title="Stuck? Don't Panic - Call Us!"
            subtitle="15-minute average response time. Low car-safe equipment. Available 24/7."
            phoneText="Emergency Towing - 305-419-8379"
          />

          {/* Service Areas */}
          <section className="py-16 miami-bg" aria-labelledby="service-areas">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="service-areas" className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">We Cover All of Miami-Dade</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                  Strategically positioned trucks ensure fast response times throughout the metro area
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {[
                  "South Beach", "Brickell", "Coral Gables", "Aventura", 
                  "Doral", "Kendall", "Homestead", "Key Biscayne",
                  "Wynwood", "Design District", "Little Havana", "Coconut Grove"
                ].map((area, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border border-neon-purple/30">
                    <span className="text-white font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection 
            title="Emergency Towing Questions"
            faqs={faqs}
          />

          {/* Final CTA Section */}
          <CTASection 
            title="Don't Risk Your Investment with Cheap Towing"
            subtitle="When your luxury car breaks down, you need professionals who understand what's at stake. Call now for immediate dispatch."
            phoneText="Call 305-419-8379 Now"
          />
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
};

export default EmergencyTowing;
