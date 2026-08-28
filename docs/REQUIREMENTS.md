# Portfolio requirements

## 1. Project summary

This document is the authoritative product-scope specification for the professional portfolio of **Md. Jakir Hossain**, a **MERN Stack & Next.js Web Developer** based in Dhaka, Bangladesh. His confirmed current professional background is **Deputy Manager (Shipping), Sunman Group**; employment dates and detailed responsibilities remain pending user confirmation.

The portfolio will present verified skills and project work to prospective clients, recruiters, remote employers, developers, and professional connections. It must communicate technical competence, reliability, professional maturity, and honest experience without overstating project status or outcomes.

## 2. Goals

The first release should:

1. Support the search for remote web-development employment.
2. Support ethical freelance client acquisition.
3. Improve professional visibility and discoverability.
4. Build credibility with recruiters and clients through accurate content and transparent project status.
5. Make CareerBridge the primary verified project case study.
6. Provide clear paths to review work, visit professional profiles, download an approved résumé, and make contact.

## 3. Target audiences and priority

| Priority | Audience | Primary needs |
| --- | --- | --- |
| 1 | Freelance clients | Quickly understand services, capabilities, trustworthiness, availability, and contact options. |
| 1 | Recruiters | Verify role fit, technical skills, professional background, projects, résumé, and contact details. |
| 1 | Remote employers | Assess communication, reliability, development approach, technical depth, and remote-role relevance. |
| 2 | Other developers and professional connections | Review implementation interests, project repositories, and professional profiles. |

When audience needs compete, prioritize clear evidence, fast scanning, and direct actions for freelance clients, recruiters, and remote employers.

## 4. Confirmed technology constraints

- Next.js with the App Router, React, and strict TypeScript.
- Tailwind CSS and Geist Sans/Geist Mono through `next/font`.
- Lucide React for interface icons when icons are required.
- pnpm for package management and Vercel as the planned deployment platform.
- Server Components by default; Client Components only where browser APIs or genuine interaction require them.
- Typed portfolio content under `src/data` when implementation begins.
- No framework replacement or parallel application architecture.
- No dependency installation, removal, or upgrade is authorized by this requirements phase.

## 5. Route map

| Public path | Architecture | Purpose | First release | Status |
| --- | --- | --- | --- | --- |
| `/` | App Router page | Primary scrolling portfolio homepage. | Included | Foundation placeholder exists; final sections are not implemented. |
| `/projects` | App Router page | Complete listing of verified projects and clearly identified future entries. | Included | Planned. |
| `/projects/[slug]` | Dynamic App Router page | Reusable project case-study route with invalid-slug handling. | Included | Planned. |
| `/projects/careerbridge` | Resolved by `/projects/[slug]` | First detailed case study and primary verified portfolio project. | Included | Planned; claims require verification. |
| `/api/contact` | Optional Route Handler | Server endpoint for the approved contact form without a separate Express server. | Conditional first release | Planned only after provider, recipient, fields, spam protection, and privacy decisions are approved. |

About, Skills, Services, Experience, Process, and Contact belong on `/`; separate pages for them are not part of the initial architecture.

## 6. Homepage section specification

| Order | Section | Purpose | Primary audience | Required content | Main call to action | First release | Missing content |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Header | Establish identity and provide fast navigation. | All | Name or concise brand label, in-page navigation, Projects link, theme control, accessible mobile navigation. | Navigate to work or contact. | Yes | Final navigation labels and compact brand treatment. |
| 2 | Hero | Communicate role, value, location, availability, and strongest next actions immediately. | Clients, recruiters, remote employers | Name, approved professional title, approved hero copy, Dhaka location, updateable availability message, professional photograph. | View projects; contact; résumé download when supplied. | Yes | Final hero copy, availability wording, photograph asset, résumé asset. |
| 3 | About | Add professional context and connect the shipping-management background to an honest web-development direction. | Recruiters, employers, clients | Approved biography, current position, career transition/context where approved, strengths without unsupported claims. | Review skills or experience. | Yes | Employment dates and responsibilities remain pending if a later section requires them. |
| 4 | Skills | Make relevant technical capabilities easy to assess. | Recruiters, employers, technical clients | Confirmed technologies grouped by meaningful categories; proficiency claims only when approved. | Review project evidence. | Yes | Implemented with primary and supporting tiers; no numeric proficiency claims. |
| 5 | Services | Clarify legitimate freelance offerings. | Freelance clients | Approved service categories, boundaries, deliverables, and honest availability. | Discuss a project. | Yes | Final service list, scope language, and engagement expectations. |
| 6 | Featured Projects | Lead with verifiable work and direct visitors to deeper evidence. | All primary audiences | CareerBridge as primary project; status label; verified summary; approved screenshots; stack; live and repository links; optional genuine additional entries. | View CareerBridge case study or all projects. | Yes | Screenshots, verified feature/status details, genuine additional project content. |
| 7 | Professional Experience | Establish professional maturity without fabricating developer employment. | Recruiters, remote employers, clients | Deputy Manager (Shipping), Sunman Group; approved responsibilities, transferable skills, and dates when confirmed. | Continue to process or contact. | Yes | Employment dates, detailed responsibilities, any other verified roles. |
| 8 | Development Process | Explain how work is approached and reduce engagement uncertainty. | Clients, remote employers | Approved concise stages such as discovery, planning, implementation, testing, feedback, and delivery; do not promise unsupported methods. | Start a conversation. | Yes | Final process wording and any working-policy details. |
| 9 | Contact | Provide accessible, low-friction professional contact options. | All primary audiences | LinkedIn and GitHub links; provider-neutral contact-form interface; privacy expectations; loading, success, and error requirements. | Send an enquiry or connect professionally. | Yes, form conditional on configuration | Public recipient email, provider, fields, spam protection, privacy copy. |
| 10 | Footer | Close the page with identity, essential links, and accurate ownership information. | All | Name, current year generated at implementation time, professional links, essential navigation. | Visit GitHub or LinkedIn. | Yes | Final compact wording. |

