# Site Scanner

Personal browser extension: point it at any website and run seven scanners
against it — lower-environment link leaks, broken links, missing images,
mixed content, spelling/typos, a basic SEO/accessibility page audit, and
free-text word search. This is a standalone, general-purpose port of the
Site Inspector tool from the ACG-State-Switcher extension: it has no
knowledge of acg.aaa.com, meemic.com, or meemicfoundation.org, and no
ACG-specific state-switching functionality.

## Install (unpacked)

1. Open `chrome://extensions` (or the equivalent in your Chromium-based browser).
2. Enable Developer mode.
3. Click "Load unpacked" and select this folder.

## Use

Click the toolbar icon while on any `http(s)` page to open Site Scanner in a
new tab, prefilled with that page's origin. Or open `site-scanner.html`
directly and type in any Start URL.

- **Lower Env Links** — crawls the Start URL's origin and reports links that
  match a lower-environment pattern (`qa`, `uat`, `dev`, `test`, `stage`,
  `staging`, `preview`).
- **Broken Links** — crawls the origin and checks every link it finds, same-
  origin or external, for HTTP failures. Same-origin HTML links are crawled
  further; external/non-HTML links are status-checked but not crawled.
  Optionally verifies that `#fragment` anchors resolve to a real element on
  the target page.
- **Missing Images** — crawls the origin, collects image candidates
  (`img[src]`, lazy-load attrs, `srcset`, meta/link images, inline CSS
  backgrounds), and reports any that fail to load.
- **Mixed Content** — crawls an `https://` origin and flags any resource
  (`img`, `script`, `link`, `iframe`, `source`, inline/`<style>` CSS
  backgrounds) referenced over plain `http://`.
- **Spell Check** — flags known typos (and optionally unknown words) in page
  copy, titles, meta text, and alt/title/aria-label text.
- **Page Audit** — basic SEO/accessibility checks per page: missing/empty
  `<title>`, missing meta description, titles/descriptions duplicated across
  the crawl, missing/multiple `<h1>`, images missing `alt`, and form fields
  with no associated label.
- **Word Search** — searches page copy for a list of words/phrases you supply
  and reports where they show up.

Each scan can be run and stopped independently, or all at once with "Run
all"/"Stop all" (Word Search only joins "Run all" once you've entered search
terms). Results can be exported to CSV from each tab, or as one combined
JSON file via "Download all results (JSON)" in the top card.

### Scan history

Every scan remembers its findings from the last completed run on a given
origin (`chrome.storage.local`, keyed by scan type + origin) and tags
findings that are new since then with a **NEW** badge, plus a "New vs last
run" summary stat. "Clear saved scan history for this origin" in the top
card resets that comparison.

### Sitemap seeding

Check "Seed crawl queue from sitemap.xml" in the top card to have every scan
also fetch `<origin>/sitemap.xml` (following nested sitemap indexes) and add
same-origin URLs to its crawl queue, for fuller coverage on sites where
internal linking doesn't reach every page.

### Presets

"Scan presets for this origin" in the top card saves every pattern list,
ignore list, term list, and checkbox on the page — keyed to the origin of
the Lower Env Links Start URL — so repeat scans of a site don't need
re-pasting config each time.

## Notes

- Manifest V3, no remotely hosted code, no eval.
- `host_permissions` cover all `http(s)` origins, since this scanner isn't
  scoped to specific sites — that's the whole point of forking it out of
  ACG-State-Switcher.
- Runs as an extension tab, not injected into the scanned page, so fetches
  to the target site are cross-site. Cookies marked `SameSite=Lax/Strict` on
  the target (the default for most session cookies) won't be sent — scans
  see what a logged-out visitor sees, even if you're signed in on another tab.
- The Broken Links and Mixed Content scanners rely on the same cross-site
  fetch mechanism, so the same cookie caveat applies to link status checks.
- Not published to any extension store; for personal/local use.

## Not included

Live-tab console/network error capture (catching JS errors and failed
requests while you actively browse) was deliberately left out — it needs a
content script injected on every page, or the `debugger` API, instead of
the on-demand fetch-crawl this extension otherwise uses. Worth adding as a
separate, explicit permission bump if you want it later.
