<!-- 380115af-f0a6-45cf-9758-9434b610e705 72da867c-b46f-4478-9330-65fc21bab26c -->
# Homepage Teaser Redesign Plan

## Overview

Create a new `HomeTeasers` component with shorter, emotive content for the homepage, while keeping the detailed `ProgramCards` component exclusively for the `/programs` page.

## Implementation Steps

### 1. Add Translation Keys for Homepage Teasers

Add new `homeTeasers` section to all three language files with:

- Section title: "How your kindness helps" / "مهربانی شما چگونه اثر می‌گذارد" / "Sådan gør din støtte en forskel"
- Three teaser cards (Food, Health, Education) with short, emotive blurbs

**Files to update:**

- `messages/en/common.json`
- `messages/da/common.json`
- `messages/fa/common.json`

### 2. Create HomeTeasers Component

**File:** `components/HomeTeasers.tsx`

Create a new component that:

- Uses `getTranslations()` for server-side i18n (consistent with other components)
- Displays 3 teaser cards instead of 5 detailed cards
- Uses simpler icons: Heart, Stethoscope, GraduationCap
- Links all cards to `/programs` page
- Uses grid layout: 1 col mobile, 2 cols tablet, 3 cols desktop
- Applies existing design system (Card, CardContent, Container components)
- Uses brand colors (bg-fluff section, bg-seedwhite cards, text-growth headings)

### 3. Update Homepage

**File:** `app/[locale]/page.tsx`

Replace `ProgramCards` import and usage with `HomeTeasers`:

- Keep Hero section unchanged
- Replace `<ProgramCards />` with `<HomeTeasers />`
- Keep UpdatesPreview and Philosophy sections unchanged

### 4. Verify Programs Page

**File:** `app/[locale]/programs/page.tsx`

Confirm that the full detailed ProgramCards functionality remains intact on the `/programs` page with all 5 programs.

## Key Design Decisions

- **3 teasers vs 5 programs**: Homepage shows condensed overview (Food, Health, Education)
- **Different i18n namespace**: `homeTeasers.*` for homepage vs `programs.*` for full page
- **Consistent styling**: Maintain existing brand colors and card design patterns
- **All teasers link to /programs**: Encourages users to explore full details

## Files Modified

- `messages/en/common.json`
- `messages/da/common.json`
- `messages/fa/common.json`
- `components/HomeTeasers.tsx` (new)
- `app/[locale]/page.tsx`

## Files Unchanged

- `components/Hero.tsx`
- `components/ProgramCards.tsx` (still used on /programs page)
- `app/[locale]/programs/page.tsx`

### To-dos

- [ ] Add homeTeasers translation keys to English common.json
- [ ] Add homeTeasers translation keys to Danish common.json
- [ ] Add homeTeasers translation keys to Persian common.json
- [ ] Create HomeTeasers.tsx component with 3 teaser cards
- [ ] Replace ProgramCards with HomeTeasers on homepage
- [ ] Verify Programs page still displays full detailed content