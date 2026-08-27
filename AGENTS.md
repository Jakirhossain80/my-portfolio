# AGENTS.md

## 1. Purpose

This repository contains the professional portfolio website of **Md. Jakir Hossain**, a MERN Stack and Next.js web developer based in Dhaka, Bangladesh.

The portfolio is intended for:

- Freelance clients
- Recruiters
- Remote employers
- Professional contacts
- Other developers

The website must communicate technical competence, reliability, professional maturity and honest project experience.

## 2. Instruction priority

Before performing any task:

1. Read this `AGENTS.md` completely.
2. Inspect the relevant existing files before editing them.
3. Read the applicable project documents:
   - `docs/REQUIREMENTS.md`
   - `docs/DESIGN_SYSTEM.md`
   - `docs/CONTENT.md`
   - `docs/IMPLEMENTATION_PLAN.md`
4. Follow the user's current explicit request.
5. Do not expand the requested scope without approval.

If instructions conflict, follow this priority:

1. Current explicit user instruction
2. Closest applicable `AGENTS.md` or `AGENTS.override.md`
3. Repository-root `AGENTS.md`
4. Project documentation
5. Existing code conventions

If important requirements are unclear or contradictory, stop and ask a focused question before making a high-impact assumption.

## 3. Approved technology stack

Use:

- Next.js
- App Router
- React
- TypeScript
- Tailwind CSS
- Geist Sans
- Geist Mono
- Lucide React for interface icons
- pnpm
- ESLint
- Git and GitHub
- Vercel for the planned deployment

Use the stable, mutually compatible versions already recorded in `package.json` and `pnpm-lock.yaml`.

Do not upgrade framework or dependency versions unless the task explicitly requires it.

## 4. Technologies excluded by default

Do not add any of the following unless the user approves a requirement that clearly needs them:

- Express.js
- MongoDB
- Mongoose
- Firebase
- Authentication
- Redux Toolkit
- Zustand
- TanStack Query
- Axios
- A component library
- An animation library
- A CMS
- Docker
- Kubernetes
- Stripe
- OpenAI API
- Analytics or tracking scripts

React Hook Form, Zod and an email provider may be added later only when the functional contact form is approved.

Do not add a production or development dependency merely for convenience. Prefer platform features, existing utilities and small local implementations when appropriate.

## 5. Confirmed architecture

Use a hybrid portfolio structure:

- A primary scrolling homepage
- A separate Projects page
- Dynamic project case-study pages
- An optional Next.js contact Route Handler

Planned routes:

- `/`
- `/projects`
- `/projects/[slug]`
- `/api/contact` only when the contact form is approved

Do not create separate About, Skills, Services or Contact pages unless a later requirement explicitly calls for them.

Those subjects belong on the primary scrolling homepage.

## 6. Planned homepage sections

The completed homepage is expected to contain:

1. Header
2. Hero
3. About
4. Skills
5. Services
6. Featured Projects
7. Professional Experience
8. Development Process
9. Contact
10. Footer

Implement only the sections included in the current task. Do not build future sections prematurely.

## 7. Next.js conventions

- Use the App Router.
- Prefer Server Components.
- Add `"use client"` only when a component genuinely requires:
  - React client state
  - Event handlers
  - Browser APIs
  - Client-only libraries
- Keep client boundaries as small as practical.
- Keep route files focused on routing, metadata and page composition.
- Use Next.js metadata APIs for page metadata.
- Use `next/image` for suitable local and remote images.
- Use `next/font` for Geist fonts.
- Use `next/link` for internal navigation.
- Use Route Handlers only for genuine server endpoints.
- Do not duplicate content or business logic across routes.
- Do not introduce middleware unless a real requirement justifies it.
- Do not add authentication middleware to this public portfolio.
- Keep server-only credentials and code out of the client bundle.

## 8. TypeScript conventions

- Keep strict TypeScript enabled.
- Do not use `any`.
- Prefer precise types.
- Use `unknown` with safe narrowing when the incoming type is uncertain.
- Use type-only imports where appropriate.
- Avoid unsafe type assertions.
- Avoid non-null assertions unless the invariant is clearly established.
- Create shared types under `src/types` when they are used in multiple modules.
- Keep single-component prop types close to the component when reuse is unlikely.
- Model portfolio data with typed objects.
- Use discriminated unions when modelling meaningful variants or states.
- Use ES Module `import` and `export` syntax.
- Use the `@/*` alias for appropriate internal imports.

