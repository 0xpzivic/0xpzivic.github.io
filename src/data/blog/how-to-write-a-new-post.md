---
author: Paolo Zivic
pubDatetime: 2026-05-12T12:30:00.000Z
title: How I write new posts here
slug: how-to-write-a-new-post
draft: false
tags:
  - meta
description: A quick reference for adding new posts to this blog.
---

Notes-to-self so I don't have to remember.

## Add a new post

1. Create a new `.md` file in `src/data/blog/` — e.g. `my-new-post.md`.
2. Paste this frontmatter:

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

3. Write the body in markdown below the frontmatter.
4. Commit and push to `main`. GitHub Actions builds and deploys to GitHub Pages automatically.

## Run it locally

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # production build
```

## Useful frontmatter flags

- `draft: true` — keep a post out of the published feed.
- `featured: true` — pin to the top of the homepage.
- `tags: [foo, bar]` — adds the post to those tag pages.
- `ogImage: ./og.png` — custom social-card image (otherwise auto-generated).

## Tweaking the site

- **Name, description, timezone:** `src/config.ts`
- **Social links:** `src/constants.ts`
- **About page:** `src/pages/about.md`
- **Colors / theme:** `src/styles/global.css`
