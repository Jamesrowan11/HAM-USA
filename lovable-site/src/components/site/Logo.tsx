export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" className="fill-navy-2" />
      <circle cx="20" cy="20" r="7" className="fill-brass" />
      <rect x="6" y="22" width="28" height="12" className="fill-navy-2" />
      <rect x="8" y="23.5" width="24" height="1.8" rx=".9" className="fill-brass" />
      <rect x="12" y="28" width="16" height="1.8" rx=".9" className="fill-brass" opacity=".6" />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Harborline Asset Management, home">
      <LogoMark />
      <span className="leading-none">
        <span className="block font-serif text-xl text-on-navy">Harborline</span>
        <span className="mt-1 block text-[0.58rem] font-semibold tracking-[0.28em] text-brass">
          ASSET MANAGEMENT
        </span>
      </span>
    </a>
  );
}
