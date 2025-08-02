
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Car, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingCallButton from "@/components/FloatingCallButton";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";

const ExoticRentals = () => {
  const features = ["Curated fleet of exotic and luxury vehicles", "Flexible rental periods from hourly to monthly", "White-glove delivery and pickup service", "Comprehensive insurance coverage included", "24/7 concierge support during rental", "Special event and wedding packages"];
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

  const solutionBenefits = [
    "Access to Miami's most exclusive exotic vehicle fleet",
    "Concierge delivery service to your preferred location",
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
      question: "What are the requirements to rent an exotic vehicle?",
      answer: "You must be 25 or older with a clean driving record and valid driver's license. A security deposit and comprehensive insurance verification are required."
    },
    {
      question: "How do I check vehicle availability?",
      answer: "Call us at 305-419-8379 or visit our showroom. We'll check real-time availability and help you select the perfect vehicle for your dates."
    },
    {
      question: "Is insurance coverage included?",
      answer: "Yes, comprehensive insurance coverage is included with every rental. We also offer additional coverage options for extra peace of mind."
    },
    {
      question: "How far in advance should I book?",
      answer: "For best availability, especially for special events, we recommend booking 1-2 weeks in advance. However, we often accommodate last-minute requests."
    }
  ];

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
              <span className="neon-text">Exotic Rentals</span>
            </h1>
            <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
              Concierge delivery service • All paperwork handled • Insurance included
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 miami-bg">
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
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Each vehicle in our collection is meticulously maintained and detailed to 
                perfection. From delivery to return, we provide concierge-level service 
                that ensures your luxury experience is seamless from start to finish.
              </p>
              
              <a href="tel:305-419-8379">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                  <Phone className="mr-2" size={20} />
                  Reserve Your Dream Car
                </Button>
              </a>
            </div>
            
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&h=400&fit=crop" alt="Luxury Car Rental" className="rounded-lg neon-border" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                <Car className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {vehicles.map((category, index) => <div key={index} className="bg-card rounded-lg overflow-hidden border border-neon-purple/30 group hover:border-neon-pink/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={category.image} alt={category.category} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-pink transition-colors duration-300">
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.examples.map((vehicle, idx) => <li key={idx} className="flex items-center text-gray-300">
                        <Star className="text-neon-cyan mr-2 flex-shrink-0" size={14} />
                        <span className="text-sm">{vehicle}</span>
                      </li>)}
                  </ul>
                </div>
              </div>)}
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
                {features.map((feature, index) => <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                    {feature}
                  </li>)}
              </ul>
            </div>

            {/* Rental Process */}
            <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
              <div className="flex items-center mb-6">
                <Calendar className="text-neon-pink mr-4" size={32} />
                <h3 className="text-2xl font-orbitron font-bold text-white">Rental Process</h3>
              </div>
              
              <div className="space-y-6">
                {[{
                step: "1",
                title: "Choose Your Vehicle",
                desc: "Browse our fleet and select your dream car"
              }, {
                step: "2",
                title: "Book & Confirm",
                desc: "Secure your rental with easy online booking"
              }, {
                step: "3",
                title: "Delivery Setup",
                desc: "Schedule convenient delivery to your location"
              }, {
                step: "4",
                title: "Drive & Enjoy",
                desc: "Experience luxury with 24/7 concierge support"
              }].map((item, index) => <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-text">Special Packages</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tailored rental packages for your unique occasions and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: "Wedding Package",
            desc: "Make your special day unforgettable with luxury transportation",
            features: ["Decorated vehicle", "Professional chauffeur", "Red carpet service"]
          }, {
            title: "Business Package",
            desc: "Impress clients and partners with executive-level transportation",
            features: ["Airport transfers", "Corporate rates", "Flexible scheduling"]
          }, {
            title: "Weekend Getaway",
            desc: "Extended rental packages for Miami Beach adventures",
            features: ["Multi-day discounts", "Concierge recommendations", "Route planning"]
          }].map((pkg, index) => <div key={index} className="bg-card rounded-lg p-6 border border-neon-purple/30 text-center">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">{pkg.title}</h3>
                <p className="text-gray-300 mb-4">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => <li key={idx} className="text-sm text-gray-300 flex items-center justify-center">
                      <CheckCircle className="text-neon-green mr-2" size={14} />
                      {feature}
                    </li>)}
                </ul>
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
            <span className="neon-text">Ready for the Ultimate Drive?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your exotic rental today and experience Miami like never before. 
            Our team is ready to help you select the perfect vehicle for your needs.
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
  );
};

export default ExoticRentals;
