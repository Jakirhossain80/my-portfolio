# Md. Jakir Hossain — Portfolio

Technical foundation for the professional portfolio of Md. Jakir Hossain, a MERN Stack & Next.js Web Developer based in Dhaka, Bangladesh.

## Current milestone

Phase 1 requirements finalization, Phase 2 content inventory preparation, the Phase 3 route foundation, and the Phase 4 project architecture are complete. The current `/` route remains a temporary foundation page; final page designs, approved case-study content, and contact delivery are not implemented.

The route foundation includes:

- `/` for the scrolling portfolio homepage
- `/projects` for the project collection
- `/projects/[slug]` for typed, statically generated case studies
- `/projects/careerbridge` through the dynamic project route
- `/api/contact` as a disabled provider-neutral endpoint until contact requirements are approved

## Source architecture

- `src/app`: route composition, metadata, route handlers, and framework files
- `src/components/common`: shared application-level accessibility components
- `src/components/projects`: project-listing and case-study presentation
- `src/data`: authoritative typed portfolio records
- `src/lib`: shared application configuration
- `src/types`: shared TypeScript contracts
- `src/utils`: small pure lookup helpers

Folders are added only when they have a real responsibility. The sitemap remains deferred until the production domain is confirmed; no environment variables are currently required.

## Stack and prerequisites

Next.js App Router, React, strict TypeScript, Tailwind CSS, ESLint, Geist fonts, and pnpm. Use a current Node.js LTS release and the repository-declared pnpm version.

```bash
corepack enable
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Planning documents

- [Requirements](docs/REQUIREMENTS.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Content inventory](docs/CONTENT.md)
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
