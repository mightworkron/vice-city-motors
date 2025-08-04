
interface TrustBadgeProps {
  className?: string;
}

const TrustBadge = ({ className = "" }: TrustBadgeProps) => {
  return (
    <div className={`inline-flex items-center bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg px-4 py-2 ${className}`}>
      <div className="text-neon-cyan text-sm font-medium">
        Miami's Most Trusted Auto Experts Since 2018
      </div>
    </div>
  );
};

export default TrustBadge;
