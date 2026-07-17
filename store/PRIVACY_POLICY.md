# Site Scanner — Privacy Policy

**Effective date:** 2026-07-17

Site Scanner is a browser extension that audits websites the user chooses
to scan. This policy explains what the extension does and does not do with
data.

## What Site Scanner does

- The user manually enters a Start URL (or clicks the toolbar icon to
  prefill one from the active tab) for a site **they choose**.
- The extension then crawls that origin — fetching pages and linked
  resources from within the extension's own tab — to check for broken
  links, missing images, mixed content, lower-environment link leaks,
  spelling issues, basic SEO/accessibility problems, and user-supplied
  word/phrase matches.
- Scan results and lightweight scan history (which findings were seen on a
  previous run, per site origin) are saved using `chrome.storage.local`,
  which keeps data **on the user's own device**.
- Scan presets (pattern lists, ignore lists, search terms, checkbox
  settings) are likewise saved locally, keyed to the site origin, so
  repeat scans of the same site don't require re-entering configuration.

## What Site Scanner does not do

- It does not collect, transmit, sell, or share any data with the
  developer or any third party.
- It does not use analytics, telemetry, or tracking of any kind.
- It does not access browsing history beyond the single active tab's URL
  at the moment the toolbar icon is clicked (used only to prefill the
  Start URL field).
- It does not inject scripts into pages the user visits; it only fetches
  pages the user directs it to scan, from its own extension tab.
- It does not run remote or dynamically evaluated code. All logic ships in
  the extension package.

## Permissions

- **`activeTab`** — read the URL of the tab that was active when the
  toolbar icon was clicked, to prefill the scanner's Start URL field. No
  other access to that tab occurs.
- **`storage`** — save scan history and presets locally via
  `chrome.storage.local`. Nothing stored here ever leaves the browser.
- **Host permissions (`http://*/*`, `https://*/*`)** — required so the
  user can point the scanner at any website they choose to audit. The
  extension only fetches a site when the user explicitly enters its URL
  and starts a scan; it does not act on any site automatically or in the
  background.

## Data retention and deletion

All data lives in `chrome.storage.local` on the user's own device. Users
can clear it at any time via "Clear saved scan history for this origin" in
the extension, or by removing the extension entirely (which deletes its
local storage).

## Changes to this policy

If Site Scanner's data practices change, this document will be updated and
the effective date above will change accordingly.

## Contact

jackni41@gmail.com
