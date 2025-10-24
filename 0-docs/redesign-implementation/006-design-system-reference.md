
# Design System Reference

## Colour Palette

| Name              | HEX       | Usage                               |
| ----------------- | --------- | ----------------------------------- |
| Creamy Off-White  | `#F8F7F3` | Main background, section alternator |
| Warm Sand         | `#D4C8B5` | Alternate section background        |
| Soft Warm Teal    | `#4FA8A8` | Primary buttons, links, CTA         |
| Coral Accent      | `#E88C7A` | Hover states, secondary accents     |
| Deep Slate        | `#33373A` | Body text, footer background        |

---

## Typography Scale

| Element  | Size  | Weight | Line Height |
| -------- | ----- | ------ | ----------- |
| H1       | 48px  | Bold   | 1.2         |
| H2       | 34px  | Bold   | 1.2         |
| H3       | 24px  | Bold   | 1.3         |
| Body     | 16px  | 400    | 1.5         |
| Small    | 14px  | 400    | 1.4         |
| Link     | 16px  | 400    | 1.5         |

**Font Family**: Poppins or Inter (sans-serif)

---

## Spacing & Radius

| Property          | Value |
| ----------------- | ----- |
| Border radius     | 8px   |
| Section padding   | 80px  |
| Component padding | 24px  |
| Gutter spacing    | 16px  |

---

## Component States

**Button**
- Default: Soft Warm Teal bg, Deep Slate text
- Hover: Coral Accent bg

**Link**
- Default: Soft Warm Teal text
- Hover: Coral Accent text + underline

**Input**
- Border: `#D4C8B5` (Warm Sand)
- Focus: Soft Warm Teal border + shadow
- Text: Deep Slate

---

## Usage Examples

**Primary Button**
```
bg-primary text-white hover:bg-accent rounded-lg px-6 py-3
```

**Card Container**
```
bg-background-light rounded-lg p-8
```

**Section Background Alternation**
```
Section 1: bg-background-light
Section 2: bg-background-sand
Section 3: bg-background-light
...
```

---

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px–1024px
- **Desktop**: > 1024px

Mobile-first: design for mobile, enhance for tablet/desktop.
