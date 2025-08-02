
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

interface SocialProofProps {
  testimonials: TestimonialProps[];
  className?: string;
}

const SocialProof = ({ testimonials, className = "" }: SocialProofProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            <span className="neon-text">What Miami Drivers Say</span>
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-neon-cyan" size={24} fill="currentColor" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.9/5</span>
            <span className="text-gray-300">from 200+ reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-neon-purple/30 relative">
              <Quote className="text-neon-cyan mb-4" size={24} />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-neon-cyan" size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <div className="text-white font-medium">{testimonial.name}</div>
              <div className="text-neon-cyan text-sm">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
