import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData } from "@/utils/seo";

const CustomBuilds = () => {
  const customFeatures = ["Performance upgrades and modifications", "Luxury interior customization", "Custom paint and graphic work", "Suspension and handling upgrades", "Audio system integration", "Body kit installation"];

  return (
    <>
      <SEOHead 
        seoData={pageSEO.customBuilds}
        structuredData={generateStructuredData('service', 'Custom Builds')}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2
          }} />
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
                <span className="neon-text">Custom Builds</span>
                <br />
                <span className="text-white">& Modifications</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                Transform your vehicle with bespoke automotive customization 
                that reflects your style and enhances performance to your exact specifications.
              </p>
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
                    <span className="neon-text">Vision to Reality</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Our custom build services transform your vision into reality, whether you're 
                    looking for performance upgrades, aesthetic modifications, or complete vehicle 
                    transformations that turn heads on Miami streets.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    From luxury interior customizations to high-performance engine modifications, 
                    we combine artistry with engineering excellence to create automotive masterpieces 
                    that are truly one-of-a-kind.
                  </p>
                  
                  <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                    <Phone className="mr-2" size={20} />
                    Schedule Consultation
                  </Button>
                </article>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop" 
                    alt="Custom automotive build workspace at Showroom Miami showcasing precision craftsmanship and bespoke modifications"
                    className="rounded-lg neon-border"
                    loading="eager"
                    width="600"
                    height="400"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                    <Wrench className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Features */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Our Specialties</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Comprehensive customization services tailored to your unique vision and requirements
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                <div className="flex items-center mb-6">
                  <Wrench className="text-neon-pink mr-4" size={32} />
                  <h3 className="text-2xl font-orbitron font-bold text-white">Custom Build Services</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Transform your vehicle with custom modifications that reflect your style 
                  and enhance performance to your exact specifications.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {customFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-16 miami-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Our Process</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From concept to completion, we guide you through every step of your custom build journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    desc: "Detailed discussion of your vision and requirements"
                  },
                  {
                    step: "02",
                    title: "Design",
                    desc: "Custom design plan and 3D visualization"
                  },
                  {
                    step: "03",
                    title: "Build",
                    desc: "Expert craftsmanship and precision execution"
                  },
                  {
                    step: "04",
                    title: "Reveal",
                    desc: "Final inspection and your dream car delivery"
                  }
                ].map((item, index) => (
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

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                <span className="neon-text">Ready to Build Your Dream?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today for a consultation on your custom build project. 
                Let's transform your vision into the ultimate automotive masterpiece.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300">
                  <Phone className="mr-2" size={20} />
                  Call 305-419-8379
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CustomBuilds;
