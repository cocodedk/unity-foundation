# Phase 5: Accessibility & Refinement - Detailed Tasks

## Task 5.1: Contrast Audit

**Using**: WCAG 2.1 AA Standard (4.5:1 for text, 3:1 for large text)

**Colors to verify**:
- [ ] Deep Slate `#33373A` on Creamy Off-White `#F8F7F3` ✅ High contrast
- [ ] Soft Warm Teal `#4FA8A8` on Creamy Off-White ✅ High contrast
- [ ] Text on Warm Sand `#D4C8B5` background
- [ ] White text on Deep Slate footer ✅ High contrast
- [ ] All link colors against backgrounds

**Tools**: WAVE, Axe DevTools, or Color Contrast Analyzer

---

## Task 5.2: Keyboard Navigation

**Actions**:
- [ ] Test Tab order on all pages
- [ ] Verify focus outlines visible (Tailwind: `focus-visible:ring-2`)
- [ ] Test all links, buttons, forms keyboard-accessible
- [ ] Verify focus trap in modals (if any)
- [ ] Test RTL/LTR keyboard behavior (fa locale)

---

## Task 5.3: Alt Text & Semantic HTML

**Audit**:
- [ ] All images have descriptive alt text
- [ ] Use `<button>` for buttons, not `<div>` with click handlers
- [ ] Use semantic HTML5: `<header>`, `<section>`, `<article>`, `<footer>`
- [ ] All form inputs have `<label>` tags
- [ ] Headings follow logical hierarchy (H1 → H2 → H3, no skips)

---

## Task 5.4: Mobile Responsive Testing

**Devices/Breakpoints**:
- [ ] iPhone 12 (390px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)

**Checks**:
- [ ] Text readable without horizontal scroll
- [ ] Images scale properly
- [ ] Touch targets ≥ 44px (Apple standard)
- [ ] Spacing/padding appropriate per screen size
- [ ] Donation banner responsive on mobile
- [ ] Mobile menu accessible

---

## Task 5.5: Performance Optimization

**Image Optimization**:
- [ ] Hero images compressed (WebP format if possible)
- [ ] Gallery images lazy-loaded
- [ ] Responsive srcsets for images
- [ ] Cloudinary optimization settings verified

**Build Performance**:
- [ ] Next.js build completes without warnings
- [ ] No unused CSS classes
- [ ] Font loads efficiently (Google Fonts async)

---

## Task 5.6: Cross-Browser Testing

**Browsers**:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Checks**:
- [ ] Layout consistent
- [ ] Typography renders correctly
- [ ] Colors match (especially Warm Sand on older browsers)
- [ ] No console errors

---

## Task 5.7: Localization Testing

**Locales**: EN, DA, FA

**Actions**:
- [ ] All copy displays correctly
- [ ] RTL (Persian) layout correct
- [ ] Font stack includes Vazirmatn for Persian
- [ ] Navigation links route to correct locales
- [ ] Language switcher functional all pages

---

## Task 5.8: Visual Regression Testing

**Actions**:
- [ ] Compare each page vs design spec
- [ ] Section backgrounds alternate correctly
- [ ] Button/card styles consistent
- [ ] Spacing/padding uniform
- [ ] Icons aligned properly
- [ ] Hero overlay visible on images

---

## Acceptance Criteria

✓ WCAG 2.1 AA compliant (all text ≥ 4.5:1 contrast)
✓ Keyboard navigation fully functional
✓ All alt text descriptive and meaningful
✓ Mobile/tablet/desktop responsive + tested
✓ No linter errors
✓ All 3 locales functional
✓ Build successful, no warnings
✓ Visual consistency across all pages
✓ Design tokens applied consistently
✓ Ready for production deployment
