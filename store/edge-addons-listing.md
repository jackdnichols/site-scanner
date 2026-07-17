# Microsoft Edge Add-ons — Listing Copy

Edge accepts Chrome-compatible Manifest V3 packages, so the same
`site-scanner.zip` used for Chrome Web Store submission can be reused
as-is in Partner Center. Listing fields below.

## Product name
Site Scanner

## Short description (short summary shown in search results)
Crawl any site you choose to find broken links, missing images, mixed
content, lower-env leaks, typos, and SEO/accessibility issues.

## Detailed description
(same copy as `chrome-web-store-listing.md` — reuse verbatim)

## Category
Developer Tools

## Privacy policy URL
Same hosted URL used for the Chrome Web Store listing.

## Permissions justification
Edge's Partner Center review focuses on the same broad-host-permission
question as Chrome's. Reuse the justification text from
`chrome-web-store-listing.md` if a free-text field is presented; if
Partner Center only asks yes/no data-collection questions, answer "no
data is collected" per the privacy policy.

## Notes specific to Edge
- Requires a Microsoft Partner Center developer account (free, unlike
  Chrome's one-time $5 fee), tied to a Microsoft account.
- Edge cert review additionally checks basic accessibility of the
  extension's own UI (`site-scanner.html`) — worth a pass with a
  screen reader or the Edge accessibility insights tool before
  submitting, given the tool is a full HTML page rather than a popup.
- Store assets: same 128×128 icon works; Edge also wants at least one
  screenshot (1280×800 recommended) — reuse the one captured for the
  Chrome listing.
