# Md. Jakir Hossain — Portfolio

Technical foundation for the professional portfolio of Md. Jakir Hossain, a MERN Stack & Next.js Web Developer based in Dhaka, Bangladesh.

## Current milestone

Phase 1 requirements finalization through Phase 5 foundation verification are complete. Development standards, the design-system and UI foundations, global page layout, responsive navigation, homepage Hero, About section, and Skills section are implemented; final production-build verification remains dependent on Google Fonts network access. The `/#about` and `/#skills` navigation targets are active. The required `/#contact` target is reserved but does not yet resolve to a rendered section. Remaining homepage sections, approved case-study content, and contact delivery are not implemented.

The route foundation includes:

- `/` for the scrolling portfolio homepage
- `/projects` for the project collection
- `/projects/[slug]` for typed, statically generated case studies
- `/projects/careerbridge` through the dynamic project route
- `/api/contact` as a disabled provider-neutral endpoint until contact requirements are approved

## Source architecture

- `src/app`: route composition, metadata, route handlers, and framework files
- `src/components/common`: shared application-level accessibility components
- `src/components/layout`: reusable container, section, header, and footer layout components
- `src/components/sections`: scoped homepage sections such as the Hero
- `src/components/providers`: narrowly scoped client providers such as theme preference context
- `src/components/ui`: reusable controls and visual primitives
- `src/components/projects`: project-listing and case-study presentation
- `src/data`: authoritative typed portfolio records
- `src/lib`: shared application configuration
- `src/types`: shared TypeScript contracts
- `src/utils`: small pure lookup helpers

Folders are added only when they have a real responsibility. The sitemap remains deferred until the production domain is confirmed; no environment variables are currently required.

## Stack and prerequisites

Next.js App Router, React, strict TypeScript, Tailwind CSS, ESLint, Geist fonts, and pnpm. The verified foundation uses Next.js 16.3.3, React 19.2.8, TypeScript 6.0.3, Tailwind CSS 4.3.3, ESLint 9.39.5, Node.js 22.23.1, and pnpm 11.5.2. The lockfile is authoritative; do not upgrade these versions without an approved requirement.

```bash
corepack enable
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Validation

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

Development conventions, naming rules, validation expectations, and accessibility-aware implementation guidance are documented in [Development standards](docs/DEVELOPMENT_STANDARDS.md). Editor defaults are shared through `.editorconfig`; ESLint remains the automated code-quality tool, with no separate formatter dependency.

## Planning documents

- [Requirements](docs/REQUIREMENTS.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Content inventory](docs/CONTENT.md)
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
- [Development standards](docs/DEVELOPMENT_STANDARDS.md)
