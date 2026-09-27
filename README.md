# amin.darabi.one

Personal website of **Amin Darabi** — ML researcher & engineer (efficient large-scale training,
GPU kernels, low-precision training). Live at **<https://amin.darabi.one>**.

Built with [Nuxt 4](https://nuxt.com), [Tailwind CSS 4](https://tailwindcss.com), and
[daisyUI 5](https://daisyui.com), generated as a fully static site and hosted on GitHub Pages.

## Updating content

All content (bio, experience, education, publications, projects, skills, courses, honours) lives in
[`app/data/profile.ts`](app/data/profile.ts). Edit that file and push to `main` — the site rebuilds
and deploys automatically.

## Development

Requires Node.js 22.19+ (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run generate   # static output in .output/public
npx serve .output/public
```

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site on every push and pull
request, and deploys `main` to GitHub Pages. The custom domain is set by [`public/CNAME`](public/CNAME)
and in the repository's Pages settings.

One-time setup:

1. **DNS** — at the DNS provider for `darabi.one`, add a `CNAME` record: `amin` → `amindarabi.github.io`.
2. **Repository → Settings → Pages** — set *Source* to **GitHub Actions**, set *Custom domain* to
   `amin.darabi.one`, and tick **Enforce HTTPS** once the certificate is issued.
3. *(Recommended)* **Account → Settings → Pages** — verify `darabi.one` to prevent domain takeover.

Dependabot keeps npm packages and GitHub Actions up to date.
