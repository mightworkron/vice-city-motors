
import { Star } from "lucide-react";

interface TrustBadgeProps {
  className?: string;
}

const TrustBadge = ({ className = "" }: TrustBadgeProps) => {
  return (
    <div className={`inline-flex items-center bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg px-4 py-2 ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-neon-cyan" size={14} fill="currentColor" />
          ))}
        </div>
        <span className="text-white font-medium text-sm">4.9/5</span>
      </div>
      <div className="ml-3 text-neon-cyan text-sm font-medium">
        1000+ Miami drivers served since 2018
      </div>
    </div>
  );
};

export default TrustBadge;