## 7. Planned features

| Feature | First-release decision | Requirement |
| --- | --- | --- |
| Professional photograph | Included, asset required | Use primarily in Hero and optionally in About. Use only the user-approved file with accurate alternative text and preserved proportions. |
| Résumé download | Included when asset is supplied | Show a visible action only after the real approved résumé exists. Never generate or link a fake file. |
| Contact section | Included | Always provide direct GitHub and LinkedIn paths. |
| Functional contact form | Planned, configuration-dependent | Remain provider-neutral until approved. No database is required. Implementation may use a Next.js Route Handler. |
| Theme support | Included | Support light, dark, and system modes without a first-load theme flash. A minimal theme solution may be selected later. |
| Availability indicator | Included | Wording must be accurate and easy to update; examples are drafts only, not permanent claims. |
| Additional projects | Limited and conditional | Prefer genuine projects. Clearly labelled future placeholders are allowed only when needed and must not imply completion, clients, metrics, repositories, or live sites. |
| CareerBridge case study | Included | Primary verified project; distinguish completed, in-development, and planned functionality. |
| SEO and sharing metadata | Included | Accurate route-specific metadata and social-sharing metadata, without an unapproved generated preview image. |

## 8. Explicitly excluded features

The first release excludes:

- Portfolio authentication, registration, login, user accounts, or an admin dashboard.
- Express.js, MongoDB, Mongoose, Firebase, or a portfolio database.
- E-commerce functionality or payments.
- A blog content-management system or other CMS.
- Redux Toolkit, Zustand, or another global client-state library.
- Fabricated testimonials, client projects, metrics, qualifications, or outcomes.
- Analytics, tracking, or third-party embeds without approval.
- Complex animation systems, custom cursor effects, cursor trails, scroll hijacking, and decorative continuous motion.
- Separate About, Skills, Services, Experience, or Contact pages.

## 9. Confirmed external links

| Destination | Exact URL | Status |
| --- | --- | --- |
| GitHub | `https://github.com/Jakirhossain80` | Confirmed |
| LinkedIn | `https://www.linkedin.com/in/jakir-hossain-dev` | Confirmed |
| CareerBridge live site | `https://careerbridge-client.vercel.app` | Confirmed |
| CareerBridge repository | `https://github.com/Jakirhossain80/careerbridge` | Confirmed |

These URLs must not be shortened, substituted, or altered without user approval.

## 10. Required assets

| Asset | Intended use | Repository status | Requirement |
| --- | --- | --- | --- |
| Professional photograph | Hero; optional About reuse | **Asset required.** No photograph is present under `public/`; only `public/images/profile/.gitkeep` exists. | User must supply the approved image. Do not fabricate a path or use a random placeholder. |
| Résumé | Download action | **Asset required.** No résumé is present; only `public/resume/.gitkeep` exists. | User must supply the final approved file. |
| CareerBridge screenshots | Featured Projects and case study | **Asset required.** No screenshots are present; only `public/images/projects/.gitkeep` exists. | User must supply or approve verified screenshots. Do not generate them. |
| Social-preview image | Link previews | Pending decision | Create only if specifically approved; do not derive one from unapproved assets. |

## 11. Content inventory

