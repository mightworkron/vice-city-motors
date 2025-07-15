
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

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

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url)
      const html = template.replace(`<!--app-html-->`, appHtml)

      // Handle file path generation
      let filePath
      if (url === '/') {
        filePath = 'dist/index.html'
      } else {
        // For routes like "/collision-repair", create "dist/collision-repair.html"
        // For nested routes like "/blog/post-1", create "dist/blog/post-1.html"
        const cleanUrl = url.startsWith('/') ? url.slice(1) : url
        filePath = `dist/${cleanUrl}.html`
      }

      const absoluteFilePath = toAbsolute(filePath)
      ensureDirectoryExists(absoluteFilePath)
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log('Pre-rendered:', filePath)
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error.message)
    }
  }
  
  console.log('Pre-rendering complete!')
})()
