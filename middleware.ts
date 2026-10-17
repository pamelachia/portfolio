import { next, rewrite } from '@vercel/functions'
import Negotiator from 'negotiator'

export const config = { matcher: ['/', '/blog/:path*'] }

const markdownType = 'text/markdown; charset=utf-8'

export default function middleware(request: Request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return next()

  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, '')
  if (path !== '' && path !== '/blog' && !/^\/blog\/[^/.]+$/.test(path)) return next()

  const headers = { Vary: 'Accept' }
  const negotiator = new Negotiator({ headers: { accept: request.headers.get('accept') ?? '*/*' } })
  const format = negotiator.mediaType(['text/html; charset=utf-8', markdownType])
  if (format !== markdownType) return next({ headers })

  if (!url.pathname.endsWith('/')) {
    url.pathname += '/'
    return new Response(null, { status: 308, headers: { ...headers, Location: url.href } })
  }

  url.pathname = `${path}/index.md`
  return rewrite(url, { headers: { ...headers, 'Content-Type': markdownType } })
}
