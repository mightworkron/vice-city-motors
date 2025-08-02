
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Palette, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingCallButton from "@/components/FloatingCallButton";
import ProblemSection from "@/components/conversion/ProblemSection";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";

const WrapsAndTints = () => {
  const problems = [
    "Car looking boring and blending in with everyone else's?",
    "Privacy concerns with people seeing into your vehicle?",
    "Paint getting damaged by UV rays and road debris?",
    "Want to advertise your business but don't know how?",
    "Need protection but don't want to change the look?",
    "Thinking about a paint job but worried about resale value?"
  ];

  const benefits = [
    "Complete color transformations with premium wrap materials",
    "Professional window tinting for privacy and UV protection", 
    "Invisible paint protection film that preserves your investment",
    "Custom designs and graphics for personal or business use",
    "Certified installation with manufacturer warranties",
    "Removable solutions that protect resale value"
  ];

  const testimonials = [
    {
      name: "Alex Martinez",
      location: "Coral Gables, FL",
      rating: 5,
      text: "The matte black wrap on my BMW looks incredible! The quality is outstanding and it's been 6 months with no issues. Highly recommend!"
    },
    {
      name: "Jessica Williams",
      location: "Miami Beach, FL", 
      rating: 5,
      text: "Got ceramic tint and PPF done here. The difference in heat and protection is amazing. Professional work and great customer service."
    },
    {
      name: "Carlos Rodriguez",
      location: "Aventura, FL",
      rating: 5,
      text: "They wrapped my food truck with custom graphics. Business has increased significantly since. The design team is creative and professional."
    }
  ];

  const faqs = [
    {
      question: "How long do wraps and tints last?",
      answer: "Quality wraps typically last 5-7 years with proper care, while ceramic tints can last 10+ years. Paint protection film comes with a 10-year manufacturer warranty. Longevity depends on exposure to elements and maintenance."
    },
    {
      question: "What's the cost for a full vehicle wrap?",
      answer: "Full wraps range from $2,500-$5,000 depending on vehicle size and material choice. Partial wraps and graphics start around $800. We provide detailed quotes after assessing your specific vehicle and requirements."
    },
    {
      question: "Can you help with custom design?",
      answer: "Absolutely! Our design team works with you to create custom graphics, choose colors, and visualize the final result. We handle everything from concept sketches to final installation."
    },
    {
      question: "How do I maintain wrapped or tinted vehicles?",
      answer: "Hand wash only with pH-neutral soap, avoid pressure washers on edges, and park in shade when possible. We provide detailed care instructions and recommended products to maximize lifespan."
    }
  ];

  const wrapServices = ["Full vehicle color change wraps", "Partial wraps and accent graphics", "Commercial and advertising wraps", "Textured and specialty finishes", "Custom design and artwork", "Wrap removal and restoration"];
  const tintServices = ["Automotive window tinting (all types)", "Ceramic and nano-ceramic films", "Security and safety window films", "Commercial building tinting", "Residential window solutions", "UV protection and glare reduction"];
  const ppfBenefits = ["Paint protection from rock chips", "Self-healing technology", "UV and chemical resistance", "Maintains vehicle resale value", "Crystal clear, invisible protection", "10-year manufacturer warranty"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')",
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
              <span className="neon-text">Wraps, Tints</span>
              <br />
              <span className="text-white">& PPF</span>
            </h1>
            <p className="text-2xl text-neon-cyan font-rajdhani font-bold mb-4">
              Protect, Transform, and Elevate Your Ride
            </p>
            <p className="text-lg text-gray-300 font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
              Premium Wraps, Tints & PPF in Miami
            </p>
          </div>
        </div>
      </section>

      <ProblemSection 
        title="Tired of Your Car's Current Look?"
        problems={problems}
      />

      <SolutionSection 
        title="Transform & Protect with Premium Materials"
        subtitle="From color-changing wraps to invisible paint protection, we offer complete vehicle transformation and protection services."
        benefits={benefits}
      />

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vehicle Wraps */}
            <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
              <div className="flex items-center mb-6">
                <Palette className="text-neon-cyan mr-4" size={32} />
                <h3 className="text-2xl font-orbitron font-bold text-white">Vehicle Wraps</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Complete color changes, custom graphics, and commercial wraps 
                that transform your vehicle's appearance.
              </p>
              <ul className="space-y-3">
                {wrapServices.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Window Tinting */}
            <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
              <div className="flex items-center mb-6">
                <Shield className="text-neon-purple mr-4" size={32} />
                <h3 className="text-2xl font-orbitron font-bold text-white">Window Tinting</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Premium window films for enhanced privacy, comfort, 
                and UV protection with professional installation.
              </p>
              <ul className="space-y-3">
                {tintServices.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paint Protection Film */}
            <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
              <div className="flex items-center mb-6">
                <Sparkles className="text-neon-pink mr-4" size={32} />
                <h3 className="text-2xl font-orbitron font-bold text-white">Paint Protection</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Invisible protection film that preserves your vehicle's 
                paint while maintaining its original beauty.
              </p>
              <ul className="space-y-3">
                {ppfBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SocialProof testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      <CTASection 
        title="Ready to Transform Your Vehicle?"
        subtitle="Contact us today for a free consultation and quote. Let's discuss how we can enhance your vehicle's style and protection with our premium services."
      />

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default WrapsAndTints;
