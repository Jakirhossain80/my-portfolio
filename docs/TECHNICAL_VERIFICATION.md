# Technical verification

## Phase 33 summary

Phase 33 was conducted on 2026-08-29 using the installed repository toolchain. No dependency was
installed, removed, or upgraded. Git was unavailable, so this report does not claim that a Git diff
was reviewed.

## Verified toolchain

| Tool | Version |
| --- | --- |
| Node.js | 22.23.1 |
| pnpm | 11.5.2 |
| Next.js | 16.3.3 |
| React | 19.2.8 |
| TypeScript | 6.0.3 |
| ESLint | 9.39.5 |

Dependencies were already installed under `node_modules`. The lockfile remained unchanged.

## Authoritative quality commands

| Check | Command | Result | Baseline duration | Notes |
| --- | --- | --- | --- | --- |
| Lint | `pnpm lint` | Passed | 5.6 seconds | Zero reported warnings or errors. |
| Type checking | `pnpm typecheck` | Passed | 2.4 seconds | Strict TypeScript completed without diagnostics. |
| Production build | `pnpm build` | Blocked | 3.1 seconds | Next.js could not fetch Geist and Geist Mono from Google Fonts because outbound access is restricted. |

The repository has no automated unit/integration test script, formatter-check script, browser-test
suite, or automated accessibility-test command. Those checks were therefore not available to run.
ESLint is the documented formatting and code-quality mechanism.

## Runtime verification

The development application was verified at `/`, `/projects`, and `/projects/careerbridge`. All
three returned `200`, contained one primary heading and the shared page landmarks, and produced no
browser console warnings or errors. Global unknown routes returned `404` with `noindex` and the
approved recovery interface.

The finite project route now exports `dynamicParams = false`, matching its typed static data and
`generateStaticParams()` architecture. In development, Next.js still serves the project-specific
not-found screen as a documented streamed soft 404 (`200` with `noindex`). Its production status
code could not be verified because the production build is blocked.

`robots.txt`, `sitemap.xml`, and the CareerBridge JPEG returned successfully. Internal route and
homepage-fragment targets resolved. Confirmed HTTPS links were syntactically valid and retained
safe `noopener noreferrer` behavior; remote reachability could not be tested because outbound
network access was restricted.

The disabled contact endpoint correctly returned `503`, `Cache-Control: no-store`, a stable
`CONTACT_FORM_UNAVAILABLE` code, an explicit statement that no message was sent, and the confirmed
email alternative. No Contact form or schema exists because its recipient, provider, fields, spam
protection, and privacy requirements remain unapproved.

## Accessibility, theme, and responsive checks

- Verified 320, 375, 430, 768, 1024, 1440, and 1920 CSS-pixel widths without horizontal overflow.
- Verified the mobile navigation below the `xl` breakpoint and desktop navigation at larger widths.
- Verified menu-open focus movement, Escape dismissal, and focus restoration to the menu button.
- Verified that the skip link is first in keyboard order, shows a three-pixel focus outline, and
  moves focus to `main`.
- Verified Light and Dark set the corresponding root theme and color scheme; System removes the
  explicit root override and follows the operating-system color scheme.
- Verified one `main`, one `h1`, no positive `tabindex`, no empty links, descriptive project-image
  alternative text, and descriptive new-tab announcements.

## Performance and boundary review

The application uses Server Components by default, with client boundaries limited to navigation,
theme state, route-error recovery, and image-error recovery. It has no analytics, third-party
scripts, animation library, component library, or unnecessary data-fetching dependency. Project
media uses `next/image`, explicit intrinsic dimensions, responsive `sizes`, eager loading for the
case-study LCP candidate, and lazy loading for below-the-fold cards.

The development server initially reported a project-owned LCP warning for the case-study image.
Phase 33 corrected the shared image API to support an explicit loading strategy and marks only the
above-the-fold case-study image eager. A subsequent case-study request produced no new LCP warning.

A production bundle-size or optimized-route report could not be reviewed because the build did not
complete. Development responses and browser inspection showed no obvious layout shift, overflow,
console warning, or project-owned runtime error.

## Remaining blockers

1. Production build and production-server verification require build-time access to Google Fonts
   or separately approved, genuine local Geist font assets.
2. Remote external-link reachability requires outbound network access.
3. Automated test, browser-test, accessibility-test, and formatter-check suites are not configured.
4. Git status and diff review require an available Git executable.
