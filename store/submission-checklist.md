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
1. Register a developer account at the Chrome Web Store Developer
   Dashboard (one-time $5 fee) if you haven't already.
2. Create a new item, upload `site-scanner.zip`.
3. Fill in listing fields from `chrome-web-store-listing.md`: summary,
   detailed description, category, screenshots, privacy policy URL.
4. Complete the "Privacy practices" tab: single purpose description and
   per-permission justification, both drafted in
   `chrome-web-store-listing.md`.
5. Submit for review. Broad host permissions (`http://*/*`,
   `https://*/*`) can mean a longer review cycle — don't be surprised if
   it takes more than the typical few days.

## 5. Microsoft Edge Add-ons
1. Register a Partner Center developer account (free).
2. Create a new extension submission, upload the same
   `site-scanner.zip`.
3. Fill in listing fields from `edge-addons-listing.md`.
4. Submit for certification.

## 6. After approval
Update `README.md` — it currently says "Not published to any extension
store; for personal/local use." Replace that line with store links once
both listings are live.
