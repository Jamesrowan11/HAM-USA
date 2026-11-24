import logoAsset from "@/assets/harborline-logo-dark.png.asset.json";

export function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="Harborline Asset Management, home">
      <img
        src={logoAsset.url}
        alt="Harborline Asset Management INC"
        className="h-10 w-auto sm:h-11"
        width={153}
        height={48}
      />
    </a>
  );
}
