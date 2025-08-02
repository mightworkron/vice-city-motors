
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, CheckCircle, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, generateStructuredData } from "@/utils/seo";
import FloatingCallButton from "@/components/FloatingCallButton";
import ProblemSection from "@/components/conversion/ProblemSection";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";

const CustomBuilds = () => {
  const problems = [
    "Stock car not cutting it for your performance needs?",
    "Want something completely unique that no one else has?",
    "Current performance not matching your driving ambitions?",
    "Need modifications but don't know where to start?",
    "Want to stand out from the crowd with custom styling?",
    "Dreaming of that perfect build but need expert guidance?"
  ];

  const benefits = [
    "Complete custom design and engineering consultation",
    "Performance upgrades that deliver real power gains",
    "Luxury interior customization to match your style",
    "Expert installation with precision craftsmanship",
    "Quality materials and components from trusted brands",
    "Comprehensive testing and tuning for optimal performance"
  ];

  const testimonials = [
    {
      name: "Miguel Santos",
      location: "Brickell, Miami",
      rating: 5,
      text: "Transformed my Mustang into a 600hp beast! The custom work is flawless and the performance gains are incredible. Worth every penny!"
    },
    {
      name: "Jennifer Lee",
      location: "Aventura, FL",
      rating: 5,
      text: "The interior customization exceeded my expectations. They turned my luxury sedan into a mobile office that's both functional and beautiful."
    },
    {
      name: "Antonio Rodriguez",
      location: "South Beach, FL", 
      rating: 5,
      text: "My custom build project took 3 months but the result is a one-of-a-kind machine. The attention to detail is unmatched in Miami."
    }
  ];

  const faqs = [
    {
      question: "How long does a custom build take?",
      answer: "Timeline varies based on complexity. Simple modifications take 1-2 weeks, while complete custom builds can take 2-4 months. We provide detailed timelines during consultation and keep you updated throughout the process."
    },
    {
      question: "Can you provide cost estimates upfront?",
      answer: "We provide detailed estimates after consultation. Costs vary greatly based on modifications desired. We work with various budgets and can phase projects to spread costs over time."
    },
    {
      question: "What's included in the design process?",
      answer: "Our design process includes initial consultation, 3D renderings when applicable, parts sourcing, timeline planning, and regular progress updates. We ensure your vision becomes reality."
    },
    {
      question: "Do you offer warranties on custom work?",
      answer: "Yes! We warranty all our workmanship and most aftermarket parts come with manufacturer warranties. We stand behind our builds and provide ongoing support after completion."
    }
  ];

  return (
    <>
      <SEOHead 
        seoData={pageSEO.customBuilds}
        structuredData={generateStructuredData('service', 'Custom Builds')}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors duration-300 mb-8"
              aria-label="Back to Home"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">Custom Builds</span>
                <br />
                <span className="text-white">& Modifications</span>
              </h1>
              <p className="text-2xl text-neon-cyan font-rajdhani font-bold mb-4">
                Build Your Dream Machine
              </p>
              <p className="text-lg text-gray-300 font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                Custom design • Performance upgrades • Miami's best craftsmanship
              </p>
            </div>
          </div>
        </header>

        <main>
          <ProblemSection 
            title="Ready for Something Extraordinary?"
            problems={problems}
          />

          <SolutionSection 
            title="Your Vision, Our Expertise"
            subtitle="From performance modifications to complete custom builds, we transform ordinary vehicles into extraordinary machines tailored to your exact specifications."
            benefits={benefits}
          />

          {/* Process Timeline */}
          <section className="py-16 miami-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Our Process</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From concept to completion, we guide you through every step of your custom build journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    desc: "Detailed discussion of your vision and requirements"
                  },
                  {
                    step: "02",
                    title: "Design",
                    desc: "Custom design plan and 3D visualization"
                  },
                  {
                    step: "03",
                    title: "Build",
                    desc: "Expert craftsmanship and precision execution"
                  },
                  {
                    step: "04",
                    title: "Reveal",
                    desc: "Final inspection and your dream car delivery"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-neon-pink to-neon-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-orbitron font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <SocialProof testimonials={testimonials} />

          <FAQSection faqs={faqs} />

          <CTASection 
            title="Ready to Build Your Dream?"
            subtitle="Contact us today for a consultation on your custom build project. Let's transform your vision into the ultimate automotive masterpiece."
          />
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
};

export default CustomBuilds;
