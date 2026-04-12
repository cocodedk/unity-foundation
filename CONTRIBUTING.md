# Contributing to Unity Foundation

## Local Setup
1. Install Node.js 20+ and npm.
2. Clone the repository: `git clone https://github.com/cocodedk/unity-foundation`
3. Install dependencies: `npm install`
4. Set up environment variables (copy `.env.example` to `.env.local` and fill in values).
5. Run database migrations: `npm run prisma:migrate`

## Install Git Hooks
```sh
./scripts/install-hooks.sh
```

## Local Git Setup
Run these once after cloning:
```bash
git config pull.rebase true
git config core.autocrlf input
git config push.autoSetupRemote true
git config init.defaultBranch main
```

## Build and Test Commands
```bash
npm run dev           # Start development server
npm run build         # Production build
npm run lint          # Run ESLint
npm run test:e2e      # Run Playwright E2E tests
```

## Coding Style
- TypeScript strict mode throughout.
- Tailwind CSS for styling — no inline styles.
- Keep files small and focused (200-line maximum).
- Use Conventional Commits for all commit messages.

## Branch Naming
| Prefix | Use for |
|--------|---------|
| `feature/` | New features |
| `fix/` | Bug fixes |
| `chore/` | Maintenance |
| `docs/` | Documentation |
| `ci/` | CI changes |

## PR Checklist
- [ ] Lint passes (`npm run lint`).
- [ ] Build passes (`npm run build`).
- [ ] Manual test completed for changed functionality.
- [ ] Translations updated if new UI strings added.
- [ ] Commit messages follow Conventional Commits.
