# Development standards

This document records the repository's day-to-day development conventions. `AGENTS.md` remains the authoritative working policy; this guide provides a shorter, beginner-friendly reference for implementation and review.

## Toolchain

- Use the versions resolved by `pnpm-lock.yaml`; do not upgrade dependencies as part of unrelated work.
- Use pnpm exclusively. Do not create npm or Yarn lockfiles.
- Use the scripts in `package.json` instead of ad hoc alternatives.
- ESLint is the automated code-quality and Next.js ruleset. The repository does not add a separate formatter at this stage.
- `.editorconfig` provides dependency-free editor defaults: UTF-8, LF line endings, a final newline, two-space indentation, and trailing-whitespace cleanup.

## Required workflow

Before editing:

1. Read the root `AGENTS.md` and any closer instruction file.
2. Inspect the files in scope and check for existing user changes.
3. Confirm the relevant requirement, content, design, and architecture decisions.

After source or configuration changes, run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Run the smallest relevant check first when diagnosing an issue. Never report a check as passing unless it completed successfully. Review the final diff and keep unrelated changes out of the task.

## TypeScript

- Keep `strict: true` and `noEmit: true` in `tsconfig.json`.
- Do not use `any`. Use a precise type, or `unknown` followed by safe narrowing for uncertain input.
- Prefer inferred types when the value makes the type obvious; annotate public boundaries and non-obvious values.
- Use `import type` for type-only imports.
- Avoid non-null assertions, unsafe assertions, and TypeScript suppression comments. Fix the underlying type or establish the invariant explicitly.
- Keep a prop type beside its component when it is local. Put genuinely shared contracts in `src/types`.
- Use `as const` and `satisfies` when they preserve literal information while checking a data shape.

## Next.js and React

- Use the App Router and Server Components by default.
- Add `"use client"` only at the smallest boundary that requires state, event handlers, browser APIs, or a client-only library.
- Keep route files focused on metadata, route parameters, data lookup, and composition.
- Use `next/link`, `next/image`, `next/font`, and the metadata APIs for their intended responsibilities.
- Do not duplicate portfolio content in components. Keep reusable typed content in `src/data`.
- Derive values instead of storing duplicate state, and keep interaction state local unless an approved requirement proves otherwise.

## Files, names, and imports

- Use kebab-case filenames, such as `project-card.tsx`.
- Use PascalCase for React components and their prop types.
- Use camelCase for functions, variables, and object properties.
- Use descriptive plural names for collections and data modules.
- Use the `@/*` alias for imports that cross source directories. Use relative imports only for tightly colocated files, such as `./globals.css`.
- Order imports as: framework or external modules, blank line, internal `@/*` modules, blank line, relative side-effect or style imports.
- Create a folder or abstraction only when it has a real responsibility; do not add placeholder files.

## Components and accessibility

- Prefer semantic HTML and native controls before ARIA.
- Keep one clear primary heading per page and preserve a logical heading order.
- Maintain the skip link, visible focus indicators, keyboard access, sufficient contrast, and reduced-motion support.
- Use links for navigation and buttons for actions. Do not make a `div` imitate a control.
- Give informative images concise alternative text and decorative images empty alternative text.
- Do not rely on color, hover, or motion alone to communicate meaning.
- Keep interactive targets approximately 44 by 44 pixels where practical and verify that layouts do not overflow at supported widths.

## Content, security, and environment variables

- Publish only approved or source-verified claims. Keep draft, pending, and in-development work clearly identified.
- Never commit credentials, tokens, or private data. Local secrets belong in `.env.local`.
- Add only safe variable names and explanatory comments to `.env.example`, and document every required variable in `README.md`.
- Never expose a server credential with a `NEXT_PUBLIC_` prefix.
- Validate untrusted input on the server and avoid raw HTML rendering unless it has a reviewed requirement.

## ESLint and formatting decisions

The flat ESLint configuration extends Next.js Core Web Vitals and Next.js TypeScript rules. Keep rule exceptions narrow, local, and explained; do not disable a rule globally to hide a defect.

Formatting follows the existing source style: double quotes, semicolons, trailing commas where valid, two-space indentation, and readable multiline JSX. These conventions are documented rather than enforced with an additional package. If automatic formatting becomes necessary later, approve one formatter for the repository and introduce it as a separate, lockfile-reviewed change.

