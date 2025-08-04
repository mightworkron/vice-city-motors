
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Shield, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData } from "@/utils/seo";
import TrustBadge from "@/components/conversion/TrustBadge";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Marquee } from "@/components/ui/marquee";

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

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "Yes. We accept most major auto insurance plans. Whether you've been in a collision or need towing services, we'll help you navigate the claims process and ensure everything is properly documented. Just bring your claim number, and we'll handle the rest."
    },
    {
      question: "How long does collision repair take in Miami?",
      answer: "Most collision repairs take 2-5 business days depending on damage extent and parts availability. We provide accurate timelines after our free assessment."
    },
    {
      question: "What if I'm not satisfied with the repair work?",
      answer: "We guarantee all our collision repair work. If you're not 100% satisfied, we'll make it right at no additional cost to you."
    }
  ];

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

  const insuranceLogos = [
    {
      name: "State Farm",
      logo: "/lovable-uploads/39fd2c02-3136-480d-83be-be64eb3c2e24.png"
    },
    {
      name: "AAA",
      logo: "/lovable-uploads/7b9738ac-524a-4020-bf9a-8422f6e2929b.png"
    },
    {
      name: "Allstate",
      logo: "/lovable-uploads/eeb2aad1-29e4-44e3-a373-f616b917f204.png"
    },
    {
      name: "Liberty Mutual",
      logo: "/lovable-uploads/d46461e2-e174-4560-9842-8ee0882b0eb3.png"
    },
    {
      name: "Esurance",
      logo: "/lovable-uploads/880f7d52-6740-40e9-b837-131fa59435e6.png"
    },
    {
      name: "Farmers Insurance",
      logo: "/lovable-uploads/43e47194-bea9-4ec1-b958-c88a5cade45c.png"
    },
    {
      name: "Nationwide",
      logo: "/lovable-uploads/8eaf816e-4fd0-4696-9386-7cbcf0f32ba2.png"
    },
    {
      name: "MetLife",
      logo: "/lovable-uploads/d613e930-c771-467e-9373-05172e907c78.png"
    },
    {
      name: "Progressive",
      logo: "/lovable-uploads/773f39a2-fb73-46f1-81f7-624812d37069.png"
    },
    {
      name: "21st Century Insurance",
      logo: "/lovable-uploads/32f46066-4b37-4b7a-87f3-da0f7ba67698.png"
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
          {/* See Our Work in Action - Before and After Pictures */}
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

          {/* Insurance We Accept */}
          <section className="py-16" aria-labelledby="insurance-accepted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="insurance-accepted" className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Insurance We Accept</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We work with all major insurance providers to make your collision repair process seamless and hassle-free
                </p>
              </div>

              <Marquee pauseOnHover={true} speed={25} className="mt-8">
                {insuranceLogos.map((insurance, index) => (
                  <div
                    key={index}
                    className="relative h-20 w-fit mx-8 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={insurance.logo} 
                      alt={`${insurance.name} insurance accepted`}
                      className="h-12 w-auto object-contain max-w-[140px]"
                      loading="lazy"
                      onError={(e) => {
                        console.log(`Failed to load image: ${insurance.logo}`);
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-sm font-orbitron font-bold text-cyan-400">${insurance.name}</span>`;
                        }
                      }}
                    />
                  </div>
                ))}
              </Marquee>

              <div className="text-center mt-8">
                <p className="text-cyan-400 text-sm">
                  Don't see your insurance? Call us - we work with most providers!
                </p>
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
        <FloatingCallButton />
      </div>
    </>
  );
};

export default CollisionRepair;
