
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEOHead from "@/components/SEOHead";
import TrustBadge from "@/components/conversion/TrustBadge";
import CTASection from "@/components/conversion/CTASection";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, Star, CreditCard, Clock, Shield, Users } from "lucide-react";
import { pageSEO, generateStructuredData } from "@/utils/seo";

const Sales = () => {
  const financingBenefits = [
    "Competitive interest rates as low as 2.9% APR",
    "Quick approval process - get approved in minutes",
    "Flexible payment terms up to 84 months",
    "No prepayment penalties - pay off early without fees",
    "Bad credit? No problem - we work with all credit types",
    "Trade-in your current vehicle for instant equity",
    "Extended warranty options available",
    "Gap insurance protection included"
  ];

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      location: "Brickell, Miami",
      rating: 5,
      text: "Got approved for financing on my McLaren 720S in under 30 minutes! The team made everything so easy and the rates were better than my bank."
    },
    {
      name: "Isabella Chen",
      location: "South Beach",
      rating: 5,
      text: "Even with my credit challenges, they found me great financing options. Now I'm driving my dream Lamborghini Huracán!"
    },
    {
      name: "David Thompson",
      location: "Coral Gables",
      rating: 5,
      text: "The financing team was incredible. They walked me through every step and got me the best deal possible on my Ferrari 488."
    }
  ];

  const faqs = [
    {
      question: "What credit score do I need to qualify for financing?",
      answer: "We work with all credit types! Whether you have excellent credit (750+) or challenges with your credit history, our network of lenders can find financing solutions tailored to your situation."
    },
    {
      question: "How quickly can I get approved?",
      answer: "Most applications receive preliminary approval within minutes. Final approval typically takes 24-48 hours once we receive all required documentation."
    },
    {
      question: "What documents do I need to apply?",
      answer: "You'll need a valid driver's license, proof of income (pay stubs or bank statements), proof of residence, and proof of insurance. We'll help gather everything needed."
    },
    {
      question: "Can I trade in my current vehicle?",
      answer: "Absolutely! We'll provide a fair market appraisal of your trade-in and apply the equity directly to your new purchase, reducing your loan amount."
    },
    {
      question: "Do you offer extended warranties?",
      answer: "Yes, we offer comprehensive extended warranty options to protect your investment beyond the manufacturer warranty period."
    },
    {
      question: "What happens if I want to pay off my loan early?",
      answer: "Great news - there are no prepayment penalties! You can pay off your loan early without any additional fees, saving you interest over time."
    }
  ];

  return (
    <>
      <SEOHead 
        seoData={pageSEO.sales}
        structuredData={generateStructuredData('service', 'Auto Financing')}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/691fc0a9-5766-4035-89da-b291de39e7da.png')`
        }}
      >
        <div className="absolute inset-0 miami-bg opacity-30"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-6">
            <span className="neon-text">Finance Your Dream Car</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get behind the wheel of your dream exotic car today with our flexible financing options. 
            Quick approvals, competitive rates, and personalized service in Miami.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:305-419-8379">
              <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Phone className="mr-2" size={20} />
                Call 305-419-8379 Now
              </Button>
            </a>
            <div className="flex items-center space-x-2 text-neon-cyan">
              <Clock size={20} />
              <span className="font-medium">Get approved in minutes!</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-gray-300 mb-12">
            <div className="flex items-center space-x-2">
              <CreditCard className="text-neon-pink" size={20} />
              <span>All Credit Types</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-neon-blue" size={20} />
              <span>Rates as low as 2.9% APR</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-neon-purple" size={20} />
              <span>500+ Cars Financed</span>
            </div>
          </div>
        </div>

        <TrustBadge className="absolute bottom-8 left-1/2 transform -translate-x-1/2" />
      </section>

      {/* Financing Benefits Section */}
      <SolutionSection
        title="Why Choose Our Financing?"
        subtitle="We make luxury car ownership accessible with flexible financing solutions tailored to your needs"
        benefits={financingBenefits}
        className="bg-black/40"
      />

      {/* Credit Application Section */}
      <section className="py-16 miami-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-text">Apply for Financing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete our secure online application and get pre-approved in minutes. 
              Our financing specialists will contact you within 1 hour.
            </p>
          </div>
          
          <div className="bg-card rounded-lg border border-neon-purple/30 p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-neon-cyan" size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300">Secure SSL encryption protects your information</p>
            </div>
            
            {/* Credit Application Form Embed */}
            <div className="bg-black/20 rounded-lg p-4 border border-neon-blue/30">
              <iframe
                src="https://form.jotform.com/embed/242949482389170"
                width="100%"
                height="800"
                frameBorder="0"
                style={{ border: 'none' }}
                title="Auto Financing Application"
                className="rounded-lg"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Need help with your application? Our financing experts are standing by.
              </p>
              <a href="tel:305-419-8379">
                <Button className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-purple text-black font-bold">
                  <Phone className="mr-2" size={16} />
                  Call for Assistance: 305-419-8379
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof 
        testimonials={testimonials}
        className="bg-black/40"
      />

      {/* FAQ Section */}
      <FAQSection 
        title="Financing Questions & Answers"
        faqs={faqs}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Drive Your Dream Car?"
        subtitle="Don't wait - luxury cars move fast in Miami. Call now to secure your financing and drive home today!"
        phoneText="Get Pre-Approved: 305-419-8379"
        className="bg-gradient-to-b from-black/60 to-black/80"
      />

      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Sales;
