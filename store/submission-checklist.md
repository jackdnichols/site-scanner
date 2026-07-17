# Submission checklist

## 1. Host the privacy policy
`privacy-policy.html` (repo root) needs a public URL before either store
will accept the listing.

- [x] Pushed to `github.com/jackdnichols/site-scanner` (main branch)
- [x] Enabled GitHub Pages: Source "Deploy from a branch", branch `main`,
      folder `/ (root)`
- [x] Confirmed live at
      https://jackdnichols.github.io/site-scanner/privacy-policy.html

Both listing docs already reference this URL.

## 2. Capture a screenshot
- [x] `store/screenshots/page-audit-results.png` — 1280×800, Page Audit
      results against tubitv.com (real findings: missing `<h1>`, missing
      alt, missing meta description), browser chrome and bookmarks
      cropped out.

## 3. Package the extension
```
cd "/home/jack@hq.nicholssoftware.com/ProjectsGit/Site-Scanner"
zip -r site-scanner.zip manifest.json background.js site-scanner.html \
  site-scanner.js icons -x "*.DS_Store"
```
Don't include `store/`, `.git/`, or `.claude/` in the zip — only files the
manifest references.

## 4. Chrome Web Store
- [x] Uploaded `site-scanner.zip` (manifest description trimmed to 123
      chars to clear the 132-char validation error)
- [x] Listing fields, single purpose description, and all three
      permission justifications filled in from `chrome-web-store-listing.md`
- [x] Flagged for in-depth review over broad host permissions (expected,
      not a rejection — see justification text)
- [x] Submitted for review — pending as of 2026-07-17

## 5. Microsoft Edge Add-ons
- [x] Uploaded `site-scanner.zip`, listing fields from
      `edge-addons-listing.md`, logo `store/logo/store-logo-300.png`,
      visibility set to Hidden
- [x] Submitted for certification — pending as of 2026-07-17

## 6. After approval
Update `README.md` — it currently says "Not published to any extension
store; for personal/local use." Replace that line with store links once
both listings are live. **Waiting on user confirmation of approval before
making this edit** (see memory note `project_store_submission`).
