
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
  make: string;
  model: string;
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
  const [filterMake, setFilterMake] = useState<string>("All");

  // Sample car data using existing image uploads
  const cars: Car[] = [
    {
      id: 1,
      make: "Ferrari",
      model: "488 GTB",
      year: 2020,
      price: 285000,
      mileage: "8,500 miles",
      condition: "Excellent",
      description: "Pristine Ferrari 488 GTB with full service history. This stunning supercar delivers breathtaking performance.",
      features: ["Carbon Fiber Package", "Premium Sound", "Navigation", "Ceramic Brakes"],
      image: "/lovable-uploads/691fc0a9-5766-4035-89da-b291de39e7da.png",
      status: "Available"
    },
    {
      id: 2,
      make: "Lamborghini",
      model: "Huracán EVO",
      year: 2021,
      price: 265000,
      mileage: "5,200 miles",
      condition: "Like New",
      description: "Immaculate Lamborghini Huracán EVO with aggressive styling and incredible performance capabilities.",
      features: ["Sport Package", "Leather Interior", "Carbon Accents", "Performance Exhaust"],
      image: "/lovable-uploads/398713b3-eca5-4d68-bcb6-2342646c7d3a.png",
      status: "Available"
    },
    {
      id: 3,
      make: "McLaren",
      model: "570S",
      year: 2019,
      price: 195000,
      mileage: "12,300 miles",
      condition: "Excellent",
      description: "McLaren 570S with stunning aerodynamics and track-focused performance in pristine condition.",
      features: ["Track Package", "Premium Audio", "Carbon Fiber Trim", "Alcantara Seats"],
      image: "/lovable-uploads/73854ee6-3fd6-4f6d-8be2-840793c8b2a0.png",
      status: "Available"
    },
    {
      id: 4,
      make: "Porsche",
      model: "911 Turbo S",
      year: 2022,
      price: 225000,
      mileage: "3,800 miles",
      condition: "Like New",
      description: "Nearly new Porsche 911 Turbo S with incredible acceleration and luxury appointments.",
      features: ["Sport Chrono", "PASM", "Premium Interior", "Ceramic Brakes"],
      image: "/lovable-uploads/338062c0-8060-410f-8bca-453aff16d5dc.png",
      status: "Available"
    },
    {
      id: 5,
      make: "Aston Martin",
      model: "DB11",
      year: 2020,
      price: 175000,
      mileage: "9,600 miles",
      condition: "Excellent",
      description: "Elegant Aston Martin DB11 combining luxury and performance in perfect harmony.",
      features: ["Premium Package", "Bang & Olufsen Audio", "Heated Seats", "Navigation"],
      image: "/lovable-uploads/2b1adf65-d49e-44e7-9d03-1c5a06f21c63.png",
      status: "Available"
    },
    {
      id: 6,
      make: "Bentley",
      model: "Continental GT",
      year: 2021,
      price: 195000,
      mileage: "6,700 miles",
      condition: "Excellent",
      description: "Luxurious Bentley Continental GT offering unmatched comfort and sophisticated performance.",
      features: ["Mulliner Package", "Diamond Quilting", "Naim Audio", "Massage Seats"],
      image: "/lovable-uploads/143dfe8f-6dfd-4e9e-8a4c-2d3634c3f810.png",
      status: "Available"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      location: "Brickell, Miami",
      rating: 5,
      text: "Bought my Ferrari from The Showroom Miami - incredible selection and transparent process. They handled everything from financing to delivery."
    },
    {
      name: "Sarah Chen",
      location: "South Beach, FL",
      rating: 5,
      text: "Professional team, fair prices, and amazing inventory. Found my dream Porsche here and couldn't be happier with the experience."
    },
    {
      name: "David Martinez",
      location: "Coral Gables, FL",
      rating: 5,
      text: "The Showroom Miami made buying a luxury car stress-free. Great financing options and they delivered exactly what they promised."
    }
  ];

  const uniqueMakes = ["All", ...new Set(cars.map(car => car.make))];
  const filteredCars = filterMake === "All" ? cars : cars.filter(car => car.make === filterMake);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        seoData={pageSEO.sales}
        structuredData={generateStructuredData('service', 'Luxury Car Sales')}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 miami-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrustBadge className="mb-6 justify-center" />
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="neon-text">Miami's Premier</span>
            <br />
            <span className="text-white">Luxury Car Collection</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover exceptional pre-owned luxury and exotic vehicles. Every car is thoroughly inspected, 
            serviced, and backed by our Miami expertise since 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:305-419-8379">
              <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4">
                <Phone className="mr-2" size={20} />
                Call 305-419-8379
              </Button>
            </a>
            <a href="/finance">
              <Button size="lg" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                <DollarSign className="mr-2" size={20} />
                Get Financing
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-neon-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {uniqueMakes.map((make) => (
              <Button
                key={make}
                variant={filterMake === make ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterMake(make)}
                className={filterMake === make 
                  ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white" 
                  : "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                }
              >
                {make}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Listings Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Card key={car.id} className="bg-card border-neon-purple/30 overflow-hidden group hover:neon-border transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-pink to-neon-purple px-3 py-1 rounded-full">
                    <span className="text-white font-bold text-sm">{car.status}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full">
                    <span className="text-neon-cyan font-bold">{formatPrice(car.price)}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      {car.year} {car.make}
                    </h3>
                    <div className="flex items-center text-neon-cyan text-sm">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1">{car.condition}</span>
                    </div>
                  </div>
                  
                  <p className="text-neon-pink font-bold text-lg mb-2">{car.model}</p>
                  
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
                    {car.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-neon-purple/20 text-neon-cyan text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 2 && (
                      <span className="text-neon-cyan text-xs px-2 py-1">
                        +{car.features.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white"
                      onClick={() => setSelectedCar(car)}
                    >
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg border border-neon-purple/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedCar.image} 
                alt={`${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-black"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-orbitron font-bold text-white mb-1">
                    {selectedCar.year} {selectedCar.make} {selectedCar.model}
                  </h2>
                  <p className="text-neon-cyan text-xl font-bold">{formatPrice(selectedCar.price)}</p>
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
                  {selectedCar.features.map((feature, index) => (
                    <span key={index} className="bg-neon-purple/20 text-neon-cyan px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
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
        </div>
      )}

      {/* Social Proof Section */}
      <SocialProof testimonials={testimonials} className="bg-black/50" />

      {/* Final CTA Section */}
      <CTASection 
        title="Ready to Drive Your Dream Car?"
        subtitle="Browse our premium collection or speak with our Miami luxury car experts today. Financing available with competitive rates and flexible terms."
        phoneText="Call 305-419-8379 Now"
        className="bg-gradient-to-r from-neon-purple/10 to-neon-blue/10"
      />

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Sales;
