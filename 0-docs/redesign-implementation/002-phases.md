
# Redesign Implementation - Phased Approach

## Phase 1: Foundation (Design Tokens & Config)
**Duration**: 1-2 days | **Owner**: Designer + Dev Lead
- [ ] Update `tailwind.config.ts` with new color palette
- [ ] Add typography config (font family, scale)
- [ ] Update `globals.css` CSS variables
- [ ] Document design tokens in `0-docs/design-system/colors.md`
- [ ] Add spacing/border-radius tokens
- [ ] Create Tailwind utility setup

**Blockers for Phase 2**: None—Phase 2 can start in parallel

---

## Phase 2: Components (Refactor Existing)
**Duration**: 2-3 days | **Depends on**: Phase 1
- [ ] Update `Button.tsx` → Soft Warm Teal, Coral hover
- [ ] Update `Card.tsx` → 8px rounded, new background
- [ ] Update `Header.tsx` → new colors, spacing
- [ ] Update `Footer.tsx` → Deep Slate background
- [ ] Update `Hero.tsx` → overlay, new layout
- [ ] Refactor `LangSwitcher`, `DonationBanner`, `ProgramCards`

---

## Phase 3: Pages (Layout & Structure)
**Duration**: 3-4 days | **Depends on**: Phase 2
- [ ] Homepage: hero + section alternation + CTAs
- [ ] About page: rounded cards, team imagery
- [ ] Programs/Services: 3-card layout, icon styling
- [ ] Contact page: form styling, footer consistency
- [ ] Internal pages: consistent design system application

---

## Phase 4: Content & Imagery
**Duration**: 2-3 days | **Parallel with Phase 3**
- [ ] Rewrite headlines (benefit-focused)
- [ ] Update body copy (conversational tone)
- [ ] Replace/optimize hero images
- [ ] Add/update real-people imagery
- [ ] Revise CTA copy ("Get Started Now" vs. "Submit")

---

## Phase 5: Accessibility & Refinement
**Duration**: 2-3 days | **Depends on**: Phase 3 + 4
- [ ] WCAG 2.1 AA contrast audit
- [ ] Keyboard navigation testing
- [ ] Alt-text verification
- [ ] Mobile/tablet/desktop responsive testing
- [ ] Final visual QA
- [ ] Generate design system documentation

---

## Timeline Summary
- **Ideal end-to-end**: 6–8 weeks
- **Parallel opportunities**: Phase 4 overlaps Phase 3
- **Critical path**: Phase 1 → Phase 2 → Phase 3 → Phase 5
