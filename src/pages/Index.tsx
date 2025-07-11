
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Star, Wrench, Truck, Car, Palette, ArrowRight, MapPin, Clock, CheckCircle } from "lucide-react";

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

  const services = [
    {
      icon: Wrench,
      title: "Collision Repair & Custom Builds",
      description: "Expert collision repair and bespoke automotive customization with precision craftsmanship.",
      link: "/collision-repair",
      gradient: "from-graffiti-orange to-graffiti-purple"
    },
    {
      icon: Truck,
      title: "Emergency Towing",
      description: "24/7 emergency towing services across Miami with rapid response times.",
      link: "/emergency-towing",
      gradient: "from-graffiti-purple to-graffiti-cyan"
    },
    {
      icon: Car,
      title: "Exotic & Luxury Car Rentals",
      description: "Premium fleet of exotic and luxury vehicles for special occasions and business needs.",
      link: "/exotic-rentals",
      gradient: "from-graffiti-cyan to-graffiti-green"
    },
    {
      icon: Palette,
      title: "Wraps, Tints & PPF",
      description: "Professional vehicle wraps, window tinting, and paint protection film installation.",
      link: "/wraps-and-tints",
      gradient: "from-graffiti-green to-graffiti-pink"
    }
  ];

  const galleryImages = [
    "/lovable-uploads/f260f9a0-77a3-475c-bb91-dc64817f6217.png",
    "/lovable-uploads/f8d6d552-5a0c-4893-96d7-22d0aaef55b6.png",
    "/lovable-uploads/691fc0a9-5766-4035-89da-b291de39e7da.png",
    "/lovable-uploads/a3ac9bd2-1140-4ce9-a38a-958b8c8a65d3.png",
    "/lovable-uploads/fb43b1a6-141d-4106-99ab-6e46d477f530.png",
    "/lovable-uploads/41c46b9a-b7d4-4186-bfbb-9a97be2bdfd3.png"
  ];

  return (
    <div className="min-h-screen bg-background gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-graffiti mb-6">
            <span className="text-white block">THE SHOWROOM</span>
            <span className="text-graffiti animate-gradient-shift block pulse-glow">MIAMI</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-graffiti-cyan font-bold mb-4 animate-neon-flicker">
            Miami's Auto Source Since 2018
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium automotive services in the heart of Miami. From collision repair to exotic rentals, 
            we deliver excellence with every project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-graffiti-gradient hover:shadow-graffiti text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 neon-hover">
              <Phone className="mr-2" size={20} />
              BOOK NOW
            </Button>
            <Button variant="outline" size="lg" className="border-graffiti-cyan text-graffiti-cyan hover:bg-graffiti-cyan hover:text-black font-black px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 neon-hover">
              GET CUSTOM BUILD
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <a href="tel:305-419-8379" className="text-3xl font-graffiti text-graffiti-orange hover:text-graffiti-pink transition-colors duration-300 animate-float pulse-glow">
            305-419-8379
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-graffiti mb-6">
                <span className="text-graffiti block">CRAFTING EXCELLENCE</span>
                <span className="text-white block">SINCE 2018</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                The Showroom Miami has been the premier destination for automotive excellence in South Florida. 
                Our team of skilled craftsmen and technicians bring years of experience to every project, 
                whether it's a collision repair, custom build, or luxury rental.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-graffiti-green" size={20} />
                  <span className="text-white font-bold">EXPERT CRAFTSMANSHIP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-graffiti-green" size={20} />
                  <span className="text-white font-bold">PREMIUM QUALITY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-graffiti-green" size={20} />
                  <span className="text-white font-bold">FAST TURNAROUND</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-graffiti-green" size={20} />
                  <span className="text-white font-bold">MIAMI TRUSTED</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/78babb5c-82a3-4ae9-a2d6-dd90d8054e66.png" alt="The Showroom Miami" className="rounded-2xl shadow-graffiti neon-hover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-graffiti mb-4">
              <span className="text-graffiti">OUR SERVICES</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive automotive solutions tailored to Miami's luxury car culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group relative street-card p-8 neon-hover">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <service.icon className="text-graffiti-cyan group-hover:text-graffiti-orange transition-colors duration-300 mb-4" size={48} />
                  <h3 className="text-xl font-graffiti text-white mb-3 group-hover:text-graffiti transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-graffiti-cyan group-hover:text-graffiti-orange transition-colors duration-300">
                    <span className="font-bold uppercase tracking-wide">LEARN MORE</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-graffiti mb-4">
              <span className="text-graffiti">OUR WORK</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of our premium automotive projects and luxury fleet
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer neon-hover"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-graffiti-orange rounded-2xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-graffiti mb-6">
                <span className="text-graffiti">GET IN TOUCH</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to transform your vehicle or need emergency assistance? 
                Contact us today for premium automotive services in Miami.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-graffiti-cyan" size={24} />
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">CALL US</p>
                    <a href="tel:305-419-8379" className="text-graffiti-orange hover:text-graffiti-pink transition-colors duration-300 font-graffiti">
                      305-419-8379
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="text-graffiti-cyan" size={24} />
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">VISIT US</p>
                    <p className="text-gray-300">7820 NW 6th Ct, Miami, Florida</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="text-graffiti-cyan" size={24} />
                  <div>
                    <p className="text-white font-bold uppercase tracking-wide">BUSINESS HOURS</p>
                    <p className="text-gray-300">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sunday: Emergency Services Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="street-card p-8 neon-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    className="bg-background/50 border-graffiti-purple/30 text-white placeholder-gray-400 focus:border-graffiti-orange rounded-2xl" 
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    className="bg-background/50 border-graffiti-purple/30 text-white placeholder-gray-400 focus:border-graffiti-orange rounded-2xl" 
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your project or service needs" 
                    rows={4} 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    className="bg-background/50 border-graffiti-purple/30 text-white placeholder-gray-400 focus:border-graffiti-orange resize-none rounded-2xl" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-graffiti-gradient hover:shadow-graffiti text-white font-black py-3 rounded-2xl transition-all duration-300 neon-hover"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
