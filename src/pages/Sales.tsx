import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEOHead from "@/components/SEOHead";
import SocialProof from "@/components/conversion/SocialProof";
import CTASection from "@/components/conversion/CTASection";
import TrustBadge from "@/components/conversion/TrustBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Eye, DollarSign, Calendar, Gauge, Star } from "lucide-react";
import { pageSEO, getPageStructuredData } from "@/utils/seo";
import { useState } from "react";

interface Car {
  id: number;
  category: string;
  title: string;
  year: number;
  price: number;
  mileage: string;
  condition: string;
  description: string;
  features: string[];
  image: string;
  status: "Available" | "Sold" | "Coming Soon";
}

const Sales = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  // Empty car inventory - ready for future additions
  const cars: Car[] = [];

  const testimonials = [{
    name: "Marcus Rodriguez",
    location: "Brickell, Miami",
    rating: 5,
    text: "Amazing selection of premium vehicles at The Showroom Miami. Professional team made the entire process seamless from start to finish."
  }, {
    name: "Sarah Chen",
    location: "South Beach, FL",
    rating: 5,
    text: "Exceptional service and quality vehicles. They helped me find exactly what I was looking for with great financing options."
  }, {
    name: "David Martinez",
    location: "Coral Gables, FL",
    rating: 5,
    text: "The Showroom Miami exceeded my expectations. Transparent pricing and professional service throughout the entire experience."
  }];

  const categories = ["All", "Economy", "Luxury", "Sports", "Supercar", "SUV"];
  const filteredCars = filterCategory === "All" ? cars : cars.filter(car => car.category === filterCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return <div className="min-h-screen bg-background">
      <SEOHead seoData={pageSEO.sales} structuredData={getPageStructuredData('sales')} />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('/lovable-uploads/72157161-abaa-4935-b3a0-7c261301cec1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="neon-text">Showroom Miami's Premier</span>
            <br />
            <span className="text-white">Car Collection</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our curated inventory of exceptional pre-owned luxury and exotic vehicles is currently being assembled. 
            Call us to discuss your specific needs and get notified when matching vehicles arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="tel:305-419-8379">
              <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4">
                <Phone className="mr-2" size={20} />
                Call 305-419-8379
              </Button>
            </a>
            <a href="/finance">
              <Button size="lg" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                <DollarSign className="mr-2" size={20} />
                Get Pre-Approved
              </Button>
            </a>
          </div>
          <TrustBadge className="justify-center" />
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-neon-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => <Button key={category} variant={filterCategory === category ? "default" : "outline"} size="sm" onClick={() => setFilterCategory(category)} className={filterCategory === category ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white" : "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"}>
                {category}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Car Listings Section - Empty State */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-text">Premium Inventory Coming Soon</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're carefully curating an exceptional collection of luxury and exotic vehicles. 
              Our inventory is being built with the finest pre-owned cars in Miami.
            </p>
          </div>
          
          {/* Empty State Message */}
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                Building Our Collection
              </h3>
              <p className="text-gray-300 mb-6">
                Our premium inventory is currently being assembled. Call us to discuss your specific requirements 
                and we'll notify you when matching vehicles become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:305-419-8379">
                  <Button className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white">
                    <Phone className="mr-2" size={16} />
                    Call 305-419-8379
                  </Button>
                </a>
                <a href="/finance">
                  <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                    <DollarSign className="mr-2" size={16} />
                    Get Pre-Approved
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Detail Modal - Preserved for future use */}
      {selectedCar && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg border border-neon-purple/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img src={selectedCar.image} alt={`${selectedCar.category} - ${selectedCar.title}`} className="w-full h-64 object-cover rounded-t-lg" />
              <button onClick={() => setSelectedCar(null)} aria-label="Close vehicle details" className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-black">
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-orbitron font-bold text-white mb-1">
                    {selectedCar.year} {selectedCar.title}
                  </h2>
                  <p className="text-neon-cyan text-xl font-bold">{formatPrice(selectedCar.price)}</p>
                  <span className="inline-block bg-neon-purple/20 text-neon-cyan px-3 py-1 rounded-full text-sm mt-2">
                    {selectedCar.category}
                  </span>
                </div>
                <span className="bg-gradient-to-r from-neon-pink to-neon-purple px-3 py-1 rounded-full text-white font-bold">
                  {selectedCar.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-gray-300">
                  <span className="font-bold">Mileage:</span> {selectedCar.mileage}
                </div>
                <div className="text-gray-300">
                  <span className="font-bold">Condition:</span> {selectedCar.condition}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{selectedCar.description}</p>
              
              <div className="mb-6">
                <h3 className="font-orbitron font-bold text-white mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCar.features.map((feature, index) => <span key={index} className="bg-neon-purple/20 text-neon-cyan px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>)}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="tel:305-419-8379" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white">
                    <Phone className="mr-2" size={16} />
                    Call About This Car
                  </Button>
                </a>
                <a href="/finance" className="flex-1">
                  <Button variant="outline" className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                    <DollarSign className="mr-2" size={16} />
                    Get Financing
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>}

      {/* Social Proof Section */}
      <SocialProof testimonials={testimonials} className="bg-black/50" />

      {/* Final CTA Section */}
      <CTASection title="Ready to Find Your Perfect Car?" subtitle="Our premium inventory is being carefully curated. Call us to discuss your specific requirements and get notified when matching vehicles arrive." phoneText="Call 305-419-8379 Now" className="bg-gradient-to-r from-neon-purple/10 to-neon-blue/10" />

      <Footer />
      <FloatingCallButton />
    </div>;
};

export default Sales;
