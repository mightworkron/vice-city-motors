
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  /** Service name passed to generateStructuredData('service', ...) for this page, if any. */
  serviceName?: string;
}

export const defaultSEO: SEOData = {
  title: "Miami Auto Repair & Exotic Car Services | The Showroom Miami",
  description: "Miami's premier auto services. Expert collision repair, 24/7 luxury car towing, exotic rentals, custom wraps & PPF. YOUR CAR. OUR OBSESSION.",
  keywords: "Miami auto repair, collision repair Miami, exotic car rental Miami, luxury car towing, car wraps Miami, PPF Miami, emergency towing Miami Beach",
  ogImage: "https://showroommiami.com/lovable-uploads/78babb5c-82a3-4ae9-a2d6-dd90d8054e66.png",
  ogType: "website"
};

export const pageSEO = {
  home: {
    title: "Miami Auto Repair & Exotic Car Services | The Showroom Miami",
    description: "Miami's premier auto destination. Expert collision repair, Ferrari-safe towing, exotic rentals, premium wraps & PPF. YOUR CAR. OUR OBSESSION.",
    keywords: "Miami auto repair, collision repair Miami, exotic car rental South Beach, luxury car towing Brickell, car wraps Coral Gables, PPF Miami Beach, emergency towing Miami Dade",
    canonicalUrl: "/"
  },
  collisionRepair: {
    title: "Collision Repair Miami | Insurance Direct Billing",
    description: "Expert collision repair in Miami. Insurance approved, factory-quality work, 2-5 day turnaround. Free estimates. Call 305-419-8379 now!",
    keywords: "collision repair Miami, auto body repair Miami, car accident repair, insurance claims Miami, frame alignment Miami, paint matching Miami Dade",
    canonicalUrl: "/collision-repair",
    serviceName: "Collision Repair"
  },
  emergencyTowing: {
    title: "Ferrari & Lamborghini Safe Towing Miami | 15-Min Response",
    description: "24/7 luxury car towing in Miami. Hydraulic flatbeds safe for Ferrari, Lamborghini, McLaren. 15-minute response. Serving I-95, South Beach, Brickell. Call now!",
    keywords: "luxury car towing Miami, Ferrari towing Miami, Lamborghini towing, exotic car towing South Beach, emergency towing Miami Beach, 24/7 towing Miami Dade",
    canonicalUrl: "/emergency-towing",
    serviceName: "Emergency Towing"
  },
  exoticRentals: {
    title: "Rent Ferrari, Lamborghini Miami | Same Day Delivery",
    description: "Rent exotic cars in Miami. Ferrari, Lamborghini, McLaren available. Concierge delivery. Insurance included. Book today!",
    keywords: "exotic car rental Miami, Ferrari rental Miami Beach, Lamborghini rental Brickell, luxury car rental South Beach, supercar rental Miami, wedding car rental",
    canonicalUrl: "/exotic-rentals",
    serviceName: "Exotic Rentals"
  },
  wrapsAndTints: {
    title: "Premium Wraps, Tints & PPF Miami | Protect & Transform",
    description: "Transform your car with premium wraps, tints & PPF in Miami. Hurricane protection, UV defense, custom designs. 3M certified. 1-week turnaround.",
    keywords: "car wraps Miami, window tinting Miami, PPF Miami, paint protection film, ceramic tinting Coral Gables, vehicle wraps South Beach, custom car wraps",
    canonicalUrl: "/wraps-and-tints",
    serviceName: "Wraps and Tints"
  },
  customBuilds: {
    title: "Custom Car Builds Miami | Performance Upgrades",
    description: "Custom car builds & modifications in Miami. Performance upgrades, luxury interiors, custom paint jobs. Call 305-419-8379 for a consultation!",
    keywords: "custom car builds Miami, automotive customization Miami, performance upgrades, luxury car modifications Brickell, custom paint jobs Miami Beach",
    canonicalUrl: "/custom-builds",
    serviceName: "Custom Builds"
  },
  sales: {
    title: "Luxury Cars for Sale Miami | Ferrari, Lamborghini, McLaren",
    description: "Browse Miami's finest collection of pre-owned luxury and exotic cars. Ferrari, Lamborghini, McLaren, Porsche. Financing available. Call now!",
    keywords: "luxury cars for sale Miami, Ferrari for sale Miami Beach, Lamborghini dealer Miami, exotic cars Miami, pre-owned supercars South Beach, luxury auto dealer Brickell",
    canonicalUrl: "/sales",
    serviceName: "Luxury Car Sales"
  },
  finance: {
    title: "Exotic Car Financing Miami | Auto Loans | Same Day Approval",
    description: "Finance your dream car in Miami! Competitive rates from 2.9% APR, quick approval, all credit types welcome. Apply today!",
    keywords: "auto financing Miami, car loans Miami, exotic car financing, Ferrari financing Miami, Lamborghini loans, bad credit auto loans Miami, luxury car financing South Beach",
    canonicalUrl: "/finance",
    serviceName: "Auto Financing"
  },
  privacyPolicy: {
    title: "Privacy Policy | The Showroom Miami",
    description: "Learn how The Showroom Miami protects your personal information. Our comprehensive privacy policy covers data collection, usage, and your rights.",
    keywords: "privacy policy, data protection, Showroom Miami privacy, personal information security, Miami auto shop privacy",
    canonicalUrl: "/privacy-policy"
  },
  termsOfService: {
    title: "Terms and Conditions | The Showroom Miami",
    description: "Read The Showroom Miami's terms and conditions covering our automotive services, rental policies, and service agreements in Miami, Florida.",
    keywords: "terms and conditions, service agreement, Showroom Miami terms, auto repair terms, exotic car rental terms Miami",
    canonicalUrl: "/terms-of-service"
  }
};

