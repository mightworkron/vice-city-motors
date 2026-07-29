import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Shield, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, pageFAQs, getPageStructuredData } from "@/utils/seo";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";
import GoogleReviewBadge from "@/components/conversion/GoogleReviewBadge";
import FloatingCallButton from "@/components/FloatingCallButton";
import InsuranceLogosSlider from "@/components/InsuranceLogosSlider";

const CollisionRepair = () => {
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

  const faqs = pageFAQs.collisionRepair;

  const beforeAfterImages = [
    {
      before: "/lovable-uploads/63d8f550-35e4-4513-a546-74c55336fe71.png",
      after: "/lovable-uploads/568abe98-3049-4156-aa98-0ad95c8ab3b3.png"
    },
    {
      before: "/lovable-uploads/143dfe8f-6dfd-4e9e-8a4c-2d3634c3f810.png",
      after: "/lovable-uploads/338062c0-8060-410f-8bca-453aff16d5dc.png"
    }
  ];
  
  return (
    <>
      <SEOHead seoData={pageSEO.collisionRepair} structuredData={getPageStructuredData('collisionRepair')} />
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
              
              <p className="text-neon-cyan text-sm mb-8">
                Same day estimate • Insurance accepted • 2-5 day completion
              </p>
              
              {/* Google Reviews badge at bottom of hero */}
              <div className="mt-8">
                <GoogleReviewBadge variant="hero" className="mx-auto" />
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Before and After Pictures */}
          <section className="py-16" aria-labelledby="before-after">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="before-after" className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">See Our Work in Action</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Real results from real customers. Every repair is restored to factory condition or better.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {beforeAfterImages.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border border-neon-purple/30 neon-border">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-orbitron font-bold text-neon-pink mb-2">Before</h3>
                        <img 
                          src={item.before} 
                          alt="Vehicle before collision repair"
                          className="w-full h-48 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-orbitron font-bold text-neon-green mb-2">After</h3>
                        <img 
                          src={item.after} 
                          alt="Vehicle after collision repair"
                          className="w-full h-48 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a href="tel:305-419-8379">
                  <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                    <Phone className="mr-2" size={20} />
                    Get Your Free Estimate
                  </Button>
                </a>
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

          {/* Insurance Logos Slider */}
          <InsuranceLogosSlider />

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
                <div className="w-full overflow-auto">
                  <iframe
                    id="JotFormIFrame-legally-binding-repair-authorizatio"
                    title="Legally Binding Repair Authorization and Consent"
                    allowTransparency={true}
                    allow="geolocation; microphone; camera; fullscreen; payment"
                    src="https://form.jotform.com/showroommiami/legally-binding-repair-authorizatio"
                    frameBorder="0"
                    className="w-full rounded-lg border-0"
                    style={{
                      minWidth: "100%",
                      width: "100%",
                      height: "800px",
                      border: "none"
                    }}
                    scrolling="auto"
                  />
                </div>
              </div>
              
              <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
              <script dangerouslySetInnerHTML={{
                __html: `
                  if (typeof window !== 'undefined' && window.jotformEmbedHandler) {
                    window.jotformEmbedHandler("iframe[id='JotFormIFrame-legally-binding-repair-authorizatio']", "https://form.jotform.com/");
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

          <div className="text-center pb-12">
            <GoogleReviewBadge variant="discreet" />
          </div>
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
};

export default CollisionRepair;
