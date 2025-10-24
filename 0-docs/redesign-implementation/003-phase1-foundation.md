
# Phase 1: Foundation - Detailed Tasks

## Task 1.1: Update Tailwind Config

**File**: `tailwind.config.ts`

**Changes**:
```
colors:
  primary:
    DEFAULT: #4FA8A8 (Soft Warm Teal)
    hover: #E88C7A (Coral Accent)

  text:
    primary: #33373A (Deep Slate)
    light: #F8F7F3 (Creamy Off-White)

  background:
    light: #F8F7F3 (Creamy Off-White)
    sand: #D4C8B5 (Warm Sand)

  borders:
    DEFAULT: 8px (radius)
```

---

## Task 1.2: Update Globals CSS

**File**: `app/globals.css`

**Changes**:
- Update `:root` CSS variables:
  - `--bg`: `#F8F7F3` (Creamy Off-White)
  - `--fg`: `#33373A` (Deep Slate)
  - `--primary`: `#4FA8A8`
  - `--accent`: `#E88C7A`
- Add typography variables (font-family, sizes)
- Define spacing scale

---

## Task 1.3: Typography Setup

**Actions**:
- [ ] Add font import (Poppins or Inter) to `globals.css`
- [ ] Define font sizes: H1 (48px), H2 (34px), Body (16px)
- [ ] Set line-heights (1.5 for body, 1.2 for headings)
- [ ] Add font-weight utilities (regular, bold)
- [ ] Test on all locales (en, da, fa)

---

## Task 1.4: Documentation

**Create**: `0-docs/design-system/colors.md`
- List all colors with HEX codes + usage
- Add typography scale table
- Document spacing tokens (8px grid)

---

## Acceptance Criteria
✓ Tailwind config compiles without errors
✓ All new colors accessible via `bg-primary-`, `text-primary-`, etc.
✓ Typography scale working in components
✓ No linter errors
✓ Design tokens documented
