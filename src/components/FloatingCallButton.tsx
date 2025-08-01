
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="tel:305-419-8379" aria-label="Call The Showroom Miami now">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white shadow-2xl neon-border transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
        >
          <Phone size={24} className="animate-bounce" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingCallButton;
