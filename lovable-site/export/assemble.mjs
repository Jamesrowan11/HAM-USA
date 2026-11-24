// Puts the pre-rendered page, CSS and JavaScript into one self-contained HTML file.
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const [, , out] = process.argv;
const css = readFileSync("dist/app.css", "utf8");
const js = readFileSync("dist/app.js", "utf8").replace(/<\/script/gi, "<\\/script");
const { default: render } = await import(pathToFileURL("dist/render.mjs").href);
const markup = render();

const title = "Harborline Asset Management, Inc.";
const desc =
  "Harborline Asset Management, Inc. is a privately owned investment company. We invest our own capital in public stocks and in small, early-stage companies.";
const favicon =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#1b2a3e"/><circle cx="20" cy="20" r="7" fill="#d1a85a"/><rect x="6" y="22" width="28" height="12" fill="#1b2a3e"/><rect x="8" y="23.5" width="24" height="1.8" rx=".9" fill="#d1a85a"/><rect x="12" y="28" width="16" height="1.8" rx=".9" fill="#d1a85a" opacity=".6"/></svg>`,
  );

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://ham-usa.com/">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#16273d">
<link rel="icon" href="${favicon}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600&display=swap">
<style>${css}</style>
</head>
<body>
<div id="root">${markup}</div>
<script>${js}</script>
</body>
</html>
`;
writeFileSync(out, html);
console.log(`Wrote ${out} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
