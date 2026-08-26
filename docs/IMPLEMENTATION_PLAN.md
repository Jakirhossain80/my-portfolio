# Implementation plan

## Phase status

| Phase | Scope | Status | Completion evidence |
| --- | --- | --- | --- |
| 1. Requirements finalization | Authoritative scope, routes, sections, quality requirements, and acceptance criteria. | **Complete** | `docs/REQUIREMENTS.md` reviewed on 2026-08-27. |
| 2. Content inventory preparation | Authoritative personal, skills, CareerBridge, asset, draft, and pending-decision inventory structured for later typed-data conversion. | **Complete** | `docs/CONTENT.md` reviewed on 2026-08-27; no TypeScript data or UI was created. |
| 3. Dependency, baseline, and route foundation | Confirm compatible installed dependencies; establish `/`, `/projects`, `/projects/[slug]`, `/projects/careerbridge`, and the disabled `/api/contact` foundation; run `pnpm lint`, `pnpm typecheck`, and `pnpm build`. | **Complete** | Next.js 16.3.3 generated `/projects/careerbridge` through `[slug]`; lint, type-check, build, valid-route, invalid-slug, and disabled-contact smoke checks passed on 2026-08-27. |
| 4. Design-system implementation | Implement approved tokens, themes, shared UI foundations, and documented interaction behavior. | **Not started** | Begins only after Phase 3 passes and relevant content decisions are approved. |
| 5. Homepage implementation | Build the ten approved homepage sections with approved content and assets. | **Not started** | — |
| 6. Projects and CareerBridge case study | Replace the route-foundation UI with approved project listing and complete CareerBridge case-study content and assets. | **Not started** | Typed routes and verified-data foundation exist; final content, screenshots, and presentation remain pending. |
| 7. Contact integration | Implement provider-neutral UI and approved delivery configuration. | **Blocked by decisions** | Recipient, provider, fields, spam protection, and privacy requirements are pending. |
| 8. Accessibility, responsive refinement, and SEO | Verify accessibility, supported widths, metadata, sitemap, robots, and error states. | **Not started** | — |
| 9. Testing, documentation, and deployment | Final validation, maintenance documentation, and separately authorized Vercel deployment. | **Not started** | Deployment requires explicit authorization. |

## Current boundary

Phase 3 is complete as a route-foundation milestone. Do not treat the temporary route UI as final design, or draft copy, missing assets, contact configuration, deployment, or source-backed-but-untested CareerBridge functionality as complete.
