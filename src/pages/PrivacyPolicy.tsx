
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEOHead from "@/components/SEOHead";
import { pageSEO } from "@/utils/seo";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead seoData={pageSEO.privacyPolicy} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="neon-text">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani">
            Your privacy matters to us. Learn how we protect and use your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-8 neon-border">
            <p className="text-sm text-neon-cyan mb-8 font-medium">
              Effective Date: July 31, 2025
            </p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Introduction
                </h2>
                <p>
                  Showroom Miami ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Information We Collect
                </h2>
                <p>
                  We may collect details such as your name, phone number, email, address, driver's license, insurance information, payment details, and any information submitted through our contact forms, booking forms, financing applications, or repair authorizations. We also collect technical information like IP addresses and cookies for analytics.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  How We Use Your Information
                </h2>
                <p>
                  We use this information to provide and manage our services, process bookings and payments, handle insurance claims, manage financing applications, communicate with you, and improve our site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Information Sharing
                </h2>
                <p>
                  We never sell your information. We may share it with trusted service providers such as payment processors, JotForm (for form submissions), insurance partners, and legal authorities if required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  SMS and Mobile Communication
                </h2>
                <p>
                  Mobile opt-in or phone numbers for the purpose of SMS are not being shared with any third party and affiliate company for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Data Security
                </h2>
                <p>
                  We take data protection seriously and use secure technology such as SSL encryption and restricted access. However, no online system is completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Your Rights
                </h2>
                <p>
                  Depending on your location, you may have rights to access, correct, or delete your personal data, or opt out of certain communications. To exercise these rights, contact us at{" "}
                  <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                    info@showroommiami.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Cookies
                </h2>
                <p>
                  We may use cookies to improve site functionality. You can disable them in your browser, though some features may not work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Policy Updates
                </h2>
                <p>
                  This Privacy Policy may be updated from time to time. Changes will be posted here with an updated "Effective Date."
                </p>
              </div>

              <div className="pt-8 border-t border-neon-purple/30">
                <h2 className="text-2xl font-orbitron font-bold text-white mb-4 neon-text">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:info@showroommiami.com" className="text-neon-pink hover:text-neon-cyan transition-colors">
                    info@showroommiami.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:305-419-8379" className="text-neon-pink hover:text-neon-cyan transition-colors">
                    305-419-8379
                  </a>.
                </p>
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

export default PrivacyPolicy;