Do not weaken TypeScript, ESLint or build settings to hide an error. Fix the underlying problem.

## 9. Repository organization

Use the following responsibilities:

- `src/app`: routes, layouts, metadata and route composition
- `src/components/ui`: small reusable interface elements
- `src/components/common`: shared application-level components
- `src/components/layout`: header, navigation, footer and layout components
- `src/components/sections`: homepage sections
- `src/components/projects`: project cards and case-study components
- `src/components/forms`: form components
- `src/data`: typed portfolio content
- `src/hooks`: justified reusable client hooks
- `src/lib`: integrations and shared configuration
- `src/schemas`: validation schemas
- `src/types`: shared TypeScript types
- `src/utils`: small pure helper functions
- `public/images/profile`: approved profile images
- `public/images/projects`: approved project screenshots
- `public/resume`: approved résumé files
- `docs`: requirements, design, content and implementation guidance

Do not create empty abstraction layers or meaningless placeholder files just to match the proposed directory structure.

Prefer colocating logic when it is used by only one component and separation would not improve clarity.

## 10. Component design rules

- Keep components focused and reasonably small.
- Prefer composition over large configurable components.
- Avoid premature abstraction.
- Extract a shared component when:
  - The same meaningful pattern appears more than once;
  - The component has an independent responsibility; or
  - Extraction materially improves readability or testing.
- Avoid components that only rename a native HTML element without adding useful behaviour or styling.
- Use semantic HTML before adding ARIA.
- Use native buttons and links for their correct purposes.
- Do not make a `div` behave like a button when a real button is appropriate.
- Keep content data separate from reusable presentation components.
- Avoid deeply nested prop drilling when simple composition can solve it.
- Do not introduce global state for local interaction.

## 11. State-management rules

Do not add a global state-management library.

Use:

- Server Components for static and server-rendered content
- Local React state for the mobile menu and small interactions
- A lightweight theme provider for light, dark and system preferences
- Route parameters for project selection
- Typed local data files for portfolio content
- React Hook Form only if the approved contact form is implemented

Avoid storing state that can be derived from props, URL state or existing data.

## 12. Content accuracy

Never invent or exaggerate:

- Paid clients
- Testimonials
- Employment
- Qualifications
- Certifications
- Project outcomes
- User counts
- Revenue
- Performance improvements
- Completion status
- Technical features

Do not present learning or practice projects as paid client work.

Do not describe unfinished CareerBridge functionality as complete.

Use labels such as these when accurate:

- Personal project
- Portfolio project
- In development
- Planned
- Prototype
- Case study

Preserve all approved names, dates and URLs accurately.

Confirmed information:

- Name: Md. Jakir Hossain
- Location: Dhaka, Bangladesh
- Professional title: MERN Stack and Next.js Web Developer
- GitHub: `https://github.com/Jakirhossain80`
- LinkedIn: `https://www.linkedin.com/in/jakir-hossain-dev`
- CareerBridge live site: `https://careerbridge-client.vercel.app`
- CareerBridge repository: `https://github.com/Jakirhossain80/careerbridge`

Do not invent missing biography, education, certification, résumé, email, employment-date or project-status information. Use content explicitly approved in `docs/CONTENT.md`, or ask the user.

## 13. CareerBridge case-study rules

CareerBridge is the primary featured portfolio project.

Before writing detailed claims:

1. Read the approved CareerBridge content.
2. Inspect the repository or live application when authorized and accessible.
3. Separate completed functionality from unfinished or planned functionality.
4. Describe technical challenges honestly.
5. Do not claim unsupported business outcomes.

Known CareerBridge stack may include:

- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- React Hook Form
- Zod
- Firebase Authentication
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Firebase Admin
- JWT cookies

Known CareerBridge roles:

- `super_admin`
- `admin`
- `employer`
- `job_seeker`

CareerBridge’s Express, MongoDB and authentication architecture belongs to the CareerBridge case study. It must not be copied into the portfolio’s own architecture without an approved requirement.

