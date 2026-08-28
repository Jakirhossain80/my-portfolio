# Portfolio content inventory

## 1. Document purpose

This is the authoritative content source for the portfolio. It organizes approved facts, draft copy, repository evidence, assets, and unresolved decisions so a later milestone can convert approved content into typed data without inventing details.

This document does not approve draft copy automatically. It does not prove that a CareerBridge feature works in production merely because related code exists.

## 2. Content authority and verification rules

Evidence is evaluated in this order:

1. Current explicit user instructions.
2. Portfolio `AGENTS.md` and `docs/REQUIREMENTS.md`.
3. The local CareerBridge repository documentation and source, inspected read-only on 2026-08-27.
4. The confirmed public links supplied by the user.
5. Draft wording derived only from confirmed or repository-verified facts.

Repository evidence can verify that a dependency, route, model, middleware, service, or UI implementation exists. It does not by itself verify production behavior, completeness, business impact, or deployment health. The CareerBridge live site could not be inspected reliably during this milestone, so no runtime behavior is marked verified.

No environment files, credentials, private emails, authenticated pages, or private user data were inspected or copied.

## 3. Content-status legend

| Status | Meaning |
| --- | --- |
| `Confirmed` | Explicitly supplied by the user or already authoritative in the portfolio. |
| `Repository verified` | Supported by inspected source, manifests, or documentation; scope is limited to what the evidence proves. |
| `Draft — approval required` | Professionally drafted from confirmed facts but not approved for publication. |
| `Pending user confirmation` | The item is needed, but its final value, wording, or publication decision is unknown. |
| `Asset required` | A genuine user-approved file must be supplied. |
| `Not applicable` | Intentionally excluded from this portfolio. |
| `Do not invent` | Unsupported information that must remain empty until authoritative evidence is supplied. |

## 4. Personal identity inventory

| Key | Placement | Current value | Status | Source | Notes or restrictions |
| --- | --- | --- | --- | --- | --- |
| `fullName` | Metadata, Hero, About, Footer | Md. Jakir Hossain | `Confirmed` | Current Phase 2 brief; portfolio requirements | Use this exact professional name consistently. |
| `professionalTitle` | Metadata, Hero, About | MERN Stack & Next.js Web Developer | `Confirmed` | Current Phase 2 brief | Use the ampersand display form unless a platform requires plain text. Do not add “senior,” “expert,” or years of experience. |
| `location` | Hero, About | Dhaka, Bangladesh | `Confirmed` | Current Phase 2 brief; portfolio requirements | Do not infer remote-work location or relocation status. |
| `currentEmployment` | About, Professional Experience | Deputy Manager (Shipping), Sunman Group | `Confirmed` | Current Phase 2 brief; portfolio requirements | Title and company only are confirmed. Dates, duties, achievements, and employer endorsement are not confirmed. |
| `careerDirections` | About, Contact, metadata inputs | Remote web-development opportunities; ethical freelancing; professional networking | `Confirmed` | Current Phase 2 brief | These are goals, not evidence of previous client work or remote employment. |
| `primaryAudiences` | Content strategy | Freelance clients; recruiters; remote employers; other developers | `Confirmed` | Current Phase 2 brief; portfolio requirements | Prioritize the first three audiences in content hierarchy. |

## 5. Hero content

| Key | Placement | Current value | Status | Source | Notes or restrictions |
| --- | --- | --- | --- | --- | --- |
| `heroEyebrow` | Hero | Dhaka, Bangladesh · MERN Stack & Next.js Web Developer | `Draft — approval required` | Drafted from confirmed location and title | This is an identity label, not an availability claim. Separator may change during design implementation. |
| `heroIntroduction` | Hero | I build modern web applications with React, Next.js, and the MERN stack, with an emphasis on clear, maintainable user experiences. | `Draft — approval required` | Confirmed title and supplied skills; CareerBridge repository evidence | Avoid adding performance, client, scale, or seniority claims. |
| `heroAvailability` | Hero or Header indicator | Open to remote web-development opportunities and selected freelance projects. | `Draft — approval required` | Confirmed career direction | Must remain easy to update and must not be published until it accurately reflects current availability. |
| `heroPrimaryAction` | Hero | View Projects | `Draft — approval required` | Route requirements | Intended target: `/projects`. |
| `heroSecondaryAction` | Hero | Contact Me | `Draft — approval required` | Homepage requirements | Intended target: homepage Contact section. Final label may be “Start a Conversation.” |
| `heroResumeAction` | Hero | Download Résumé | `Draft — approval required` | First-release requirements | Conditional: do not render as an active download until the approved file exists. |

## 6. About content

