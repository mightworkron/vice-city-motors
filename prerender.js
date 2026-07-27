
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render, pageSEO, defaultSEO, getPageKeyForRoute, getPageStructuredData } =
  await import('./dist/server/entry-server.js')

// Extract routes from App.tsx by reading the file and parsing route definitions
const getRoutesFromApp = () => {
  const appContent = fs.readFileSync(toAbsolute('src/App.tsx'), 'utf-8')
  const routeMatches = appContent.match(/<Route\s+path="([^"]+)"/g)

  if (!routeMatches) {
    console.warn('No routes found in App.tsx, falling back to default routes')
    return ['/']
  }

  const routes = routeMatches
    .map(match => {
      const pathMatch = match.match(/path="([^"]+)"/)
      return pathMatch ? pathMatch[1] : null
    })
    .filter(route => route && route !== '*') // Filter out wildcard routes
    .map(route => route === '/' ? '/' : route)

  return [...new Set(routes)] // Remove duplicates
}

const routesToPrerender = getRoutesFromApp()

console.log('Routes to prerender:', routesToPrerender)

// Ensure directory exists before writing file
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    console.log('Created directory:', dir)
  }
}

const BASE_URL = 'https://showroommiami.com'

// Escapes text for safe use inside an HTML attribute value or element text content.
const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Replaces the first match of `tagRegex` in `html` with `tagHtml`. If no match exists
// (the template has no static placeholder for this tag), inserts `tagHtml` right before
// </head> instead, so every route ends up with the tag either way.
const setTag = (html, tagRegex, tagHtml) => {
  if (tagRegex.test(html)) {
    return html.replace(tagRegex, tagHtml)
  }
  return html.replace('</head>', `    ${tagHtml}\n  </head>`)
}

;(async () => {
  for (const route of routesToPrerender) {
    try {
      const appHtml = render(route)

      const pageKey = getPageKeyForRoute(route)
      if (!pageKey) {
        console.warn(`No pageSEO entry found for route "${route}" - falling back to defaultSEO. Add an entry with canonicalUrl: "${route}" to src/utils/seo.ts.`)
      }
      const seo = { ...defaultSEO, ...(pageKey ? pageSEO[pageKey] : {}) }
      const canonicalUrl = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`
      const structuredData = pageKey ? getPageStructuredData(pageKey) : []

      const title = escapeHtml(seo.title)
      const description = escapeHtml(seo.description)
      const ogImage = escapeHtml(seo.ogImage)

      let html = template.replace(`<!--app-html-->`, appHtml)

      html = setTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`)
      html = setTag(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)

      html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`)

      html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
      html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`)
      html = setTag(html, /<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${ogImage}" />`)
      html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`)

      html = setTag(html, /<meta name="twitter:card" content="[^"]*"\s*\/>/, `<meta name="twitter:card" content="summary_large_image" />`)
      html = setTag(html, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
      html = setTag(html, /<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`)
      html = setTag(html, /<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${ogImage}" />`)

      // JSON-LD: replace any existing block (there shouldn't be one in the template) or insert before </head>.
      html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
      if (structuredData.length > 0) {
        const jsonLd = JSON.stringify(structuredData).replace(/</g, '\\u003c')
        html = html.replace('</head>', `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`)
      }

      // Handle file path generation
      let filePath
      if (route === '/') {
        filePath = 'dist/index.html'
      } else {
        // For routes like "/collision-repair", create "dist/collision-repair.html"
        // For nested routes like "/blog/post-1", create "dist/blog/post-1.html"
        const cleanUrl = route.startsWith('/') ? route.slice(1) : route
        filePath = `dist/${cleanUrl}.html`
      }

      const absoluteFilePath = toAbsolute(filePath)
      ensureDirectoryExists(absoluteFilePath)

      fs.writeFileSync(absoluteFilePath, html)
      console.log('Pre-rendered:', filePath, '| Canonical:', canonicalUrl, '| Title:', seo.title)
    } catch (error) {
      console.error(`Error pre-rendering ${route}:`, error.message)
    }
  }

  console.log('Pre-rendering complete!')
})()
