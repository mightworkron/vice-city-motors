import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TrustBadge from "@/components/conversion/TrustBadge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Palette, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, pageFAQs, getPageStructuredData } from "@/utils/seo";
import FloatingCallButton from "@/components/FloatingCallButton";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";

const WrapsAndTints = () => {
  const wrapServices = ["Full vehicle color change wraps", "Partial wraps and accent graphics", "Commercial and advertising wraps", "Textured and specialty finishes", "Custom design and artwork", "Wrap removal and restoration"];
  const tintServices = ["Automotive window tinting (all types)", "Ceramic and nano-ceramic films", "Security and safety window films", "Commercial building tinting", "Residential window solutions", "UV protection and glare reduction"];
  const ppfBenefits = ["Paint protection from rock chips", "Self-healing technology", "UV and chemical resistance", "Maintains vehicle resale value", "Crystal clear, invisible protection", "10-year manufacturer warranty"];

  const solutionBenefits = [
    "Complete style transformation with premium vehicle wraps",
    "Advanced paint protection that preserves your investment", 
    "Premium materials from industry-leading manufacturers",
    "Expert installation by certified professionals",
    "UV protection and enhanced privacy with window tinting",
    "Long-lasting results with comprehensive warranties"
  ];

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      location: "Wynwood",
      rating: 5,
      text: "The matte black wrap on my BMW looks incredible. The quality and attention to detail exceeded my expectations."
    },
    {
      name: "Michelle Torres", 
      location: "Aventura",
      rating: 5,
      text: "PPF installation was flawless. You can't even tell it's there, but I have peace of mind knowing my paint is protected."
    },
    {
      name: "Antonio Silva",
      location: "Miami Beach", 
      rating: 5,
      text: "Ceramic tint made such a difference in comfort and privacy. Professional job from start to finish."
    }
  ];

  const faqs = pageFAQs.wrapsAndTints;

  return (
    <>
      <SEOHead 
        seoData={pageSEO.wrapsAndTints}
        structuredData={getPageStructuredData('wrapsAndTints')}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: "url('/lovable-uploads/a85546a3-3d0a-4663-991a-3de68d71c84d.png')",
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
                <span className="neon-text">Wraps & Tints</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                Premium Wraps, Tints & PPF in Miami
              </p>
              
              <div className="flex flex-col items-center">
                <a href="tel:305-419-8379">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="mr-2" size={20} />
                    Get Free Quote - 305-419-8379
                  </Button>
                </a>
                <p className="text-sm text-neon-cyan mt-3 font-medium mb-8">
                  Same-day estimates • Expert installation guaranteed
                </p>
              </div>
              
              {/* Trust Badge at bottom of hero */}
              <div className="mt-8">
                <TrustBadge className="mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-16 miami-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-orbitron font-bold mb-4">
                <span className="neon-text">Recent Projects</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See how we've transformed vehicles with our wrapping, tinting, and protection services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["/lovable-uploads/a85546a3-3d0a-4663-991a-3de68d71c84d.png", "/lovable-uploads/3c99dc24-8dcc-4261-bd81-b61015ff9811.png", "/lovable-uploads/f947f100-f196-4616-92de-808f6020466a.png"].map((image, index) => <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img src={image} alt={`Project ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-pink/50 rounded-lg transition-colors duration-300" />
                </div>)}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <SolutionSection 
          title="Transform & Protect Your Vehicle"
          subtitle="Comprehensive styling and protection services for your automotive investment"
          benefits={solutionBenefits}
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
                  {wrapServices.map((service, index) => <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                      <span className="text-sm">{service}</span>
                    </li>)}
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
                  {tintServices.map((service, index) => <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                      <span className="text-sm">{service}</span>
                    </li>)}
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
                  {ppfBenefits.map((benefit, index) => <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                      <span className="text-sm">{benefit}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-orbitron font-bold mb-4">
                <span className="neon-text">Our Process</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                From consultation to completion, we ensure every project meets our exacting standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
                step: "01",
                title: "Consultation",
                desc: "Discuss your vision and requirements",
                time: "30 min"
              }, {
                step: "02",
                title: "Design & Quote",
                desc: "Create custom design and provide detailed estimate",
                time: "1-2 days"
              }, {
                step: "03",
                title: "Preparation",
                desc: "Vehicle prep and material ordering",
                time: "1-3 days"
              }, {
                step: "04",
                title: "Installation",
                desc: "Professional installation and quality check",
                time: "1-5 days"
              }].map((item, index) => <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-orbitron font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
                  <div className="text-neon-cyan text-xs font-medium">{item.time}</div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <SocialProof testimonials={testimonials} />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-orbitron font-bold mb-6">
              <span className="neon-text">Ready to Transform Your Vehicle?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's discuss how we can 
              enhance your vehicle's style and protection with our premium services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:305-419-8379">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300">
                  <Phone className="mr-2" size={20} />
                  Call 305-419-8379
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
};

export default WrapsAndTints;
