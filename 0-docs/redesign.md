

# Website Redesign Specification for Unity Foundation

## 0. Intro

This document defines exactly what must be changed across colours, typography, layout, UI components, content tone, pages, accessibility and assets for the redesign of the Unity Foundation website. Use it as a checklist.

---

## 1. Colour & Typography

### 1.1 Colour palette

| Element                                  | Change **from**                                 | Change **to**                                         |
| ---------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- |
| Main background                          | Pure white `#FFFFFF`                            | Creamy Off-White `#F8F7F3`                            |
| Primary action buttons                   | Existing site colour (e.g., default blue/green) | Soft Warm Teal `#4FA8A8`                              |
| Secondary / alternate section background | Light grey or white                             | Warm Sand `#D4C8B5`                                   |
| Body text colour                         | Light-grey or mid-grey                          | Deep Slate `#33373A`                                  |
| Accent / hover state                     | Possibly same as primary or darker shade        | Coral Accent `#E88C7A`                                |
| Headings font                            | (current heading font unspecified)              | Friendly sans-serif (e.g., “Poppins” or “Inter”) bold |
| Body font                                | (current body font unspecified)                 | Same font family as headings (regular weight)         |

### 1.2 Typography scale

| Element        | Change **from**       | Change **to**                                               |
| -------------- | --------------------- | ----------------------------------------------------------- |
| H1             | whatever current size | Defined size (e.g., 48px on desktop)                        |
| H2             | unspecified           | Defined size (e.g., 34px)                                   |
| Body text size | unspecified           | e.g., 16px with line-height ~1.5                            |
| Link text size | unspecified           | Same size as body or slightly larger; colour Soft Warm Teal |
| Font weights   | unspecified           | Headings: Bold; Body: Regular                               |

---

## 2. Layout & UI Elements

| UI Element                       | Change **from**                                 | Change **to**                                                                                   |
| -------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Cards / content block containers | Sharp corners or square edges                   | Rounded corners (8px radius)                                                                    |
| Section padding/spacing          | Tighter spacing, less whitespace                | Generous whitespace: e.g., top & bottom padding ~80px desktop                                   |
| Hero image overlay               | Full real-people image with no overlay          | Full-width hero image + soft Warm Teal overlay (~20% opacity)                                   |
| Alternate section backgrounds    | Single background colour throughout             | Alternate between Creamy Off-White and Warm Sand backgrounds                                    |
| Footer                           | Light background or same as body                | Background Deep Slate; text in Creamy Off-White                                                 |
| Button hover effect              | Possibly just colour change                     | On hover: background changes to Coral Accent or similar                                         |
| Link styling                     | Default link colour                             | Soft Warm Teal colour for links; on hover underline or subtle background change to Coral Accent |
| Icon style                       | Mixed icon styles                               | Unified icon set: line+fill style, palette colours (Soft Warm Teal & Coral Accent)              |
| Responsive design                | Possibly desktop-centric, less mobile optimized | Fully responsive: mobile, tablet, desktop, tested and optimised                                 |

---

## 3. Content / Micro-copy

| Area                       | Change **from**                       | Change **to**                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tone of voice              | Formal, corporate, “we do this” style | More human, conversational: use “we” + “you”; highlight benefits and mission                                                                                                                                       |
| Headlines                  | Generic (“Our Services”, “About Us”)  | More friendly/benefit-focused: e.g., “What We Do”, “How We Help You”, “Start with Ease”                                                                                                                            |
| Mission / value statements | Abstract statements                   | More tangible language: emphasise easy onboarding, AI policy-aware assistant, closed-circuit deploy, integration with OpenAI/Azure AI, Confluence & Jira, KPI/stat reports, local support, single-tenant isolation |
| CTA button texts           | “Submit”, “Learn More”                | “Get Started Now”, “See It in Action”, “Let’s Get You Set Up”                                                                                                                                                      |
| Body copy                  | Jargon-heavy                          | Plain language, accessible to non-technical stakeholders                                                                                                                                                           |

---

## 4. Accessibility & Performance

| Area                       | Change **from**                              | Change **to**                                                   |
| -------------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| Text contrast              | Some text may have poor contrast             | Ensure all text backgrounds meet WCAG 2.1 AA contrast ratios    |
| Mobile / responsive layout | Possibly desktop-first                       | Mobile-first design, fully responsive across devices            |
| Image and asset size       | Large unoptimised hero images/icons          | Optimised images (compressed, responsive srcsets)               |
| Alt-text and semantic HTML | Some images/icons missing alt or using <div> | All images/icons: descriptive alt text; correct semantic tags   |
| Keyboard navigation        | Possibly missing skip links or tab focus     | Ensure accessibility: tab order, focus outlines, skip links etc |

---

## 5. Design System / Assets

