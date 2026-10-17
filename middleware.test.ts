import assert from 'node:assert/strict'
import test from 'node:test'
import middleware from './middleware.ts'

test('negotiates supported formats with HTML as the default', () => {
  const cases: [string | undefined, boolean][] = [
    [undefined, false],
    ['*/*', false],
    ['text/*', false],
    ['text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', false],
    ['text/markdown', true],
    ['text/markdown; charset=utf-8', true],
    ['TEXT/MARKDOWN', true],
    ['text/html;q=0.9,text/markdown;q=0.1', false],
    ['text/html;q=0.1,text/markdown;q=0.9', true],
    ['text/markdown;q=0,*/*;q=0.8', false],
    ['text/html;q=0,text/*;q=0.8', true],
    ['text/html,text/markdown', false],
    ['text/markdown,text/html', true],
    ['application/json', false],
  ]

  for (const [accept, markdown] of cases) {
    const headers = new Headers()
    if (accept !== undefined) headers.set('Accept', accept)
    const response = middleware(new Request('https://pamelachia.com/', { headers }))
    assert.equal(response.headers.has('x-middleware-rewrite'), markdown, accept)
    assert.equal(response.headers.get('Vary'), 'Accept', accept)
    if (markdown) assert.equal(response.headers.get('Content-Type'), 'text/markdown; charset=utf-8')
  }
})

test('rewrites only page routes to their existing Markdown files', () => {
  const routes = [
    ['/', '/index.md'],
    ['/blog/', '/blog/index.md'],
    ['/blog/first-post/', '/blog/first-post/index.md'],
    ['/blog/index/', '/blog/index/index.md'],
  ]
  for (const [path, destination] of routes) {
    for (const method of ['GET', 'HEAD']) {
      const request = new Request(`https://pamelachia.com${path}?source=profile`, {
        method,
        headers: { Accept: 'text/markdown' },
      })
      const response = middleware(request)
      assert.equal(response.headers.get('x-middleware-rewrite'), `https://pamelachia.com${destination}?source=profile`)
    }
  }
})

test('canonicalizes directory URLs so relative links keep the article base', () => {
  for (const path of ['/blog', '/blog/first-post']) {
    const response = middleware(new Request(`https://pamelachia.com${path}?source=profile`, {
      headers: { Accept: 'text/markdown' },
    }))
    assert.equal(response.status, 308)
    assert.equal(response.headers.get('Location'), `https://pamelachia.com${path}/?source=profile`)
    assert.equal(response.headers.get('Vary'), 'Accept')
  }
})

test('leaves explicit files, assets, other routes and write requests alone', () => {
  const paths = ['/index.md', '/blog/index.md', '/blog/first-post/index.md', '/blog/photo.webp', '/contact.txt', '/missing/']
  const requests = paths.map((path) => new Request(`https://pamelachia.com${path}`, {
    headers: { Accept: 'text/markdown' },
  }))
  requests.push(new Request('https://pamelachia.com/', { method: 'POST', headers: { Accept: 'text/markdown' } }))
  for (const request of requests) {
    const response = middleware(request)
    assert.equal(response.headers.get('x-middleware-next'), '1')
    assert.equal(response.headers.has('x-middleware-rewrite'), false)
    assert.equal(response.headers.has('Vary'), false)
  }
})
