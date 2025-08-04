
import { InfiniteSlider } from "@/components/ui/infinite-slider";

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

  return (
    <section className="py-12" aria-label="Insurance Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4">
            <span className="neon-text">Trusted by All Major Insurance Companies</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We work directly with your insurance provider to handle all paperwork and ensure a smooth claims process
          </p>
        </div>
        
        <InfiniteSlider 
          gap={40} 
          duration={30} 
          durationOnHover={50}
          className="w-full"
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-white rounded-lg p-4 h-20 min-w-[160px] shadow-lg">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default InsuranceLogosSlider;
