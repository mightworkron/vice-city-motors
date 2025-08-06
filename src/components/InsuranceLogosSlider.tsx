
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import OptimizedImage from "@/components/ui/optimized-image";

const InsuranceLogosSlider = () => {
  const logos = [
    { src: "/lovable-uploads/bec50d62-5202-45e1-bab1-c7a21222acf5.png", alt: "State Farm" },
    { src: "/lovable-uploads/75a3cc47-92be-4f27-a5d2-1e3bdef56fba.png", alt: "AAA" },
    { src: "/lovable-uploads/73854ee6-3fd6-4f6d-8be2-840793c8b2a0.png", alt: "Allstate" },
    { src: "/lovable-uploads/0f91c319-c6e7-414f-b677-f66bfab134c8.png", alt: "Liberty Mutual" },
    { src: "/lovable-uploads/38d78b67-b190-4dac-8549-61754abf4ea2.png", alt: "Progressive" },
    { src: "/lovable-uploads/b9d49ddf-c7b7-47a6-bee0-333a14ae9bc5.png", alt: "Farmers Insurance" },
    { src: "/lovable-uploads/d63eeb0c-faa6-42f9-87e9-829b4e72f1e5.png", alt: "21st Century Insurance" },
    { src: "/lovable-uploads/941525df-86cb-4206-995d-40e9c7d7082e.png", alt: "Nationwide" },
    { src: "/lovable-uploads/9dd7d9e1-57fb-42ac-ab9e-923bee7b1edb.png", alt: "Mercury Insurance" },
    { src: "/lovable-uploads/8201c160-eee2-4912-92e1-6c299ef1de3f.png", alt: "USAA" },
  ];

  const getBiggerLogos = (alt: string) => {
    return alt === "Progressive" || alt === "Allstate" || alt === "Liberty Mutual";
  };

  return (
    <section className="py-12" aria-label="Insurance We Accept">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4">
            <span className="neon-text">We Accept ALL Insurance Providers</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't see your insurance company listed? No problem! We work with ALL insurance providers in Miami. 
            Bring us your claim number and we'll handle all the paperwork and coordination directly with your insurance company - no matter who you're with.
          </p>
        </div>
        
        <InfiniteSlider 
          gap={40} 
          duration={30} 
          durationOnHover={50}
          className="w-full"
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 h-20 min-w-[160px]">
              <OptimizedImage
                src={logo.src}
                alt={logo.alt}
                className={`object-contain opacity-85 hover:opacity-100 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] ${
                  getBiggerLogos(logo.alt) ? 'w-44 h-24' : 'w-32 h-16'
                }`}
                containerClassName="w-full h-full"
                showLoader={false}
                priority={index < 3} // Prioritize first 3 logos
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default InsuranceLogosSlider;
