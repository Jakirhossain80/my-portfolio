# Design system

The direction is modern, professional, clean, and trustworthy. Use professional blue with restrained cyan accents, generous whitespace, moderate rounded corners, and soft borders and shadows. Geist Sans is primary; Geist Mono is for limited technical labels.

The source of truth is the semantic custom-property system in `src/app/globals.css`. Components should consume semantic variables or their mapped Tailwind utilities instead of repeating palette values.

## Color system

| Role | Light theme | Dark theme |
| --- | --- | --- |
| Background | `#F8FAFC` | `#020617` |
| Alternative surface | `#F1F5F9` | `#0F172A` |
| Card | `#FFFFFF` | `#111C2F` |
| Primary text | `#0F172A` | `#F8FAFC` |
| Secondary text | `#475569` | `#CBD5E1` |
| Muted text | `#64748B` | `#94A3B8` |
| Primary | `#2563EB` | `#3B82F6` |
| Primary hover | `#1D4ED8` | `#60A5FA` |
| Accent | `#06B6D4` | `#22D3EE` |
| Border | `#E2E8F0` | `#1E293B` |

Additional semantic roles are defined for `primary-foreground`, `accent-foreground`, `focus-ring`, `success`, `success-foreground`, `error`, and `error-foreground`. The dark-theme link treatment uses the approved lighter primary-hover blue so normal-sized linked text remains clear against the dark background.

Available Tailwind color utilities include `bg-background`, `bg-surface`, `bg-surface-alt`, `text-foreground`, `text-muted-foreground`, `text-primary`, `text-accent`, `border-border`, `outline-focus-ring`, and the corresponding foreground/status roles. CSS outside Tailwind can use the underlying properties such as `var(--surface)`.

## Themes

- System preference is the default and uses `prefers-color-scheme`.
- `data-theme="light"` or `data-theme="dark"` on the root element provides an explicit override for the future theme control.
- The browser `color-scheme` matches the active theme so native controls render appropriately.
- `ThemeProvider` manages the persisted preference for interactive consumers, while a `beforeInteractive` initializer sets the root attribute before hydration to avoid a theme flash.

## Typography

- Geist Sans is the default body and interface family through `--font-geist-sans` and Tailwind's `font-sans` utility.
- Geist Mono is reserved for technical labels, metadata, code, and compact status text through `--font-geist-mono` and `font-mono`.
- The scale runs from `0.75rem` (`xs`) through responsive `display` text. Body copy uses a `1.7` line height; headings use `1.1`–`1.2` and restrained negative tracking.
- Avoid using mono for paragraphs or decorative effect. Maintain readable line lengths and do not reduce normal body text below `1rem`.

## Layout and spacing

Container widths are `40rem`, `48rem`, `64rem`, and `75rem`. The shared `.container-shell` uses the `75rem` maximum with a fluid `1.25rem`–`2rem` page gutter.

Use `.section-spacing` for standard major sections (`4rem`–`7.5rem` block spacing) and `.section-spacing-compact` for intentionally tighter regions (`2.5rem`–`5rem`). These are foundations, not a reason to wrap every element in a utility class.

## Shape and elevation

- Radius tokens: `0.375rem`, `0.5rem`, `0.75rem`, and `1rem`, plus a full-pill value.
- Shadow tokens: small, medium, and large. Dark-theme shadows use stronger black alpha because light slate shadows are ineffective on dark surfaces.
- Prefer borders and the small shadow for ordinary cards. Reserve medium and large shadows for overlays or genuinely elevated content.

Tailwind mappings provide `rounded-sm` through `rounded-xl` and `shadow-sm` through `shadow-lg` from the same tokens.

## Focus and interaction

All keyboard-focusable elements receive a three-pixel semantic focus ring with a three-pixel offset. Blue is used in light mode and cyan in dark mode for clear contrast. Never remove it without an equally visible replacement.

