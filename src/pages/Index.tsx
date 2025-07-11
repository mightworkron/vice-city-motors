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

  const services = [{
    icon: Wrench,
    title: "Collision Repair & Custom Builds",
    description: "Expert collision repair and bespoke automotive customization with precision craftsmanship.",
    link: "/collision-repair",
    gradient: "from-neon-pink to-neon-purple"
  }, {
    icon: Truck,
    title: "Emergency Towing",
    description: "24/7 emergency towing services across Miami with rapid response times.",
    link: "/emergency-towing",
    gradient: "from-neon-purple to-neon-blue"
  }, {
    icon: Car,
    title: "Exotic & Luxury Car Rentals",
    description: "Premium fleet of exotic and luxury vehicles for special occasions and business needs.",
    link: "/exotic-rentals",
    gradient: "from-neon-blue to-neon-cyan"
  }, {
    icon: Palette,
    title: "Wraps, Tints & PPF",
    description: "Professional vehicle wraps, window tinting, and paint protection film installation.",
    link: "/wraps-and-tints",
    gradient: "from-neon-cyan to-neon-pink"
  }];

  const galleryImages = ["https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop", "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop", "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop", "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&h=300&fit=crop", "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&h=300&fit=crop", "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=500&h=300&fit=crop"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3
        }} />
        
        {/* Instagram Embed Background */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-20">
          <blockquote 
            className="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/reel/DLqMISFSqft/?utm_source=ig_embed&utm_campaign=loading" 
            data-instgrm-version="14" 
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "99.375%"
            }}
          >
            <div style={{ padding: "16px" }}>
              <a 
                href="https://www.instagram.com/reel/DLqMISFSqft/?utm_source=ig_embed&utm_campaign=loading" 
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: "0 0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%"
                }} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    flexGrow: 0,
                    height: "40px",
                    marginRight: "14px",
                    width: "40px"
                  }}></div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "center"
                  }}>
                    <div style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "4px",
                      flexGrow: 0,
                      height: "14px",
                      marginBottom: "6px",
                      width: "100px"
                    }}></div>
                    <div style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "4px",
                      flexGrow: 0,
                      height: "14px",
                      width: "60px"
                    }}></div>
                  </div>
                </div>
                <div style={{ padding: "19% 0" }}></div>
                <div style={{
                  display: "block",
                  height: "50px",
                  margin: "0 auto 12px",
                  width: "50px"
                }}>
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <div style={{
                    color: "#3897f0",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "550",
                    lineHeight: "18px"
                  }}>View this post on Instagram</div>
                </div>
                <div style={{ padding: "12.5% 0" }}></div>
              </a>
              <p style={{
                color: "#c9c8cd",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                lineHeight: "17px",
                marginBottom: 0,
                marginTop: "8px",
                overflow: "hidden",
                padding: "8px 0 7px",
                textAlign: "center",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}>
                <a 
                  href="https://www.instagram.com/reel/DLqMISFSqft/?utm_source=ig_embed&utm_campaign=loading" 
                  style={{
                    color: "#c9c8cd",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    lineHeight: "17px",
                    textDecoration: "none"
                  }} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A post shared by The Showroom Miami (@the.showroom.miami)
                </a>
              </p>
            </div>
          </blockquote>
        </div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black mb-6">
            <span className="text-white">THE SHOWROOM</span>
            <br />
            <span className="neon-text animate-neon-pulse text-neon-pink">MIAMI</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-neon-cyan font-rajdhani font-medium mb-4">
            Miami's Auto Source Since 2018
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium automotive services in the heart of Miami. From collision repair to exotic rentals, 
            we deliver excellence with every project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300 transform hover:scale-105">
              <Phone className="mr-2" size={20} />
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Custom Build
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <a href="tel:305-419-8379" className="text-2xl font-orbitron font-bold text-neon-cyan hover:text-neon-pink transition-colors duration-300 animate-float">
            305-419-8379
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 miami-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6">
                <span className="neon-text">Crafting Excellence</span>
                <br />
                <span className="text-white">Since 2018</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                The Showroom Miami has been the premier destination for automotive excellence in South Florida. 
                Our team of skilled craftsmen and technicians bring years of experience to every project, 
                whether it's a collision repair, custom build, or luxury rental.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-neon-green" size={20} />
                  <span className="text-white">Expert Craftsmanship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-neon-green" size={20} />
                  <span className="text-white">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-neon-green" size={20} />
                  <span className="text-white">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-neon-green" size={20} />
                  <span className="text-white">Miami Trusted</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop" alt="The Showroom Miami Workshop" className="rounded-lg neon-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4">
              <span className="neon-text">Our Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive automotive solutions tailored to Miami's luxury car culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => <Link key={index} to={service.link} className="group relative bg-card rounded-lg p-8 border border-neon-purple/30 hover:border-neon-pink/50 transition-all duration-300 transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <service.icon className="text-neon-cyan group-hover:text-neon-pink transition-colors duration-300 mb-4" size={48} />
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-pink transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-neon-cyan group-hover:text-neon-pink transition-colors duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={16} />
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 miami-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4">
              <span className="neon-text">Our Work</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of our premium automotive projects and luxury fleet
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => <div key={index} className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-pink/50 rounded-lg transition-colors duration-300" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6">
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
                    <p className="text-gray-300">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sunday: Emergency Services Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink" />
                </div>
                <div>
                  <Textarea placeholder="Tell us about your project or service needs" rows={4} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink resize-none" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold py-3 rounded-lg transition-all duration-300">
                  Send Message
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
