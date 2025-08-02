
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Truck, Clock, MapPin, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import TrustBadge from "@/components/conversion/TrustBadge";
import ProblemSection from "@/components/conversion/ProblemSection";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";
import { pageSEO, generateStructuredData } from "@/utils/seo";
import FloatingCallButton from "@/components/FloatingCallButton";

const EmergencyTowing = () => {
  const problems = [
    "Broken down on I-95 during rush hour?",
    "Ferrari or Lamborghini stuck and scared it'll get scratched?",
    "Regular tow trucks can't handle your low-sitting exotic?",
    "Accident happened and you need immediate help?",
    "Dead battery in a busy Miami intersection?",
    "Flat tire on your McLaren and nowhere to pull over safely?"
  ];

  const solutions = [
    "✓ Ferrari-safe hydraulic flatbeds (no scratches guaranteed)",
    "✓ 15-minute average response time across Miami-Dade",
    "✓ Soft-strap loading system for low-sitting supercars",
    "✓ 24/7 availability including holidays and weekends",
    "✓ Specialized equipment for Lamborghini, McLaren, Porsche",
    "✓ Direct transport to your preferred facility",
    "✓ Real-time GPS tracking and ETA updates",
    "✓ Insurance coordination and documentation"
  ];

  const testimonials = [
    {
      name: "Alex Martinez",
      location: "Brickell",
      rating: 5,
      text: "My Lamborghini Huracan broke down on Brickell Ave. They arrived in 12 minutes with the right equipment. Not a single scratch!"
    },
    {
      name: "Sarah Johnson",
      location: "South Beach",
      rating: 5,
      text: "Ferrari 488 had a flat tire on Ocean Drive. These guys handled it perfectly - professional, fast, and my car was safe the whole time."
    },
    {
      name: "Roberto Silva",
      location: "Aventura",
      rating: 5,
      text: "Accident on I-95 with my McLaren 720S. They coordinated with my insurance and got my car to the body shop safely. Incredible service."
    }
  ];

  const faqs = [
    {
      question: "How fast can you get to me if I'm stuck?",
      answer: "Our average response time is 15-30 minutes throughout Miami-Dade County. We have Ferrari-safe equipment strategically positioned across the city for rapid response."
    },
    {
      question: "Can you safely tow my Ferrari/Lamborghini without scratching it?",
      answer: "Absolutely! We use hydraulic flatbeds with soft-strap systems specifically designed for low-sitting supercars. Your paint and undercarriage are completely protected."
    },
    {
      question: "Do you operate 24/7?",
      answer: "Yes, we're available 24 hours a day, 7 days a week, including holidays. Emergencies don't wait for business hours."
    },
    {
      question: "What areas of Miami do you cover?",
      answer: "We cover all of Miami-Dade County including I-95, US-1, Brickell, South Beach, Coral Gables, Aventura, Doral, Kendall, and everywhere in between."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Yes, we coordinate directly with all major insurance companies and provide detailed documentation for claims."
    },
    {
      question: "What if my exotic car has special loading requirements?",
      answer: "Our team is trained on all exotic car loading procedures. We carry specialized equipment for McLaren, Ferrari, Lamborghini, Porsche, and other high-end vehicles."
    }
  ];

  const services = [
    "24/7 emergency roadside assistance",
    "Ferrari-safe hydraulic flatbed towing", 
    "Lamborghini and McLaren specialty transport",
    "Long-distance towing throughout Florida",
    "Battery jump-start and tire changes",
    "Lockout assistance and fuel delivery",
    "Accident scene management and cleanup",
    "Insurance coordination and documentation"
  ];

  const areas = [
    "Downtown Miami", "Miami Beach", "Coral Gables", "Aventura",
    "Brickell", "South Beach", "Doral", "Kendall", 
    "Homestead", "Key Biscayne", "Wynwood", "Design District"
  ];

  return (
    <>
      <SEOHead 
        seoData={pageSEO.emergencyTowing}
        structuredData={generateStructuredData('service', 'Emergency Towing')}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors duration-300 mb-8"
              aria-label="Back to Home"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">Stuck? We're Coming</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-6 max-w-3xl mx-auto">
                15-minute response • Ferrari-safe equipment • No scratches guaranteed
              </p>
              
              <TrustBadge className="mb-8" />
              
              <div className="bg-gradient-to-r from-red-500/20 to-neon-pink/20 rounded-lg p-6 max-w-md mx-auto mb-8 border border-red-500/30">
                <div className="text-2xl font-orbitron font-bold text-red-400 mb-2">
                  EMERGENCY HOTLINE
                </div>
                <a 
                  href="tel:305-419-8379"
                  className="text-3xl font-orbitron font-bold text-neon-pink hover:text-white transition-colors duration-300"
                  aria-label="Call Showroom Miami emergency towing hotline"
                >
                  305-419-8379
                </a>
                <div className="text-sm text-gray-300 mt-2">Available 24/7/365</div>
              </div>

              {/* Ferrari/Lamborghini Safety Guarantee */}
              <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto border border-neon-green/30">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="text-neon-green mr-3" size={32} />
                  <h2 className="text-xl font-orbitron font-bold text-white">Supercar Safe Guarantee</h2>
                </div>
                <p className="text-gray-300">
                  Our hydraulic flatbeds and soft-strap systems are specifically designed for Ferrari, Lamborghini, 
                  McLaren, and other low-sitting exotics. <span className="text-neon-green font-bold">Zero scratches guaranteed.</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Problem Section */}
          <ProblemSection 
            title="Emergency Car Problems?"
            problems={problems}
          />

          {/* Solution Section */}
          <SolutionSection 
            title="Here's How We Solve It"
            subtitle="Professional emergency towing with specialized equipment for luxury and exotic vehicles:"
            benefits={solutions}
          />

          {/* Mid-Page CTA */}
          <CTASection 
            title="Don't Wait - Call Now!"
            subtitle="Every minute counts in an emergency. Our team is standing by 24/7."
            phoneText="Call 305-419-8379 Emergency Line"
          />

          {/* Services and Coverage */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Services */}
                <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                  <div className="flex items-center mb-6">
                    <Truck className="text-neon-cyan mr-4" size={32} />
                    <h3 className="text-2xl font-orbitron font-bold text-white">Emergency Services</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Complete emergency roadside assistance with specialized equipment 
                    for luxury and exotic vehicles. Available 24/7/365.
                  </p>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coverage Areas */}
                <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                  <div className="flex items-center mb-6">
                    <MapPin className="text-neon-pink mr-4" size={32} />
                    <h3 className="text-2xl font-orbitron font-bold text-white">Coverage Areas</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Complete Miami-Dade County coverage with strategically positioned 
                    Ferrari-safe equipment for fastest response times.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {areas.map((area, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="text-neon-green mr-2 flex-shrink-0" size={14} />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-neon-cyan font-medium">Average Response Time</div>
                        <div className="text-white font-orbitron font-bold text-xl">15-30 Minutes</div>
                      </div>
                      <Clock className="text-neon-cyan" size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Equipment Section */}
          <section className="py-16 miami-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Ferrari-Safe Equipment</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Specialized towing equipment designed for Miami's luxury and exotic car community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Truck,
                    title: "Hydraulic Flatbeds",
                    desc: "Self-loading flatbeds that adjust to ground level for scratch-free loading of low-sitting supercars"
                  },
                  {
                    icon: Shield,
                    title: "Soft-Strap System",
                    desc: "Protective straps and wheel nets that secure your vehicle without touching paint or carbon fiber"
                  },
                  {
                    icon: Wrench,
                    title: "Specialty Tools",
                    desc: "Complete toolkit for exotic car emergencies including jump boxes, tire inflators, and diagnostic equipment"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center bg-card rounded-lg p-6 border border-neon-purple/30">
                    <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <SocialProof testimonials={testimonials} />

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Emergency Safety Tips */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-8">
                <span className="neon-text">Emergency Safety Tips</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Pull over safely to the right shoulder when possible",
                  "Turn on hazard lights immediately",
                  "Exit vehicle on the side away from traffic",
                  "Stay visible - use phone flashlight if needed",
                  "Call 911 first if anyone is injured",
                  "Have your exact location ready when you call us"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-card rounded-lg p-4 border border-neon-purple/30">
                    <CheckCircle className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <CTASection 
            title="Need Emergency Towing Right Now?"
            subtitle="Don't risk damage with inexperienced tow companies. Call Miami's Ferrari-safe towing experts."
            phoneText="Call 305-419-8379 NOW"
            className="bg-gradient-to-r from-red-500/10 to-neon-pink/10 border-t border-red-500/30"
          />
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
};

export default EmergencyTowing;
