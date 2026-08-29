# Browser and device verification

## Phase 34 summary

Phase 34 was conducted on 2026-08-29 on Windows 10.0.26200. No dependency was installed,
removed, or upgraded, and no application source change was required. Git was unavailable, so this
report does not claim that a Git diff was reviewed.

## Available coverage

| Target | Coverage | Result |
| --- | --- | --- |
| Google Chrome (Chromium-based) | Interactive browser automation | Passed the checks documented below. |
| Microsoft Edge | Installed locally | Not automated; the available browser-control connection exposed Chrome only. |
| Firefox | Installed locally | Inconclusive: a fresh-profile headless smoke attempt exited without a screenshot after its content subprocess failed to launch. No Firefox pass is claimed. |
| WebKit | Not installed or configured | Not tested. |
| Safari | Unavailable on Windows | Not tested; no Safari pass is claimed. |
| Android and iPhone hardware | No real devices connected | Not tested on real devices. |

The responsive checks used explicit CSS-pixel viewport overrides in desktop Chrome. They are
viewport emulation, not mobile-device or mobile-browser testing.

## Responsive and navigation checks

The homepage was checked at 320×568, 360×800, 375×667, 390×844, 430×932, 768×1024,
1024×768, 1440×900, and 1920×1080 CSS pixels. No horizontal document overflow was detected.
The mobile menu was present below the `xl` breakpoint and the desktop navigation was present at
1440 and 1920 pixels. The header remained sticky at the top of the viewport.

At 390×844, the open mobile-navigation panel stayed within the available viewport and retained
internal vertical scrolling. Escape closed the panel and returned focus to its trigger. The menu
links and theme control remained exposed through semantic navigation and native controls.

The About hash link resolved to `/#about`; after the smooth scroll completed, the section remained
below the 73-pixel sticky header and the About links received `aria-current="location"`. The
Projects listing navigated to the CareerBridge case study. An invalid project slug displayed the
global not-found recovery interface with homepage, project-directory, and email alternatives.

## Themes, keyboard, links, and media

- Light selected a light root color scheme and the documented light foreground/background.
- Dark selected a dark root color scheme and the documented dark foreground/background.
- System removed the explicit `data-theme` override and followed the Windows/Chrome dark preference.
- The skip link is first in source and keyboard order, has a visible solid focus outline, and targets
  `#main-content`.
- External project and professional-profile links announce that they open in a new tab and retain
  `target="_blank"` with `rel="noopener noreferrer"`.
- The CareerBridge image loaded successfully through `next/image`, retained meaningful alternative
  text and its source aspect ratio, did not overflow at 390 pixels, and used eager loading on the
  case-study route.
- Chrome reported no page console warnings or errors during the final homepage check.

The development environment could not download Geist or Geist Mono. Chrome therefore rendered the
documented system fallback stack. Font fallback was verified, but exact Geist rendering was not.

## Contact behavior

There is no approved Contact form, schema, or delivery provider, so form-field validation and
success feedback are not applicable. A provider-neutral `POST /api/contact` check used an empty
JSON body and sent no personal data or email. It returned `503`, `Cache-Control: no-store`, the
stable `CONTACT_FORM_UNAVAILABLE` code, an explicit statement that no message was sent, and the
confirmed `mailto:jakir.devbd@gmail.com` alternative.

## Remaining verification

1. Run the same interaction suite through configured Firefox and WebKit automation.
2. Test actual Safari on supported Apple hardware.
3. Test on representative physical Android and iPhone devices, including touch behavior and mobile
   browser chrome changes.
4. Recheck exact Geist rendering and the optimized production build in an environment that permits
   the required Google Fonts download, or after genuine local Geist assets are approved.