| Key | Placement | Current value | Status | Source | Notes or restrictions |
| --- | --- | --- | --- | --- | --- |
| `aboutIntroduction` | About opening | I’m Md. Jakir Hossain, a MERN Stack & Next.js Web Developer based in Dhaka, Bangladesh. I’m building my professional path in web development through practical full-stack learning and project work. | `Confirmed` | Phase 12 implementation brief; confirmed identity, title, and location | Does not imply paid developer employment. |
| `aboutSupportingDetails` | About body | Connect practical frontend/backend learning with problem-solving, reliability, and structured work; mention Deputy Manager (Shipping), Sunman Group only as supporting professional context. | `Confirmed` | Phase 12 implementation brief | Do not infer shipping duties, dates, achievements, or personal motivation. |
| `aboutPhotoReuse` | About media | Optional reuse of the approved Hero photograph | `Asset required` | Requirements | Decide during design only after the actual image is supplied. |

## 7. Professional biography

### Implemented biography direction

**Status:** `Confirmed for the Phase 12 About section`

The implemented first-person About copy introduces Md. Jakir Hossain as a MERN Stack & Next.js Web Developer in Dhaka, Bangladesh; presents his transition through practical full-stack learning and project work; and emphasizes problem-solving, reliability, and structured work. His Deputy Manager (Shipping), Sunman Group background appears once as supporting professional context, while web development remains the section's focus.

Restrictions:

- “Full-stack experience” here refers only to repository-backed project work, not confirmed paid employment.
- Do not add employment dates, shipping responsibilities, achievements, years of experience, education, certifications, awards, or client outcomes without user confirmation.
- The implemented section uses first-person voice.

## 8. Availability content

| Key | Current value | Status | Notes |
| --- | --- | --- | --- |
| `availabilityStatement` | Open to remote web-development opportunities and selected freelance projects. | `Draft — approval required` | Must be confirmed immediately before publication and remain centrally updateable. |
| `availabilityShortLabel` | Open to opportunities | `Draft — approval required` | Use only if current and supported by nearby context. |
| `availabilityDetails` | Engagement type, hours, start date, time-zone overlap, and project preferences | `Pending user confirmation` | Do not infer these details from location or career goals. |

## 9. Contact information

| Key | Placement | Current value | Status | Source | Notes or restrictions |
| --- | --- | --- | --- | --- | --- |
| `publicEmail` | Contact, résumé/contact action, form destination, structured metadata if approved | Not supplied | `Pending user confirmation` | Current Phase 2 brief | Do not infer from Git, GitHub, environment files, package metadata, or local configuration. |
| `contactFormRecipient` | Server-only contact configuration | Not selected | `Pending user confirmation` | Requirements | May equal the public email but must be approved separately. |
| `contactProvider` | Server integration | Not selected | `Pending user confirmation` | Requirements | Keep provider-neutral. Do not configure credentials in this phase. |
| `phoneNumber` | Any public content | Empty | `Do not invent` | No authoritative source | Not required unless the user explicitly approves one. |

## 10. Confirmed social and project links

| Key | Label | Exact URL | Status | Intended placement |
| --- | --- | --- | --- | --- |
| `github` | GitHub | `https://github.com/Jakirhossain80` | `Confirmed` | Header/Footer as appropriate, Contact, About. |
| `linkedin` | LinkedIn | `https://www.linkedin.com/in/jakir-hossain-dev` | `Confirmed` | Header/Footer as appropriate, Contact. |
| `careerbridgeLive` | View CareerBridge live site | `https://careerbridge-client.vercel.app` | `Confirmed` | Featured project and case study. URL is confirmed; runtime availability was not verified in this phase. |
| `careerbridgeRepository` | View CareerBridge source | `https://github.com/Jakirhossain80/careerbridge` | `Confirmed` | Featured project and case study. |

Do not shorten, normalize, substitute, or guess alternatives for these URLs.

## 11. Photograph and résumé assets

| Key | Intended use | Repository result | Status | Requirements |
| --- | --- | --- | --- | --- |
| `profilePhoto` | Primary: Hero. Optional: About. | No image exists under `public/images/profile/`; only `.gitkeep` is present. | `Asset required` | Supply or copy the approved professional photograph before Hero implementation. Do not fabricate a path, generate a substitute, or use stock photography. |
| `resumeFile` | Hero/About/Contact download action | No résumé exists under `public/resume/`; only `.gitkeep` is present. | `Asset required` | Supply the final approved résumé before activating a download. Do not create or infer résumé content. |

When supplied, record the exact repository-relative path, format, publication approval, and accessible link label before implementation.

## 12. Skills inventory

Display priority values are recommendations for later content design, not proficiency levels.

