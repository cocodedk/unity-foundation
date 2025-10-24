# Unity Foundation Website — Product Requirements Document (PRD)

**Version:** 1.0
**Date:** 2025-10-24
**Owner:** Unity Foundation (Founder: *Mandana Zaboli*)
**Administrator:** cocode.dk / *Babak Bandpey*

---

## 1) Purpose & Vision

Create an inspiring, attractive, and expressive multilingual website for **Unity Foundation**, a non‑governmental, non‑political, grassroots charity supporting **children, people with disabilities, and people experiencing poverty**. The site must clearly communicate mission, impact, and transparency; make donating simple (incl. **MobilePay**); and provide a **lightweight admin panel** to post updates with images (Cloudinary).

---

## 2) Success Metrics (v1)

* **Donations:** ≥ X MobilePay donations in first 90 days; conversion rate from Home → Donate ≥ 3%.
* **Engagement:** Avg. time on page ≥ 1:30; Bounce rate ≤ 55%; ≥ 200 Telegram clicks in 90 days.
* **Publishing velocity:** Admin can create a post with images in ≤ 3 minutes end‑to‑end.
* **Localization coverage:** 100% of public pages fully translated in 3 languages at launch.

> Add targets (X) during pre‑launch.

---

## 3) Audiences

1. **Donors (primary):** individuals and SMEs; quick trust signals and one‑tap donation.
2. **Volunteers & partners:** want clarity on initiatives and how to help.
3. **Beneficiaries & advocates:** need to understand focus areas and how to reach Unity.
4. **Regulatory / media:** need NGO posture, transparency, and contact details.

---

## 4) Scope (MVP)

### 4.1 Public Website

* **Home** (hero, mission, featured programs, recent updates, donation CTA, MobilePay number, Telegram link)
* **About** (non‑political/non‑governmental statement; founder bio *Mandana Zaboli*; governance; administrator credit: cocode.dk / Babak Bandpey)
* **Programs / What We Do** (Children • Disability • Poverty Relief)
* **Updates** (blog‑like listing; tags; pagination)
* **Single Update page** (title, date, body, gallery, share links, related posts)
* **Donate** (MobilePay number prominent, QR, alternative methods [future]; FAQs)
* **Get Involved** (volunteer form, partnerships, in‑kind support)
* **Contact** (email form with spam protection; Telegram channel link)
* **Legal** (Privacy, Cookies, Impressum/NGO disclosure)

### 4.2 Admin Panel (Simple CMS)

* **Auth** (email+password; 2FA optional v2)
* **Posts**: create/edit/publish/unpublish; WYSIWYG markdown; add cover image + gallery via **Cloudinary**; tags; language management
* **Announcements**: manage **MobilePay number** and short donation banner copy (site‑wide)
* **Media Library**: Cloudinary picker (search, upload, select)
* **Users & Roles**: Admin, Editor, Translator (see §10)
* **Settings**: site metadata, social links, contact email, Telegram URL

### 4.3 Languages (Launch = 3)

* **English (en)**
* **Danish (da)**
* **Persian / Farsi (fa)** *(RTL support required)*

> If you prefer other languages for v1, we can swap easily.

---

## 5) Non‑Goals (MVP)

* Payments processed on‑site (beyond MobilePay number/QR)
* Complex donor CRM or membership areas
* Multi‑environment translation workflows (advanced)
* Complex role‑based moderation queues (simple roles only in v1)

---

## 6) Messaging & Brand Guardrails

* Explicitly **non‑political, non‑governmental, grassroots NGO**.
* Tone: hopeful, human, respectful; focus on dignity and impact (no shock imagery).
* Visual: clean, modern, “human warmth” (subtle gradients, generous whitespace, large type, rounded corners, soft shadows).

---

## 7) Information Architecture

```
/ (Home)
  /about
  /programs
    /children
    /disability
    /poverty
  /updates
    /[slug]
  /donate
  /get-involved
  /contact
  /legal/privacy
  /legal/cookies
  /legal/impressum
  /admin (protected)
```

---

## 8) Content Types & Fields

### 8.1 Update (Post)

* id, slug, status (draft/published)
* title (multi‑lang), summary (multi‑lang), body (rich text markdown, multi‑lang)
* coverImage (Cloudinary public_id + URL), gallery[]
* tags[] (multi‑lang labels)
* author, createdAt, updatedAt, publishedAt

### 8.2 Page Content (Home/About/Programs)

* title (multi‑lang), sections[] (rich blocks), heroMedia (optional)

### 8.3 Announcement (Donation Banner)

* mobilePayNumber (string), bannerText (multi‑lang), enabled (bool)

### 8.4 Settings

