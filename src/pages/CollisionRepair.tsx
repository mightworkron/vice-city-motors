import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const CollisionRepair = () => {
  const benefits = ["Insurance claim assistance and direct billing", "OEM and aftermarket parts availability", "Advanced paint matching technology", "Frame straightening and alignment", "Quality guarantee on all repairs", "Rental car coordination"];
  const customFeatures = ["Performance upgrades and modifications", "Luxury interior customization", "Custom paint and graphic work", "Suspension and handling upgrades", "Audio system integration", "Body kit installation"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop')",
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
              <span className="neon-text">Collision Repair</span>
              <br />
              <span className="text-white">& Custom Builds</span>
            </h1>
            <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
              Expert collision repair services and bespoke automotive customization 
              with precision craftsmanship that exceeds expectations.
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
                <span className="neon-text">Precision Restoration</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                From minor scratches to major collision damage, our certified technicians 
                restore your vehicle to factory specifications or better. We use state-of-the-art 
                equipment and premium materials to ensure every repair meets the highest standards.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our custom build services transform your vision into reality, whether you're 
                looking for performance upgrades, aesthetic modifications, or complete vehicle 
                transformations that turn heads on Miami streets.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300">
                <Phone className="mr-2" size={20} />
                Schedule Estimate
              </Button>
            </div>
            
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop" alt="Collision Repair Workshop" className="rounded-lg neon-border" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neon-pink to-neon-purple p-4 rounded-lg">
                <Wrench className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Collision Repair */}
            <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
              <div className="flex items-center mb-6">
                <Shield className="text-neon-cyan mr-4" size={32} />
                <h3 className="text-2xl font-orbitron font-bold text-white">Collision Repair</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Complete collision repair services from minor dents to major structural damage, 
                all backed by our quality guarantee.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                    {benefit}
                  </li>)}
              </ul>
            </div>

            {/* Custom Builds */}
            <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
              <div className="flex items-center mb-6">
                <Wrench className="text-neon-pink mr-4" size={32} />
                <h3 className="text-2xl font-orbitron font-bold text-white">Custom Builds</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Transform your vehicle with custom modifications that reflect your style 
                and enhance performance to your exact specifications.
              </p>
              <ul className="space-y-3">
                {customFeatures.map((feature, index) => <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="text-neon-green mr-3 flex-shrink-0" size={16} />
                    {feature}
                  </li>)}
              </ul>
            </div>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-6">
            <span className="neon-text">Ready to Restore or Transform?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on collision repair or consultation 
            on your custom build project. Let's bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300">
              <Phone className="mr-2" size={20} />
              Call 305-419-8379
            </Button>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CollisionRepair;