## 14. Design direction

Follow `docs/DESIGN_SYSTEM.md` as the detailed design authority.

The durable design direction is:

- Modern
- Professional
- Clean
- Technology-focused
- Trustworthy
- Restrained rather than flashy
- Responsive
- Accessible

Use:

- Professional blue as the primary brand colour
- Cyan as a restrained accent
- Neutral slate surfaces
- Geist Sans for primary typography
- Geist Mono for limited technical labels
- Generous whitespace
- Moderate rounded corners
- Soft borders and shadows
- Clear visual hierarchy
- Consistent spacing

Avoid:

- Excessive gradients
- Heavy glow effects
- Continuously moving backgrounds
- Cursor trails
- Scroll hijacking
- Bouncing controls
- Rotating technology logos
- Excessive glassmorphism
- Unnecessary 3D effects
- Decorative effects that reduce readability

Do not redesign approved visual conventions without explaining the need and obtaining approval for a substantial change.

## 15. Theme rules

The final website must support:

- Light theme
- Dark theme
- System theme

Use semantic design tokens rather than repeating raw colour values throughout components.

Examples:

- `background`
- `foreground`
- `surface`
- `muted`
- `muted-foreground`
- `primary`
- `primary-foreground`
- `accent`
- `border`
- `success`
- `error`

Ensure every component works in both light and dark themes.

Avoid theme flashes during initial loading.

Theme choice must not make content unreadable or reduce focus visibility.

## 16. Responsive-design rules

Design mobile-first.

Verify the interface at:

- Small mobile widths
- Standard mobile widths
- Tablet widths
- Laptop widths
- Desktop widths
- Large desktop widths

Requirements:

- No horizontal page overflow
- No clipped content
- No overlapping navigation
- No inaccessible off-screen controls
- Comfortable mobile spacing
- Touch targets of approximately `44 × 44px` where practical
- Buttons must wrap or stack safely
- Project cards must stack cleanly
- Images must remain proportional
- Headings must wrap without breaking the layout
- Content must not become excessively wide on large screens

Do not treat mobile as a compressed desktop design.

## 17. Accessibility rules

Accessibility is a completion requirement.

Use:

- Semantic landmarks
- Correct heading hierarchy
- A skip-to-content link
- Keyboard-accessible navigation
- Visible `:focus-visible` indicators
- Proper form labels
- Descriptive link text
- Accurate image alternative text
- Accessible error and success messages
- Sufficient colour contrast
- Reduced-motion support
- Correct button and link semantics

Do not:

- Remove focus outlines without an accessible replacement
- Use colour alone to communicate status
- Depend on hover to reveal essential information
- Use placeholders as the only form labels
- Add positive `tabindex` values
- Make noninteractive content keyboard-focusable
- Add redundant ARIA to semantic elements

Decorative images should use empty alternative text. Informative images require concise, meaningful alternative text.

## 18. Cursor, hover and interaction rules

Use `cursor: pointer` only for interactive elements such as:

- Buttons
- Links
- Theme controls
- Mobile-menu controls
- Expandable controls
- Intentionally clickable cards

Do not use pointer cursors for:

- Headings
- Paragraphs
- Decorative icons
- Static cards
- Noninteractive badges
- Profile photographs

Hover effects must be restrained and must not shift surrounding layout.

Every hover interaction must have an understandable non-hover and keyboard equivalent.

Disabled controls should clearly appear disabled and must not perform actions.

## 19. Animation rules

Animations must support clarity and polish.

Allowed examples:

- Restrained hero entrance
- One-time section reveal
- Small project-card lift
- Small project-image scale
- Mobile-menu transition
- Short theme transition

Avoid:

- Continuous typing and deleting
- Constant movement
- Long entrance sequences
- Repeated bouncing
- Large parallax effects
- Scroll hijacking
- Animations that delay access to content

Respect `prefers-reduced-motion`.

Content must remain visible and usable when animations are disabled.

Do not add an animation library unless native CSS and existing project tools cannot reasonably meet an approved requirement.

## 20. Image and asset rules

