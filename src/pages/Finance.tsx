
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEOHead from "@/components/SEOHead";
import GoogleReviewBadge from "@/components/conversion/GoogleReviewBadge";
import CTASection from "@/components/conversion/CTASection";
import SocialProof from "@/components/conversion/SocialProof";
import { Button } from "@/components/ui/button";
import { Phone, Star, CreditCard, Clock, Shield, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { pageSEO, getPageStructuredData } from "@/utils/seo";

const Finance = () => {
  const financingBenefits = [
    "Competitive interest rates as low as 2.9% APR",
    "Quick approval process - get approved in minutes",
    "Flexible payment terms up to 84 months", 
    "No prepayment penalties - pay off early without fees",
    "Bad credit? No problem - we work with all credit types",
    "Trade-in your current vehicle for instant equity",
    "Extended warranty options available",
    "Gap insurance protection included"
  ];

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      location: "Brickell, Miami",
      rating: 5,
      text: "The Showroom Miami made financing my McLaren 720S incredibly easy! Got approved in under 30 minutes with better rates than my bank offered."
    },
    {
      name: "Isabella Chen",
      location: "South Beach",
      rating: 5,
      text: "Even with my credit challenges, The Showroom Miami's financing team found me great options. Now I'm driving my dream Lamborghini Huracán!"
    },
    {
      name: "David Thompson",
      location: "Coral Gables",
      rating: 5,
      text: "The financing specialists at The Showroom Miami were incredible. They walked me through every step and got me the best deal on my Ferrari 488."
    }
  ];

  return (
    <>
      <SEOHead 
        seoData={pageSEO.finance}
        structuredData={getPageStructuredData('finance')}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/691fc0a9-5766-4035-89da-b291de39e7da.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors duration-300 mb-8" aria-label="Back to Home">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text">Finance Your Dream Car</span>
              </h1>
              <p className="text-xl text-neon-cyan font-rajdhani font-medium mb-8 max-w-3xl mx-auto">
                Get behind the wheel of your dream exotic car today with The Showroom Miami's flexible financing options. 
                Quick online credit approval, competitive rates, and personalized service in Miami, Florida.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:305-419-8379">
                  <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold px-8 py-4 rounded-lg neon-border transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2" size={20} />
                    Call 305-419-8379 Now
                  </Button>
                </a>
              </div>
              
              <p className="text-neon-cyan text-sm mb-8">
                Get approved in minutes • All Credit Types • Rates as low as 2.9% APR
              </p>
              
              {/* Google Reviews badge at bottom of hero */}
              <div className="mt-8">
                <GoogleReviewBadge variant="hero" className="mx-auto" />
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Financing Benefits Section */}
          <section className="py-16" aria-labelledby="financing-benefits">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="financing-benefits" className="text-3xl font-orbitron font-bold mb-4">
                  <span className="neon-text">Why Choose The Showroom Miami for Financing?</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We make luxury car ownership accessible with flexible financing solutions and convenient online credit approval
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {financingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-card rounded-lg p-4 border border-neon-purple/30">
                    <CheckCircle className="text-neon-green flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Credit Application Section */}
          <section className="py-16 miami-bg" aria-labelledby="credit-application">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <CreditCard className="text-neon-cyan mr-4" size={40} />
                  <h2 id="credit-application" className="text-3xl font-orbitron font-bold">
                    <span className="neon-text">Get Online Pre-Approval for Financing in Miami, Florida</span>
                  </h2>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                  At The Showroom Miami, we offer a convenient online credit approval process to streamline your experience. Our secure and user-friendly online form allows you to apply for credit from home. Simply provide the necessary information, and our finance experts will review your application promptly. Take the first step toward owning the luxury car of your dreams by completing our online credit approval form today.
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 sm:p-6 border border-neon-purple/30 neon-border">
                <div className="text-center mb-8">
                  <div className="flex justify-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-neon-cyan" size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300">Secure SSL encryption protects your information</p>
                </div>
                
                <div className="w-full overflow-auto">
                  <iframe
                    id="JotFormIFrame-252174317048051"
                    title="CREDIT APPLICATION"
                    onLoad={() => window.parent.scrollTo(0,0)}
                    allowTransparency={true}
                    allow="geolocation; microphone; camera; fullscreen; payment"
                    src="https://form.jotform.com/252174317048051"
                    frameBorder="0"
                    style={{ minWidth: "100%", width: "100%", height: "539px", border: "none" }}
                    scrolling="auto"
                    className="w-full rounded-lg border-0"
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    Need help with your application? Our financing experts at The Showroom Miami are standing by.
                  </p>
                  <a href="tel:305-419-8379">
                    <Button className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-purple text-black font-bold">
                      <Phone className="mr-2" size={16} />
                      Call for Assistance: 305-419-8379
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <SocialProof 
            testimonials={testimonials}
            className="bg-black/40"
          />

          {/* Mid-Page CTA */}
          <CTASection
            title="Ready to Finance Your Dream Car in Miami?"
            subtitle="Don't wait - luxury cars move fast in Miami. Get pre-approved online now and drive home your dream car today with The Showroom Miami!"
            phoneText="Get Pre-Approved: 305-419-8379"
            className="bg-gradient-to-b from-black/60 to-black/80"
          />

          {/* Final CTA */}
          <CTASection
            title="Start Your Online Credit Approval Today"
            subtitle="Call now for competitive rates and flexible terms, or complete our online application above. The Showroom Miami's financing experts are standing by to help you drive home your dream car today."
            phoneText="Call 305-419-8379 Now"
          />
        </main>

        <Footer />
        <FloatingCallButton />
      </div>
      
      <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.jotformEmbedHandler("iframe[id='JotFormIFrame-252174317048051']", "https://form.jotform.com/")`
      }} />
    </>
  );
};

export default Finance;
