# Md. Jakir Hossain — Portfolio

Professional portfolio website for **Md. Jakir Hossain**, a **MERN Stack & Next.js Web Developer** based in **Dhaka, Bangladesh**.

The portfolio presents technical skills, development services, professional experience, working process, and verified project work. CareerBridge is currently the primary featured project and case study.

## Project purpose

This portfolio is intended to support:

- Remote web-development opportunities
- Selected freelance projects
- Recruiter and employer evaluation
- Professional networking
- Presentation of verified technical skills
- Presentation of genuine project work
- Future expansion with additional verified projects

The website prioritizes accurate content, accessible interaction, responsive layouts, maintainable architecture, and restrained visual effects.

## Current milestone

The following foundations are implemented:

- Scrolling portfolio homepage
- Responsive global Header and Footer
- Hero section
- About section
- Skills section
- Services section
- Featured Projects section
- Professional Experience section
- Development Process section
- Projects directory
- Dynamic project case-study architecture
- CareerBridge project record and case-study foundation
- Light, dark, and system themes
- Responsive layout foundations
- Accessibility refinements
- SEO and social-metadata infrastructure
- Image-handling foundations
- Loading, error, and not-found states
- Content-verification documentation
- Technical-verification documentation
- Browser and device-verification documentation

The following items are not currently complete:

- Dedicated Contact section and Contact form
- Production Contact-form email delivery
- Resend configuration
- Final résumé asset
- Approved professional profile photograph at `public/images/profile/md-jakir-hossain-profile.webp`
- Unconfirmed CareerBridge case-study narrative
- Missing or unapproved CareerBridge screenshots
- Final production portfolio URL
- Final production canonical verification

The existing `/#contact` target resolves to the labelled contact region in the global Footer. Until a dedicated Contact form is approved and configured, visitors can use the public email, GitHub, and LinkedIn links.

Production-build verification may require network access when Google Fonts must be resolved during the build.

## Confirmed public information

