// Single capture point for call_now_click (analytics-tsm anl-01, ADR-001).
// Pushes a named event to the dataLayer; tags live in GTM, not in the code.

const CALL_LOCATIONS = ["header", "floating", "footer", "page_body"];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    __callNowClickBound?: boolean;
  }
}

export function initCallTracking() {
  if (typeof document === "undefined" || window.__callNowClickBound) return;
  window.__callNowClickBound = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (!link) return;

      const value = link.getAttribute("data-call-location") ?? "";
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "call_now_click",
        call_location: CALL_LOCATIONS.includes(value) ? value : "unassigned",
      });
    },
    true
  );
}
