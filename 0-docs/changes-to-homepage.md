the fix is to **split the shared copy** so the homepage shows a short, emotive *teaser*, while **/our-work** keeps the full program descriptions.

Here’s a clean way to do it with minimal changes.

# What to change

1. **Create a distinct homepage section** (new component) that uses **different i18n keys** and much shorter copy.
2. Keep your current `ProgramCards` for the **Our Work** page only.
3. Swap the homepage section to the new component.

---

# 1) New homepage component (short teaser)

```tsx
// components/HomeTeasers.tsx
import { Heart, GraduationCap, Stethoscope } from "lucide-react";

type Item = { icon: React.ReactNode; title: string; blurb: string; href: string };

export default function HomeTeasers({ t }: { t: (k: string) => string }) {
  const items: Item[] = [
    { icon: <Heart className="h-6 w-6" />, title: t("homeTeasers.food.title"), blurb: t("homeTeasers.food.blurb"), href: "/our-work" },
    { icon: <Stethoscope className="h-6 w-6" />, title: t("homeTeasers.health.title"), blurb: t("homeTeasers.health.blurb"), href: "/our-work" },
    { icon: <GraduationCap className="h-6 w-6" />, title: t("homeTeasers.education.title"), blurb: t("homeTeasers.education.blurb"), href: "/our-work" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold mb-10">{t("homeTeasers.title")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <a key={i} href={it.href} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border p-3">{it.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{it.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

# 2) Use the new component on the homepage

```tsx
// app/[locale]/page.tsx
import HomeTeasers from "@/components/HomeTeasers";
// import ProgramCards from "@/components/ProgramCards"; // ❌ remove from homepage

export default async function Home({ params: { locale } }) {
  const t = await getT(locale); // your i18n loader

  return (
    <>
      <Hero t={t} />
      <HomeTeasers t={t} />  {/* ✅ new short section */}
      <UpdatesPreview t={t} />
      <Philosophy t={t} />
    </>
  );
}
```

---

# 3) Keep `ProgramCards` only on **/our-work**

```tsx
// app/[locale]/our-work/page.tsx
import ProgramCards from "@/components/ProgramCards";

export default async function Programs({ params: { locale } }) {
  const t = await getT(locale);
  return (
    <>
      <Intro t={t} />       {/* your long intro / mission */}
      <ProgramCards t={t} />{/* full, detailed cards */}
      <Closing t={t} />
    </>
  );
}
```

---

# 4) Add separate i18n keys (EN / FA / DA)

### English (`en.json`)

```json
{
  "homeTeasers": {
    "title": "How your kindness helps",
    "food": {
      "title": "Food & Essentials",
      "blurb": "Monthly packages that bring relief and dignity to families in hard times."
    },
    "health": {
      "title": "Health & Dignity",
      "blurb": "Medicine and care for people with disabilities and chronic illness."
    },
    "education": {
      "title": "Children & Learning",
      "blurb": "Books and school materials that open doors for young minds."
    }
  }
}
```

### فارسی (`fa.json`)

```json
{
  "homeTeasers": {
    "title": "مهربانی شما چگونه اثر می‌گذارد",
    "food": {
      "title": "غذا و نیازهای ضروری",
      "blurb": "بسته‌های ماهانه‌ای که در روزهای سخت، آرامش و کرامت می‌آورند."
    },
    "health": {
      "title": "سلامت و کرامت",
      "blurb": "دارو و ملزومات مراقبتی برای افراد دارای معلولیت و بیماران مزمن."
    },
    "education": {
      "title": "کودکان و یادگیری",
      "blurb": "کتاب و لوازم‌التحریر که درهای تازه‌ای به روی کودکان می‌گشاید."
    }
  }
}
```

### Dansk (`da.json`)

```json
{
  "homeTeasers": {
    "title": "Sådan gør din støtte en forskel",
    "food": {
      "title": "Mad & fornødenheder",
      "blurb": "Månedlige pakker der giver ro og værdighed i svære tider."
    },
    "health": {
      "title": "Sundhed & værdighed",
      "blurb": "Medicin og pleje til mennesker med handicap og kronisk sygdom."
    },
    "education": {
      "title": "Børn & læring",
      "blurb": "Bøger og skolemateriel, der åbner døre for unge sind."
    }
  }
}
```

> Your existing `ProgramCards` should keep using the **programs.*** keys you already have (longer text). The homepage will now read from **homeTeasers.*** (shorter, different copy).

---

# 5) Optional polish (makes the two pages feel even more distinct)

* **Homepage**

  * Add a short “From Denmark to Iran” paragraph and a **Donate** CTA under the teasers.
  * Keep a **single** heartfelt quote.
* **Our Work**

  * Start with a 2–3 paragraph narrative and keep the 5 detailed cards.
  * End with a “How we ensure transparency” note + link to Updates.

---