| Display name | Category | Short description | Evidence source | Status | CareerBridge evidence | Display priority |
| --- | --- | --- | --- | --- | --- | --- |
| HTML5 | Frontend | Semantic document structure for web interfaces. | User-supplied list; JSX route/component source | `Confirmed` | Indirectly represented by rendered React structure; runtime accessibility not verified. | Prominent |
| CSS3 | Frontend | Responsive styling and browser-native presentation. | User-supplied list; CSS files in portfolio and CareerBridge | `Confirmed` | Stylesheets and Tailwind-based UI source exist. | Prominent |
| JavaScript | Frontend | Core browser and application language. | User-supplied list; React/Next.js source | `Confirmed` | Used through the TypeScript/React codebase. | Prominent |
| TypeScript | Frontend | Static typing for frontend and backend application code. | CareerBridge client/server manifests and `.ts`/`.tsx` source | `Repository verified` | Used in both applications. | Prominent |
| React | Frontend | Component-based interface development. | CareerBridge client manifest/source | `Repository verified` | Client uses React 19. | Prominent |
| Next.js | Frontend | App Router application architecture and rendering. | CareerBridge client manifest and `client/app` routes | `Repository verified` | Client uses Next.js App Router. | Prominent |
| Tailwind CSS | Frontend | Utility-first responsive styling. | CareerBridge client manifest/source | `Repository verified` | Tailwind CSS v4 is configured. | Prominent |
| TanStack Query | Frontend | Remote-state queries, mutations, caching, and invalidation. | Client manifest and hooks importing `@tanstack/react-query` | `Repository verified` | Present in public, employer, admin, settings, and notification hooks. | Prominent |
| React Hook Form | Frontend | Structured client-side form state. | Client manifest and form components | `Repository verified` | Used in admin, employer, settings, and job forms. | Secondary |
| Zod | Frontend | Runtime schemas and form/input validation. | Client manifest and validation/service source | `Repository verified` | Client validation schemas exist. | Secondary |
| Node.js | Backend and APIs | JavaScript runtime for the API application. | CareerBridge engine and server scripts | `Repository verified` | Server targets Node.js 22. | Prominent |
| Express.js | Backend and APIs | REST API server and middleware routing. | Server manifest and `server/src/app.ts` | `Repository verified` | Express app and versioned router exist. | Prominent |
| REST APIs | Backend and APIs | Versioned HTTP endpoints for application resources. | `server/src/app.ts` and route modules | `Repository verified` | `/api/v1` router mounts jobs, users, companies, applications, and other modules. Runtime behavior not verified. | Prominent |
| JWT authentication | Backend and APIs | Token-based authentication familiarity. | Current Phase 2 brief; `jsonwebtoken` dependency | `Confirmed` | Not verified as CareerBridge’s current primary auth flow; inspected middleware verifies Firebase bearer ID tokens. | Secondary |
| Firebase Admin | Backend and APIs | Server-side Firebase identity-token verification. | Server manifest and auth middleware | `Repository verified` | Firebase Admin verifies bearer ID tokens before user/role lookup. | Secondary |
| MongoDB | Database and authentication | Document database for application data. | CareerBridge server manifest/config and Mongoose models | `Repository verified` | Backend data models target MongoDB. Live Atlas connection was not inspected. | Prominent |
| Mongoose | Database and authentication | Typed schemas, models, queries, and relationships for MongoDB. | Server manifest and model/service source | `Repository verified` | Models exist for users, jobs, companies, applications, and related resources. | Prominent |
| Firebase Authentication | Database and authentication | Client identity for email/password workflows. | Client manifest and Firebase auth source | `Repository verified` | Registration, login, logout, password reset, and ID-token use exist in source. Google login was not verified from inspected source. | Prominent |
| JWT cookies | Database and authentication | Cookie-based token-session familiarity. | Current Phase 2 brief and portfolio `AGENTS.md` known-technology list | `Confirmed` | Not verified as the current CareerBridge flow; inspected API client sends Firebase bearer tokens. | Secondary |
| Git | Development tools and deployment | Source-control workflow. | User-supplied list; local Git repositories | `Confirmed` | Repository history exists, but Git tooling was unavailable in this session. | Prominent |
| GitHub | Development tools and deployment | Remote source hosting and collaboration. | Confirmed GitHub links | `Confirmed` | CareerBridge repository URL is confirmed. | Prominent |
| VS Code | Development tools and deployment | Familiar development editor. | Current Phase 2 brief | `Confirmed` | No repository evidence required; do not imply it is the only editor used. | Secondary |
| pnpm | Development tools and deployment | Primary package manager for this portfolio and CareerBridge workspace. | Both package manifests/workspace files | `Repository verified` | Active CareerBridge workspace package manager. | Prominent |
| npm | Development tools and deployment | Familiarity with the Node package ecosystem and npm commands. | Current Phase 2 brief | `Confirmed` | Not the active package manager for this portfolio or CareerBridge. | Secondary |
| Postman | Development tools and deployment | API exploration and request testing. | Current Phase 2 brief | `Confirmed` | No inspected collection or repository artifact; do not claim CareerBridge test coverage from it. | Secondary |
| Vercel | Development tools and deployment | Frontend deployment platform. | Confirmed CareerBridge live URL and project direction | `Confirmed` | A Vercel URL is confirmed, but live deployment behavior could not be verified. | Prominent |
| Render or similar hosting | Development tools and deployment | Backend/cloud hosting familiarity. | Current Phase 2 brief; CareerBridge README direction | `Confirmed` | Exact current CareerBridge backend host and deployment health are pending verification. | Secondary |

