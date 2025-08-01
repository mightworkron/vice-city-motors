
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collision Repair", path: "/collision-repair" },
    { name: "Emergency Towing", path: "/emergency-towing" },
    { name: "Exotic Rentals", path: "/exotic-rentals" },
    { name: "Wraps & Tints", path: "/wraps-and-tints" },
    { name: "Custom Builds", path: "/custom-builds" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-neon-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center flex-1 md:flex-none">
            <img 
              src="/lovable-uploads/d8b68c76-1025-4605-b3f4-3b4231f091db.png" 
              alt="The Showroom Miami Logo" 
              className="h-20 w-auto max-w-[550px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-neon-pink ${
                  isActive(item.path)
                    ? "text-neon-pink animate-neon-pulse"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Enhanced Phone and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:305-419-8379"
              className="hidden sm:flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:border-neon-pink/60 text-white hover:text-neon-pink transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-pink/20"
              aria-label="Call Showroom Miami"
            >
              <Phone size={18} />
              <div className="flex flex-col">
                <span className="font-orbitron font-semibold text-sm">CALL NOW</span>
                <span className="font-medium text-xs opacity-90">305-419-8379</span>
              </div>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-neon-pink transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-neon-purple/30">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 hover:text-neon-pink ${
                  isActive(item.path)
                    ? "text-neon-pink animate-neon-pulse"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:305-419-8379"
              className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20 text-white hover:text-neon-pink transition-all duration-300 mt-4"
              aria-label="Call Showroom Miami"
            >
              <Phone size={18} />
              <div className="flex flex-col">
                <span className="font-orbitron font-semibold">CALL NOW</span>
                <span className="font-medium">305-419-8379</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