export const generateStructuredData = (pageType: 'home' | 'service', serviceName?: string) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "The Showroom Miami",
    "description": "Premium automotive services in Miami including collision repair, custom builds, exotic rentals, wraps, tints, and PPF",
    "url": "https://showroommiami.com",
    "telephone": "305-419-8379",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Insurance Direct Billing",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7820 NW 6th Ct",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33150",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7617",
      "longitude": "-80.1918"
    },
    "openingHours": [
      "Mo-Fr 09:00-17:00"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami"
      },
      {
        "@type": "City", 
        "name": "Miami Beach"
      },
      {
        "@type": "City",
        "name": "Coral Gables"
      },
      {
        "@type": "City",
        "name": "Aventura"
      },
      {
        "@type": "City",
        "name": "Brickell"
      },
      {
        "@type": "City",
        "name": "South Beach"
      }
    ],
    "image": "https://showroommiami.com/lovable-uploads/78babb5c-82a3-4ae9-a2d6-dd90d8054e66.png",
    "logo": "https://showroommiami.com/lovable-uploads/d8b68c76-1025-4605-b3f4-3b4231f091db.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/theshowroommiami",
      "https://www.facebook.com/theshowroommiami"
    ]
  };

  if (pageType === 'home') {
    return {
      ...baseData,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Automotive Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Collision Repair",
              "description": "Expert auto body repair and collision restoration with insurance direct billing"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Towing",
              "description": "24/7 luxury car towing with Ferrari and Lamborghini safe equipment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Exotic Car Rental",
              "description": "Luxury and exotic vehicle rentals with concierge delivery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vehicle Wraps and Tinting", 
              "description": "Premium car wraps, window tinting, and paint protection film"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Builds",
              "description": "Custom automotive builds and performance modifications"
            }
          }
        ]
      }
    };
  }

  return {
    ...baseData,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "provider": {
              "@type": "AutoRepair",
              "name": "The Showroom Miami"
            }
          }
        }
      ]
    }
  };
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQStructuredData = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Showroom Miami",
  "url": "https://showroommiami.com"
};

/**
 * FAQ content for every page that shows a visible FAQ section, keyed the same as pageSEO.
 * Single source of truth: pages render this via <FAQSection faqs={...} /> and also feed it
 * into getPageStructuredData() below, so the visible copy and the FAQPage JSON-LD can never
 * drift apart, and prerender.js can reuse it at build time.
 */
