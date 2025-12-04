import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Send page view to Google Ads/Analytics on route change
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'AW-17422213105', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
