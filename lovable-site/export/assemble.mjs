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
const favicon = `data:image/png;base64,${readFileSync("src/assets/favicon.png").toString("base64")}`;

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
