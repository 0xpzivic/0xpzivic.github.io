# 0xpzivic.github.io

Paolo Zivic's personal blog — live at **<https://0xpzivic.github.io>**.

Built with [Astro](https://astro.build) on the [AstroPaper](https://github.com/satnaing/astro-paper) theme. Deploys automatically to GitHub Pages on every push to `main`.

## Run locally

```bash
pnpm install
pnpm dev          # http://localhost:4321
```

## Add a new post

Drop a markdown file into `src/data/blog/`. Example frontmatter:

```yaml
---
author: Paolo Zivic
pubDatetime: 2026-05-12T12:00:00.000Z
title: My new post
slug: my-new-post
featured: false
draft: false
tags:
  - engineering
description: One-sentence summary.
---
```

Push to `main` and GitHub Actions deploys it.

## Where to tweak things

| What                         | File                           |
| ---------------------------- | ------------------------------ |
| Site title, description, etc | `src/config.ts`                |
| Social links                 | `src/constants.ts`             |
| About page                   | `src/pages/about.md`           |
| Blog posts                   | `src/data/blog/*.md`           |
| Colors / theme               | `src/styles/global.css`        |
| Astro config                 | `astro.config.ts`              |
| Deploy workflow              | `.github/workflows/deploy.yml` |

## Build

```bash
pnpm run lint
pnpm run format:check
pnpm run build
```

## License

Theme: MIT (see [LICENSE](./LICENSE), © Sat Naing). Post content: © Paolo Zivic.
