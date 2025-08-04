
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="tel:305-419-8379" aria-label="Call Showroom Miami">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-6 py-4 rounded-full neon-border transition-all duration-300 transform hover:scale-110 shadow-2xl hover:animate-none"
        >
          <Phone className="mr-2" size={24} />
          <span className="font-orbitron">CALL NOW</span>
        </Button>
      </a>
    </div>
  );
};

export default FloatingCallButton;
