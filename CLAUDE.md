# CLAUDE.md — Unity Foundation

## Project Overview

Unity Foundation is a modern, multilingual NGO website built with Next.js 14 (App Router) supporting English, Danish, and Persian (RTL). It supports children, people with disabilities, and people experiencing poverty in Denmark. Features include a CMS admin panel, MobilePay donation integration, Cloudinary image hosting, and NextAuth authentication.

- **Language / Runtime**: TypeScript, Node.js 20
- **Framework**: Next.js 14 (App Router)
- **Architecture**: App Router with server components, Prisma ORM, PostgreSQL
- **Package / Namespace**: `unity-foundation`

---

## Required Skills — ALWAYS Invoke These

These skills **must** be invoked when the relevant situation arises. Never skip them.

| Situation | Skill |
|-----------|-------|
| Before any new feature or screen | `superpowers:brainstorming` |
| Planning multi-step changes | `superpowers:writing-plans` |
| Writing or fixing core logic | `superpowers:test-driven-development` |
| First sign of a bug or failure | `superpowers:systematic-debugging` |
| Before completing a feature branch | `superpowers:requesting-code-review` |
| Before claiming any task done | `superpowers:verification-before-completion` |
| Working on UI / frontend | `frontend-design:frontend-design` |
| After implementing — reviewing quality | `simplify` |

---

## Architecture

```
unity-foundation/
├── app/             # Next.js App Router pages and layouts
│   ├── [locale]/    # Localised routes (en, da, fa)
│   └── api/         # API routes
├── components/      # Shared React components
├── lib/             # Utilities and shared logic
├── messages/        # i18n translation files
├── prisma/          # Database schema and migrations
├── public/          # Static assets
├── e2e/             # Playwright E2E tests
└── .github/         # CI/CD workflows
```

### Layer Rules
- Server components fetch data directly; client components use hooks
- Never import server-only code in client components
- All user-facing strings go through next-intl translations
- Prisma is the only database access layer

---

## Coding Conventions

- TypeScript strict mode throughout
- Tailwind CSS for all styling — no inline styles
- All text via next-intl — no hardcoded user-facing strings
- RTL support for Persian via `dir="rtl"` on html element
- 200-line maximum per file

---

## Engineering Principles

### File Size
- **200-line maximum per file** — extract a component or utility when approaching the limit

### DRY / SOLID / KISS / YAGNI
- Extract shared logic into named utilities; never copy-paste
- Single Responsibility: one component/function does one thing
- Don't add features not yet needed
- Delete dead code immediately

### TDD
- Write the failing test first, make it pass, then refactor
- Test names describe behaviour: `"should display donation banner"`
- One assertion per test — keep tests focused and readable

### Commit hygiene
- Follow Conventional Commits: `feat: ...` / `fix: ...` / `chore: ...`
- The `commit-msg` hook enforces this automatically

---

## Build Commands

```bash
npm run dev           # Start development server
npm run build         # Production build
npm run lint          # Run ESLint
npm run test:e2e      # Run Playwright E2E tests
npm run prisma:migrate # Run database migrations
npm run prisma:generate # Generate Prisma client
```

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — project conventions and session startup |
| `version.txt` | Semantic version (MAJOR.MINOR.PATCH) |
| `.github/workflows/` | CI, release, and Pages automation |
| `.githooks/` | Pre-commit and commit-msg hooks |
| `scripts/install-hooks.sh` | One-time hook installer |
| `prisma/schema.prisma` | Database schema |
| `messages/` | i18n translation files |

---

## Starting a New Session

1. Read this file
2. Run `npm run lint && npm run build` to confirm everything passes
3. Invoke `superpowers:brainstorming` before touching any feature
4. Follow the Required Skills table — every skill is mandatory, not optional
