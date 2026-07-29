/**
 * Single source of truth for the business's Google Business Profile (GBP) data.
 * Everything that links to or displays the GBP listing (Footer map/review badge,
 * the homepage review badge, the Collision Repair review CTA, and the LocalBusiness
 * JSON-LD "sameAs" in seo.ts) reads from here — don't hardcode these values anywhere else.
 *
 * GBP_PLACE_ID / GBP_PROFILE_URL / GBP_REVIEW_URL / GBP_RATING / GBP_REVIEW_COUNT are
 * placeholders: fill them in with the real values from the consolidated, verified GBP
 * listing before merging this branch.
 */

// Google Place ID for the consolidated listing.
// https://developers.google.com/maps/documentation/places/web-service/place-id
export const GBP_PLACE_ID = "REPLACE_WITH_PLACE_ID";

// Direct link to the Google Business Profile (e.g. "https://g.page/REPLACE_WITH_SLUG").
export const GBP_PROFILE_URL = "REPLACE_WITH_GBP_PROFILE_URL";

// Short "write a review" link. Format: https://g.page/r/XXXXXXXXXXXXXXXX/review
export const GBP_REVIEW_URL = "REPLACE_WITH_GBP_REVIEW_URL";

// Null until the real, consolidated numbers are confirmed — components must treat
// null as "hide the stat," not display a false 0.0 / 0 reviews.
export const GBP_RATING: number | null = null; // e.g. 5.0
export const GBP_REVIEW_COUNT: number | null = null; // e.g. 236

// Must match the consolidated GBP listing EXACTLY — mismatched name/address/phone
// (NAP inconsistency) between the website and GBP hurts local SEO ranking.
// Currently mirrors what's already live in src/utils/seo.ts's LocalBusiness schema
// and src/components/Footer.tsx — double-check both against the actual GBP listing
// before merging, in case the consolidated profile uses different formatting.
export const BUSINESS_PHONE = "305-419-8379";

export const BUSINESS_ADDRESS = {
  streetAddress: "7820 NW 6th Ct",
  addressLocality: "Miami",
  addressRegion: "FL",
  postalCode: "33150",
  addressCountry: "US"
};
