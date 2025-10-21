
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  phoneText?: string;
  className?: string;
}

const CTASection = ({ title, subtitle, phoneText = "Call 305-419-8379", className = "" }: CTASectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-orbitron font-bold mb-6">
          <span className="neon-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        
        <a href="tel:305-419-8379" onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-17422213105/PHONE_CLICK_LABEL'
            });
          }
        }}>
          <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            <Phone className="mr-2" size={20} />
            {phoneText}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
