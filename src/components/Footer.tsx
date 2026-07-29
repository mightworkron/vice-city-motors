
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, Mail, Facebook, Star } from "lucide-react";
import { GBP_PLACE_ID, GBP_PROFILE_URL, GBP_RATING, GBP_REVIEW_COUNT } from "@/config/business";

const Footer = () => {
  const hasGbpStats = GBP_RATING !== null && GBP_REVIEW_COUNT !== null;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-neon-purple/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Maps Section */}
        <div className="mb-12">
          <h3 className="text-white font-orbitron font-bold mb-6 text-center text-2xl">
            <span className="neon-text">Find Us</span>
          </h3>
          <div className="relative rounded-lg overflow-hidden neon-border">
            <iframe title="Google Maps location of The Showroom Miami, 7820 NW 6th Ct, Miami, FL" src={`https://maps.google.com/maps?q=place_id:${GBP_PLACE_ID}&output=embed`} width="100%" height="300" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full" />
          </div>
          <a
            href={GBP_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View The Showroom Miami's Google Business Profile and reviews"
            className="mt-4 inline-flex items-center gap-2 text-gray-300 hover:text-neon-pink transition-colors duration-300"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-neon-cyan" size={14} fill="currentColor" />
              ))}
            </div>
            {hasGbpStats ? (
              <span className="text-sm">
                {GBP_RATING!.toFixed(1)} ({GBP_REVIEW_COUNT} reviews) on Google
              </span>
            ) : (
              <span className="text-sm">See our reviews on Google</span>
            )}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-orbitron font-bold neon-text mb-2">
              THE SHOWROOM MIAMI
            </div>
            <p className="text-neon-cyan text-lg font-medium mb-4">
              YOUR CAR. OUR OBSESSION.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Premium automotive services in the heart of Miami. From custom builds to exotic rentals, 
              we deliver excellence with every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-orbitron font-bold mb-4">Services</h3>
            <div className="space-y-2">
              <Link to="/collision-repair" className="block text-gray-300 hover:text-neon-pink transition-colors duration-300">
                Collision Repair
              </Link>
              <Link to="/emergency-towing" className="block text-gray-300 hover:text-neon-pink transition-colors duration-300">
                Emergency Towing
              </Link>
              <Link to="/exotic-rentals" className="block text-gray-300 hover:text-neon-pink transition-colors duration-300">
                Exotic Rentals
              </Link>
              <Link to="/wraps-and-tints" className="block text-gray-300 hover:text-neon-pink transition-colors duration-300">
                Wraps & Tints
              </Link>
              <Link to="/custom-builds" className="block text-gray-300 hover:text-neon-pink transition-colors duration-300">
                Custom Builds
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-orbitron font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} className="text-neon-cyan" />
                <a href="tel:305-419-8379" className="hover:text-neon-pink transition-colors duration-300">
                  305-419-8379
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} className="text-neon-cyan" />
                <a href="mailto:info@showroommiami.com" className="hover:text-neon-pink transition-colors duration-300">
                  info@showroommiami.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin size={16} className="text-neon-cyan mt-1" />
                <span>
                  7820 NW 6th Ct<br />
                  Miami, Florida
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock size={16} className="text-neon-cyan" />
                <span>Mon-Fri: 9AM-5PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://www.facebook.com/showroom.miami" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-pink transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/the.showroom.miami" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-pink transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@showroommiami" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-pink transition-colors duration-300" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-purple/30 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} The Showroom Miami. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-neon-pink text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-neon-pink text-sm transition-colors duration-300">
                Terms and Conditions
              </Link>
            </div>
          </div>
          <a 
            href="https://www.instagram.com/ron_sitess/?utm_source=ig_web_button_share_sheet" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sky-400 hover:text-neon-pink text-sm transition-colors duration-300 mt-4 sm:mt-0"
          >
            Website powered by Ron_Sitess
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
