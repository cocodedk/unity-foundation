# Unity Foundation Website

Scaffold for the Unity Foundation site per PRD and layout docs.

## Tech Stack
- Next.js (App Router) + React + TypeScript
- next-intl (i18n: en, da, fa with RTL for fa)
- Tailwind CSS
- Prisma (PostgreSQL)
- Cloudinary (planned)

## Getting Started
1. Copy `.env.example` to `.env` and fill in values.
2. Install dependencies (Node 18+):
   - npm: `npm install`
   - pnpm: `pnpm install`
3. Generate Prisma client: `npm run prisma:generate`
4. Run dev server: `npm run dev`

Root path `/` redirects via middleware to `/{locale}` (default `en`).

## Structure
- `app/[locale]/*` — localized public routes (Home, About, Programs, Updates, Donate, Contact, Legal)
- `app/api/*` — API route stubs (posts, announcement, contact, tags, upload)
- `components/*` — Header, Footer, DonationBanner, Hero, ProgramCards, UpdatesPreview
- `messages/*` — translation JSON files
- `prisma/schema.prisma` — data model from PRD

## Next Steps (Implementation)
- Hook up database and Prisma queries for posts/tags/announcement
- Add admin panel under `/admin` (protected) with CRUD for posts and announcement
- Integrate Cloudinary upload/signing for media
- Implement contact form with hCaptcha and email delivery
- Add SEO (sitemap, robots, schema), analytics, and accessibility audit

## Notes
- MobilePay number is displayed from `NEXT_PUBLIC_MOBILEPAY_BOX` until admin backend is wired.
- Farsi (`fa`) routes render with `dir=rtl`.

