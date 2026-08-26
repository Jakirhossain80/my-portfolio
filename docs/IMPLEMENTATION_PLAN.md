# Implementation plan

## Phase status

| Phase | Scope | Status | Completion evidence |
| --- | --- | --- | --- |
| 1. Requirements finalization | Authoritative scope, routes, sections, quality requirements, and acceptance criteria. | **Complete** | `docs/REQUIREMENTS.md` reviewed on 2026-08-27. |
| 2. Content inventory preparation | Authoritative personal, skills, CareerBridge, asset, draft, and pending-decision inventory structured for later typed-data conversion. | **Complete** | `docs/CONTENT.md` reviewed on 2026-08-27; no TypeScript data or UI was created. |
| 3. Dependency, baseline, and route foundation | Confirm compatible installed dependencies; establish `/`, `/projects`, `/projects/[slug]`, `/projects/careerbridge`, and the disabled `/api/contact` foundation; run `pnpm lint`, `pnpm typecheck`, and `pnpm build`. | **Complete** | Next.js 16.3.3 generated `/projects/careerbridge` through `[slug]`; lint, type-check, build, valid-route, invalid-slug, and disabled-contact smoke checks passed on 2026-08-27. |
| 4. Project architecture | Separate route composition, project presentation, typed data, shared configuration, and lookup utilities; add global not-found, skip-link, and robots foundations without empty abstraction layers. | **Complete** | Lint, type-check, production build, route-response, invalid-slug, contact-endpoint, skip-link, and robots checks passed on 2026-08-27. |
| 5. Design-system implementation | Implement approved tokens, themes, shared UI foundations, and documented interaction behavior. | **Not started** | Begins after the architecture milestone and relevant content decisions are approved. |
| 6. Homepage implementation | Build the ten approved homepage sections with approved content and assets. | **Not started** | — |
| 7. Projects and CareerBridge case study | Replace the route-foundation UI with approved project listing and complete CareerBridge case-study content and assets. | **Not started** | Typed routes and verified-data foundation exist; final content, screenshots, and presentation remain pending. |
| 8. Contact integration | Implement provider-neutral UI and approved delivery configuration. | **Blocked by decisions** | Recipient, provider, fields, spam protection, and privacy requirements are pending. |
| 9. Accessibility, responsive refinement, and SEO | Verify accessibility, supported widths, metadata, sitemap, robots, and error states. | **Not started** | Sitemap remains blocked by the unconfirmed production domain. |
| 10. Testing, documentation, and deployment | Final validation, maintenance documentation, and separately authorized Vercel deployment. | **Not started** | Deployment requires explicit authorization. |

## Current boundary

Phase 4 is complete as an architecture milestone. Do not create empty layers merely to mirror the target tree, and do not treat the temporary route UI as final design, or draft copy, missing assets, contact configuration, deployment, or source-backed-but-untested CareerBridge functionality as complete.
