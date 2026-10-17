import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { pageSEO } from "@/utils/seo";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_HREF } from "@/config/business";

declare global {
  interface Window {
    __authSid?: string;
    __authRedirectFailed?: boolean;
  }
}

// Editable page copy.
const COPY = {
  title: "Authorization received",
  body: "Thank you. We've received your signed repair authorization. Our team will contact you to confirm the next steps.",
  ctaPrefix: "Questions? Call us at",
  backToHome: "Back to home",
  openFullWindow: "Open in full window",
};

const AuthorizationReceived = () => {
  const [framed, setFramed] = useState(false);

  // The JotForm thank-you redirect loads this page inside the form iframe. The capture script at the
  // top of index.html's head is the only one that redirects the top window (and carries sid); here we
  // only show the fallback link when that redirect failed.
  useEffect(() => {
    if (window.self !== window.top && window.__authRedirectFailed) {
      setFramed(true);
    }
  }, []);

  const fullWindowHref =
    "/authorization-received" +
    (typeof window !== "undefined" && window.__authSid ? `?sid=${window.__authSid}` : "");

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead seoData={pageSEO.authorizationReceived} />
      <Navigation />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="max-w-2xl mx-auto text-center relative z-10 pt-12">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="neon-text">{COPY.title}</span>
          </h1>
          <p className="text-xl text-gray-300 font-rajdhani mb-8">{COPY.body}</p>
          <p className="text-lg text-gray-300 mb-8">
            {COPY.ctaPrefix}{" "}
            <a href={BUSINESS_PHONE_HREF} data-call-location="page_body" className="text-neon-pink hover:text-neon-cyan transition-colors">
              {BUSINESS_PHONE_DISPLAY}
            </a>
          </p>
          <div className="space-y-4">
            <a href="/" className="block text-neon-pink hover:text-neon-cyan transition-colors underline">
              {COPY.backToHome}
            </a>
            {framed && (
              <a
                href={fullWindowHref}
                target="_top"
                className="block text-neon-pink hover:text-neon-cyan transition-colors underline"
              >
                {COPY.openFullWindow}
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuthorizationReceived;