- Use only approved profile images and project screenshots.
- Do not generate or invent project screenshots.
- Preserve image proportions.
- Avoid visible distortion or stretching.
- Define appropriate image dimensions to reduce layout shifting.
- Use responsive image sizing.
- Compress images without visibly damaging quality.
- Use meaningful filenames.
- Store assets in the appropriate `public` directory.
- Do not use copyrighted third-party images without permission or a valid license.
- Do not add decorative stock images that weaken the professional focus.

The supplied professional photograph should be used naturally and without excessive filters.

Do not replace the approved photograph without instruction.

## 21. Contact-form rules

Do not implement a functional contact form until the user approves:

- The destination email
- The email-delivery provider
- The required fields
- Spam-protection requirements
- Privacy requirements

If implemented:

- Validate on both client and server.
- Treat client validation as user assistance, not security.
- Trim and normalize appropriate fields.
- Set sensible length limits.
- Reject malformed submissions.
- Use safe, generic server-error messages.
- Do not expose provider errors or credentials.
- Prevent repeated accidental submissions.
- Provide accessible loading, success and error states.
- Use environment variables for credentials.
- Do not store enquiry data unless separately approved.

The portfolio does not require authentication for contact submission.

## 22. Security and privacy

- Never commit credentials, API keys, tokens or passwords.
- Store local secrets in `.env.local`.
- Keep only variable names and safe examples in `.env.example`.
- Never expose server credentials using `NEXT_PUBLIC_`.
- Do not log sensitive form content unnecessarily.
- Validate all untrusted input on the server.
- Escape or safely render user-controlled content.
- Do not introduce raw HTML rendering without a justified and reviewed need.
- Use `rel="noopener noreferrer"` where appropriate for external browsing contexts.
- Do not add third-party analytics, trackers or embeds without approval.
- Keep dependencies minimal and reputable.
- Do not silence relevant dependency or security warnings without explanation.

## 23. Performance rules

- Prefer static and server-rendered content.
- Minimize client-side JavaScript.
- Keep Client Components small.
- Avoid unnecessary re-renders.
- Optimize images and fonts.
- Lazy-load appropriate below-the-fold media.
- Avoid large libraries for simple effects.
- Avoid blocking third-party scripts.
- Prevent avoidable layout shifting.
- Do not optimize speculatively at the expense of clarity.
- Measure before making complex performance changes.

## 24. SEO rules

When implementing public pages:

- Provide accurate page titles and descriptions.
- Use one clear primary heading per page.
- Use semantic content structure.
- Configure canonical URLs when the production domain is known.
- Add page-specific metadata for project case studies.
- Maintain `sitemap.ts`.
- Maintain `robots.ts`.
- Use meaningful internal-link labels.
- Avoid keyword stuffing.
- Do not add unsupported claims to metadata.
- Do not create a social-preview image unless approved or specifically requested.

Metadata must match the actual page content.

## 25. Error and empty states

Handle relevant states deliberately:

- Invalid project slug
- Missing project data
- Missing approved image
- Contact submission failure
- Contact submission success
- Loading where meaningful
- Empty project collection, if applicable

Do not show raw stack traces, internal exception messages or service-provider details to visitors.

Provide a clear recovery action when possible.

## 26. Package-management rules

Use pnpm consistently.

- Keep only `pnpm-lock.yaml`.
- Do not create `package-lock.json` or `yarn.lock`.
- Do not manually edit the lockfile.
- Do not install packages globally for a repository task.
- Do not upgrade unrelated packages.
- Explain why a new production dependency is necessary before adding it.
- Prefer exact repository scripts over ad hoc alternatives.
- Keep dependencies and configuration compatible with the installed Next.js version.

## 27. Environment variables

- Keep `.env.example` synchronized with required variable names.
- Never place real values in `.env.example`.
- Do not create fake production secrets.
- Validate required server variables when integrations are introduced.
- Document each variable in the README.
- Do not require environment variables for purely static features.

## 28. Required commands

Use the scripts defined in `package.json`.

Expected commands:

- `pnpm dev`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `pnpm start`

If these commands differ from the repository, inspect `package.json` and use the actual scripts.

Do not claim a command passed unless it was run successfully.

## 29. Testing and verification

