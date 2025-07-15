
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOData = {
  title: "The Showroom Miami - Miami's Auto Source Since 2018",
  description: "Luxury auto services in Miami - Collision repair, custom builds, exotic rentals, wraps, tints, and PPF. Professional craftsmanship since 2018.",
  keywords: "Miami auto services, luxury car repair, exotic car rental, custom builds, collision repair, car wraps, window tinting, PPF",
  ogImage: "/lovable-uploads/78babb5c-82a3-4ae9-a2d6-dd90d8054e66.png",
  ogType: "website"
};

export const pageSEO = {
  home: {
    title: "The Showroom Miami - Premium Auto Services Since 2018",
    description: "Miami's premier destination for luxury auto services. Expert collision repair, custom builds, exotic rentals, wraps, tints & PPF. Call 305-419-8379.",
    keywords: "Miami auto services, luxury car repair, exotic car rental, custom builds, collision repair Miami, car wraps Miami",
    canonicalUrl: "/"
  },
  collisionRepair: {
    title: "Collision Repair Miami | Expert Auto Body Repair | Showroom Miami",
    description: "Professional collision repair in Miami. Expert auto body work, insurance claims, frame alignment & paint matching. Quality guaranteed. Call 305-419-8379.",
    keywords: "collision repair Miami, auto body repair, car accident repair, insurance claims Miami, frame alignment, paint matching",
    canonicalUrl: "/collision-repair"
  },
  emergencyTowing: {
    title: "24/7 Emergency Towing Miami | Luxury Car Towing | Showroom Miami", 
    description: "24/7 emergency towing in Miami. Flatbed service for luxury & exotic cars. Fast response, professional care. Call 305-419-8379 now.",
    keywords: "emergency towing Miami, 24/7 towing, luxury car towing, flatbed towing, roadside assistance Miami",
    canonicalUrl: "/emergency-towing"
  },
  exoticRentals: {
    title: "Exotic Car Rental Miami | Luxury Vehicle Rentals | Showroom Miami",
    description: "Rent exotic & luxury cars in Miami. Premium fleet of supercars and luxury vehicles for special occasions. Professional service since 2018.",
    keywords: "exotic car rental Miami, luxury car rental, supercar rental Miami, Ferrari rental, Lamborghini rental",
    canonicalUrl: "/exotic-rentals"
  },
  wrapsAndTints: {
    title: "Car Wraps & Window Tinting Miami | PPF Installation | Showroom Miami",
    description: "Professional car wraps, window tinting & paint protection film in Miami. Premium materials, expert installation. Transform your vehicle today.",
    keywords: "car wraps Miami, window tinting Miami, PPF Miami, paint protection film, vehicle wraps, ceramic tinting",
    canonicalUrl: "/wraps-and-tints"
  },
  customBuilds: {
    title: "Custom Car Builds Miami | Automotive Customization | Showroom Miami",
    description: "Custom car builds & modifications in Miami. Performance upgrades, luxury interiors, custom paint. Transform your vision into reality.",
    keywords: "custom car builds Miami, automotive customization, performance upgrades, luxury car modifications, custom paint jobs",
    canonicalUrl: "/custom-builds"
  }
};

export const generateStructuredData = (pageType: 'home' | 'service', serviceName?: string) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Showroom Miami",
    "description": "Premium automotive services in Miami including collision repair, custom builds, exotic rentals, wraps, tints, and PPF",
    "url": "https://theshowroommiami.com",
    "telephone": "305-419-8379",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7820 NW 6th Ct",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7617",
      "longitude": "-80.1918"
    },
    "openingHours": [
      "Mo-Sa 08:00-19:00"
    ],
    "image": "/lovable-uploads/78babb5c-82a3-4ae9-a2d6-dd90d8054e66.png",
    "logo": "/lovable-uploads/d8b68c76-1025-4605-b3f4-3b4231f091db.png",
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
              "description": "Professional auto body repair and collision restoration"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Towing",
              "description": "24/7 emergency towing and roadside assistance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Exotic Car Rental",
              "description": "Luxury and exotic vehicle rentals"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vehicle Wraps and Tinting", 
              "description": "Car wraps, window tinting, and paint protection film"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Builds",
              "description": "Custom automotive builds and modifications"
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
              "@type": "LocalBusiness",
              "name": "The Showroom Miami"
            }
          }
        }
      ]
    }
  };
};
