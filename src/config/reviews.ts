/**
 * Real customer reviews sourced directly from the consolidated Google Business Profile.
 * Rendered by SocialProof.tsx and reused on every page — single source of truth, same
 * pattern as src/config/business.ts. Do not invent or edit the wording: these must match
 * the reviewer's name, star rating, and text exactly as published on Google.
 */

export interface GoogleReview {
  author: string;
  rating: number; // 1-5, as given on Google
  text: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  { author: "Lisa Washington", rating: 5, text: "He is the best in the world. Jon saved me. Thank you" },
  { author: "sara naranjo", rating: 5, text: "Love this shop" },
  { author: "Breslev Learning Center", rating: 5, text: "Perfect work and great people" },
  { author: "itay -p-s-i", rating: 5, text: "No shortcuts clean high end work" },
  { author: "Sophie Sotelo", rating: 5, text: "The repairs invincible looks factory" },
  { author: "Facundo Martinez", rating: 5, text: "They took a stressful situation and made it manageable. They explained each step, provided updates, and delivered..." }
];
