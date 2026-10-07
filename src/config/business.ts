/**
 * Single source of truth for the business's Google Business Profile (GBP) data.
 * Everything that links to or displays the GBP listing (Footer map/review badge,
 * the homepage review badge, the Collision Repair review CTA, and the LocalBusiness
 * JSON-LD "sameAs" in seo.ts) reads from here — don't hardcode these values anywhere else.
 */

// Google Place ID for the consolidated listing.
// https://developers.google.com/maps/documentation/places/web-service/place-id
export const GBP_PLACE_ID = "ChIJdyvWonSx2YgRbocG9xuQTHs";

// Direct link to the Google Business Profile.
export const GBP_PROFILE_URL = "https://maps.app.goo.gl/GMgg7YeXbcpBH4Rn6";

// "Write a review" link.
export const GBP_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJdyvWonSx2YgRbocG9xuQTHs";

// Consolidated GBP rating/review count as of 2026-07-27. Update these two whenever the
// count is re-checked — components treat null as "hide the stat" if this ever needs
// to be reset, rather than displaying a false 0.0 / 0 reviews.
export const GBP_RATING: number | null = 5.0;
export const GBP_REVIEW_COUNT: number | null = 239;

// Single source of the business phone. Do not hardcode the number anywhere else.
// Name, address and phone must match the Google Business Profile listing (NAP consistency).
// E164 is for tel: links and structured data; DISPLAY is for visible text.
export const BUSINESS_PHONE_E164 = "+13054198379";
export const BUSINESS_PHONE_DISPLAY = "305-419-8379";
export const BUSINESS_PHONE_HREF = `tel:${BUSINESS_PHONE_E164}`;

export const BUSINESS_ADDRESS = {
  streetAddress: "7820 NW 6th Ct",
  addressLocality: "Miami",
  addressRegion: "FL",
  postalCode: "33150",
  addressCountry: "US"
};
