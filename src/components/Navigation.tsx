
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

          {/* Phone and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:305-419-8379"
              className="hidden sm:flex items-center space-x-2 text-neon-cyan hover:text-neon-pink transition-colors duration-300 animate-pulse hover:animate-none hover:scale-105 group"
              aria-label="Call The Showroom Miami"
            >
              <Phone size={18} className="group-hover:animate-bounce" />
              <span className="font-medium">305-419-8379</span>
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
              className="flex items-center space-x-2 text-neon-cyan hover:text-neon-pink transition-colors duration-300 pt-2 border-t border-neon-purple/30 animate-pulse hover:animate-none group"
              aria-label="Call The Showroom Miami"
            >
              <Phone size={18} className="group-hover:animate-bounce" />
              <span className="font-medium">305-419-8379</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