* siteName, logo, primaryColor, telegramUrl, contactEmail, social[]

---

## 9) Internationalization (i18n)

* **Locales:** en, da, fa (RTL)
* **Strategy:** Static copy via translation JSON; dynamic content (posts) stored per‑locale.
* **Routing:** domain.com/en, /da, /fa with locale switcher; remember preference (cookie).
* **RTL:** global `dir=rtl` for `fa`, mirrored layout, typography tuned for Persian.

---

## 10) Roles & Permissions

* **Admin**: all permissions incl. settings and users.
* **Editor**: create/edit/publish posts, manage media, manage announcements.
* **Translator**: edit localized fields only; cannot publish or change settings.

---

## 11) Accessibility & SEO

* **WCAG 2.1 AA** (contrast, focus states, semantic landmarks, alt text required)
* Keyboard and screen‑reader friendly (skip links, ARIA only when needed)
* Structured data: Organization, NGO, Article for posts
* Meta/i18n: `hreflang` for en/da/fa; Open Graph/Twitter cards; sitemap.xml & robots.txt

---

## 12) Tech Stack & Architecture

### 12.1 Frontend

* **Framework:** **Next.js (App Router) + React + TypeScript**
* **Styling:** Tailwind CSS; shadcn/ui components; RTL support via logical properties
* **Images/CDN:** Next/Image; **Cloudinary** for asset storage & transformations
* **i18n:** `next-intl` or `next-i18next` (server + client translations)
* **Forms:** React Hook Form + Zod validation; hCaptcha re: spam

### 12.2 Admin Panel

* **Option A (Default):** Built inside Next.js at `/admin` with protected routes.
* **Option B (If Vite is required):** A small **Vite + React** SPA in a monorepo sub‑app, reverse‑proxied under `/admin` by Next.js. Shares UI library and API.

### 12.3 Backend & Data

* **Runtime:** Next.js API routes (Edge‑friendly where possible)
* **Database:** PostgreSQL (Neon/PlanetScale alternative: MySQL)
* **ORM:** Prisma
* **Auth:** NextAuth (Auth.js) with email/password (option to add OAuth later)
* **Storage:** Cloudinary SDK for uploads from admin panel
* **Config:** `.env` for secrets (MobilePay number, DB URL, Cloudinary keys)

### 12.4 Deployment & DevOps

* **Hosting:** Vercel (Next.js) or alternative Node host
* **DB:** Managed Postgres
* **Domains:** `unityfoundation.[tld]`; optional locale subpaths
* **Analytics:** Plausible/Umami (privacy‑friendly)
* **Error monitoring:** Sentry
* **CI/CD:** GitHub → Vercel preview PRs

---

## 13) Key Features & Acceptance Criteria

### 13.1 Home Page

* **AC1:** Hero shows mission, donate CTA, MobilePay number visible above the fold.
* **AC2:** 3 program cards (Children, Disability, Poverty) with links.
* **AC3:** Latest 3 updates listed with dates & cover images.
* **AC4:** Telegram and contact links visible in footer.

### 13.2 Donate Page

* **AC1:** Prominent **MobilePay number** + copyable text + QR image (admin‑managed).
* **AC2:** Explains use of funds and trust signals (governance, transparency).
* **AC3:** Secondary methods area (hidden until configured).

### 13.3 Updates (Blog)

* **AC1:** List view with pagination, tag filter, language filter.
* **AC2:** Single post with share meta, related posts, and image gallery.
* **AC3:** All fields localizable; if missing translation, fall back to English with badge.

### 13.4 Admin: Posts

* **AC1:** Create/edit post with title/summary/body (markdown), tags, cover image & gallery (Cloudinary picker).
* **AC2:** Save draft, preview, publish/unpublish.
* **AC3:** Localized tabs per language; translators can only edit localized fields.
* **AC4:** Slug auto‑generated (editable).
* **AC5:** Validation: title ≥ 10 chars, body ≥ 200 chars, cover image optional.

### 13.5 Admin: Announcements (Donation Banner)

* **AC1:** Admin can set **MobilePay number** and short banner text per locale.
* **AC2:** Toggle enable/disable; site‑wide banner shows on all pages when enabled.

### 13.6 Contact Form

* **AC1:** Name, email, message; hCaptcha; success and error states.
* **AC2:** Sends email to `contact@unityfoundation.[tld]` (configure in Settings).
* **AC3:** Persist inquiries in DB (optional toggle v1 = off).

### 13.7 Telegram Integration

* **AC1:** Footer + About include Telegram channel link.
* **AC2:** Optional widget/CTA on Updates page header.

### 13.8 Performance

* **AC1:** Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms on 4G.
* **AC2:** Images lazy‑loaded; Cloudinary transformations for responsive sizes.

