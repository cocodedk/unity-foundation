# Tailwind setup

**tailwind.config.js**

```js
// tailwind.config.js
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyhope:  "#5EC4E4", // primary
        seedwhite:"#F8F9F9", // surfaces
        fluff:    "#E3E7E9", // subtle lines/shadows
        stem:     "#BBA37A", // warm accent
        growth:   "#3A6E6E", // headings / primary actions
        wind:     "#8E6E4B", // body text
        coral:    "#E88C7A", // CTA / hover
      },
      boxShadow: {
        card: "0 8px 24px rgba(227,231,233,.55)",
      },
      borderRadius: {
        soft: "8px",
        pill: "999px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(94,196,228,.80) 0%, rgba(248,249,249,.95) 100%)",
      },
    },
  },
  plugins: [],
}
```

**Design tokens as utilities**

```css
/* src/theme.css (optional) */
@layer utilities {
  .btn-primary { @apply bg-growth text-white rounded-pill px-5 py-3 font-medium hover:bg-coral transition; }
  .btn-outline { @apply border-2 border-growth text-growth rounded-pill px-5 py-3 hover:bg-growth hover:text-white; }
  .card       { @apply bg-seedwhite shadow-card rounded-soft; }
  .lead       { @apply text-wind/90; }
  .h-title    { @apply text-growth font-semibold; }
}
```

**Example hero (Tailwind)**

```html
<section class="relative overflow-hidden">
  <img src="/img/hero-dandelion.jpg" alt="" class="absolute inset-0 h-full w-full object-cover">
  <div class="absolute inset-0 bg-hero-gradient"></div>

  <div class="relative mx-auto max-w-6xl px-6 py-28 text-center">
    <h1 class="h-title text-4xl md:text-6xl">Unity Foundation</h1>
    <p class="lead mt-4 max-w-2xl mx-auto">
      Helping people in need with dignity, opportunity, and hope.
    </p>
    <div class="mt-8 flex items-center justify-center gap-4">
      <a class="btn-primary" href="#donate">Donate</a>
      <a class="btn-outline" href="#get-involved">Get involved</a>
    </div>
  </div>
</section>
```

---

# Plain CSS variables (no Tailwind)

**theme.css**

```css
:root{
  --skyhope:#5EC4E4;
  --seedwhite:#F8F9F9;
  --fluff:#E3E7E9;
  --stem:#BBA37A;
  --growth:#3A6E6E;
  --wind:#8E6E4B;
  --coral:#E88C7A;

  --radius-soft:8px;
  --shadow-card:0 8px 24px rgba(227,231,233,.55);
  --hero-gradient:linear-gradient(180deg, rgba(94,196,228,.80) 0%, rgba(248,249,249,.95) 100%);
}

body{ background:var(--seedwhite); color:var(--wind); }
h1,h2,h3{ color:var(--growth); }
a{ color:var(--growth); }
a:hover{ color:var(--coral); }

.btn{ padding:.9rem 1.6rem; border-radius:999px; font-weight:600; transition:.2s; }
.btn--primary{ background:var(--growth); color:#fff; }
.btn--primary:hover{ background:var(--coral); }
.btn--outline{ background:transparent; border:2px solid var(--growth); color:var(--growth); }
.btn--outline:hover{ background:var(--growth); color:#fff; }

.card{
  background:var(--seedwhite);
  border-radius:var(--radius-soft);
  box-shadow:var(--shadow-card);
  border:1px solid var(--fluff);
}

.hero{
  position:relative; overflow:hidden;
  color:var(--growth);
}
.hero::after{
  content:""; position:absolute; inset:0; background:var(--hero-gradient);
}
.hero__content{ position:relative; padding:7rem 1.5rem; text-align:center; }
```

**Example hero (plain HTML/CSS)**

```html
<section class="hero">
  <img src="hero-dandelion.jpg" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
  <div class="hero__content">
    <h1>Unity Foundation</h1>
    <p>Helping people in need with dignity, opportunity, and hope.</p>
    <div style="margin-top:1.5rem;">
      <a class="btn btn--primary" href="#donate">Donate</a>
      <a class="btn btn--outline" href="#get-involved" style="margin-left:.75rem;">Get involved</a>
    </div>
  </div>
</section>
```

---

## Quick accessibility notes

* **Growth Green (#3A6E6E)** on **Seed White** passes WCAG AA for body text and headings.
* **White on Growth Green** and **White on Coral** pass for buttons.
* Keep body text ≥16px and line-height ≈1.55 for readability.
