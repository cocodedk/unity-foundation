# Unity Foundation Website — Product Requirements Document (PRD)

**Version:** 1.1
**Date:** 2025-10-24
**Owner:** Unity Foundation (Founder: *Mandana Zaboli*)
**Administrator:** cocode.dk / *Babak Bandpey*

---

## 1) Purpose & Vision

Create an inspiring, attractive, and expressive multilingual website for **Unity Foundation**, a non‑governmental, non‑political, grassroots charity supporting **children, people with disabilities, and people experiencing poverty**. The site must clearly communicate mission, impact, and transparency; make donating simple (via **MobilePay Boxes**); and provide a **lightweight admin panel** to post updates with images (Cloudinary).

---

## 2) Layout & Visual Design Description

### Overall Style

* Clean, modern, warm aesthetic with soft color palette (white, beige, gentle blues, subtle gold accent).
* Rounded corners, generous whitespace, large typography (emphasis on readability and calm tone).
* Smooth transitions and scroll animations for a welcoming experience.

### Page Structure

**Header:**

* Unity Foundation logo (top left).
* Main navigation (Home, About, Programs, Updates, Donate, Contact) + language switcher.
* Sticky behavior on scroll.

**Hero Section:**

* Full-width background image or video showing children, volunteers, or community moments.
* Overlay text with mission statement and a **“Donate Now”** button.
* Current **MobilePay Box number** displayed prominently (auto-updated from admin panel).

**Main Content:**

* Alternating light/dark sections with soft dividers.
* Each key area (Children, Disability, Poverty Relief) represented as a large card with icon + short blurb.
* Recent updates or blog posts displayed in a 3-column grid with date, image, and “Read more” link.

**Donate Section:**

* Clear MobilePay Box number, copy-to-clipboard, and QR image (both managed from admin panel).
* Short text on how donations are used.
* Transparent messaging (non-political, NGO, grassroots).

**Footer:**

* Logo, short mission summary, Telegram and social links, contact info, language selector.
* Link list: About, Programs, Updates, Donate, Contact.

**Responsive Layout:**

* Fully responsive: stacked layout on mobile, 2-column on tablet, full grid on desktop.
* Mobile-friendly buttons and navigation (hamburger menu).

### Admin Panel Layout

* Clean dashboard using a 2-column layout:

  * **Sidebar:** Navigation (Posts, Announcements, Media, Settings, Users).
  * **Main Area:** Data tables or forms.
* Form fields styled with clear labels and validation messages.
* Cloudinary image upload integrated directly into media and post editors.
* Announcement section includes:

  * MobilePay Box number input
  * Upload field for QR image
  * Short banner text (multi-language)
  * Enable/disable toggle

---

## 3) MobilePay Box Number Handling

* The **MobilePay Box number changes monthly** and must be easily editable via the admin panel.
* Each update replaces the number and QR image globally across the site.
* Previous numbers stored internally (not displayed) for recordkeeping.
* Donation banner auto-refreshes when new data is saved.

---

## 4) Core Features (Summary)

1. **Multilingual site (EN, DA, FA)** — full content parity, RTL for FA.
2. **Admin Panel:** Add/edit posts, announcements, and images.
3. **Dynamic MobilePay Box updates.**
4. **Blog/Updates:** With Cloudinary images, localized titles.
5. **Non-political and NGO messaging emphasis.**
6. **Responsive design + accessibility compliance.**
7. **Telegram integration (link and optional widget).**

---

## 5) Visual Component Overview

| Component           | Description                                             |
| ------------------- | ------------------------------------------------------- |
| Header              | Sticky top bar with logo, nav, language switcher        |
| Hero                | Background media + overlay text and CTA + MobilePay Box |
| Section Cards       | Visual summaries for key programs                       |
| Update Card         | Thumbnail, title, date, tag, excerpt                    |
| Donation Banner     | Persistent announcement at top or bottom of page        |
| Footer              | Mission statement, Telegram, links, contact info        |
| Admin Dashboard     | Sidebar + content area for management                   |
| Post Editor         | Rich text + Cloudinary image upload                     |
| Announcement Editor | Editable MobilePay Box and banner fields                |

---

## 6) UX Notes

* **Call-to-action (CTA):** Every page includes a Donate button.
* **Trust signals:** NGO statement and founder/administrator credit in footer and About.
* **Accessibility:** Alt text required for images; focus outlines visible.
* **Performance:** Optimized images via Cloudinary; lazy loading.

---

## 7) Deployment Overview

* **Framework:** Next.js (App Router) + React + TailwindCSS.
* **Hosting:** Vercel.
* **Database:** PostgreSQL with Prisma ORM.
* **Image Storage:** Cloudinary.
* **Admin Auth:** NextAuth.js.
* **Analytics:** Plausible (privacy-friendly).

---

This layout description complements the previous PRD structure, giving designers and developers a shared visual and functional reference for implementation.
