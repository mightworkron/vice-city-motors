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
import { pageSEO, generateStructuredData } from "@/utils/seo";
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

  // Placeholder car data organized by category
  const cars: Car[] = [{
    id: 1,
    category: "Supercar",
    title: "Exotic Supercar",
    year: 2020,
    price: 285000,
    mileage: "Low mileage",
    condition: "Excellent",
    description: "Premium exotic supercar with exceptional performance capabilities. Full service history and pristine condition.",
    features: ["Carbon Fiber Package", "Premium Sound", "Track Package", "Ceramic Brakes"],
    image: "/lovable-uploads/691fc0a9-5766-4035-89da-b291de39e7da.png",
    status: "Coming Soon"
  }, {
    id: 2,
    category: "Supercar",
    title: "Luxury Supercar",
    year: 2021,
    price: 265000,
    mileage: "Very low miles",
    condition: "Like New",
    description: "Stunning luxury supercar with aggressive styling and incredible performance. Meticulously maintained.",
    features: ["Sport Package", "Leather Interior", "Carbon Accents", "Performance Exhaust"],
    image: "/lovable-uploads/398713b3-eca5-4d68-bcb6-2342646c7d3a.png",
    status: "Coming Soon"
  }, {
    id: 3,
    category: "Sports",
    title: "High-Performance Sports Car",
    year: 2019,
    price: 195000,
    mileage: "Well maintained",
    condition: "Excellent",
    description: "Track-focused sports car with stunning aerodynamics and precision engineering. Perfect for enthusiasts.",
    features: ["Track Package", "Premium Audio", "Carbon Fiber Trim", "Sport Seats"],
    image: "/lovable-uploads/73854ee6-3fd6-4f6d-8be2-840793c8b2a0.png",
    status: "Coming Soon"
  }, {
    id: 4,
    category: "Sports",
    title: "Premium Sports Coupe",
    year: 2022,
    price: 225000,
    mileage: "Nearly new",
    condition: "Like New",
    description: "Nearly new premium sports coupe with incredible acceleration and luxury appointments throughout.",
    features: ["Sport Chrono", "PASM", "Premium Interior", "Ceramic Brakes"],
    image: "/lovable-uploads/338062c0-8060-410f-8bca-453aff16d5dc.png",
    status: "Coming Soon"
  }, {
    id: 5,
    category: "Luxury",
    title: "Luxury Grand Tourer",
    year: 2020,
    price: 175000,
    mileage: "Excellent condition",
    condition: "Excellent",
    description: "Elegant luxury grand tourer combining sophistication and performance in perfect harmony.",
    features: ["Premium Package", "Premium Audio System", "Heated Seats", "Navigation"],
    image: "/lovable-uploads/2b1adf65-d49e-44e7-9d03-1c5a06f21c63.png",
    status: "Coming Soon"
  }, {
    id: 6,
    category: "Luxury",
    title: "Premium Luxury Coupe",
    year: 2021,
    price: 195000,
    mileage: "Low mileage",
    condition: "Excellent",
    description: "Luxurious premium coupe offering unmatched comfort and sophisticated performance capabilities.",
    features: ["Luxury Package", "Premium Quilting", "Premium Audio", "Massage Seats"],
    image: "/lovable-uploads/143dfe8f-6dfd-4e9e-8a4c-2d3634c3f810.png",
    status: "Coming Soon"
  }];

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
      <SEOHead seoData={pageSEO.sales} structuredData={generateStructuredData('service', 'Luxury Car Sales')} />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 miami-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="neon-text">Showroom Miami's Premier</span>
            <br />
            <span className="text-white">Car Collection</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover exceptional pre-owned luxury and exotic vehicles. Our curated inventory is coming soon with 
            thoroughly inspected vehicles backed by our Miami expertise since 2018.
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

      {/* Car Listings Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-text">Premium Inventory</span>
            </h2>
            <p className="text-gray-300 text-lg">
              We're curating an exceptional collection of luxury vehicles. Call us to discuss your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => <Card key={car.id} className="bg-card border-neon-purple/30 overflow-hidden group hover:neon-border transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img src={car.image} alt={`${car.category} - ${car.title}`} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-pink to-neon-purple px-3 py-1 rounded-full">
                    <span className="text-white font-bold text-sm">{car.status}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full">
                    <span className="text-neon-cyan font-bold">{formatPrice(car.price)}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-neon-purple/80 px-3 py-1 rounded-full">
                    <span className="text-white font-bold text-sm">{car.category}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      {car.year} {car.title}
                    </h3>
                    <div className="flex items-center text-neon-cyan text-sm">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1">{car.condition}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-300 text-sm mb-4">
                    <div className="flex items-center">
                      <Gauge size={16} className="mr-1" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{car.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {car.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {car.features.slice(0, 2).map((feature, index) => <span key={index} className="bg-neon-purple/20 text-neon-cyan text-xs px-2 py-1 rounded">
                        {feature}
                      </span>)}
                    {car.features.length > 2 && <span className="text-neon-cyan text-xs px-2 py-1">
                        +{car.features.length - 2} more
                      </span>}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white" onClick={() => setSelectedCar(car)}>
                      <Eye className="mr-2" size={16} />
                      View Details
                    </Button>
                    <a href="tel:305-419-8379" className="flex-1">
                      <Button variant="outline" className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                        <Phone className="mr-2" size={16} />
                        Call
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg border border-neon-purple/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img src={selectedCar.image} alt={`${selectedCar.category} - ${selectedCar.title}`} className="w-full h-64 object-cover rounded-t-lg" />
              <button onClick={() => setSelectedCar(null)} className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-black">
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