Motion durations are `120ms` (fast), `200ms` (normal), and `320ms` (slow), using standard and emphasized easing tokens. Prefer the fast duration for hover/focus feedback, normal for small state changes, and slow only for a purposeful entrance or menu transition.

Use restrained hover effects and purposeful animation, never rely on hover alone, use pointer cursors only for interactive controls, and prevent horizontal overflow.

## Reduced motion

When `prefers-reduced-motion: reduce` is active, smooth scrolling is disabled, animations run once at effectively zero duration, and transitions become effectively immediate. Essential content must never depend on animation for visibility or comprehension.

## Global navigation

The Phase 10 Header keeps the confirmed brand link and desktop navigation server-rendered around a focused client navigation boundary. Desktop navigation begins at the `lg` breakpoint; smaller widths use an accessible disclosure button and dropdown navigation so controls do not crowd or overflow.

- Route links expose `aria-current="page"`; homepage section links expose `aria-current="location"` when their section is active.
- The mobile menu moves focus to its first link when opened, closes after navigation or an outside pointer action, and returns focus to the trigger when dismissed with Escape.
- Theme selection exposes System, Light, and Dark as direct native-select options.
- The sticky Header uses `overflow-x: clip` on the document so horizontal spill remains contained without creating a scrolling context that breaks sticky positioning.
- Smooth anchor scrolling uses the shared sticky-header offset and becomes immediate under `prefers-reduced-motion: reduce`.

Only links backed by implemented homepage sections belong in `siteConfig.homepageNavigation`. It includes About at `/#about`, Skills at `/#skills`, and Services at `/#services`; the implemented Hero is represented by the Home link. The required Contact action points to `/#contact`; its destination will become functional when the approved Contact section is implemented.

## Portfolio Hero

The Phase 11 Hero uses the shared sticky-header offset to fill the available first viewport without hiding content behind navigation. It keeps its readable text measure within the large container, stacks actions below 420px, and uses a restrained staggered CSS entrance that becomes effectively immediate under reduced-motion preferences. Its light/dark background treatment is composed from semantic background and accent tokens. Portrait and résumé controls are intentionally absent until genuine approved assets exist.

## About section

The Phase 12 About section uses a responsive two-column layout at large widths and a single reading flow on smaller screens. Concise biography paragraphs remain the visual priority; a restrained supporting card makes the approved problem-solving, reliability, and structured-work themes easy to scan. The section uses semantic tokens, existing foundational components, and no decorative media or client-side behavior.

## Skills section

The Skills section uses four restrained cards in a responsive one- or two-column grid. Each category separates primary technologies from supporting or familiar tools with visible text headings and semantic badge variants, so the distinction does not rely on color. Badges wrap naturally at narrow widths; percentages, ratings, progress indicators, decorative icons, and animation are intentionally absent.

## Services section

The Services section uses six equal-height cards in a responsive one-, two-, or three-column grid. Each card leads with one consistent decorative line icon and uses visible labels for the client need, typical deliverables, and related verified technologies. Service technology badges resolve from the typed Skills inventory. The section avoids guarantees, unsupported outcomes, interactive-card treatment, and unnecessary animation; its evidence CTA links to the existing Projects route.

## Foundational components

Phase 8 provides reusable layout primitives under `src/components/layout`, interface primitives under `src/components/ui`, and shared application components under `src/components/common`. These components consume the semantic tokens above and remain presentation-focused; they do not define portfolio-section content.

- `Container`, `Section`, and `SectionHeading` establish consistent widths, section spacing, surfaces, and heading hierarchy.
- `Button`, `IconButton`, `Badge`, and `Card` provide typed visual primitives with native semantics and shared interaction states.
- `SocialLink`, `TechnologyBadge`, and `ExternalLink` cover common portfolio display patterns without fixing them to specific content records or icon libraries.
- `ThemeToggle` cycles through system, light, and dark preferences, persists the selection, synchronizes it across tabs, and uses a pre-paint initializer to prevent a theme flash.
- `SkipToContent` is the canonical skip-link component; the earlier `SkipLink` export remains as a compatibility alias.
