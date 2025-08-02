import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Shield, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData } from "@/utils/seo";
import TrustBadge from "@/components/conversion/TrustBadge";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";

const CollisionRepair = () => {
  const benefits = [
    "Insurance accepted assistance - no upfront costs",
    "OEM and aftermarket parts availability with warranty", 
    "Advanced paint matching technology for perfect color blend",
    "Frame straightening and alignment with precision equipment",
    "Quality guarantee on all repairs backed by warranty",
    "Rental car coordination while your car is being fixed"
  ];

  const testimonials = [
    {
      name: "Carlos Martinez",
      location: "Brickell, Miami",
      rating: 5,
      text: "Hit-and-run damaged my BMW. Showroom Miami handled everything with insurance and had it looking brand new in 4 days. Incredible work!"
    },
    {
      name: "Sofia Rodriguez",
      location: "South Beach, Miami", 
      rating: 5,
      text: "Rear-ended on I-95. They picked up my car, dealt with State Farm directly, and delivered it back perfect. No hassle, no upfront costs."
    },
    {
      name: "Michael Chen",
      location: "Coral Gables, Miami",
      rating: 5,
      text: "Frame damage from parking garage accident. Their work exceeded factory quality. You can't even tell where the damage was."
    }
  ];

  const faqs = [
    {
      question: "Do I have to pay anything upfront for collision repair?",
      answer: "No! We work with your insurance company and handle accepted billing. You only pay your deductible, and we take care of the rest."
    },
    {
      question: "How long does collision repair take in Miami?",
      answer: "Most collision repairs take 2-5 business days depending on damage extent and parts availability. We provide accurate timelines after our free assessment."
    },
    {
      question: "Will you use original manufacturer parts?",
      answer: "Yes, we use OEM parts whenever possible and available. We'll discuss all options with you and your insurance company to ensure the best repair quality."
    },
    {
      question: "What if I'm not satisfied with the repair work?",
      answer: "We guarantee all our collision repair work. If you're not 100% satisfied, we'll make it right at no additional cost to you."
    },
    {
      question: "Can you help with rental car arrangements?",
      answer: "Absolutely! We coordinate with your insurance company for rental car coverage and can arrange pickup/delivery to minimize your inconvenience."
    },
    {
      question: "Do you work with all insurance companies in Miami?",
      answer: "Yes, we're approved by all major insurance companies including State Farm, Geico, Progressive, Allstate, and more. We handle the paperwork for you."
    }
  ];
  
  return (
    <>
      <SEOHead seoData={pageSEO.collisionRepair} structuredData={generateStructuredData('service', 'Collision Repair')} />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop')",
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
              <div className="flex justify-center mb-6">
                <TrustBadge />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">Collision Repair</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                Insurance-approved collision repair in Miami. Same-day estimates, 
                and your car restored to factory condition - guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:305-419-8379">
                  <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2" size={20} />
                    Get Free Estimate Now
                  </Button>
                </a>
              </div>
              
              <p className="text-neon-cyan text-sm">
                Same day estimate • Insurance accepted • 2-5 day completion
              </p>
            </div>
          </div>
        </header>

        <main>
          {/* Solution Section */}
          <SolutionSection 
            title="Here's How We Fix Everything"
            subtitle="Insurance-approved collision repair that saves you time, money, and stress"
            benefits={benefits}
          />

          {/* Service Overview */}
          <section className="py-16" aria-labelledby="service-overview">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <article>
                  <h2 id="service-overview" className="text-3xl font-orbitron font-bold mb-6">
                    <span className="neon-text">Precision Restoration</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    From minor scratches to major collision damage, our certified technicians 
                    restore your vehicle to factory specifications or better. We use state-of-the-art 
                    equipment and premium materials to ensure every repair meets the highest standards.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Serving Miami-Dade County since 2018, we've helped over 1,000 drivers get back 
                    on the road with confidence. Our comprehensive collision repair services include 
                    everything from paintwork and bodywork to structural repairs and frame alignment.
                  </p>
                  
                  <a href="tel:305-419-8379">
                    <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                      <Phone className="mr-2" size={20} />
                      Call 305-419-8379 Now
                    </Button>
                  </a>
                </article>
                
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop" alt="Professional collision repair workshop at Showroom Miami with advanced equipment and certified technicians" className="rounded-lg neon-border" loading="eager" width="600" height="400" />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                    <Shield className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-16 miami-bg" aria-labelledby="process-timeline">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">How We Handle Your Claim</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From insurance paperwork to final delivery, we handle everything so you don't have to
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[{
                  step: "01",
                  title: "Free Assessment",
                  desc: "Detailed damage evaluation and insurance estimate - no charge"
                }, {
                  step: "02", 
                  title: "Insurance Approval",
                  desc: "We handle all paperwork and get your claim approved fast"
                }, {
                  step: "03",
                  title: "Expert Repair",
                  desc: "Certified technicians restore your car to factory condition"
                }, {
                  step: "04",
                  title: "Quality Delivery",
                  desc: "Final inspection and guaranteed satisfaction - ready to drive"
                }].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-orbitron font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <SocialProof testimonials={testimonials} />

          {/* Mid-Page CTA */}
          <CTASection 
            title="Ready to Get Your Car Fixed Right?"
            subtitle="Call now for your free estimate. Insurance billing available - you only pay your deductible."
            phoneText="Get Free Estimate - 305-419-8379"
          />

          {/* Repair Authorization Form Section */}
          <section className="py-16 miami-bg" aria-labelledby="authorization-form">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <FileText className="text-neon-cyan mr-4" size={40} />
                  <h2 id="authorization-form" className="text-3xl font-orbitron font-bold">
                    <span className="neon-text">Start Your Repair Process</span>
                  </h2>
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                  Repair Authorization & Consent Form
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                  Complete our secure authorization form to begin your collision repair process. 
                  This legally binding form ensures we have proper consent and details for your vehicle restoration.
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 sm:p-6 border border-neon-purple/30 neon-border">
                <div className="w-full overflow-hidden">
                  <iframe
                    id="JotFormIFrame-252064962124050"
                    title="Legally Binding Repair Authorization and Consent"
                    onLoad={() => {
                      if (typeof window !== 'undefined' && window.parent) {
                        window.parent.scrollTo(0, 0);
                      }
                    }}
                    allowTransparency={true}
                    allow="geolocation; microphone; camera; fullscreen; payment"
                    src="https://form.jotform.com/252064962124050"
                    frameBorder="0"
                    className="w-full rounded-lg border-0"
                    style={{
                      minWidth: "100%",
                      width: "100%",
                      height: "539px",
                      border: "none"
                    }}
                    scrolling="no"
                  />
                </div>
              </div>
              
              <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
              <script dangerouslySetInnerHTML={{
                __html: `
                  if (typeof window !== 'undefined' && window.jotformEmbedHandler) {
                    window.jotformEmbedHandler("iframe[id='JotFormIFrame-252064962124050']", "https://form.jotform.com/");
                  }
                `
              }} />
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection 
            title="Common Questions About Collision Repair"
            faqs={faqs}
          />

          {/* Final CTA Section */}
          <CTASection 
            title="Don't Let Insurance Companies Delay Your Repair"
            subtitle="Call now for immediate assistance. We handle everything - from paperwork to final delivery. Your car will look better than before the accident, guaranteed."
            phoneText="Call 305-419-8379 Now"
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CollisionRepair;
