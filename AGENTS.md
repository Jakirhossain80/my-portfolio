# Repository instructions

## Project identity

This is the professional portfolio of Md. Jakir Hossain, built for freelance clients, recruiters, and remote employers with Next.js, TypeScript, and Tailwind CSS.

## Architecture

- Use the App Router and prefer Server Components.
- Use Client Components only for browser APIs, interactive state, or client-only libraries.
- Keep route files focused on routing and page composition.
- Put reusable UI in `src/components` and typed portfolio content in `src/data`.
- Avoid unnecessary abstractions and dependencies. Do not add Express.js or MongoDB.

## TypeScript

- Keep strict TypeScript enabled and avoid `any`.
- Prefer precise types, or `unknown` with safe narrowing.
- Use ES Module syntax and the `@/*` alias for appropriate internal imports.

## Design and accessibility

- Preserve the approved modern, professional design direction and responsive behavior.
- Use semantic HTML, visible keyboard-focus states, and reduced-motion support.
- Do not depend on hover alone. Use pointer cursors only for interactive elements.

## Content

- Do not fabricate clients, testimonials, experience, or project results.
- Do not present practice work as paid work or unfinished CareerBridge features as complete.
- Preserve names, URLs, dates, and factual claims accurately.

## Security

- Never add real credentials to source files. Keep local secrets in `.env.local`.
- Keep only documented example variable names in `.env.example`.
- Never expose server-only variables to browser code or log sensitive information.

## Verification

After relevant changes, run:

```text
pnpm lint
pnpm typecheck
pnpm build
```

## Git

- Do not commit, push, deploy, or create remote resources unless explicitly requested.
- Do not modify unrelated user files. Review the working-tree diff before reporting completion.
