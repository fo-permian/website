# FO Permian Website

Marketing site for FO Permian Partners — off-grid natural gas + battery power in the Permian Basin for AI / hyperscale data centers.

## Stack

- SvelteKit 2 + Svelte 5
- Tailwind CSS v4
- mdsvex for markdown-driven news posts
- `@sveltejs/adapter-static` (full static prerender)
- Deployed to GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Produces a static site in `./build/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The custom domain `fopermian.com` is configured via `static/CNAME`.

## Content

News posts live as markdown in `src/content/news/`. Filename format: `YYYY-MM-DD-slug.md`. Frontmatter:

```yaml
---
title: 'Headline'
date: '2025-09-04'
summary: 'One-line summary.'
cover: '/img/news/cover.png'
---
```

Add a file, push to main, the post appears on `/news`.
