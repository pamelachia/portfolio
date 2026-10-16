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
