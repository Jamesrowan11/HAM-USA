#!/usr/bin/env bash
# Builds the Lovable site into one self-contained HTML file (../ham-usa.html) that can be
# pasted into Rowan Copy (Editor -> Settings -> Tools -> edit code) and published to ham-usa.com.
set -euo pipefail
cd "$(dirname "$0")/.."
[ -d node_modules ] || npm ci --no-audit --no-fund --loglevel=error
rm -rf dist && mkdir dist
npx @tailwindcss/cli -i src/styles.css -o dist/app.css --minify
node export/bundle.mjs
node export/assemble.mjs ../ham-usa.html
