
import { AlertTriangle } from "lucide-react";

interface ProblemSectionProps {
  title: string;
  problems: string[];
  className?: string;
}

const ProblemSection = ({ title, problems, className = "" }: ProblemSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="text-neon-pink mr-3" size={32} />
          <h2 className="text-3xl font-orbitron font-bold text-white">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-red-500/30">
              <p className="text-gray-300 text-lg">"{problem}"</p>
            </div>
          ))}
        </div>
        <p className="text-neon-cyan mt-8 text-xl font-medium">
          Sound familiar? You're not alone.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