| Item                    | Value                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| Name                    | Md. Jakir Hossain                                                                        |
| Professional title      | MERN Stack & Next.js Web Developer                                                       |
| Location                | Dhaka, Bangladesh                                                                        |
| Email                   | [jakir.devbd@gmail.com](mailto:jakir.devbd@gmail.com)                                    |
| GitHub                  | [github.com/Jakirhossain80](https://github.com/Jakirhossain80)                           |
| LinkedIn                | [linkedin.com/in/jakir-hossain-dev](https://www.linkedin.com/in/jakir-hossain-dev)       |
| CareerBridge live site  | [careerbridge-client.vercel.app](https://careerbridge-client.vercel.app)                 |
| CareerBridge repository | [github.com/Jakirhossain80/careerbridge](https://github.com/Jakirhossain80/careerbridge) |

Do not replace these values with guessed alternatives. Any future changes should first be confirmed in `docs/CONTENT.md`.

## Technology stack

### Core application

- Next.js 16 App Router
- React 19
- TypeScript with strict checking
- Tailwind CSS 4
- Geist Sans
- Geist Mono
- Next.js Metadata API
- Next.js Image component

### Interface and accessibility

- Semantic HTML
- Reusable typed components
- Responsive mobile-first layouts
- Light, dark, and system themes
- Keyboard-accessible navigation
- Visible focus indicators
- Reduced-motion support
- Accessible loading, error, and not-found states

### Development quality

- ESLint
- TypeScript compiler validation
- pnpm
- Production-build verification
- Typed portfolio data
- Repository documentation

### Verified foundation versions

| Package or runtime | Version |
| ------------------ | ------: |
| Node.js            | 22.23.1 |
| pnpm               |  11.5.2 |
| Next.js            |  16.3.3 |
| React              |  19.2.8 |
| TypeScript         |   6.0.3 |
| Tailwind CSS       |   4.3.3 |
| ESLint             |  9.39.5 |

The lockfile is authoritative. Do not upgrade dependencies merely because newer versions exist. Any upgrade must have an approved requirement and must be validated for compatibility.

## Features

### Portfolio presentation

- Professional identity and introduction
- About and biography content
- Categorized technical skills
- Web-development services
- Featured project presentation
- Professional employment information
- Development Process overview
- Public contact methods
- Responsive Header and Footer

### Project system

- Typed project-data model
- Featured-project selection
- Public Projects directory
- Dynamic project case-study routes
- Status-aware project content
- Verified technology references
- Conditional project links
- Missing-image fallback behavior
- Invalid-slug not-found handling
- Extensible project architecture

### Themes

- Light theme
- Dark theme
- System theme
- Persistent visitor preference
- Semantic design tokens
- Accessible Theme control
- Reduced incorrect-theme flashing
- Theme-aware borders, cards, forms, icons, and shadows

### Accessibility

- Semantic heading hierarchy
- Header, navigation, main, and Footer landmarks
- Skip-to-content link
- Keyboard navigation
- Visible focus indicators
- Descriptive link labels
- Image alternative text
- Reduced-motion support
- Accessible mobile navigation
- Accessible Theme selection
- Responsive zoom and reflow support

### Reliability

- Professional not-found page
- Invalid project-slug handling
- Route error recovery
- Honest missing-image states
- Safe unavailable Contact endpoint
- Safe external-link rendering
- No simulated email-delivery success

### SEO

- Global metadata
- Page-specific metadata
- Project-specific metadata
- Open Graph infrastructure
- Social-card infrastructure
- Favicon and icon support
- `robots.txt`
- `sitemap.xml`
- Structured-data foundations
- Public-route indexing controls

Final canonical and sitemap production verification remains dependent on the confirmed production `SITE_URL`.

## Route structure

| Route                    | Purpose                           | Status                                |
| ------------------------ | --------------------------------- | ------------------------------------- |
| `/`                      | Scrolling portfolio homepage      | Implemented                           |
| `/projects`              | Public project directory          | Implemented                           |
| `/projects/[slug]`       | Dynamic project case study        | Implemented                           |
| `/projects/careerbridge` | CareerBridge case study           | Implemented through the dynamic route |
| `/api/contact`           | Provider-neutral Contact endpoint | Disabled until delivery is configured |
| `/robots.txt`            | Search-engine crawling policy     | Implemented                           |
| `/sitemap.xml`           | Public-route sitemap              | Implemented conditionally             |
| Invalid route            | Professional not-found state      | Implemented                           |

### Homepage section links

The homepage may expose these section destinations when their matching sections exist:

```text
/#about
/#skills
/#services
/#projects
/#experience
/#process
/#contact
```

Global navigation should use route-safe links such as `/#about`, not only `#about`, so navigation works from nested project routes.

## Folder structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   │   └── careerbridge/
│   │   ├── social/
│   │   └── decorative/
│   ├── icons/
│   └── resume/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── projects/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── providers/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── lib/
│   ├── types/
│   └── utils/
├── docs/
│   ├── ARCHITECTURE.md
│   ├── BROWSER_DEVICE_VERIFICATION.md
│   ├── COMPONENTS.md
│   ├── CONTENT.md
│   ├── DESIGN_SYSTEM.md
│   ├── DEVELOPMENT_STANDARDS.md
│   ├── IMPLEMENTATION_PLAN.md
│   ├── REQUIREMENTS.md
│   └── TECHNICAL_VERIFICATION.md
├── .editorconfig
├── .env.example
├── .gitignore
├── AGENTS.md
├── eslint.config.*
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

The exact repository may contain only folders that currently have a real responsibility.

## Source architecture

### `src/app`

Contains:

- App Router pages
- Route composition
- Root layout
- Metadata
- Route handlers
- Loading states
- Error boundaries
- Not-found handling
- Robots and sitemap generation

### `src/components/common`

Contains shared application-level behavior and accessibility components, such as:

- Skip-to-content
- Back-to-top
- Reveal or state utilities, when implemented

### `src/components/layout`

Contains reusable layout components, such as:

- Container
- Section
- Header
- Footer
- Navigation structure

### `src/components/sections`

Contains homepage sections, such as:

- Hero
- About
- Skills
- Services
- Featured Projects
- Professional Experience
- Development Process

### `src/components/projects`

Contains project-specific presentation components, such as:

- Project cards
- Project grids
- Case-study sections
- Project-image fallbacks
- Project navigation

### `src/components/providers`

Contains narrowly scoped Client Component providers, such as:

- Theme preference provider

### `src/components/ui`

Contains reusable interface primitives, such as:

- Button
- IconButton
- Badge
- Card
- SocialLink
- ExternalLink
- ThemeToggle

### `src/data`

Contains authoritative typed portfolio content.

Project content is centralized in:

```text
src/data/projects.ts
```

The project model distinguishes:

- Project lifecycle status
- Implemented content
- In-progress content
- Planned content
- Evidence status
- Verified technologies
- Media
- Case-study sections
- External links

### `src/lib`

Contains shared application configuration and focused integration helpers.

### `src/types`

Contains reusable TypeScript contracts.

### `src/utils`

Contains small, pure lookup and formatting helpers.

## Prerequisites

Install:

- Node.js 22.x
- Corepack
- pnpm 11.x
- Git, recommended

Verify:

```bash
node --version
pnpm --version
```

Expected general result:

```text
Node.js 22.x
pnpm 11.x
```

## Local installation

### 1. Clone or open the project

```bash
git clone <portfolio-repository-url>
cd <portfolio-directory>
```

If the project already exists locally, open its root directory instead.

### 2. Enable Corepack

```bash
corepack enable
```

### 3. Install exact locked dependencies

```bash
pnpm install --frozen-lockfile
```

Use:

```bash
pnpm install
```

only when intentionally updating the lockfile as part of an approved dependency change.

Do not use npm or Yarn for this repository.

### 4. Prepare local environment configuration

If `.env.example` exists:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Do not commit `.env.local`.

### 5. Start development

```bash
pnpm dev
```

Open:

[http://localhost:3000](http://localhost:3000)

## Development commands

### Start the development server

```bash
pnpm dev
```

### Run linting

```bash
pnpm lint
```

### Run TypeScript checking

```bash
pnpm typecheck
```

### Run tests

Run the repository’s configured test command if one exists:

```bash
pnpm test
```

If `package.json` does not define a test script, do not assume automated test infrastructure is available.

### Create a production build

```bash
pnpm build
```

### Start the production server locally

If the `start` script exists in `package.json`:

```bash
pnpm start
```

## Standard validation sequence

Before considering a change complete, run:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

If no test script exists, run the available commands and report that automated tests are unavailable.

For a clean dependency verification:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

Do not hide warnings or disable rules solely to obtain passing output.

## Environment variables

### Current environment contract

#### `SITE_URL`

```dotenv
SITE_URL=http://localhost:3000
```

Purpose:

- Metadata base URL
- Canonical URLs
- Absolute Open Graph URLs
- Structured-data URLs
- Robots sitemap reference
- Sitemap entries

Development value:

```text
http://localhost:3000
```

Production value:

```text
https://your-final-portfolio-domain
```

The production value must:

- Be the exact public portfolio origin
- Use HTTPS
- Contain no trailing slash
- Not be guessed
- Not use the CareerBridge URL
- Not remain localhost

When `SITE_URL` is missing or invalid, the application safely omits host-dependent SEO output rather than inventing a production domain.

### Planned Contact-delivery variables

Contact delivery is not currently configured.

If Resend is approved and implemented later, the planned server-only variables are:

```dotenv
RESEND_API_KEY=
CONTACT_RECIPIENT_EMAIL=
CONTACT_FROM_EMAIL=
SITE_URL=http://localhost:3000
```

Intended production responsibilities:

```text
RESEND_API_KEY
    Resend server-side API credential

CONTACT_RECIPIENT_EMAIL
    Private inbox receiving portfolio messages

CONTACT_FROM_EMAIL
    Sender using a Resend-verified custom domain

SITE_URL
    Public portfolio origin
```

The confirmed recipient is:

```text
jakir.devbd@gmail.com
```

The authenticated sender must not use the visitor’s email address or an unverified Gmail address.

A future sender should resemble:

```text
Portfolio Contact <contact@verified-domain.com>
```

The visitor’s validated email should be used as `replyTo`.

Never prefix secret variables with:

```text
NEXT_PUBLIC_
```

Never commit real environment values.

## Contact-form status

The current Contact endpoint is intentionally provider-neutral and unavailable until an email service is configured.

Current behavior:

- No MongoDB
- No Express server
- No message storage
- No fabricated delivery success
- Safe unavailable response
- Direct email, GitHub, and LinkedIn remain available

A future Contact implementation should use:

```text
Contact form
    ↓
POST /api/contact
    ↓
Shared Zod validation
    ↓
Spam and abuse checks
    ↓
Resend
    ↓
jakir.devbd@gmail.com
```

Required form fields:

```text
Name
Email
Subject
Message
```

The browser and server must use the same authoritative validation rules.

Do not report the Contact form as operational until a genuine provider response confirms delivery acceptance.

## Contact-form configuration

To configure Contact delivery later:

1. Create a Resend account.
2. Add and verify a custom sending domain.
3. Create a restricted Resend API key.
4. Configure a sender using the verified domain.
5. Add real values to `.env.local`.
6. Add the same values to the deployment environment.
7. Keep the API key server-only.
8. Implement or enable the Resend delivery adapter.
9. Validate every request on the server.
10. Add basic spam protection.
11. Add reliable rate limiting where supported.
12. Test through mocks first.
13. Send a real test email only with explicit authorization.
14. Confirm successful receipt separately from provider acceptance.

Example local configuration:

```dotenv
RESEND_API_KEY=re_your_real_key
CONTACT_RECIPIENT_EMAIL=jakir.devbd@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <contact@your-verified-domain.com>
SITE_URL=http://localhost:3000
```

Never place these real values in `.env.example`.

## Deployment

Vercel is the recommended deployment platform for this Next.js application.

### 1. Push the repository

Push the verified project to the intended Git repository only after review.

### 2. Import into Vercel

In Vercel:

1. Select **Add New Project**.
2. Import the portfolio repository.
3. Confirm the framework is detected as Next.js.
4. Confirm pnpm is used.
5. Preserve the repository’s build command.
6. Preserve the output configuration recommended by Next.js.

### 3. Configure environment variables

At minimum, set:

```text
SITE_URL
```

Use the final HTTPS portfolio address.

If Contact delivery is later enabled, also configure:

```text
RESEND_API_KEY
CONTACT_RECIPIENT_EMAIL
CONTACT_FROM_EMAIL
```

Never expose the API key to browser code.

### 4. Deploy

Deploy the application and verify:

```text
/
/projects
/projects/careerbridge
/robots.txt
/sitemap.xml
```

Also verify an invalid project slug.

### 5. Verify production metadata

After the production URL is known:

- Confirm canonical URLs
- Confirm Open Graph URLs
- Confirm social-preview image
- Confirm favicon
- Confirm robots sitemap reference
- Confirm sitemap entries
- Confirm structured-data URLs
- Confirm localhost does not appear in production metadata

### 6. Verify production behavior

Check:

- Light, dark, and system themes
- Mobile navigation
- Keyboard navigation
- Images
- External links
- Not-found page
- Contact alternatives
- Browser console
- Network failures
- Responsive layouts

Do not mark deployment complete until these checks pass.

## Editing portfolio content

Use the shared typed data sources rather than hard-coding duplicate information in components.

### Project content

Edit:

```text
src/data/projects.ts
```

Use this file for:

- Project title
- Slug
- Summary
- Description
- Category
- Technologies
- Featured status
- Lifecycle status
- Evidence status
- Thumbnail
- Screenshots
- Live URL
- Repository URL
- Problem
- Solution
- Features
- Roles
- Architecture
- Challenges
- Outcomes
- Planned improvements

Do not present planned or incomplete features as completed.

### Personal information

Locate the existing authoritative profile or site configuration under:

```text
src/data/
src/lib/
```

or the repository’s current shared configuration file.

Update shared values rather than repeating them in individual components.

Confirmed values should remain synchronized with:

```text
docs/CONTENT.md
```

### Skills

Edit the existing typed skills source under:

```text
src/data/
```

Keep categories consistent:

- Frontend
- Backend and APIs
- Database and authentication
- Development tools and deployment

Do not add:

- Percentage ratings
- Star ratings
- Unsupported proficiency levels
- Invented years of experience

### Services

Edit the existing typed services source under:

```text
src/data/
```

Service claims must remain realistic and scope-dependent.

### Professional Experience

Edit the existing Experience source under:

```text
src/data/
```

Confirmed employment:

```text
Deputy Manager (Shipping)
Sunman Group
```

Do not invent dates, responsibilities, achievements, or metrics.

### Development Process

Edit the existing process source under:

```text
src/data/
```

Preserve the approved sequence:

1. Understand requirements
2. Define scope and architecture
3. Design responsive interfaces
4. Develop frontend and backend functionality
5. Test and fix issues
6. Deploy and support delivery

Do not promise unlimited revisions or guaranteed business results.

### Content authority

Use:

```text
docs/CONTENT.md
```

to distinguish:

- Confirmed content
- Repository-verified content
- Draft content
- Pending confirmation
- Missing assets
- Content that must not be invented

## Replacing the professional photograph

The approved professional photograph is implemented in the Hero at:

When replacing the approved image in the future:

1. Place it under:

```text
public/images/profile/
```

2. Use a clear filename, for example:

```text
md-jakir-hossain-profile.webp
```

3. Preserve the original high-quality source outside the published derivative when appropriate.
4. Optimize the published version.
5. Preserve natural facial detail and color.
6. Remove privacy-sensitive metadata where appropriate.
7. Do not stretch or distort the image.
8. Update the shared image reference.
9. Use `next/image`.
10. Define intrinsic dimensions or a stable aspect ratio.
11. Add an accurate `sizes` value.
12. Preload it only if it is genuinely above the fold.
13. Verify light and dark surrounding surfaces.
14. Verify the crop at mobile, tablet, and desktop sizes.
15. Use concise alternative text:

```text
Portrait of Md. Jakir Hossain
```

Do not generate or download a substitute portrait.

## Replacing project images

Place CareerBridge media under:

```text
public/images/projects/careerbridge/
```

Use descriptive filenames such as:

```text
careerbridge-project-thumbnail.webp
careerbridge-public-jobs-page.webp
careerbridge-employer-dashboard.webp
```

For every image:

1. Confirm it is genuine.
2. Confirm it represents an implemented or accurately labelled feature.
3. Remove private user information.
4. Preserve readable interface details.
5. Optimize file size without making text blurry.
6. Record accurate dimensions.
7. Add concise alternative text.
8. Update `src/data/projects.ts`.
9. Verify mobile layout.
10. Verify light and dark framing.
11. Verify lazy loading for off-screen images.

Do not use random screenshots or placeholders disguised as genuine project evidence.

## Adding a future project

Add a future project only when genuine information exists.

### 1. Prepare verified content

Collect:

- Project title
- Stable slug
- Short summary
- Longer description
- Project category
- Technologies
- Project status
- Evidence status
- Thumbnail
- Screenshots
- Live URL
- Repository URL
- Problem
- Solution
- Features
- Roles
- Architecture
- Challenges
- Outcomes
- Known limitations
- Planned improvements

Do not invent missing fields.

### 2. Add project media

Create a project-specific directory:

```text
public/images/projects/<project-slug>/
```

Use lowercase, hyphen-separated filenames.

### 3. Add the project record

Edit:

```text
src/data/projects.ts
```

Follow the existing `Project` type and CareerBridge record.

Conceptual example:

```ts
{
  title: "Verified Project Name",
  slug: "verified-project-name",
  summary: "A concise, truthful summary.",
  description: "A longer verified description.",
  category: "Full-stack web application",
  technologies: ["nextjs", "typescript"],
  featured: false,
  status: "in-progress",
  evidenceStatus: "repository-verified",
  thumbnail: {
    src: "/images/projects/verified-project-name/thumbnail.webp",
    alt: "Accurate description of the project interface",
    width: 1200,
    height: 750,
  },
  screenshots: [],
  liveUrl: undefined,
  repositoryUrl: undefined,
}
```

Use the repository’s actual type, field names, status values, and Skill IDs. Do not copy this conceptual object blindly.

### 4. Confirm public eligibility

A project should enter public listings only when:

- Its identity is genuine.
- Its summary is accurate.
- Its status is truthful.
- Its links are valid when present.
- Its media is genuine when present.
- It contains no private information.
- It is not merely example data.
- It is approved for public presentation.

### 5. Verify generated behavior

The shared project record should support:

- Project card
- Projects page
- Dynamic case-study route
- Metadata
- Sitemap inclusion when public
- Previous/next navigation
- Image fallback

Do not create a separate manually duplicated route for every future project unless architecture requirements change.

### 6. Validate

Run:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Then verify:

```text
/projects
/projects/<project-slug>
```

Also verify an invalid slug still returns the not-found page.

## Asset organization

Owned visual assets should remain organized by purpose:

```text
public/
├── images/
│   ├── profile/
│   ├── projects/
│   │   └── careerbridge/
│   ├── social/
│   └── decorative/
├── icons/
└── resume/
```

Guidelines:

- Use lowercase, hyphen-separated filenames.
- Avoid spaces.
- Avoid names such as `final`, `latest`, or `image1`.
- Preserve recoverable original assets where necessary.
- Do not publish private image metadata.
- Do not duplicate the same image unnecessarily.
- Do not add missing-image placeholders that appear to be real work.
- Keep favicons where Next.js file-based metadata expects them.

## Résumé

A final approved résumé asset is not currently implemented.

When supplied:

1. Verify that it belongs to Md. Jakir Hossain.
2. Review it for private information.
3. Confirm it is approved for public download.
4. Place it under:

```text
public/resume/
```

5. Use a descriptive filename, such as:

```text
md-jakir-hossain-resume.pdf
```

6. Add the shared résumé reference.
7. Enable the public download action.
8. Verify the download link.
9. Confirm its content does not contradict `docs/CONTENT.md`.

Do not create a fake résumé or invent education, employment dates, certifications, or experience.

## Themes

The portfolio supports:

```text
Light
Dark
System
```

Expected behavior:

- New visitors use System where configured.
- Light remains Light until changed.
- Dark remains Dark until changed.
- System follows the operating system.
- The selected preference persists.
- System remains selected even when resolved to Light or Dark.

When adding components:

- Use semantic color tokens.
- Test every component in Light and Dark.
- Preserve visible focus.
- Preserve sufficient contrast.
- Respect reduced motion.
- Do not add raw component-level colors without an approved exception.

## Accessibility requirements

All changes should preserve:

- Semantic headings
- Landmarks
- Skip-to-content
- Keyboard operation
- Visible focus
- Descriptive links
- Accurate alternative text
- Form labels
- Error associations
- Color contrast
- Touch-target sizes
- Reduced motion
- Mobile-menu accessibility
- Theme-control accessibility
- Responsive zoom and reflow

The project targets WCAG 2.2 Level AA practices but does not claim formal certification without a complete qualified audit.

## Responsive requirements

Verify changes at:

```text
320px
375px
430px
768px
1024px
1440px
1920px
```

Check:

- Header
- Mobile menu
- Hero stacking
- Profile photograph
- Heading wrapping
- Button wrapping
- Skills
- Services
- Project cards
- Case-study screenshots
- Contact area
- Footer
- Back-to-top
- Loading, error, and not-found states
- Horizontal overflow

Do not use JavaScript device detection for ordinary layouts.

## Browser verification

Where available, verify:

- Chromium
- Firefox
- WebKit
- Installed Chrome
- Installed Edge
- Actual Safari
- Android-sized emulation
- iPhone-sized emulation
- Physical devices

Reporting must remain precise:

- Playwright WebKit is not identical to actual Safari.
- Browser emulation is not a physical device.
- Do not claim a browser or device passed unless it was actually tested.

See:

[Browser and device verification](docs/BROWSER_DEVICE_VERIFICATION.md)

## Error and unavailable states

The application should distinguish:

- Loading
- Empty
- Not found
- Unexpected error
- Service unavailable
- Validation error
- Network error

Rules:

- Do not use loading UI for static routes unnecessarily.
- Do not add artificial delays.
- Invalid project slugs must use true not-found behavior.
- Missing images require honest fallbacks.
- Contact failures must preserve visitor input.
- Contact failure must never show success.
- Optional missing links must not render empty anchors.
- Every error state should provide an appropriate recovery action.

## Security and privacy

Do not:

- Commit environment secrets
- Expose server-only variables
- Publish private contact information
- Publish private screenshot data
- Store Contact messages without approval
- Add a database solely for Contact delivery
- Add Express without a real requirement
- Add authentication to the portfolio without a real requirement
- Log complete Contact messages
- Expose provider errors
- Add analytics without approval

## Documentation

Project documentation is available in:

- [Requirements](docs/REQUIREMENTS.md)
- [Content inventory](docs/CONTENT.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Components](docs/COMPONENTS.md)
- [Development standards](docs/DEVELOPMENT_STANDARDS.md)
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
- [Technical verification](docs/TECHNICAL_VERIFICATION.md)
- [Browser and device verification](docs/BROWSER_DEVICE_VERIFICATION.md)

When code behavior changes, update the relevant documentation in the same task.

## Maintenance checklist

Before completing a future change:

1. Read `AGENTS.md`.
2. Review applicable documentation.
3. Check existing Git changes.
4. Preserve user work.
5. Reuse existing data and components.
6. Avoid inventing content.
7. Verify Light, Dark, and System themes.
8. Verify mobile and desktop layouts.
9. Verify keyboard interaction.
10. Verify reduced motion.
11. Run linting.
12. Run type checking.
13. Run relevant tests.
14. Run the production build.
15. Review warnings.
16. Review the final diff.
17. Update documentation.
18. Do not commit, push, or deploy unless explicitly requested.

## Known pending decisions

The following still require user input or external configuration:

- Final portfolio production URL
- Final custom domain
- Final `SITE_URL`
- Final résumé
- Final CareerBridge screenshots
- Final approval of incomplete CareerBridge narrative
- Final CareerBridge project status where evidence remains incomplete
- Resend account and API key
- Verified Contact sending domain
- Contact sender address
- Production rate-limiting approach
- Real Safari verification, when unavailable
- Physical Android and iPhone verification, when unavailable

Do not resolve these by guessing.

## Project integrity rules

- Do not fabricate content.
- Do not fabricate project results.
- Do not invent clients.
- Do not invent testimonials.
- Do not invent project metrics.
- Do not invent employment dates.
- Do not invent education or certifications.
- Do not describe personal learning as paid client work.
- Do not describe unfinished functionality as complete.
- Do not expose secrets.
- Do not simulate email success.
- Do not add unnecessary dependencies.
- Do not weaken TypeScript or ESLint.
- Do not redesign established interfaces without authorization.
- Do not commit, push, or deploy without explicit instruction.

## Contact

**Md. Jakir Hossain**  
MERN Stack & Next.js Web Developer  
Dhaka, Bangladesh

- Email: [jakir.devbd@gmail.com](mailto:jakir.devbd@gmail.com)
- GitHub: [github.com/Jakirhossain80](https://github.com/Jakirhossain80)
- LinkedIn: [linkedin.com/in/jakir-hossain-dev](https://www.linkedin.com/in/jakir-hossain-dev)