Restrictions:

- Do not add percentages, star ratings, numeric levels, “expert,” “advanced,” or years of experience.
- `pnpm` is the active project package manager; `npm` is secondary familiarity only.
- A technology being installed or imported proves repository use, not mastery or production success.

## 13. Services content status

| Key | Current value | Status | Notes |
| --- | --- | --- | --- |
| `services` | Final service names, scope, deliverables, exclusions, and engagement model | `Pending user confirmation` | Do not infer commercial services solely from technical skills. |
| `serviceAvailability` | Relationship between freelance availability and offered services | `Pending user confirmation` | Must remain accurate and updateable. |
| `clientEvidence` | Paid client work, testimonials, and outcomes | Empty | `Do not invent` | No approved client evidence has been supplied. |

## 14. Professional-experience content status

| Key | Current value | Status | Source and restrictions |
| --- | --- | --- | --- |
| `experience.currentRole.title` | Deputy Manager (Shipping) | `Confirmed` | Current Phase 2 brief. |
| `experience.currentRole.company` | Sunman Group | `Confirmed` | Current Phase 2 brief. |
| `experience.currentRole.startDate` | Empty | `Do not invent` | Employment date not supplied. |
| `experience.currentRole.endDate` | Empty | `Do not invent` | Do not assume “present” as a display date without approval. |
| `experience.currentRole.responsibilities` | Empty | `Pending user confirmation` | Do not infer shipping duties from the title. |
| `experience.currentRole.achievements` | Empty | `Do not invent` | No measurable outcomes supplied. |
| `experience.developerEmployment` | Empty | `Do not invent` | Project work must not be presented as paid developer employment. |
| `education` | Empty | `Pending user confirmation` | Include only if the user wants it displayed and supplies accurate details. |
| `certifications` | Empty | `Pending user confirmation` | Do not create or infer certifications. |
| `languages` | Empty | `Pending user confirmation` | Do not infer proficiency from location or conversation language. |

## 15. CareerBridge overview and copy

### Identity

| Key | Current value | Status | Source | Notes |
| --- | --- | --- | --- | --- |
| `id` | `careerbridge` | `Confirmed` | Portfolio route requirements | Stable future data ID. |
| `slug` | `careerbridge` | `Confirmed` | `/projects/careerbridge` requirement | Use for the dynamic case-study route. |
| `title` | CareerBridge | `Confirmed` | Current brief and repository | Preserve capitalization. |
| `projectType` | Full-stack job-portal portfolio project | `Draft — approval required` | Confirmed job-portal direction; client/server repository evidence | Do not label as paid client work or commercial success. |
| `projectStatus` | Active development; exact feature-completion and deployment status pending verification | `Draft — approval required` | Active local repository and README roadmap; runtime not verified | Prefer a concise “In development” label until user confirms current release status. |

### Draft descriptions

| Copy form | Draft value | Status |
| --- | --- | --- |
| One-line label | A full-stack job-portal project for job seekers, employers, and platform administrators. | `Draft — approval required` |
| Short project-card description | CareerBridge is a role-based job-portal project with a Next.js frontend and an Express/MongoDB backend, designed around job discovery, recruitment workflows, and platform administration. | `Draft — approval required` |
| Medium featured-project description | CareerBridge brings public job discovery and role-specific workflows into a full-stack application. Its repository uses a Next.js App Router client, an Express REST API, MongoDB models, Firebase identity verification, and separate experiences for job seekers, employers, administrators, and super administrators. Feature completion and live behavior still require final verification. | `Draft — approval required` |
| Case-study overview | CareerBridge is Md. Jakir Hossain’s primary portfolio project: a monorepo job-portal application with separate client and server packages. The source organizes UI routes, query hooks, API services, Express route/controller/service layers, MongoDB models, validation, and role-aware access. The case study should explain the architecture and verified implementation honestly while distinguishing source-backed work from incomplete, untested, or planned behavior. | `Draft — approval required` |
| Problem statement | Job seekers, employers, and platform administrators need distinct ways to discover opportunities, manage recruitment activity, and govern platform data within one coordinated system. | `Draft — approval required` |
| Solution summary | CareerBridge approaches this with a role-based Next.js client connected to a versioned Express API, MongoDB-backed domain models, Firebase identity verification, and separate workflows for job seekers, employers, administrators, and super administrators. | `Draft — approval required` |

