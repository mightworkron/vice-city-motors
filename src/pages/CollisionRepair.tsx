import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Shield, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData } from "@/utils/seo";

const CollisionRepair = () => {
  const benefits = ["Insurance claim assistance and direct billing", "OEM and aftermarket parts availability", "Advanced paint matching technology", "Frame straightening and alignment", "Quality guarantee on all repairs", "Rental car coordination"];
  
  return <>
      <SEOHead 
        seoData={pageSEO.collisionRepair}
        structuredData={generateStructuredData('service', 'Collision Repair')}
      />
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
                <br />
                <span className="text-white">& Restoration</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                Expert collision repair services with precision craftsmanship 
                that restores your vehicle to factory specifications or better.
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
                    <span className="neon-text">Precision Restoration</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    From minor scratches to major collision damage, our certified technicians 
                    restore your vehicle to factory specifications or better. We use state-of-the-art 
                    equipment and premium materials to ensure every repair meets the highest standards.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Our comprehensive collision repair services include everything from paintwork 
                    and bodywork to structural repairs and frame alignment, all backed by our 
                    quality guarantee and exceptional customer service.
                  </p>
                  
                  <a href="tel:305-419-8379">
                    <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                      <Phone className="mr-2" size={20} />
                      Schedule Estimate
                    </Button>
                  </a>
                </article>
                
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop" alt="Professional collision repair workshop at Showroom Miami with advanced equipment and certified technicians" className="rounded-lg neon-border" loading="eager" width="600" height="400" />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                    <Shield className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-16" aria-labelledby="services-details">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Our Services</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Comprehensive collision repair services backed by our quality guarantee
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                <div className="flex items-center mb-6">
                  <Shield className="text-neon-cyan mr-4" size={32} />
                  <h3 className="text-2xl font-orbitron font-bold text-white">Collision Repair Services</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Complete collision repair services from minor dents to major structural damage, 
                  all backed by our quality guarantee and exceptional customer service.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                      {benefit}
                    </li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-16 miami-bg" aria-labelledby="process-timeline">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Our Process</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From initial assessment to final delivery, we keep you informed every step of the way
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[{
                step: "01",
                title: "Assessment",
                desc: "Detailed damage evaluation and estimate"
              }, {
                step: "02",
                title: "Planning",
                desc: "Custom repair plan and timeline creation"
              }, {
                step: "03",
                title: "Execution",
                desc: "Expert repair work and quality checks"
              }, {
                step: "04",
                title: "Delivery",
                desc: "Final inspection and vehicle return"
              }].map((item, index) => <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-orbitron font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>)}
              </div>
            </div>
          </section>

          {/* Repair Authorization Form Section */}
          <section className="py-16" aria-labelledby="authorization-form">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <FileText className="text-neon-cyan mr-4" size={40} />
                  <h2 id="authorization-form" className="text-3xl font-orbitron font-bold">
                    <span className="neon-text">Sign Our Legally Binding</span>
                  </h2>
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                  Repair Authorization & Consent Form
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                  Complete our secure authorization form to begin your collision repair process. 
                  This form ensures we have proper consent and details for your vehicle restoration.
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 sm:p-6 border border-neon-purple/30 neon-border">
                <div className="w-full overflow-hidden">
                  <iframe
                    id="JotFormIFrame-252064962124050"
                    title="Legally Binding Repair Authorization and Consent"
                    onLoad={() => {
                      if (typeof window !== 'undefined' && window.parent) {
                        window.parent.scrollTo(0, 0);
                      }
                    }}
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

          {/* CTA Section */}
          <section className="py-16" aria-labelledby="cta-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                <span className="neon-text">Ready to Restore Your Vehicle?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today for a free estimate on collision repair. 
                Let us restore your vehicle to its former glory with precision and care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:305-419-8379">
                  <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300">
                    <Phone className="mr-2" size={20} />
                    Call 305-419-8379
                  </Button>
                </a>
                <Link to="/custom-builds">
                  
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </>;
};

export default CollisionRepair;