| Content | Status | Intended use |
| --- | --- | --- |
| Name, location, professional title | Confirmed | Metadata, Hero, About, Footer. |
| Current role: Deputy Manager (Shipping), Sunman Group | Confirmed at title/company level | About and Professional Experience. |
| GitHub, LinkedIn, CareerBridge live and repository URLs | Confirmed | Header/footer/contact/project actions as appropriate. |
| Biography and career narrative | Confirmed by the Phase 12 implementation brief | About. |
| Hero headline/supporting copy | Pending user confirmation | Hero and possibly metadata. |
| Availability wording | Draft required | Hero or Header indicator. Must remain updateable and accurate. |
| Employment dates and responsibilities | Pending user confirmation | Professional Experience. |
| Education, certifications, and languages | Pending user confirmation | About or Experience only if approved and useful. |
| Skill inventory and tier wording | Confirmed by the Skills implementation brief | Skills. |
| Service descriptions | Pending user confirmation | Services. |
| Development-process wording | Pending user confirmation | Development Process. |
| CareerBridge features and current status | Verification required | Project cards and case study. |
| Additional genuine projects | Pending content | Featured Projects and `/projects`. |
| Contact recipient and public email | Pending decision | Contact form and optional public contact display. |

Detailed content status and repository-evidence notes are maintained in the authoritative content inventory at `docs/CONTENT.md`. Missing content must use the inventory's status system and must never be silently invented.

## 12. Functional requirements

1. The homepage must provide semantic navigation to its major sections and the Projects page.
2. Internal navigation must use stable, meaningful labels and valid routes or section identifiers.
3. `/projects` must list verified projects and clearly distinguish real work from permitted future placeholders.
4. `/projects/[slug]` must resolve CareerBridge at `/projects/careerbridge` and return the intended not-found experience for invalid or missing slugs.
5. CareerBridge must expose the exact confirmed live-site and repository links and label status honestly.
6. External links must be descriptive and use safe external browsing behavior where a new context is used.
7. Theme controls must support light, dark, and system preferences and be operable by keyboard.
8. Availability content must be centrally updateable and must not imply permanent availability.
9. The résumé action must remain absent or explicitly unavailable until the approved asset exists; it must never target a fake file.
10. The Contact section must provide GitHub and LinkedIn links regardless of form readiness.
11. A functional contact form, when configured, must validate on client and server, prevent accidental repeats, and expose accessible loading, success, and generic error states.
12. Contact submission must not require authentication or store enquiry data unless separately approved.

## 13. Non-functional requirements

- Use semantic HTML and a logical heading hierarchy.
- Prefer static/server-rendered content and minimize client JavaScript.
- Keep content data separate from reusable presentation components when implementation begins.
- Work without horizontal overflow or clipped content at supported sizes.
- Maintain accurate content and transparent project status.
- Avoid unnecessary dependencies, abstractions, and third-party scripts.
- Ensure content remains available when motion is reduced or disabled.

## 14. Responsive requirements

- Design mobile-first and verify small mobile, standard mobile, tablet, laptop, desktop, and large desktop widths.
- Navigation must not overlap content; mobile controls must remain on-screen and keyboard accessible.
- Interactive targets should be approximately `44 × 44px` where practical.
- Buttons and action groups must wrap or stack without overflow.
- Project cards must stack cleanly and images must retain their proportions.
- Headings must wrap naturally, and line lengths/content widths must remain comfortable on large screens.
- The layout must not treat mobile as merely a compressed desktop arrangement.

## 15. Accessibility requirements

- Meet WCAG 2.2 AA as the implementation target where applicable.
- Provide semantic landmarks, one clear primary heading per page, and correct heading order.
- Include a skip-to-content link and keyboard-accessible navigation.
- Maintain visible `:focus-visible` indicators with sufficient contrast in every theme.
- Use native buttons and links according to purpose; never make a noninteractive element imitate a control.
- Do not rely on color, hover, or motion alone to communicate meaning.
- Use meaningful alternative text for informative images and empty alternative text for decorative images.
- Label form controls explicitly and associate accessible validation, status, success, and error messaging.
- Respect `prefers-reduced-motion`; essential content must remain visible when animations are disabled.
- Avoid positive `tabindex`, redundant ARIA, inaccessible off-screen controls, and pointer cursors on static content.

## 16. SEO requirements

- Provide accurate, page-specific titles and descriptions through Next.js metadata APIs.
- Maintain semantic page structure and meaningful internal link text.
- Provide project-specific metadata for CareerBridge without unsupported claims.
- Add canonical URLs after the production domain is confirmed.
- Maintain `sitemap.ts` and `robots.ts` when public routes are implemented.
- Include accurate social-sharing metadata in the first release; use no unapproved or fabricated social-preview image.
- Avoid keyword stuffing, fabricated achievements, and metadata that exceeds visible page content.

## 17. Performance expectations

- Prefer Server Components and static generation for public portfolio content.
- Keep Client Components and client-side state limited to interaction boundaries.
- Use `next/image` for suitable approved images with explicit dimensions and responsive sizing.
- Use `next/font` for Geist and avoid blocking third-party scripts.
- Lazy-load appropriate below-the-fold media and prevent avoidable layout shift.
- Avoid large libraries for simple interactions and measure before applying complex optimization.
- The production build must pass; significant performance regressions should be investigated with measured evidence.