| Asset                                                         | Change **from**               | Change **to**                                                              |
| ------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------- |
| Colour palette documentation                                  | Ad-hoc or missing             | Formalised document: list of colours + HEX codes + usage guidelines        |
| Typography system                                             | Inconsistent / unspecified    | Defined typography: font family, weights, sizes, line-heights              |
| Icon set                                                      | Multiple styles               | Single, unified icon set; consistent design & colours                      |
| Component library (buttons, cards, hero, section backgrounds) | Varied styles                 | Defined reusable components: style guideline, usage pattern                |
| Style guide                                                   | Minimal or not documented     | Style guide PDF or Markdown: colours, fonts, components, spacing, usage    |
| Photography / imagery                                         | Generic stock or inconsistent | Real-people imagery or consistent styled stock; apply overlay where needed |

---

## 6. Pages / Structure

| Page                                   | Change **from**                                        | Change **to**                                                                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage Hero Section                  | Generic banner with text                               | Full-width hero: real-people photo + Warm Teal overlay; headline in Deep Slate; primary CTA button in Soft Warm Teal                                                                   |
| “What We Do” / Services Section        | Possibly grid of service cards with uniform background | Three cards (Children / Disability / Poverty Relief) each with their own icon; alternate background colours (Creamy Off-White / Warm Sand); button link on each card in Soft Warm Teal |
| About Us Page                          | Standard layout                                        | Use layout with rounded cards or blocks; background Creamy Off-White; images with friendly photos of team/community; friendly tone copy                                                |
| Contact Page                           | Basic form layout                                      | Maintain same UI style: Soft Warm Teal buttons; friendly micro-copy (“Let’s talk”, “How can we help you?”); embed map if needed; dark footer style consistent                          |
| Internal pages (Mission, Values, Blog) | Possibly separate look                                 | Use consistent design system: same typography, background alternation, iconography, CTA in accent colour                                                                               |
| Footer                                 | Light colour background                                | Dark footer: Deep Slate background; text Creamy Off-White; links Soft Warm Teal with hover Coral Accent                                                                                |

---

## 7. Implementation & Handoff

| Deliverable                       | Change **from**                 | Change **to**                                                                                                                                                                       |
| --------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Design files                      | Possibly only PSD or some pages | Provide full design files (Figma / Adobe XD) including all pages, variants, responsive breakpoints                                                                                  |
| Implementation (if vendor builds) | Maybe no hand-off or incomplete | Vendor to deliver HTML/CSS/JS prototype or full build; test across browsers/devices                                                                                                 |
| Documentation                     | Maybe minimal or none           | Provide documentation: colour palette, typography, spacing, component library, icon set, responsive behaviour                                                                       |
| Revision rounds                   | Possibly vague                  | Specify number of revision rounds (e.g., 2 rounds included)                                                                                                                         |
| Acceptance criteria               | Possibly informal               | Clear criteria: responsive design approved, accessibility audit passed (WCAG 2.1 AA), assets delivered (source files, minified build if applicable), final sign-off by stakeholders |

---

## 8. Timeline & Milestones

| Milestone                  | Change **from**          | Change **to**                              |
| -------------------------- | ------------------------ | ------------------------------------------ |
| Concept presentation       | Possibly unspecified     | Within 2 weeks of contract award           |
| Design refinement/approval | Possibly open-ended      | Within 1 week after concept feedback       |
| Implementation/hand-off    | Possibly no set timeline | Within 2–4 weeks after approval            |
| Final review & acceptance  | Possibly vague           | Target: total duration ~6 weeks from start |

---

## 9. Quality & Acceptance Criteria

| Criteria                | Change **from**       | Change **to**                                                           |
| ----------------------- | --------------------- | ----------------------------------------------------------------------- |
| Design system delivered | Possibly patchy       | All colours, fonts, components, icon set, spacing guidelines documented |
| Responsive design       | Possibly only desktop | Mobile/tablet/desktop tested and approved                               |
| Accessibility           | Possibly informal     | Confirm WCAG 2.1 AA compliance; keyboard navigation; alt text; contrast |
| Asset hand-over         | Possibly partial      | Source files, build files (if applicable), documentation, ready for dev |
| Stakeholder sign-off    | Possibly informal     | Formal acceptance from project lead, marketing lead, dev lead           |

---

## 10. Summary of “Must-Change” Items

* Change all backgrounds from pure white to Creamy Off-White / Warm Sand as appropriate.
* Replace primary button colours to Soft Warm Teal.
* Use Deep Slate for main text, Coral Accent for hover states and icons.
* Adopt friendly typography (e.g., Poppins/Inter) and set typography scale.
* Apply rounded corners (8px) to cards and containers.
* Alternate section background colours for visual separation.
* Use real-people imagery + overlay in hero section.
* Ensure links/buttons use the Soft Warm Teal colour; hover uses Coral Accent.
* Build or document a unified icon set in the palette.
* Rewrite copy to use “we”/“you”, simpler language, benefit-focused.
* Ensure responsive layout and accessibility compliance.
* Build out design system documentation and ensure hand-off is complete.
* Use timeline: 2 weeks concept → 1 week refinement → 2–4 weeks build → 6 weeks total.