Do not add user counts, revenue, conversion, performance improvements, client satisfaction, traffic, awards, or business impact.

## 16. CareerBridge detailed inventory

| Key | Current value | Status | Evidence or restriction |
| --- | --- | --- | --- |
| `title` | CareerBridge | `Confirmed` | User and repository. |
| `projectType` | Job-portal application; portfolio project | `Confirmed` | Current brief and repository documentation. |
| `shortDescription` | See draft copy above | `Draft — approval required` | Requires user approval. |
| `overview` | See draft copy above | `Draft — approval required` | Requires user approval. |
| `problem` | Multi-role recruitment and platform-management needs | `Draft — approval required` | Validate the user’s original motivation in a case-study interview. |
| `solution` | Separated Next.js client and Express API with role-aware workflows | `Repository verified` | Architecture exists in source; completeness/runtime not verified. |
| `targetUsers` | Public visitors, job seekers, employers, administrators, super administrators | `Repository verified` | Public and protected route structure plus exact role constants/source. |
| `mainFeatures` | Public job/company browsing; authentication; job-seeker, employer, admin, and notification-related source areas | `Repository verified` | Code areas/routes exist. Individual completion and end-to-end behavior remain pending. |
| `userRoles` | `super_admin`, `admin`, `employer`, `job_seeker` | `Repository verified` | Exact identifiers documented in repository instructions and used in source. |
| `technologyStack` | See categorized stack below | `Repository verified` | Based on manifests/imports, not logos or README claims alone. |
| `frontendArchitecture` | Next.js App Router with components, hooks, services, centralized Axios client, and TanStack Query | `Repository verified` | Client manifest, route tree, `lib/api.ts`, and query hooks. |
| `backendArchitecture` | Express `/api/v1` router with middleware, routes, controllers, services, validations, models, and repositories | `Repository verified` | `server/src/app.ts`, routes, and source tree. |
| `authenticationAuthorization` | Firebase client identity; Firebase Admin bearer ID-token verification; MongoDB user role/status lookup; client route guard and server role middleware | `Repository verified` | Inspected auth client, protected route, and server middleware. Runtime behavior not verified. |
| `databaseApproach` | MongoDB through Mongoose models | `Repository verified` | Server manifest and model files. Live database configuration/data not inspected. |
| `architecturalDecisions` | Monorepo separation, versioned API, layered client data flow, layered server request flow, server-enforced roles | `Repository verified` | Repository structure and inspected source. Rationale still requires user interview. |
| `developmentChallenges` | No approved case-study challenge narrative | `Pending user confirmation` | Use the interview questions below; do not infer difficulty from file complexity. |
| `implementedSolutions` | Source-backed patterns listed below | `Repository verified` | Describe as implementation patterns, not claimed outcomes. |
| `securityConsiderations` | Bearer-token verification, server role checks, account status handling, CORS, security headers, rate limiting, body limits, centralized errors | `Repository verified` | Presence verified in source; security effectiveness/audit status not verified. |
| `responsiveBehavior` | Tailwind UI source and many route layouts exist | `Pending user confirmation` | Do not call dashboards responsive until tested at required widths. |
| `screenshots` | None in the portfolio repository | `Asset required` | See checklist below. |
| `liveUrl` | `https://careerbridge-client.vercel.app` | `Confirmed` | Exact user-supplied URL; live behavior unavailable for verification. |
| `repositoryUrl` | `https://github.com/Jakirhossain80/careerbridge` | `Confirmed` | Exact user-supplied URL. |
| `status` | Active development; final label pending | `Draft — approval required` | README contains broad completion claims that require functional validation. |
| `knownLimitations` | Automated-test coverage, accessibility, performance benchmarking, monitoring, and final production readiness require user/status confirmation | `Pending user confirmation` | README flags several areas, but current resolution is not verified. |
| `plannedImprovements` | Final list not approved | `Pending user confirmation` | Do not copy the broad README roadmap into the portfolio without prioritization and approval. |
| `presentationNotes` | Lead with architecture, role separation, honest status, and verified screenshots; avoid “enterprise,” “production-ready,” or business-impact claims | `Confirmed` | Portfolio integrity rules. |

