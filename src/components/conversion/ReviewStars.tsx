
import { Star } from "lucide-react";

interface ReviewStarsProps {
  className?: string;
}

const ReviewStars = ({ className = "" }: ReviewStarsProps) => {
  return (
    <div className={`inline-flex items-center space-x-4 ${className}`}>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-neon-cyan" size={20} fill="currentColor" />
        ))}
      </div>
      <span className="text-white font-medium text-lg">4.9/5</span>
      <span className="text-gray-300">from 200+ reviews</span>
    </div>
  );
};

export default ReviewStars;
