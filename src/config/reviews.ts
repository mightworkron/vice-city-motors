/**
 * Real customer reviews sourced directly from the consolidated Google Business Profile.
 * Rendered by SocialProof.tsx and reused on every page — single source of truth, same
 * pattern as src/config/business.ts. Do not invent or edit the wording: these must match
 * the reviewer's name, star rating, and text exactly as published on Google.
 *
 * Replace each REPLACE_WITH_... placeholder before merging.
 */

export interface GoogleReview {
  author: string;
  rating: number; // 1-5, as given on Google
  text: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  { author: "REPLACE_WITH_REVIEWER_1_NAME", rating: 5, text: "REPLACE_WITH_REVIEW_1_TEXT" },
  { author: "REPLACE_WITH_REVIEWER_2_NAME", rating: 5, text: "REPLACE_WITH_REVIEW_2_TEXT" },
  { author: "REPLACE_WITH_REVIEWER_3_NAME", rating: 5, text: "REPLACE_WITH_REVIEW_3_TEXT" },
  { author: "REPLACE_WITH_REVIEWER_4_NAME", rating: 5, text: "REPLACE_WITH_REVIEW_4_TEXT" },
  { author: "REPLACE_WITH_REVIEWER_5_NAME", rating: 5, text: "REPLACE_WITH_REVIEW_5_TEXT" }
];