## 17. CareerBridge technology stack

| Area | Repository-verified technologies | Verification note |
| --- | --- | --- |
| Frontend | Next.js App Router, React, TypeScript, Tailwind CSS | Client manifest and route/source structure. |
| Backend | Node.js, Express.js, TypeScript, versioned REST routes | Server manifest and `server/src/app.ts`. |
| Database | MongoDB, Mongoose | Server manifest, config, models, and services. “MongoDB Atlas” is documented but the live provider was not inspected. |
| Authentication and authorization | Firebase Authentication, Firebase Admin, bearer Firebase ID tokens, MongoDB roles/status, client route guard, server role middleware | Inspected source. Do not describe JWT cookies as the current verified flow. |
| Validation and data fetching | Zod, React Hook Form, TanStack Query, Axios | Client/server manifests and imports. |
| Deployment and hosting | Vercel URL confirmed; Render is a documented direction | Deployment configuration and health were not verified. |
| Development tooling | pnpm workspace, ESLint, TypeScript scripts, Git/GitHub | Root/client/server manifests and confirmed repository link. |

Cloudinary and file-upload source also exist in the repository, but they should not be promoted in the portfolio stack until their current use and public relevance are confirmed.

## 18. CareerBridge features and roles

### Feature evidence

| Content area | Evidence found | Status | Portfolio wording restriction |
| --- | --- | --- | --- |
| Public job browsing and job details | Public job routes/pages, query hooks, server job routes/services/models | `Repository verified` | Say implementation exists; do not claim production data quality or successful end-to-end browsing. |
| Company information | Public company routes/pages and server company modules | `Repository verified` | Runtime data and completeness pending. |
| Registration and login | Auth pages and Firebase email/password source | `Repository verified` | Google sign-in is documented but was not verified in inspected source. |
| Job-seeker workflows | Profile, résumé, applications, saved jobs, alerts, interviews, and notification source areas | `Repository verified` | Feature completion and integration require validation. |
| Employer workflows | Company profile, jobs, applicants, interviews, analytics, and settings source areas | `Repository verified` | Do not describe all workflows as complete without functional testing. |
| Administrative management | Admin routes/pages and substantial admin API/service source | `Repository verified` | Exact permissions and completed operations require targeted validation. |
| Application management | Application pages, routes, controllers, services, validations, and model | `Repository verified` | End-to-end status workflow not verified. |
| Role-based authorization | Protected client route plus Firebase-token and role middleware | `Repository verified` | Server enforcement exists in source; penetration/security testing not performed. |
| Responsive dashboards | Dashboard route/layout source | `Pending user confirmation` | Must be visually tested; route presence is insufficient. |
| Theme support | Documented in CareerBridge README | `Pending user confirmation` | Do not claim complete light/dark/system coverage without source and visual verification. |

### Exact roles

| Identifier | Display label | Status | Evidence |
| --- | --- | --- | --- |
| `super_admin` | Super administrator | `Repository verified` | Repository instructions and role-aware source. |
| `admin` | Administrator | `Repository verified` | Repository instructions and role-aware source. |
| `employer` | Employer | `Repository verified` | Repository instructions and role-aware source. |
| `job_seeker` | Job seeker | `Repository verified` | Repository instructions, model default, and role-aware source. |

Role capabilities must be summarized only after targeted source/runtime verification; do not copy the README permission matrix as fully operational fact.

## 19. CareerBridge architecture

| Layer or decision | Inventory statement | Status | Evidence |
| --- | --- | --- | --- |
| Repository structure | Root pnpm workspace with `client` and `server` applications | `Repository verified` | Root manifest/workspace and directories. |
| Client routing | Next.js App Router with public, auth, job-seeker, employer, admin, and shared routes | `Repository verified` | `client/app` route tree. |
| Client data flow | Page/component → hook → service → centralized Axios API client; TanStack Query for remote state | `Repository verified` | Client README, hooks, services, and `lib/api.ts`. |
| API boundary | Express API mounted at `/api/v1` | `Repository verified` | `server/src/app.ts`. |
| Server flow | Router → middleware → controller → service → Mongoose model/database | `Repository verified` | Source structure and imports. |
| Identity | Firebase Authentication on client; Firebase Admin verifies ID tokens on server | `Repository verified` | Auth source and middleware. |
| Authorization | Backend role/status is authoritative; client guard improves navigation/UX | `Repository verified` | Protected route and server middleware. |
| Data model | Separate Mongoose models for core recruitment and platform concepts | `Repository verified` | Model directory. |
| Deployment topology | Vercel frontend and a separately hosted backend are intended | `Pending user confirmation` | Frontend URL is confirmed; backend host and live integration were not verified. |

## 20. CareerBridge challenges and solutions

