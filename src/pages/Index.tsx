
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Phone, Star, Wrench, Truck, Car, Palette, ArrowRight, MapPin, Clock, CheckCircle, Shield, Users } from "lucide-react";
import { pageSEO, generateStructuredData } from "@/utils/seo";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const painPoints = [
    "Your car got damaged and you don't know who to trust with repairs?",
    "Need emergency towing but worried about damage to your luxury vehicle?",
    "Want to rent an exotic car but tired of poor service and hidden fees?",
    "Looking for custom work but can't find qualified specialists in Miami?"
  ];

  const benefits = [
    "Factory-certified collision repair that restores your car to perfection",
    "24/7 emergency towing with flatbed trucks for luxury vehicles", 
    "Exotic car rentals with white-glove service and no surprises",
    "Custom builds and wraps by award-winning craftsmen"
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Miami Beach",
      text: "They fixed my Porsche after an accident - looks better than new. Amazing work!",
      rating: 5
    },
    {
      name: "James Chen", 
      location: "Coral Gables",
      text: "Rented a Lamborghini for my wedding. Perfect service, delivered on time.",
      rating: 5
    },
    {
      name: "Carlos Martinez",
      location: "Downtown Miami", 
      text: "Custom wrap on my Tesla turned out incredible. Worth every penny.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How much does collision repair cost?",
      answer: "We provide free estimates and work directly with insurance companies. Most repairs are fully covered."
    },
    {
      question: "How fast is your emergency towing response?",
      answer: "Average response time is 15-30 minutes across Miami-Dade County, 24/7."
    },
    {
      question: "What's included in exotic car rentals?",
      answer: "Insurance, delivery/pickup, 24/7 support, and detailed vehicle briefing are all included."
    },
    {
      question: "Do you guarantee your work?",
      answer: "Yes - all our services come with comprehensive warranties and satisfaction guarantee."
    }
  ];

  return (
    <>
      <SEOHead seoData={pageSEO.home} structuredData={generateStructuredData('home')} />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section - Above the Fold */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/lovable-uploads/72157161-abaa-4935-b3a0-7c261301cec1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
          
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-orbitron font-black mb-6">
              <span className="neon-text animate-neon-pulse">MIAMI'S #1</span>
              <br />
              <span className="text-white">AUTO EXPERTS</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-neon-cyan font-rajdhani font-bold mb-6">
              Get your car fixed, customized, or rent exotic vehicles with zero hassle
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <span className="text-white font-medium">1,000+ Happy Customers</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:305-419-8379">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-12 py-6 rounded-lg neon-border transition-all duration-300 transform hover:scale-105 text-xl">
                  <Phone className="mr-3" size={24} />
                  Call Now: 305-419-8379
                </Button>
              </a>
              <Link to="/exotic-rentals">
                <Button variant="outline" size="lg" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-xl">
                  Rent Exotic Cars
                  <ArrowRight className="ml-3" size={24} />
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Shield className="text-neon-cyan" size={20} />
                <span className="text-white font-medium">Licensed & Insured • Since 2018</span>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Problem Section */}
          <section className="py-16 miami-bg">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
                <span className="neon-text">Tired of These Problems?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map((pain, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border border-red-500/30">
                    <p className="text-lg text-gray-300 leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-xl text-neon-cyan font-medium">
                  You're not alone. We solve these problems for 1,000+ Miami drivers every year.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-orbitron font-bold text-center mb-4">
                <span className="neon-text">Here's Exactly What You Get</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-12">No surprises. No runaround. Just results.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-card rounded-lg p-6 border border-neon-purple/30">
                    <CheckCircle className="text-neon-green flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-white leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="py-16 miami-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
                <span className="neon-text">What Our Customers Say</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border border-neon-purple/30">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-neon-cyan text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-lg p-6 inline-block">
                  <div className="flex items-center justify-center gap-4">
                    <Users className="text-neon-cyan" size={32} />
                    <div>
                      <p className="text-2xl font-orbitron font-bold text-white">1,000+</p>
                      <p className="text-neon-cyan">Satisfied Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Page CTA */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                <span className="neon-text">Ready to Get Started?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Call now for a free quote or to book your exotic rental
              </p>
              
              <a href="tel:305-419-8379">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-xl">
                  <Phone className="mr-3" size={24} />
                  Get Free Quote: 305-419-8379
                </Button>
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 miami-bg">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
                <span className="neon-text">Frequently Asked Questions</span>
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 border border-neon-purple/30">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-orbitron font-bold mb-6">
                    <span className="neon-text">Get In Touch</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Ready to transform your vehicle or need emergency assistance? 
                    Contact us today for premium automotive services in Miami.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-neon-cyan" size={24} />
                      <div>
                        <p className="text-white font-medium">Call Us</p>
                        <a href="tel:305-419-8379" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300">
                          305-419-8379
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <MapPin className="text-neon-cyan" size={24} />
                      <div>
                        <p className="text-white font-medium">Visit Us</p>
                        <p className="text-gray-300">7820 NW 6th Ct, Miami, Florida</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Clock className="text-neon-cyan" size={24} />
                      <div>
                        <p className="text-white font-medium">Business Hours</p>
                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Tell us about your project or service needs" 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold py-3 rounded-lg transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 miami-bg">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-orbitron font-bold mb-6">
                <span className="neon-text">Don't Wait - Call Now</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,000+ satisfied customers. Get your free quote today.
              </p>
              
              <a href="tel:305-419-8379">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-16 py-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-2xl">
                  <Phone className="mr-4" size={28} />
                  305-419-8379
                </Button>
              </a>
              
              <p className="text-neon-cyan mt-4 font-medium">Available 24/7 for emergencies</p>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
};

export default Index;
