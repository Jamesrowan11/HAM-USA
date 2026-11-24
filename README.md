# ham-usa.com: Harborline Asset Management, Inc.

The public website for Harborline Asset Management, Inc. (HAM). It's designed in Lovable and
hosted on the rowan-web servers on DigitalOcean, published through Rowan Copy.

- **`ham-usa.html`** is the finished site: one self-contained HTML file (about 270 KB), ready to paste into Rowan Copy.
- **`lovable-site/`** is the source, copied from the Lovable project "Harborline Asset Management".

## Publishing (first time)

1. Log in to rowancopy.com and create a new site (e.g. "Harborline Asset Management").
2. In the editor: **Settings → Tools → edit the code**, replace everything with the contents of `ham-usa.html`, and save.
3. In **Settings**, set the domain to `ham-usa.com` and connect it. DNS is already set up in DigitalOcean:
   `@` and `www` A records → `138.197.252.90` (the rowan-web load balancer).
4. **Publish.** The HTTPS certificate is created on the first visit.

Both forms post to Rowan Copy (`{{FORM_ACTION}}` is filled in when the site is published), so
submissions show up in that site's Rowan Copy inbox and are emailed to the site owner.

## Changing the site

1. Make the change in Lovable (or edit `lovable-site/src/` directly). The team list is at the top of
   `lovable-site/src/components/site/Team.tsx`.
2. Copy any changed files from Lovable into `lovable-site/src/`, unchanged.
   Images uploaded in Lovable are imported as `src/assets/<name>.png.asset.json`; the real image isn't in
   Lovable's code, so download it (the `url` in that JSON, on the Lovable preview site) and save it next to
   the JSON as `src/assets/<original_filename>`. The build embeds it in the page. Keep images small (the
   logo is a 3x-size copy, 458x144, about 8 KB); the full-size upload is kept as `*.original.png`.
3. Rebuild (needs Node.js 20+):
   ```bash
   cd lovable-site && npm ci && npm run build
   ```
   This pre-renders the page and writes `ham-usa.html`.
4. Paste the new `ham-usa.html` into Rowan Copy and publish again.

Rules the page has to follow, because rowan-web serves it in a browser sandbox: no localStorage,
sessionStorage or cookies; forms are plain HTML forms with `action="{{FORM_ACTION}}"`; and no image files
(graphics are inline SVG). The file must stay under Rowan Copy's 1 MB limit.
