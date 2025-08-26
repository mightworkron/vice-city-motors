
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOData = {
  title: "Miami Auto Repair & Exotic Car Services | The Showroom Miami | Call 305-419-8379",
  description: "Miami's premier auto services since 2018. Expert collision repair, 24/7 luxury car towing, exotic rentals, custom wraps & PPF. Serving Miami-Dade County. Call now!",
  keywords: "Miami auto repair, collision repair Miami, exotic car rental Miami, luxury car towing, car wraps Miami, PPF Miami, emergency towing Miami Beach",
  ogImage: "/lovable-uploads/78babb5c-82a3-4ae9-a2d6-dd90d8054e66.png",
  ogType: "website"
};

export const pageSEO = {
  home: {
    title: "Miami Auto Repair & Exotic Car Services | The Showroom Miami | Call 305-419-8379",
    description: "Miami's premier auto destination since 2018. Expert collision repair, Ferrari-safe towing, exotic rentals, premium wraps & PPF. Serving Brickell, South Beach, Coral Gables. Call 305-419-8379!",
    keywords: "Miami auto repair, collision repair Miami, exotic car rental South Beach, luxury car towing Brickell, car wraps Coral Gables, PPF Miami Beach, emergency towing Miami Dade",
    canonicalUrl: "/"
  },
  collisionRepair: {
    title: "Collision Repair Miami | Insurance Direct Billing | Same Day Estimates | 305-419-8379",
    description: "Expert collision repair in Miami. Insurance approved, factory-quality work, 2-5 day turnaround. Serving all Miami neighborhoods. Free estimates. Call 305-419-8379 now!",
    keywords: "collision repair Miami, auto body repair Miami, car accident repair, insurance claims Miami, frame alignment Miami, paint matching Miami Dade",
    canonicalUrl: "/collision-repair"
  },
  emergencyTowing: {
    title: "Ferrari & Lamborghini Safe Towing Miami | 15-Min Response | 24/7 | 305-419-8379", 
    description: "24/7 luxury car towing in Miami. Hydraulic flatbeds safe for Ferrari, Lamborghini, McLaren. 15-minute response. Serving I-95, South Beach, Brickell. Call now!",
    keywords: "luxury car towing Miami, Ferrari towing Miami, Lamborghini towing, exotic car towing South Beach, emergency towing Miami Beach, 24/7 towing Miami Dade",
    canonicalUrl: "/emergency-towing"
  },
  exoticRentals: {
    title: "Rent Ferrari, Lamborghini Miami | Luxury Car Rental | Same Day Delivery | 305-419-8379",
    description: "Rent exotic cars in Miami. Ferrari, Lamborghini, McLaren available. Perfect for events, business, special occasions. Concierge delivery. Insurance included. Book today!",
    keywords: "exotic car rental Miami, Ferrari rental Miami Beach, Lamborghini rental Brickell, luxury car rental South Beach, supercar rental Miami, wedding car rental",
    canonicalUrl: "/exotic-rentals"
  },
  wrapsAndTints: {
    title: "Protect, Transform & Elevate Your Ride | Premium Wraps, Tints & PPF Miami | 305-419-8379",
    description: "Transform your car with premium wraps, tints & PPF in Miami. Hurricane protection, UV defense, custom designs. 3M certified. 1-week turnaround. Call 305-419-8379!",
    keywords: "car wraps Miami, window tinting Miami, PPF Miami, paint protection film, ceramic tinting Coral Gables, vehicle wraps South Beach, custom car wraps",
    canonicalUrl: "/wraps-and-tints"
  },
  customBuilds: {
    title: "Custom Car Builds Miami | Performance Upgrades | Luxury Modifications | 305-419-8379",
    description: "Custom car builds & modifications in Miami. Performance upgrades, luxury interiors, custom paint jobs. Transform your vision into reality. Call 305-419-8379 for consultation!",
    keywords: "custom car builds Miami, automotive customization Miami, performance upgrades, luxury car modifications Brickell, custom paint jobs Miami Beach",
    canonicalUrl: "/custom-builds"
  },
  sales: {
    title: "Luxury Cars for Sale Miami | Ferrari, Lamborghini, McLaren | Pre-Owned Exotics | 305-419-8379",
    description: "Browse Miami's finest collection of pre-owned luxury and exotic cars. Ferrari, Lamborghini, McLaren, Porsche, Aston Martin. Financing available. Inspected & serviced. Call now!",
    keywords: "luxury cars for sale Miami, Ferrari for sale Miami Beach, Lamborghini dealer Miami, exotic cars Miami, pre-owned supercars South Beach, luxury auto dealer Brickell",
    canonicalUrl: "/sales"
  },
  finance: {
    title: "Exotic Car Financing Miami | Auto Loans | Bad Credit OK | Same Day Approval | 305-419-8379",
    description: "Finance your dream car in Miami! Competitive rates from 2.9% APR, quick approval, all credit types welcome. Ferrari, Lamborghini, McLaren financing available. Apply today!",
    keywords: "auto financing Miami, car loans Miami, exotic car financing, Ferrari financing Miami, Lamborghini loans, bad credit auto loans Miami, luxury car financing South Beach",
    canonicalUrl: "/finance"
  },
  privacyPolicy: {
    title: "Privacy Policy | The Showroom Miami | Data Protection & Security",
    description: "Learn how The Showroom Miami protects your personal information. Our comprehensive privacy policy covers data collection, usage, and your rights.",
    keywords: "privacy policy, data protection, Showroom Miami privacy, personal information security, Miami auto shop privacy",
    canonicalUrl: "/privacy-policy"
  },
  termsOfService: {
    title: "Terms of Service | The Showroom Miami | Service Agreement",
    description: "Read The Showroom Miami's terms of service covering our automotive services, rental policies, and service agreements in Miami, Florida.",
    keywords: "terms of service, service agreement, Showroom Miami terms, auto repair terms, exotic car rental terms Miami",
    canonicalUrl: "/termsofservice"
  }
};

export const generateStructuredData = (pageType: 'home' | 'service', serviceName?: string) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "The Showroom Miami",
    "description": "Premium automotive services in Miami including collision repair, custom builds, exotic rentals, wraps, tints, and PPF",
    "url": "https://theshowroommiami.com",
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
    "image": "/lovable-uploads/78babb5c-82a3-4ae9-a2d6-dd90d8054e66.png",
    "logo": "/lovable-uploads/d8b68c76-1025-4605-b3f4-3b4231f091db.png",
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
