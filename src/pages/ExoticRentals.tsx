import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TrustBadge from "@/components/conversion/TrustBadge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Car, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData } from "@/utils/seo";
import FloatingCallButton from "@/components/FloatingCallButton";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";

const ExoticRentals = () => {
  const features = ["Curated fleet of exotic and luxury vehicles", "Flexible rental periods from hourly to monthly", "White-glove delivery and pickup service", "Comprehensive insurance coverage included", "24/7 concierge support during rental", "Special event and wedding packages"];
  
  const fleetImages = [
    "/lovable-uploads/42f30985-52ee-41f5-8c54-cf99f800acb4.png",
    "/lovable-uploads/c9ac9d07-62c2-43ce-b8d8-25e304519f9a.png",
    "/lovable-uploads/020cb843-2b47-46cc-905f-501ac607aadc.png",
    "/lovable-uploads/d2d65044-5601-49ed-b87a-d55d3d313e1a.png",
    "/lovable-uploads/e7a9408a-1a87-4ff1-b603-3237b3ae5c72.png",
    "/lovable-uploads/5bd61f19-d49e-4fbd-979f-554982abaff4.png"
  ];

  const solutionBenefits = [
    "Access to Miami's most exclusive exotic vehicle fleet",
    "White-glove support throughout your rental experience", 
    "Comprehensive insurance coverage for peace of mind",
    "Flexible rental periods from hours to extended trips",
    "24/7 customer support for any needs during rental"
  ];

  const testimonials = [
    {
      name: "Marcus Rivera",
      location: "South Beach",
      rating: 5,
      text: "The Lamborghini Huracán made my wedding day absolutely perfect. The delivery was seamless and the car was immaculate."
    },
    {
      name: "Jennifer Collins", 
      location: "Brickell",
      rating: 5,
      text: "Impressed my clients with the Bentley Flying Spur. Professional service from start to finish."
    },
    {
      name: "David Martinez",
      location: "Coral Gables", 
      rating: 5,
      text: "The concierge service was incredible. They handled everything so I could just enjoy driving the McLaren."
    }
  ];

  const faqs = [
    {
      question: "How do I check vehicle availability?",
      answer: "Call us at 305-419-8379 or visit our showroom. We'll check real-time availability and help you select the perfect vehicle for your dates."
    }
  ];

  return (
    <>
      <SEOHead 
        seoData={pageSEO.exoticRentals}
        structuredData={generateStructuredData('service', 'Exotic Rentals')}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544717342-6bb3ee1ed5d4?w=1920&h=1080&fit=crop')",
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
              <div className="mb-6">
                <TrustBadge className="mx-auto" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">Exotic Rentals</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                Concierge delivery service • All paperwork handled • Insurance included
              </p>
              
              <div className="flex flex-col items-center">
                <a href="tel:305-419-8379">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="mr-2" size={20} />
                    Call to Check Fleet Availability - 305-419-8379
                  </Button>
                </a>
                <p className="text-sm text-neon-cyan mt-3 font-medium">
                  Fleet changes daily - Call for current availability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Fleet */}
        <section className="py-16 miami-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-orbitron font-bold mb-4">
                <span className="neon-text">Our Fleet</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Showcase of vehicles that may be available in our exclusive collection
              </p>
              <p className="text-neon-cyan font-medium">
                Call 305-419-8379 to check current availability and see what's in our fleet today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {fleetImages.map((image, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden border border-neon-purple/30 group hover:border-neon-pink/50 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <img 
                      src={image} 
                      alt={`Luxury vehicle ${index + 1}`} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <a href="tel:305-419-8379">
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold transition-all duration-300"
                        >
                          <Phone className="mr-2" size={16} />
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="tel:305-419-8379">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300">
                  <Phone className="mr-2" size={20} />
                  Call to See Current Fleet
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-orbitron font-bold mb-6">
                  <span className="neon-text">Drive Your Dreams</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Whether you're celebrating a special milestone, impressing clients, or simply 
                  want to experience the thrill of driving a supercar through Miami's iconic 
                  streets, our exotic rental fleet delivers unforgettable experiences.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Each vehicle in our collection is meticulously maintained and detailed to 
                  perfection. From delivery to return, we provide concierge-level service 
                  that ensures your luxury experience is seamless from start to finish.
                </p>
                <p className="text-neon-cyan font-medium mb-8">
                  Our fleet changes regularly - call to see what luxury vehicles we currently have available.
                </p>
                
                <a href="tel:305-419-8379">
                  <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                    <Phone className="mr-2" size={20} />
                    Check Current Availability
                  </Button>
                </a>
              </div>
              
              <div className="relative">
                <div className="aspect-[3/2] overflow-hidden rounded-lg neon-border">
                  <img 
                    src="/lovable-uploads/0dfdb54e-36c0-4c12-84fa-6dcfa554dfc8.png" 
                    alt="Luxury Car Rental" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                  <Car className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <SolutionSection 
          title="Premium Rental Experience"
          subtitle="Experience luxury with our comprehensive exotic rental services"
          benefits={solutionBenefits}
        />

        {/* Features and Benefits */}
        <section className="py-16 miami-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Features */}
              <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                <div className="flex items-center mb-6">
                  <Star className="text-neon-cyan mr-4" size={32} />
                  <h3 className="text-2xl font-orbitron font-bold text-white">Premium Service</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Experience luxury from booking to return with our comprehensive 
                  suite of premium rental services and support.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rental Process */}
              <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                <div className="flex items-center mb-6">
                  <Calendar className="text-neon-pink mr-4" size={32} />
                  <h3 className="text-2xl font-orbitron font-bold text-white">Rental Process</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Call for Availability",
                      desc: "Check our current fleet and vehicle availability"
                    },
                    {
                      step: "2",
                      title: "Book & Confirm",
                      desc: "Secure your rental with easy booking process"
                    },
                    {
                      step: "3",
                      title: "Delivery Setup",
                      desc: "Schedule convenient delivery to your location"
                    },
                    {
                      step: "4",
                      title: "Drive & Enjoy",
                      desc: "Experience luxury with 24/7 concierge support"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              <span className="neon-text">Ready for the Ultimate Drive?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Call today to check our current fleet availability and experience Miami like never before. 
              Our team is ready to help you select the perfect vehicle for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:305-419-8379">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300">
                  <Phone className="mr-2" size={20} />
                  Call 305-419-8379 for Availability
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

export default ExoticRentals;
