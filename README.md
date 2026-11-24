# Mahmoud Amr — Portfolio

Full Stack Developer portfolio. Static site (HTML / CSS / vanilla JS with ES
modules) — no framework, no build step required.

## Live site

https://portfolio-fixit3.vercel.app/

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