### Repository-verified implementation patterns

These patterns may later support a challenge narrative, but they are not evidence of what the developer personally found difficult.

| Technical context | Implemented pattern | Status | Evidence |
| --- | --- | --- | --- |
| Multiple user roles and account states | Client access checks plus server token verification and reusable role middleware | `Repository verified` | `ProtectedRoute.tsx`, `auth.middleware.ts`, `role.middleware.ts`. |
| Shared API communication | Centralized Axios client attaches current Firebase ID tokens | `Repository verified` | `client/lib/api.ts`. |
| Growing domain surface | Versioned API and route/controller/service/model separation | `Repository verified` | `server/src/app.ts` and source tree. |
| Input consistency | Zod validation exists across client and server areas | `Repository verified` | Manifests and validation source. |
| Remote state coordination | TanStack Query hooks and query client patterns | `Repository verified` | Manifest and hook imports. |

### Pending case-study interview

No challenge/solution story is approved yet. Ask the user:

1. Which CareerBridge feature or integration required the most investigation, and why?
2. What concrete bug, constraint, or architectural trade-off was encountered?
3. Which alternatives were considered before the implemented approach was chosen?
4. Which files or commits best demonstrate the final solution?
5. What remains incomplete or would be redesigned with more time?
6. Which flows have been tested end to end against the deployed frontend and backend?
7. Were accessibility, responsive behavior, security, or performance findings measured? If so, what evidence can be shared?

Until answered, do not publish fictional “challenge,” “solution,” or measurable-result sections.

## 21. CareerBridge screenshot inventory

No CareerBridge screenshot exists under `public/images/projects/`. No image from the CareerBridge application was copied, generated, captured, renamed, or edited during this phase.

| Key | Path | Page/feature | Format | Dimensions | Suggested placement | Alt-text draft | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `careerbridgeScreenshots` | Not available | Not available | Not available | Not available | Featured project and case study | Draft after real image review | `Asset required` |

### Screenshot capture checklist

Capture only pages confirmed to work and use sanitized/non-sensitive data:

- Public landing or job-browsing view for the featured project card.
- Public job details view showing structure without private applicant data.
- Employer dashboard overview using safe demo data, only if the workflow is verified.
- Job-seeker dashboard or application view using safe demo data, only if verified.
- Administrative overview only if no personal records, emails, tokens, or private operational data are visible.
- One narrow/mobile view after responsive behavior is verified.

For every supplied screenshot, record its repository-relative path, represented feature, desktop/mobile format, pixel dimensions, portfolio placement, accurate alternative text, and approval status. Never disguise a placeholder or generated image as a real application screenshot.

## 22. Calls to action

| Key | Draft label | Intended target | Status | Restriction |
| --- | --- | --- | --- | --- |
| `viewProjects` | View Projects | `/projects` | `Draft — approval required` | Primary Hero action. |
| `viewCareerBridge` | Explore CareerBridge | `/projects/careerbridge` | `Draft — approval required` | Internal case-study action. |
| `viewLiveProject` | View Live Site | Confirmed CareerBridge live URL | `Draft — approval required` | Do not imply uptime or production completeness. |
| `viewSource` | View Repository | Confirmed CareerBridge repository URL | `Draft — approval required` | Prefer descriptive accessible context around the link. |
| `contact` | Contact Me | Homepage Contact section | `Draft — approval required` | Alternative: “Start a Conversation.” |
| `linkedin` | Connect on LinkedIn | Confirmed LinkedIn URL | `Draft — approval required` | Professional-networking action. |
| `github` | View GitHub Profile | Confirmed GitHub URL | `Draft — approval required` | Use a descriptive label, not a bare icon alone. |
| `resume` | Download Résumé | Approved future résumé path | `Draft — approval required` | Inactive/absent until the asset is supplied and approved. |

## 23. SEO-content inputs

| Key | Current value | Status | Notes |
| --- | --- | --- | --- |
| `siteName` | Md. Jakir Hossain | `Confirmed` | Can be paired with “Portfolio” in metadata templates. |
| `defaultTitle` | Md. Jakir Hossain \| Portfolio | `Confirmed` | Already used by the foundation metadata. |
| `professionalTitle` | MERN Stack & Next.js Web Developer | `Confirmed` | Do not add unsupported seniority or years. |
| `location` | Dhaka, Bangladesh | `Confirmed` | Appropriate for factual local context. |
| `defaultDescription` | Professional portfolio of Md. Jakir Hossain, a MERN Stack & Next.js web developer based in Dhaka, Bangladesh. | `Confirmed` | Existing foundation metadata; capitalization may be normalized later without changing meaning. |
| `careerbridgeMetaTitle` | CareerBridge Case Study \| Md. Jakir Hossain | `Draft — approval required` | Final metadata template decision pending. |
| `careerbridgeMetaDescription` | A case study of CareerBridge, a full-stack job-portal project built with a Next.js client and an Express/MongoDB backend. | `Draft — approval required` | Avoid “production-ready,” impact, scale, or completion claims. |
| `productionDomain` | Not supplied | `Pending user confirmation` | Required for canonical URLs, sitemap URLs, and absolute social metadata. |
| `socialPreviewImage` | Not supplied | `Asset required` | Create or use only after explicit approval. |

