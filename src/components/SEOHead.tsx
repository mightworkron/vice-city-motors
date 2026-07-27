
import { useEffect } from 'react';
import { SEOData, defaultSEO } from '@/utils/seo';

interface SEOHeadProps {
  seoData?: Partial<SEOData>;
  structuredData?: object;
}

const SEOHead = ({ seoData = {}, structuredData }: SEOHeadProps) => {
  const seo = { ...defaultSEO, ...seoData };
  // Strip query strings/hash (e.g. gclid, utm_*) so ad-campaign traffic doesn't
  // produce a canonical that differs from the clean page URL.
  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : '';

  useEffect(() => {
    // Set page title
    document.title = seo.title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', seo.description);
    if (seo.keywords) {
      setMetaTag('keywords', seo.keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', seo.title, true);
    setMetaTag('og:description', seo.description, true);
    setMetaTag('og:type', seo.ogType || 'website', true);
    setMetaTag('og:url', currentUrl, true);
    if (seo.ogImage) {
      setMetaTag('og:image', seo.ogImage, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', seo.title);
    setMetaTag('twitter:description', seo.description);
    if (seo.ogImage) {
      setMetaTag('twitter:image', seo.ogImage);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [seo, currentUrl, structuredData]);

  return null;
};

export default SEOHead;