---

## 14) API Endpoints (Next.js API routes)

* `POST /api/auth/*` — Auth.js routes
* `GET /api/posts` — list (filters: locale, tag, page)
* `POST /api/posts` — create (auth: Editor+)
* `GET /api/posts/[id|slug]` — read
* `PUT /api/posts/[id]` — update (auth: role checks)
* `PATCH /api/posts/[id]/publish` — publish/unpublish
* `GET /api/tags` — list tags (by locale)
* `GET/PUT /api/announcement` — get/update MobilePay banner
* `POST /api/upload` — Cloudinary signed upload
* `POST /api/contact` — send message (rate‑limited)

---

## 15) Data Model (Prisma sketch)

```prisma
model User {
  id         String   @id @default(cuid())
  email      String   @unique
  name       String?
  password   String
  role       Role     @default(EDITOR)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

enum Role { ADMIN EDITOR TRANSLATOR }

model Post {
  id          String   @id @default(cuid())
  slug        String   @unique
  status      PostStatus @default(DRAFT)
  coverId     String?  // Cloudinary public_id
  gallery     String[]
  tags        Tag[]
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  publishedAt DateTime?
  // localized fields
  i18n        PostI18n[]
}

enum PostStatus { DRAFT PUBLISHED }

model PostI18n {
  id        String @id @default(cuid())
  locale    String // en|da|fa
  title     String
  summary   String?
  body      String
  postId    String
  post      Post   @relation(fields: [postId], references: [id])
  @@unique([postId, locale])
}

model Tag {
  id      String @id @default(cuid())
  key     String @unique // stable key
  labels  TagI18n[]
  posts   Post[]
}

model TagI18n {
  id     String @id @default(cuid())
  locale String
  label  String
  tagId  String
  tag    Tag    @relation(fields: [tagId], references: [id])
  @@unique([tagId, locale])
}

model Announcement {
  id        Int    @id @default(1)
  enabled   Boolean @default(false)
  mobilePay String
  i18n      AnnouncementI18n[]
}

model AnnouncementI18n {
  id            String @id @default(cuid())
  locale        String
  bannerText    String
  announcementId Int
  announcement  Announcement @relation(fields: [announcementId], references: [id])
  @@unique([announcementId, locale])
}
```

---

## 16) Privacy, Security & Compliance

* Store minimum personal data; hash passwords (Argon2/bcrypt)
* Rate‑limit API; CSRF protection in admin; HTTPS only
* Secrets via `.env`; rotate on breach
* Cookie banner (consent mode) if analytics used
* Content moderation: Editor responsibility; image rights confirmed before upload

---

## 17) Content & Editorial Workflow

1. Editor drafts post (EN) → add images → save draft.
2. Translator adds DA & FA translations.
3. Admin reviews → publish.
4. Homepage auto‑shows latest 3 posts; Telegram post is manual (out of scope v1).

---

## 18) Wireframe Notes (descriptive)

* **Hero:** Full‑bleed image/video with soft overlay; headline + Donate button; MobilePay number as pill.
* **Program cards:** three equal cards with iconography; hover lift.
* **Update card:** cover image, date, tag chip, 2‑line title.
* **Footer:** logo, mission blurb, Telegram, contact email, quick links, language switcher.
* **Admin list:** table with filters (status, tag, locale), inline edit of titles.

---

## 19) Timeline (indicative)

* Week 1: Brand look, content drafting, data model, Cloudinary setup
* Week 2: Public pages & i18n, Admin CRUD (posts), uploads
* Week 3: Donate page, announcement banner, SEO/analytics, QA
* Week 4: Translations, accessibility pass, launch

---

## 20) Risks & Mitigations

* **Translations lag** → fallback to EN with badge; staged rollout per page.
* **Image rights** → upload checklist in admin; require alt text.
* **Vite + Next complexity** → default to Admin inside Next (Option A); keep Option B only if mandated.
* **MobilePay UX** → provide copy‑to‑clipboard, QR, and donate CTAs across key pages.

---

## 21) Open Questions (to confirm)

* Exact **MobilePay number** and QR image file.
* Preferred domain/TLD.
* Analytics choice (Plausible/Umami/GA).
* Any additional donation methods (bank transfer, Stripe) for v1 or v2.

---

## 22) Definition of Done (DoD)

* All MVP pages implemented, localized (en/da/fa), and accessible (WCAG AA).
* Admin panel supports full post lifecycle + Cloudinary media + donation banner.
* MobilePay number visible on Home and Donate; QR works when scanned.
* SEO basics: sitemap, robots, metadata, schema; analytics live.
* Deployed to production with SSL; admin accounts created for Babak + 1 editor.
