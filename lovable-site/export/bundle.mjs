// Bundles the page twice with esbuild: once for the browser, once to pre-render it in Node.
// Lovable stores uploaded images on its own servers and imports them as "*.png.asset.json";
// here those imports become inline data: URLs made from the copy in src/assets/<original_filename>,
// so the published page doesn't depend on Lovable.
import { build } from "esbuild";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

const lovableAssets = {
  name: "lovable-assets",
  setup(b) {
    b.onLoad({ filter: /\.asset\.json$/ }, (args) => {
      const meta = JSON.parse(readFileSync(args.path, "utf8"));
      const file = path.join(path.dirname(args.path), meta.original_filename);
      if (!existsSync(file)) {
        return { errors: [{ text: `Missing ${path.relative(root, file)}. Download it from Lovable (${meta.url}) and save it there.` }] };
      }
      const url = `data:${meta.content_type};base64,${readFileSync(file).toString("base64")}`;
      return { contents: `export default ${JSON.stringify({ ...meta, url })};`, loader: "js" };
    });
  },
};

const common = {
  bundle: true,
  jsx: "automatic",
  alias: { "@": path.join(root, "src") },
  loader: { ".png": "dataurl", ".jpg": "dataurl", ".svg": "dataurl", ".webp": "dataurl" },
  define: { "process.env.NODE_ENV": '"production"' },
  plugins: [lovableAssets],
  logLevel: "warning",
  absWorkingDir: root,
};

await build({ ...common, entryPoints: ["export/client.tsx"], format: "iife", minify: true, target: "es2020", outfile: "dist/app.js" });
await build({ ...common, entryPoints: ["export/render.tsx"], format: "esm", platform: "node", packages: "external", outfile: "dist/render.mjs" });
