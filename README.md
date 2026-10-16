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
