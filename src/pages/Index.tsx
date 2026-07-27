
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TrustBadge from "@/components/conversion/TrustBadge";
import SolutionSection from "@/components/conversion/SolutionSection";
import SocialProof from "@/components/conversion/SocialProof";
import FAQSection from "@/components/conversion/FAQSection";
import CTASection from "@/components/conversion/CTASection";
import OptimizedImage from "@/components/ui/optimized-image";
import ImageSkeleton from "@/components/ui/image-skeleton";
import InsuranceLogosSlider from "@/components/InsuranceLogosSlider";
import { Phone, Star, Wrench, Truck, Car, Palette, ArrowRight, MapPin, Clock, CheckCircle, Mail } from "lucide-react";
import { pageSEO, generateStructuredData, generateFAQStructuredData, websiteStructuredData } from "@/utils/seo";
import { sanitizeInput, validateEmail, isRateLimited } from "@/utils/security";
import FloatingCallButton from "@/components/FloatingCallButton";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "" // Honeypot field
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    console.log("Submitting contact form:", { ...formData, website: "[REDACTED]" });

    // Honeypot check - if website field is filled, it's likely a bot
    if (formData.website && formData.website.trim() !== '') {
      console.log("Bot submission detected via honeypot");
      toast({
        title: "Invalid submission",
        description: "Please try again.",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting check
    const rateLimitKey = `contact-${formData.email}`;
    if (isRateLimited(rateLimitKey)) {
      toast({
        title: "Please wait",
        description: "You're submitting too quickly. Please wait a moment before trying again.",
        variant: "destructive",
      });
      return;
    }

    // Client-side validation
    const validationErrors: string[] = [];
    
    if (!formData.name || formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      validationErrors.push("Name must be between 2 and 100 characters");
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      validationErrors.push("Please enter a valid email address");
    }
    
    if (!formData.message || formData.message.trim().length < 10 || formData.message.trim().length > 2000) {
      validationErrors.push("Message must be between 10 and 2000 characters");
    }

    if (validationErrors.length > 0) {
      toast({
        title: "Please check your input",
        description: validationErrors[0],
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Sanitize inputs before sending
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: formData.email.trim().toLowerCase(),
      message: sanitizeInput(formData.message),
      form: "Contact Form",
      website: formData.website // Include honeypot for server validation
    };

    const { error } = await supabase.functions.invoke("send-contact-email", {
      body: sanitizedData,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("send-contact-email error:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again or call us.",
        variant: "destructive",
      });
      return;
    }

    // Track Google Ads conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17422213105/CONTACT_FORM_LABEL',
        'value': 1.0,
        'currency': 'USD'
      });
    }

    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "", website: "" });
  };

  const services = [
    {
      icon: Wrench,
      title: "Collision Repair & Custom Builds",
      description: "Insurance accepted collision repair with same-day estimates. Custom builds that turn heads on Ocean Drive.",
      link: "/collision-repair",
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      icon: Truck,
      title: "Emergency Towing",
      description: "Ferrari-safe towing with 15-minute response. Hydraulic flatbeds that won't scratch your investment.",
      link: "/emergency-towing",
      gradient: "from-neon-purple to-neon-blue"
    },
    {
      icon: Car,
      title: "Exotic & Luxury Car Rentals",
      description: "Drive Miami in style. Lamborghini, Ferrari, McLaren ready now. Perfect for events and business.",
      link: "/exotic-rentals",
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      icon: Palette,
      title: "Wraps, Tints & PPF",
      description: "Hurricane-proof protection and head-turning wraps. Ceramic tints that block Miami's brutal sun.",
      link: "/wraps-and-tints",
      gradient: "from-neon-cyan to-neon-pink"
    }
  ];

  const solutions = [
    "✓ Insurance accepted - we handle the paperwork",
    "✓ 15-minute towing response with Ferrari-safe equipment",
    "✓ Factory-quality collision repair in 2-5 days",
    "✓ Custom builds that turn heads on Ocean Drive",
    "✓ Same-day estimates and transparent pricing",
    "✓ Serving Brickell, South Beach, Coral Gables & beyond"
  ];

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      location: "Brickell",
      rating: 5,
      text: "Hit and run on Brickell Ave. These guys handled everything with my insurance and had my BMW looking better than new in 3 days!"
    },
    {
      name: "Maria Gonzalez",
      location: "South Beach",
      rating: 5,
      text: "Rented a Lamborghini for my wedding. They delivered it to the Fontainebleau perfectly detailed. Made our day magical!"
    },
    {
      name: "David Chen",
      location: "Coral Gables",
      rating: 5,
      text: "Custom wrap on my McLaren came out incredible. Everyone asks where I got it done. Miami's best hands down."
    }
  ];

  const faqs = [
    {
      question: "How fast can you tow my car if I'm stuck?",
      answer: "Average 15-30 minutes throughout Miami-Dade County. We have Ferrari-safe hydraulic flatbeds positioned strategically across the city."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes. We accept most major auto insurance plans. Whether you've been in a collision or need towing services, we'll help you navigate the claims process and ensure everything is properly documented. Just bring your claim number, and we'll handle the rest."
    },
    {
      question: "How long does collision repair take?",
      answer: "Most collision repairs are completed in 2-5 business days. We'll give you an exact timeline during your free estimate."
    },
    {
      question: "Can I rent an exotic car while mine is being repaired?",
      answer: "Absolutely! We coordinate exotic and luxury rental cars so you never have to downgrade while your car is being fixed."
    },
    {
      question: "What areas in Miami do you serve?",
      answer: "We serve all of Miami-Dade County including Brickell, South Beach, Coral Gables, Aventura, Doral, Kendall, and everywhere in between."
    }
  ];

  const galleryImages = [
    "/lovable-uploads/078e1f89-841f-43b0-a20c-89555e1a8b71.png",
    "/lovable-uploads/6c0c7716-780a-47df-8385-4148a40f1e6a.png",
    "/lovable-uploads/c4ed0f78-1029-4872-9b3f-f9917a6fd97d.png",
    "/lovable-uploads/ab59bc37-1aed-400a-8c65-69dbe659533d.png",
    "/lovable-uploads/854b829d-6bb4-4ab9-83d6-ebf2aa0f40cb.png",
    "/lovable-uploads/0854301b-9ea0-4c54-a045-0eae9d96c559.png"
  ];

  return (
    <>
      <SEOHead seoData={pageSEO.home} structuredData={[generateStructuredData('home'), generateFAQStructuredData(faqs), websiteStructuredData]} />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section with Optimized Background */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Optimized Hero Background */}
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="/lovable-uploads/72157161-abaa-4935-b3a0-7c261301cec1.png"
              alt="Showroom Miami luxury automotive background"
              priority={true}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
          
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black mb-6" style={{
              textShadow: '3px 3px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.1)'
            }}>
              <span className="text-white">THE SHOWROOM</span>
              <br />
              <span className="neon-text animate-neon-pulse text-neon-pink">MIAMI</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-neon-cyan font-rajdhani font-medium mb-4" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,234,255,0.3)'
            }}>
              Miami's Premier Auto Experts
            </p>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed" style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.9)'
            }}>
              Collision repair • 24/7 towing • Exotic rentals ready now
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:305-419-8379" onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'conversion', {
                    'send_to': 'AW-17422213105/PHONE_CLICK_LABEL'
                  });
                }
              }}>
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
              </a>
              <Link to="/exotic-rentals">
                <Button variant="outline" size="lg" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Rent Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            <a href="tel:305-419-8379" className="text-2xl font-orbitron font-bold text-neon-cyan hover:text-neon-pink transition-colors duration-300 mb-8 block" onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'conversion', {
                  'send_to': 'AW-17422213105/PHONE_CLICK_LABEL'
                });
              }
            }}>
              305-419-8379
            </a>

            <TrustBadge />
          </div>
        </header>

        <main>
          {/* Solution Section */}
          <SolutionSection 
            title="We Solve These Problems Daily"
            subtitle="Here's exactly what you get when you choose The Showroom Miami:"
            benefits={solutions}
          />

          {/* Insurance Logos Slider */}
          <InsuranceLogosSlider />

          {/* Mid-Page CTA */}
          <CTASection 
            title="Ready to Get Started?"
            subtitle="Call now and let's solve your car problems today."
            phoneText="Get Free Quote"
          />

          {/* Services Grid */}
          <section className="py-20" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="services-heading" className="text-3xl sm:text-4xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Our Services</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Comprehensive automotive solutions tailored to Miami's luxury car culture
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <article key={index}>
                    <Link to={service.link} className="group relative bg-card rounded-lg p-8 border border-neon-purple/30 hover:border-neon-pink/50 transition-all duration-300 transform hover:scale-105 block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <service.icon className="text-neon-cyan group-hover:text-neon-pink transition-colors duration-300 mb-4" size={48} />
                        <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-pink transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center text-neon-cyan group-hover:text-neon-pink transition-colors duration-300">
                          <span className="font-medium">Learn more about {service.title}</span>
                          <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={16} />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Optimized Gallery Section */}
          <section className="py-20 miami-bg" aria-labelledby="gallery-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Our Work</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  See why Miami drivers trust us with their most valuable vehicles
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <figure key={index} className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                    <OptimizedImage
                      src={image}
                      alt={`Showroom Miami automotive work showcase ${index + 1} - luxury car services and customization`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      containerClassName="bg-gradient-to-br from-card/50 to-background/30"
                      priority={index < 2} // Prioritize first 2 images
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-pink/50 rounded-lg transition-colors duration-300" />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <SocialProof testimonials={testimonials} />

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Contact Section */}
          <section className="py-20" aria-labelledby="contact-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6">
                    <span className="neon-text">Get In Touch</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Ready to transform your vehicle or need emergency assistance? 
                    Contact us today for premium automotive services in Miami.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-neon-cyan" size={24} />
                      <div>
                        <p className="text-white font-medium">Call Us</p>
                        <a href="tel:305-419-8379" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300" onClick={() => {
                          if (typeof window !== 'undefined' && (window as any).gtag) {
                            (window as any).gtag('event', 'conversion', {
                              'send_to': 'AW-17422213105/PHONE_CLICK_LABEL'
                            });
                          }
                        }}>
                          305-419-8379
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Mail className="text-neon-cyan" size={24} />
                      <div>
                        <p className="text-white font-medium">Email Us</p>
                        <a href="mailto:info@showroommiami.com" className="text-neon-cyan hover:text-neon-pink transition-colors duration-300" onClick={() => {
                          if (typeof window !== 'undefined' && (window as any).gtag) {
                            (window as any).gtag('event', 'conversion', {
                              'send_to': 'AW-17422213105/EMAIL_CLICK_LABEL'
                            });
                          }
                        }}>
                          info@showroommiami.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <MapPin className="text-neon-cyan" size={24} />
                      <div>
                        <p className="text-white font-medium">Visit Us</p>
                        <p className="text-gray-300">7820 NW 6th Ct, Miami, Florida</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Clock className="text-neon-cyan" size={24} />
                      <div>
                        <p className="text-white font-medium">Business Hours</p>
                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-300">Emergency Towing: 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-8 border border-neon-purple/30">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot field - hidden from users */}
                      <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                        <Input 
                          type="text"
                          name="website"
                          placeholder="Website"
                          value={formData.website} 
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
                      
                      <div>
                        <Input 
                          placeholder="Your Name" 
                          value={formData.name} 
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                          className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink" 
                          required
                          maxLength={100}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Input 
                          type="email" 
                          placeholder="Your Email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                          className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink" 
                          required
                          maxLength={100}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Textarea 
                          placeholder="Tell us about your project or service needs" 
                          rows={4} 
                          value={formData.message} 
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                          className="bg-background border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-pink resize-none" 
                          required
                          maxLength={2000}
                          disabled={isSubmitting}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold py-3 rounded-lg transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="text-neon-cyan mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-300">
                        Thanks for contacting us. We'll get back to you shortly.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <CTASection 
            title="Don't Wait - Call Now!"
            subtitle="Your car problems won't solve themselves. Get expert help from Miami's most trusted auto shop."
            phoneText="Get Free Quote"
            className="bg-gradient-to-r from-neon-pink/10 to-neon-purple/10"
          />
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
};

export default Index;