export const pageFAQs: Record<string, FAQItem[]> = {
  home: [
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
  ],
  collisionRepair: [
    {
      question: "Do you accept insurance?",
      answer: "Yes. We accept most major auto insurance plans. Whether you've been in a collision or need towing services, we'll help you navigate the claims process and ensure everything is properly documented. Just bring your claim number, and we'll handle the rest."
    },
    {
      question: "How long does collision repair take in Miami?",
      answer: "Most collision repairs take 2-5 business days depending on damage extent and parts availability. We provide accurate timelines after our free assessment."
    },
    {
      question: "What if I'm not satisfied with the repair work?",
      answer: "We guarantee all our collision repair work. If you're not 100% satisfied, we'll make it right at no additional cost to you."
    }
  ],
  emergencyTowing: [
    {
      question: "What areas in Miami do you serve?",
      answer: "We cover all of Miami-Dade County including South Beach, Brickell, Coral Gables, Aventura, Doral, Kendall, Homestead, and everywhere in between."
    },
    {
      question: "How quickly can you respond to my emergency?",
      answer: "Our average response time is 15-30 minutes throughout Miami-Dade County. We have strategically positioned trucks across the metro area for fastest possible response."
    },
    {
      question: "Are your tow trucks safe for luxury and exotic cars?",
      answer: "Absolutely! We use hydraulic flatbed tow trucks specifically designed for high-end vehicles. Your Ferrari, Lamborghini, or other exotic car will be completely protected."
    },
    {
      question: "Do you provide 24/7 emergency towing service?",
      answer: "Yes, we operate 24 hours a day, 7 days a week, including holidays. Miami traffic doesn't stop, and neither do we."
    }
  ],
  exoticRentals: [
    {
      question: "How do I check vehicle availability?",
      answer: "Use our booking form to submit your rental request, or call us at 305-419-8379. We'll check real-time availability and help you select the perfect vehicle for your dates."
    }
  ],
  customBuilds: [
    {
      question: "What's the typical timeline for a custom build project?",
      answer: "Timeline varies based on complexity, typically ranging from 4-12 weeks. We provide detailed project timelines during consultation and keep you updated throughout the build process."
    },
    {
      question: "What's the cost range for custom builds?",
      answer: "Custom builds range from $5,000 to $50,000+ depending on scope. We provide detailed quotes after understanding your vision and requirements during the consultation."
    },
    {
      question: "What warranties do you provide on custom work?",
      answer: "We offer comprehensive warranties on all custom work, typically 1-2 years on labor and pass through manufacturer warranties on parts. Specific coverage depends on the components used."
    },
    {
      question: "How does the design process work?",
      answer: "We start with a detailed consultation to understand your vision, create design mockups and specifications, provide a comprehensive quote, then execute the build with regular progress updates."
    }
  ],
  wrapsAndTints: [
    {
      question: "How long will my vehicle wrap or tint last?",
      answer: "High-quality wraps typically last 5-7 years with proper care. Window tints can last 10+ years, and PPF comes with a 10-year warranty. Longevity depends on maintenance and environmental factors."
    },
    {
      question: "What maintenance is required after installation?",
      answer: "Avoid harsh chemicals and pressure washing for the first week. Use pH-neutral soaps for cleaning. We provide detailed care instructions to maximize the lifespan of your investment."
    },
    {
      question: "Can I choose custom colors and designs?",
      answer: "Absolutely! We offer unlimited color options, custom graphics, and unique finishes. Our design team can create completely custom looks or help refine your vision."
    },
    {
      question: "What's your design and installation process?",
      answer: "We start with a consultation to understand your vision, create design mockups, provide detailed quotes, then schedule professional installation in our climate-controlled facility."
    }
  ]
};

/** Reverse-lookup: route path (e.g. "/collision-repair") -> pageSEO key (e.g. "collisionRepair"). */
export const getPageKeyForRoute = (routePath: string): string | undefined =>
  Object.keys(pageSEO).find((key) => pageSEO[key as keyof typeof pageSEO].canonicalUrl === routePath);

/**
 * Builds the full list of JSON-LD blocks for a page, from the same pageSEO/pageFAQs data
 * used to render its visible content. Used by SEOHead (client) and prerender.js (build time)
 * so the two never fall out of sync.
 */
export const getPageStructuredData = (pageKey: string): object[] => {
  const entry = pageSEO[pageKey as keyof typeof pageSEO] as SEOData | undefined;
  const blocks: object[] = [];

  if (pageKey === "home") {
    blocks.push(generateStructuredData("home"));
  } else if (entry?.serviceName) {
    blocks.push(generateStructuredData("service", entry.serviceName));
  }

  const faqs = pageFAQs[pageKey];
  if (faqs?.length) {
    blocks.push(generateFAQStructuredData(faqs));
  }

  if (pageKey === "home") {
    blocks.push(websiteStructuredData);
  }

  return blocks;
};
