
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// Re-exported so prerender.js can read the same SEO data (title, description, OG/Twitter
// tags, structured data) that SEOHead.tsx uses in the browser, instead of duplicating it.
export { pageSEO, defaultSEO, getPageKeyForRoute, getPageStructuredData } from './utils/seo';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return html;
}
