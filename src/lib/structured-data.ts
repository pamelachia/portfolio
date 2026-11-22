import profile from '../data/profile.json'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${profile.url}#person`,
    name: profile.name,
    url: profile.url,
    email: profile.contacts.find(({ url }) => url.startsWith('mailto:'))!.url,
    jobTitle: profile.jobTitle,
    description: `${profile.label} doing growth engineering at ${profile.employer} across product, data, and experiences for AI agents.`,
    homeLocation: { '@type': 'Place', name: profile.location },
    worksFor: { '@type': 'Organization', name: profile.employer, url: profile.employerUrl },
    alumniOf: { '@type': 'CollegeOrUniversity', name: profile.alumniOf },
    knowsAbout: profile.knowsAbout,
    sameAs: profile.contacts.filter(({ label }) => ['CV', 'GitHub', 'LinkedIn'].includes(label)).map(({ url }) => url),
  }
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