## 18. Security and privacy expectations

- Never commit credentials, tokens, API keys, passwords, or real secrets.
- Keep server credentials in environment variables without `NEXT_PUBLIC_` exposure.
- Validate, trim, normalize, and length-limit untrusted contact-form input on the server.
- Render user-controlled content safely and avoid unjustified raw HTML.
- Do not expose provider errors, log sensitive enquiries unnecessarily, or store submissions without approval.
- Keep the contact implementation provider-neutral until the provider and recipient are approved.
- Do not add analytics, trackers, third-party embeds, authentication, or a database without explicit approval.
- Define spam protection and privacy behavior before enabling contact submission.

## 19. First-release scope

### Included

- Scrolling homepage with Header, Hero, About, Skills, Services, Featured Projects, Professional Experience, Development Process, Contact, and Footer.
- Projects listing page and CareerBridge case study through the dynamic project route.
- Hero professional photograph after the approved asset is supplied.
- Confirmed GitHub, LinkedIn, CareerBridge live-site, and CareerBridge repository links.
- Responsive mobile, tablet, and desktop layouts.
- Light, dark, and system theme requirements.
- Accurate SEO and social-sharing metadata requirements.
- Accessible keyboard interaction, visible focus, and reduced-motion support.
- Updateable availability messaging.
- Résumé download when the real approved asset is supplied.
- Contact-form requirement subject to provider, recipient, field, spam-protection, and privacy configuration.

### Excluded

All items in section 8 remain outside the initial scope, including authentication, admin capabilities, databases, Firebase, e-commerce, a blog CMS, fabricated proof, complex global state, and unnecessary animation or cursor effects.

## 20. Future enhancements

The following may be considered only after first-release requirements and content are satisfied:

- Additional verified project case studies.
- A specifically approved social-preview image.
- Privacy-respecting analytics, only with explicit approval and documented purpose.
- A blog only if a genuine publishing requirement is approved; no CMS is assumed.
- Contact-form delivery refinements after real usage is assessed.

Future enhancements must not be treated as current commitments.

## 21. Pending decisions and missing content

| Decision or content | Status | Needed before |
| --- | --- | --- |
| Professional photograph | Asset required | Final Hero implementation. |
| Final résumé | Asset required | Enabling résumé download. |
| Hero copy | Pending user confirmation | Publishing final Hero content. The About biography direction was confirmed in Phase 12. |
| Availability wording | Pending user confirmation | Publishing the indicator. |
| Employment dates, responsibilities, education, certifications, languages | Pending user confirmation | Publishing relevant About/Experience details. |
| Services and process copy | Pending user confirmation | Finalizing those sections. Skills grouping and tier wording are confirmed. |
| CareerBridge screenshots, verified features, and current status | Pending verification/asset | Publishing the project card and case study. |
| Additional genuine projects | Pending content | Populating more than the CareerBridge entry. |
| Contact recipient email | Pending decision | Enabling form delivery or displaying email. |
| Email-delivery provider | Pending decision | Contact backend implementation. |
| Contact fields and length limits | Pending decision | Form implementation. |
| Spam-protection and privacy requirements | Pending decision | Enabling public submissions. |
| Production domain | Pending decision | Canonicals, sitemap URLs, and deployment configuration. |
| Social-preview image | Pending approval | Associating an image with social metadata. |

These open items do not prevent architecture planning, but the affected content or functionality must not be published as complete until resolved.

## 22. Acceptance criteria

The first release is acceptable when:

- The documented routes exist, and CareerBridge resolves through `/projects/[slug]` at `/projects/careerbridge`.
- All ten homepage sections appear in the specified order with approved, accurate content.
- CareerBridge remains the primary verified project and no placeholder is presented as completed client work.
- Every confirmed external URL is exact and functional.
- Photograph, screenshots, and résumé use only approved real assets; missing assets never resolve to fabricated files.
- Direct GitHub and LinkedIn contact paths are available, and any enabled form meets approved delivery, validation, accessibility, privacy, and security requirements.
- Light, dark, and system themes are readable and avoid first-load flashing.
- Keyboard navigation, focus visibility, contrast, semantics, alternative text, form feedback, and reduced motion meet section 15.
- Responsive layouts satisfy section 14 without horizontal overflow.
- Metadata accurately reflects each route, and sitemap/robots behavior is appropriate for deployment.
- Lint, strict type-check, and production build complete successfully.
- No credentials, unsupported claims, fabricated content, or excluded architecture has been introduced.

## Requirements milestone status

**Phase 1 — Finalize Portfolio Requirements: Complete.** This status confirms documentation only; it does not indicate that the interface, routes, assets, contact integration, or baseline validation are complete.
