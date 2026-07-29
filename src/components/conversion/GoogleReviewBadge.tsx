
import { Star } from "lucide-react";
import { GBP_RATING, GBP_REVIEW_COUNT, GBP_REVIEW_URL } from "@/config/business";

interface GoogleReviewBadgeProps {
  /** "hero": rating stars + count + button, for the homepage hero. "discreet": small text link. */
  variant?: "hero" | "discreet";
  className?: string;
}

const GoogleReviewBadge = ({ variant = "hero", className = "" }: GoogleReviewBadgeProps) => {
  const hasStats = GBP_RATING !== null && GBP_REVIEW_COUNT !== null;

  if (variant === "discreet") {
    return (
      <a
        href={GBP_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Help us with a review for The Showroom Miami on Google"
        className={`inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-pink transition-colors duration-300 ${className}`}
      >
        <Star size={14} fill="currentColor" />
        Help us with a review on Google
      </a>
    );
  }

  return (
    <div className={`inline-flex flex-col sm:flex-row items-center gap-3 ${className}`}>
      {hasStats && (
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg px-4 py-2">
          <span className="text-white font-medium text-sm">Google Reviews</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-neon-cyan" size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-white font-medium text-sm">
            {GBP_RATING!.toFixed(1)} ({GBP_REVIEW_COUNT} reviews)
          </span>
        </div>
      )}
      <a
        href={GBP_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Write a review for The Showroom Miami on Google"
        className="inline-flex items-center gap-2 text-sm font-bold text-neon-cyan hover:text-neon-pink underline underline-offset-4 transition-colors duration-300"
      >
        <Star size={16} fill="currentColor" />
        Write a review on Google
      </a>
    </div>
  );
};

export default GoogleReviewBadge;
