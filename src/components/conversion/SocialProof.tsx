
import { Star, Quote } from "lucide-react";
import { GBP_RATING, GBP_REVIEW_COUNT } from "@/config/business";
import { GOOGLE_REVIEWS } from "@/config/reviews";
import GoogleReviewBadge from "./GoogleReviewBadge";

interface SocialProofProps {
  className?: string;
}

const SocialProof = ({ className = "" }: SocialProofProps) => {
  const hasStats = GBP_RATING !== null && GBP_REVIEW_COUNT !== null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            <span className="neon-text">What Miami Drivers Say</span>
          </h2>
          {hasStats && (
            <div className="flex items-center justify-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-neon-cyan" size={24} fill="currentColor" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">{GBP_RATING!.toFixed(1)}/5</span>
              <span className="text-gray-300">from {GBP_REVIEW_COUNT} Google reviews</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GOOGLE_REVIEWS.map((review, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-neon-purple/30 relative">
              <Quote className="text-neon-cyan mb-4" size={24} />
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-neon-cyan" size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{review.text}"</p>
              <div className="text-white font-medium">{review.author}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <GoogleReviewBadge variant="cta" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
