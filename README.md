# Pamela Chia

Personal profile site for [pamelachia.com](https://pamelachia.com).

## Requirements

Node.js 22.22 or later and npm 9.6.5 or later.

## Development

```sh
npm ci
npm run dev
```

## Verification and production build

```sh
npm run check
npm run build
```

The static site is written to `dist/`. Vercel serves that directory using the build configuration in `vercel.json`.

## Publishing a blog post

Create a Markdown file in `src/content/blog/` with a stable, lowercase, hyphenated filename. For example, `src/content/blog/my-first-post.md` publishes at `/blog/my-first-post/`.

```md
---
title: My first post
description: A short summary of the post.
date: "2026-10-16"
---

Write the post in Markdown here.
```

Every Markdown file in `src/content/blog/` publishes when its branch merges. Keep drafts outside that directory or in an unmerged branch. This repository and its branches are public, so never store private drafts, research, or secrets here.

Published filenames are URLs. Keep a filename unchanged after publishing unless you also add a redirect.

For images, place public files in `public/`, use descriptive alt text, and resize or compress them before publishing. Prefer WebP and aim for files below 300 KB. The blog constrains image display width but does not optimize images automatically.

## Markdown and discovery

Edit the homepage copy and contact links in `src/data/profile.json`. The HTML, Markdown and contact summary share that source.

The homepage is available at `/index.md`, the writing index at `/blog/index.md`, and each post at `/blog/<slug>/index.md`. Post Markdown preserves the authored body and its relative-link base, adding the title, description, date and canonical source URL. Blog posts automatically appear in `/llms.txt` and `/sitemap.xml`.

On the hosted site, the ordinary homepage and blog URLs also return Markdown when the request's `Accept` header prefers `text/markdown`. Routing middleware selects the existing static export using standard quality values, specificity and client ordering. Requests with no preference or only wildcards receive HTML. Both formats include `Vary: Accept`; explicit Markdown URLs remain available regardless of negotiation. Negotiated directory URLs redirect to their trailing-slash form so relative article links keep the same base.

This routing runs on the hosting platform. Astro's local development and preview servers serve HTML at the ordinary URLs; use the explicit Markdown URLs locally.

The contact section copies a short public introduction and links locally to the clipboard. `/contact.txt` provides the same text without JavaScript. Read Markdown links also work without JavaScript; copy controls offer selectable text when clipboard access is unavailable.