## 24. Confirmed content summary

- Professional name, display title, location, current employment title/company, career direction, and audiences.
- Exact GitHub, LinkedIn, CareerBridge live-site, and CareerBridge repository URLs.
- CareerBridge name, stable `careerbridge` slug, job-portal direction, monorepo client/server shape, exact roles, and repository-backed technology/architecture inventory.
- Professional photograph, résumé, email, screenshots, employment details, and project outcomes are not confirmed merely by this summary.

## 25. Draft content requiring approval

- Hero eyebrow, introduction, availability line, and action labels.
- CareerBridge type/status presentation, all six description formats, problem statement, and solution summary.
- CTA labels and CareerBridge SEO title/description.

Draft content must remain visibly distinguishable from approved facts until the user accepts or revises it.

## 26. Missing content and assets

- Approved professional photograph.
- Final approved résumé.
- Genuine CareerBridge screenshots.
- Public email and contact-form destination/provider details.
- Hero copy, availability wording, services, and process approval.
- Employment dates/responsibilities and optional education, certification, and language details.
- Additional genuine projects.
- Verified CareerBridge feature status, runtime limitations, responsive behavior, challenges, solutions, and prioritized improvements.
- Production domain and approved social-preview image.

## 27. Pending user-information checklist

- [ ] Supply the public portfolio email address, or confirm that no email should be displayed.
- [ ] Supply the final approved résumé file.
- [ ] Copy/supply the approved professional photograph and confirm publication permission.
- [ ] Approve or revise the short Hero introduction.
- [x] Approve the Phase 12 About introduction and biography direction.
- [ ] Supply employment dates and responsibilities if they should appear.
- [ ] Supply education details if they should appear.
- [ ] Supply certifications, if applicable and intended for display.
- [ ] Supply language information if it should appear.
- [ ] Approve the final availability wording and update policy.
- [ ] Define legitimate services and engagement boundaries.
- [ ] Supply additional genuine project details, if available.
- [ ] Supply approved CareerBridge screenshots without private data.
- [ ] Confirm the current CareerBridge completion/deployment status feature by feature.
- [ ] Answer the case-study challenge/solution interview questions.
- [ ] Confirm CareerBridge known limitations and prioritized improvements.
- [ ] Select the contact-form recipient, provider, fields, spam protection, and privacy requirements.
- [ ] Confirm the production portfolio domain and social-preview image decision.

## 28. TypeScript conversion notes

No TypeScript objects or interfaces are created in this phase. After content approval, the inventory can map to these future objects:

| Future object | Likely fields and relationships |
| --- | --- |
| `siteConfig` | Site name, default title/description, production URL, locale, theme requirement, résumé asset reference. |
| `navigationItems` | Stable ID, label, route or section target, order, visibility, external flag. |
| `personalProfile` | Full name, professional title, location, approved Hero/About copy, biography, employment summary, photograph reference, availability reference. |
| `socialLinks` | Stable ID, label, exact URL, accessible label, icon key, placement. |
| `skills` | Stable ID, display name, category ID, description, evidence/status metadata, display priority, CareerBridge relationship. |
| `services` | Stable ID, approved title/description, audience, deliverables, CTA relationship; content remains pending. |
| `projects` | Stable ID/slug, title, type, approved descriptions, status, roles, features, technology IDs, architecture, links, screenshots, limitations, improvements, featured flag. |
| `experience` | Stable ID, role, organization, approved dates, responsibilities, achievements, display order. Only title/company currently have values. |
| `processSteps` | Stable ID, approved title/description, order; content remains pending. |
| `contactDetails` | Approved public email, social-link references, availability reference, form-enabled flag, privacy copy. Provider credentials must never live here. |

Recommended relationships:

- Use stable skill IDs from `projects[].technologyIds` instead of duplicating technology records.
- Use `careerbridge` for both the project ID and route slug unless a later data model needs separate values.
- Reference social links and assets by stable IDs/paths after approval.
- Keep content status/source metadata available during drafting, but decide separately whether it belongs in the production bundle.
- Model optional or unavailable values explicitly; never populate missing fields with fabricated placeholders.