After a change, run the smallest relevant checks first, followed by broader checks when appropriate.

For source-code changes, normally run:

1. `pnpm lint`
2. `pnpm typecheck`
3. `pnpm build`

Also verify, as applicable:

- The requested route renders.
- Internal links target valid routes.
- External links use the approved URLs.
- Responsive layouts do not overflow.
- Keyboard navigation works.
- Focus indicators are visible.
- Light and dark themes remain readable.
- Reduced-motion behaviour is respected.
- Images have correct alternative text.
- Forms have labels and accessible messages.
- Invalid project slugs use the intended not-found behaviour.

If a command cannot run because of an environmental limitation, report the exact limitation. Do not present an unexecuted check as successful.

## 30. Code review rules

When reviewing changes, prioritize:

1. Functional regressions
2. Incorrect content or unsupported claims
3. Accessibility problems
4. Security and privacy risks
5. Broken responsive behaviour
6. Server/client boundary mistakes
7. Type-safety problems
8. Performance regressions
9. Missing error handling
10. Unnecessary dependencies or abstractions

Ignore purely subjective style preferences when the implementation already follows the approved design system.

Do not replace deterministic lint or formatting checks with subjective review comments.

## 31. Git and repository safety

- Inspect `git status` before editing.
- Treat existing changes as user-owned.
- Do not discard, overwrite or revert unrelated changes.
- Keep edits limited to the current task.
- Review the diff before reporting completion.
- Do not commit unless explicitly requested.
- Do not push unless explicitly requested.
- Do not create branches unless explicitly requested.
- Do not create or modify a remote repository unless explicitly requested.
- Do not open a pull request unless explicitly requested.
- Do not deploy unless explicitly requested.
- Never use destructive Git commands without direct authorization.
- Never include credentials or private files in Git.

If the worktree is dirty, continue carefully when the task does not conflict. Ask for direction if existing changes overlap materially with the requested files.

## 32. Scope control

For every task:

1. Identify the exact requested outcome.
2. Inspect the relevant files.
3. Make the smallest coherent change that fully satisfies the request.
4. Avoid unrelated cleanup.
5. Avoid speculative features.
6. Validate the result.
7. Report what changed and what remains.

Do not continue automatically into the next project milestone.

Examples:

- A foundation task must not build the final homepage.
- A Hero task must not build every homepage section.
- A contact-interface task must not select or configure an email provider without approval.
- A project-card task must not fabricate additional projects.
- A deployment-readiness task must not deploy without authorization.

## 33. Documentation maintenance

Keep documentation aligned with implementation.

Update the relevant document when an approved decision changes:

- `docs/REQUIREMENTS.md`: product scope and requirements
- `docs/DESIGN_SYSTEM.md`: visual and interaction rules
- `docs/CONTENT.md`: approved public content and links
- `docs/IMPLEMENTATION_PLAN.md`: milestones and status
- `README.md`: setup, scripts, environment variables and maintenance

Do not mark a milestone completed unless its completion criteria have been met.

Do not copy all detailed documentation into this file. Keep `AGENTS.md` focused on durable working rules.

## 34. Definition of done

A task is complete only when:

- The requested scope has been implemented.
- The result follows this file and applicable documentation.
- Existing functionality has been preserved unless an approved change requires otherwise.
- Content is accurate and not fabricated.
- TypeScript remains strict.
- Relevant accessibility requirements are satisfied.
- Relevant responsive behaviour is satisfied.
- Necessary error states are handled.
- Relevant validation commands pass.
- The final diff contains no unrelated changes.
- No credentials are exposed.
- Documentation is updated when required.
- No unauthorized commit, push or deployment occurred.

## 35. Final response requirements

At the end of a coding task, report:

1. The outcome
2. Important files changed
3. Validation performed and results
4. Any warnings or unresolved issues
5. The safest logical next step, without starting it

Keep the report concise, factual and beginner-friendly.

Do not claim completion when required validation has failed.

## 36. Current project status

At the beginning of development, treat this project as being implemented incrementally.

Do not assume that planned sections, routes, integrations or assets already exist.

Inspect the repository and `docs/IMPLEMENTATION_PLAN.md` to determine the actual current milestone before making changes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
