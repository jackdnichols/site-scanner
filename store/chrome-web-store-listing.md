# Chrome Web Store — Listing Copy

## Product name
Site Scanner

## Summary (132 char max)
Crawl any site you choose to find broken links, missing images, mixed
content, lower-env leaks, typos, and SEO/accessibility issues.

(131 characters)

## Detailed description

Site Scanner is a website auditing tool. Point it at any site you manage
or care about and run one or more crawlers against it:

- **Lower Env Links** — finds links that leak a lower-environment
  hostname or path (qa, uat, dev, test, stage, staging, preview) into a
  page that shouldn't reference them.
- **Broken Links** — crawls the site and checks every link, same-origin
  or external, for HTTP failures, with optional fragment/anchor
  verification.
- **Missing Images** — finds `<img>`, lazy-loaded, `srcset`, and
  CSS-background images that fail to load.
- **Mixed Content** — flags HTTP resources loaded on an HTTPS page.
- **Spell Check** — flags likely typos in page copy, titles, meta text,
  and alt/title/aria-label text.
- **Page Audit** — basic SEO/accessibility checks: missing/empty titles,
  missing meta descriptions, duplicate titles/descriptions across the
  crawl, missing/multiple `<h1>`, images without `alt`, and unlabeled
  form fields.
- **Word Search** — searches page copy for any list of words or phrases
  you supply.

Each scan runs independently or all at once, exports to CSV (or one
combined JSON file for everything), and remembers findings from your last
run per site so new issues are flagged since your previous scan. Optional
sitemap.xml seeding gives fuller crawl coverage on sites where internal
linking doesn't reach every page, and per-site presets save your pattern
lists and settings so repeat scans don't need re-configuring.

Site Scanner only touches a site when you explicitly enter its URL and
start a scan — it does not run in the background or collect any data.
Everything it saves (scan history, presets) stays on your device via
local browser storage; nothing is transmitted anywhere. See the privacy
policy for details.

## Category
Developer Tools

## Language
English (United States)

## Privacy policy URL
https://jackdnichols.github.io/site-scanner/privacy-policy.html
(served from `privacy-policy.html` at repo root via GitHub Pages)

## Single purpose description
(required field in the CWS developer dashboard)

Site Scanner audits the links, images, security posture (mixed content),
spelling, and basic SEO/accessibility of a website that the user
specifies, and reports the findings back to the user.

## Permissions justification
(required field in the CWS developer dashboard for each permission)

- **`activeTab`**: Used only to read the URL of the tab that was active
  when the toolbar icon was clicked, so the scanner's Start URL field can
  be prefilled with that page's origin. No content script is injected and
  no other access to the tab occurs.
- **`storage`**: Used to store scan history and per-origin presets
  locally via `chrome.storage.local`, so repeat scans of a site can flag
  findings that are new since the last run and don't require re-entering
  configuration. Nothing here is transmitted off the device.
- **Host permissions (`http://*/*`, `https://*/*`)**: Site Scanner is a
  user-directed auditing tool — the user manually types in the URL of any
  site they want to scan, and the extension crawls only that origin (plus
  linked resources it discovers) to check for broken links, missing
  images, mixed content, environment leaks, typos, and SEO/accessibility
  issues. Because the tool is not scoped to a fixed set of sites by
  design, broad host permissions are required at install time; no site is
  accessed unless the user explicitly enters its URL and starts a scan.

## Store assets checklist
- [ ] Icon 128×128 — have it: `icons/icon_128.png`
- [ ] At least 1 screenshot, 1280×800 or 640×400 (need to capture —
      run a scan in the loaded extension and screenshot the results tab)
- [ ] Small promo tile, 440×280 (optional but recommended)
- [ ] Privacy policy hosted at a public URL
