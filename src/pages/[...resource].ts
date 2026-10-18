import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'
import profile from '../data/profile.json'
import { contactText, profileMarkdown } from '../lib/profile'

export const getStaticPaths = (async () => {
  const posts = (await getCollection('blog')).sort((left, right) =>
    right.data.date.localeCompare(left.data.date) || left.id.localeCompare(right.id),
  )
  const absolute = (path: string) => new URL(path, profile.url).href
  const blogIndex = [
    '# Blog',
    `Source: ${absolute('blog/')}`,
    profile.blogIntro,
    posts.length === 0 ? 'Writing will appear here.' : posts.map((post) => [
      `## ${post.data.title}`,
      `Published: ${post.data.date}`,
      post.data.description,
      `[Read article](${absolute(`blog/${post.id}/`)})`,
      `[Read Markdown](${absolute(`blog/${post.id}/index.md`)})`,
    ].join('\n\n')).join('\n\n'),
  ].join('\n\n') + '\n'
  const llms = [
    `# ${profile.name}`,
    `> ${profile.description}`,
    '## Profile',
    `- [Profile](${absolute('index.md')}): Background, selected work and contact links.`,
    `- [CV](${profile.contacts.find(({ label }) => label === 'CV')!.url}): Current curriculum vitae.`,
    '## Writing',
    `- [Blog](${absolute('blog/index.md')}): Published writing.`,
    ...posts.map((post) => `- [${post.data.title}](${absolute(`blog/${post.id}/index.md`)}): ${post.data.description}`),
    '## Contact',
    `- [Contact details](${absolute('contact.txt')}): Public introduction, email and profile links.`,
  ].join('\n\n') + '\n'
  const urls = [profile.url, absolute('blog/'), ...posts.map((post) => absolute(`blog/${post.id}/`))]
  const escapeXml = (text: string) => text.replace(/[<>&"']/g, (char) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
  })[char]!)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${escapeXml(url)}</loc></url>`).join('')}</urlset>\n`
  const resources = [
    { path: 'index.md', body: profileMarkdown(), type: 'text/markdown' },
    { path: 'blog/index.md', body: blogIndex, type: 'text/markdown' },
    { path: 'contact.txt', body: contactText(), type: 'text/plain' },
    { path: 'llms.txt', body: llms, type: 'text/plain' },
    { path: 'robots.txt', body: `User-agent: *\nAllow: /\n\nSitemap: ${absolute('sitemap.xml')}\n`, type: 'text/plain' },
    { path: 'sitemap.xml', body: sitemap, type: 'application/xml' },
    ...posts.map((post) => {
      if (typeof post.body !== 'string') throw new Error(`Missing Markdown body: ${post.id}`)
      return {
        path: `blog/${post.id}/index.md`,
        body: `# ${post.data.title}\n\n${post.data.description}\n\nPublished: ${post.data.date}\n\nSource: ${absolute(`blog/${post.id}/`)}\n\n${post.body}\n`,
        type: 'text/markdown',
      }
    }),
  ]
  return resources.map(({ path, ...props }) => ({ params: { resource: path }, props }))
}) satisfies GetStaticPaths

export const GET: APIRoute = ({ props }) => new Response(props.body, {
  headers: { 'Content-Type': `${props.type}; charset=utf-8` },
})
