import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Truck, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData } from "@/utils/seo";

const EmergencyTowing = () => {
  const services = [
    "24/7 emergency roadside assistance",
    "Flatbed towing for luxury and exotic vehicles", 
    "Motorcycle and specialty vehicle transport",
    "Long-distance towing throughout Florida",
    "Battery jump-start and tire changes",
    "Lockout assistance and fuel delivery"
  ];

  const areas = [
    "Downtown Miami", "Miami Beach", "Coral Gables", "Aventura",
    "Doral", "Kendall", "Homestead", "Key Biscayne"
  ];

  return (
    <>
      <SEOHead 
        seoData={pageSEO.emergencyTowing}
        structuredData={generateStructuredData('service', 'Emergency Towing')}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors duration-300 mb-8"
              aria-label="Back to Home"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">Emergency</span>
                <br />
                <span className="text-white">Towing</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                24/7 emergency towing services across Miami with rapid response times 
                and specialized care for luxury and exotic vehicles.
              </p>
              
              <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-lg p-6 max-w-md mx-auto mb-8">
                <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">
                  24/7 HOTLINE
                </div>
                <a 
                  href="tel:305-419-8379"
                  className="text-2xl font-orbitron font-bold text-neon-pink hover:text-white transition-colors duration-300"
                  aria-label="Call Showroom Miami emergency towing hotline"
                >
                  305-419-8379
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Service Overview */}
          <section className="py-16 miami-bg" aria-labelledby="service-overview">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <article>
                  <h2 id="service-overview" className="text-3xl font-orbitron font-bold mb-6">
                    <span className="neon-text">Fast Response</span>
                    <br />
                    <span className="text-white">Professional Care</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    When you're stranded on Miami's busy streets, every minute counts. Our emergency 
                    towing service provides rapid response with professional equipment and experienced 
                    operators who understand the unique needs of luxury and exotic vehicles.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    From mechanical breakdowns to accident recovery, we handle every situation 
                    with the care and professionalism your vehicle deserves. Our flatbed trucks 
                    ensure safe transport without risk of damage.
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300"
                  >
                    <Phone className="mr-2" size={20} />
                    Call For Emergency
                  </Button>
                </article>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop" 
                    alt="Professional emergency towing truck from Showroom Miami providing 24/7 luxury vehicle recovery services"
                    className="rounded-lg neon-border"
                    loading="eager"
                    width="600"
                    height="400"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                    <Truck className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services and Coverage */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Services */}
                <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                  <div className="flex items-center mb-6">
                    <Truck className="text-neon-cyan mr-4" size={32} />
                    <h3 className="text-2xl font-orbitron font-bold text-white">Our Services</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Comprehensive emergency roadside assistance and towing services 
                    available 24 hours a day, 7 days a week.
                  </p>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coverage Areas */}
                <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                  <div className="flex items-center mb-6">
                    <MapPin className="text-neon-pink mr-4" size={32} />
                    <h3 className="text-2xl font-orbitron font-bold text-white">Service Areas</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    We provide emergency towing services throughout Miami-Dade County 
                    and surrounding areas with fast response times.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {areas.map((area, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="text-neon-green mr-2 flex-shrink-0" size={14} />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg">
                    <div className="text-neon-cyan font-medium">Average Response Time</div>
                    <div className="text-white font-orbitron font-bold text-xl">15-30 Minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="py-16 miami-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">What to Expect</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  When you call us for emergency towing, here's how we handle your situation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Phone,
                    title: "Immediate Response",
                    desc: "Call answered within 3 rings, location and vehicle details collected"
                  },
                  {
                    icon: Truck,
                    title: "Dispatch & ETA",
                    desc: "Nearest qualified truck dispatched with accurate arrival time"
                  },
                  {
                    icon: CheckCircle,
                    title: "Safe Transport",
                    desc: "Professional loading and secure transport to your chosen destination"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Emergency Tips */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-orbitron font-bold text-center mb-8">
                <span className="neon-text">Emergency Safety Tips</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Pull over safely to the right shoulder when possible",
                  "Turn on hazard lights immediately",
                  "Exit vehicle on the side away from traffic",
                  "Stay visible with reflective clothing if available",
                  "Call 911 first if anyone is injured",
                  "Have your location and vehicle details ready"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-card rounded-lg p-4 border border-neon-purple/30">
                    <CheckCircle className="text-neon-green flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                <span className="neon-text">Need Emergency Towing?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait when you're stranded. Our 24/7 emergency towing service 
                is standing by to help you get back on the road safely.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <Phone className="mr-2" size={20} />
                  Call 305-419-8379 NOW
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg">
                <Clock className="text-neon-cyan mx-auto mb-2" size={24} />
                <div className="text-white font-orbitron font-bold">Available 24/7/365</div>
                <div className="text-gray-300">Emergency services never sleep</div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EmergencyTowing;
