
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import SEOHead from "@/components/SEOHead";
import { pageSEO } from "@/utils/seo";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead seoData={pageSEO.termsOfService} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="neon-text">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-8 neon-border">
            <p className="text-sm text-neon-cyan mb-8 font-medium">
              Effective Date: January 1, 2025
            </p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Welcome to Showroom Miami
                </h2>
                <p>
                  By using our website and services, you agree to these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Our Services
                </h2>
                <p>
                  Showroom Miami provides collision repair, custom builds, towing services, exotic car rentals, vehicle wraps, tints, and paint protection. To use our services, you must be at least 18 years old. For rentals, you must hold a valid driver's license, provide proof of insurance, and meet any credit approval requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Bookings and Payments
                </h2>
                <p>
                  Bookings require a valid payment method, and some services may require deposits. Exotic car rentals may also require security deposits. Cancellations may be subject to fees.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Repair Authorization
                </h2>
                <p>
                  By signing an online repair authorization form, you grant Showroom Miami permission to perform vehicle repairs and communicate with your insurance provider when necessary.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Limitation of Liability
                </h2>
                <p>
                  We are not responsible for delays caused by third parties such as insurance companies or parts suppliers. For rentals, you are fully responsible for damages, tickets, tolls, and violations during your rental period. Towing services are provided "as is," with liability limited to the cost of the tow unless otherwise required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Intellectual Property
                </h2>
                <p>
                  All content on this site, including text, images, and logos, is owned by Showroom Miami and may not be copied or reused without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Privacy Policy
                </h2>
                <p>
                  Your use of our services is also subject to our{" "}
                  <a href="/privacy-policy" className="text-neon-pink hover:text-neon-cyan transition-colors">
                    Privacy Policy
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of the State of Florida, USA.
                </p>
              </div>

              <div className="pt-8 border-t border-neon-purple/30">
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Contact Information
                </h2>
                <p className="mb-4">
                  For questions about these Terms, please contact:
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-neon-cyan">Showroom Miami</p>
                  <p>7820 NW 6th Ct, Miami, Florida</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                      info@showroommiami.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a href="tel:305-419-8379" className="text-neon-pink hover:text-neon-cyan transition-colors">
                      305-419-8379
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default TermsOfService;
