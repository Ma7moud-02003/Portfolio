# Mahmoud Amr — Portfolio

Full Stack Developer portfolio. Static site (HTML / CSS / vanilla JS with ES
modules) — no framework, no build step required.

## Run locally

Because `js/main.js` uses native ES module imports, you must serve the files
over HTTP — opening `index.html` directly (`file://`) will fail silently in
most browsers.

```bash
npm install
npm start
```

Then open `http://localhost:8080`.

Any static server works equally well, e.g. `npx serve .` or the VS Code
"Live Server" extension.

## Project structure

```
portfolio/
├── index.html          # Markup + SEO/meta tags
├── css/
│   └── style.css        # Design tokens, a11y helpers, custom styles
├── js/
│   ├── data.js           # Skills + projects content (edit this to update content)
│   ├── ui.js              # Rendering functions (DOM building)
│   └── main.js             # App entry point — event wiring
├── images/               # Project screenshots + profile photo
├── AUDIT.md             # Full engineering/design audit (before → after)
└── RESUME.md            # ATS-friendly resume (Markdown)
```

## Updating content

All editable content — skills, project descriptions, tech stacks, GitHub/demo
links — lives in `js/data.js`. You should not need to touch `index.html` or
`js/ui.js` to add a project or skill; just add an entry to the relevant array.

## Known limitation: Tailwind via CDN

This project still loads Tailwind via the `cdn.tailwindcss.com` script for
zero-build simplicity. That script ships the entire utility library
unminified-for-purge, which is fine for a portfolio's traffic level but is
**not** recommended for production apps at scale. If you want a smaller
CSS payload and Lighthouse boost, migrate to the Tailwind CLI or PostCSS
build (`npx tailwindcss init`) — see `AUDIT.md` for details.
