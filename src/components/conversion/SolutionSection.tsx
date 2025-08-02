
import { CheckCircle } from "lucide-react";

interface SolutionSectionProps {
  title: string;
  subtitle?: string;
  benefits: string[];
  className?: string;
}

const SolutionSection = ({ title, subtitle, benefits, className = "" }: SolutionSectionProps) => {
  return (
    <section className={`py-16 miami-bg ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            <span className="neon-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 bg-card rounded-lg p-4 border border-neon-purple/30">
              <CheckCircle className="text-neon-green flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-300 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
