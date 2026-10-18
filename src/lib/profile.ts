import profile from '../data/profile.json'

export function contactText() {
  return [
    profile.name,
    profile.label,
    profile.intro,
    `Based in ${profile.location}.`,
    '',
    `Website: ${profile.url}`,
    ...profile.contacts.map(({ label, url }) => `${label}: ${url.replace(/^mailto:/, '')}`),
  ].join('\n') + '\n'
}

export function profileMarkdown() {
  const { about } = profile
  return [
    `# ${profile.name}`,
    `Source: ${profile.url}`,
    profile.label,
    profile.intro,
    profile.foundation,
    `Based in ${profile.location}.`,
    `## Selected work: ${profile.workHeading}`,
    profile.workIntro,
    ...profile.work.flatMap((work) => [
      `### ${work.title}`,
      ...work.paragraphs,
      ...work.links.map(({ label, url }) => `- [${label}](${url})`),
    ]),
    `## Background: ${about.heading}`,
    about.founder,
    `${about.educationIntro} My dissertation, *${about.dissertation.title}*, ${about.dissertation.description} My undergraduate research, *${about.undergraduateResearch.title}*, ${about.undergraduateResearch.description}`,
    about.people,
    '### Outside work',
    about.outsideWork,
    '## Get in touch',
    profile.contactIntro,
    ...profile.contacts.map(({ label, url }) => `- [${label}](${url})`),
    `- [Blog](${new URL('blog/', profile.url)})`,
  ].join('\n\n') + '\n'
}
