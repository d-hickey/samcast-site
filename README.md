# The SamCast

Website for The SamCast podcast — episode list, episode pages, and an about page.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) – App Router, static export |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions (OIDC – no stored AWS keys) |

---

## Local Development

### Prerequisites

- Node.js ≥ 22

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build static export

```bash
npm run build
# output is written to /out
```

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout (Nav + main wrapper)
│   ├── globals.css         # Tailwind v4 import + global styles
│   ├── page.tsx            # Home – episode list  (→ /)
│   ├── about/
│   │   └── page.tsx        # About page           (→ /about/)
│   └── [slug]/
│       └── page.tsx        # Episode pages        (→ /ep1/ … /ep11/)
├── components/
│   └── Nav.tsx             # Navigation bar
├── lib/
│   └── episodes.ts         # Typed episode data (single source of truth)
├── public/
│   ├── media/              # Logos and people photos
│   └── ep1/ … ep11/        # Thumbnails and audio files
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD: build → S3 sync → CloudFront invalidation
├── iam-policy.json         # Minimal IAM policy for the deploy role
├── next.config.ts          # Static export config
├── postcss.config.mjs      # Tailwind v4 PostCSS plugin
└── tsconfig.json
```

---

## AWS Deployment

### Architecture

```
User → Route 53 → CloudFront (HTTPS, OAC) → S3 (private bucket)
```

- **S3** stores the static files (bucket website hosting **disabled**; accessed only via CloudFront OAC).
- **CloudFront** provides HTTPS, global CDN caching, and custom error pages.
- **ACM** certificate attached to the CloudFront distribution.
- **Route 53** (optional) for a custom domain.

### One-time AWS setup

1. **Create an S3 bucket** (private, no public access).

2. **Create a CloudFront distribution** pointing at the S3 bucket with an Origin Access Control (OAC).

3. **Create an ACM certificate** in `us-east-1` for your domain and attach it to CloudFront.

4. **Set up OIDC for GitHub Actions** in IAM:
   - Add the GitHub OIDC provider: `https://token.actions.githubusercontent.com`
   - Create an IAM role with the trust policy scoped to your repo/branch.
   - Attach the permissions in `iam-policy.json` (update `BUCKET_NAME`, `ACCOUNT_ID`, and `CLOUDFRONT_DIST_ID`).

### GitHub Secrets

Add these in **Settings → Secrets → Actions**:

| Secret | Example |
|--------|---------|
| `AWS_ACCOUNT_ID` | `123456789012` |
| `AWS_REGION` | `eu-west-1` |
| `AWS_ROLE_NAME` | `samcast-github-deploy` |
| `S3_BUCKET` | `samcast-site-prod` |
| `CLOUDFRONT_DIST_ID` | `EXXXXXXXXX` |
| `NEXT_PUBLIC_SITE_URL` | `https://samcast.example.com` |

Push to `main` to trigger a deployment.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL used for OpenGraph metadata |

---

## Migration Notes

### What changed

| Before | After |
|--------|-------|
| Plain HTML files | Next.js (App Router) + TypeScript |
| Hand-written CSS (`static/css/main.css`) | Tailwind CSS v4 utility classes |
| `/about.html` URL | `/about/` (minor URL change) |
| Inline `<table>` layout | Semantic `<ul>` / CSS Grid |
| No metadata/SEO tags | `<title>`, `<meta description>`, OpenGraph via Next.js Metadata API |
| No CI/CD | GitHub Actions → S3 + CloudFront (OIDC auth) |

### What was preserved

- All episode content, dates, descriptions, and links.
- All audio files and YouTube embeds.
- Participant photo grids on episode pages.
- Episode URL pattern: `/ep1/`, `/ep2/`, … `/ep11/`.
- Background image and card-based white panel layout.

### What was improved

- **Accessibility**: semantic heading hierarchy (`<h1>`, `<p>`), `alt` text on all images, `<nav>` landmark.
- **SEO**: proper `<title>` per page, `<meta name="description">`, canonical URLs, OpenGraph tags.
- **Performance**: static export served from CloudFront edge nodes; separate cache headers for HTML vs. immutable assets.
- **Maintainability**: all episode data lives in `lib/episodes.ts` — adding a new episode is one object in that array.
