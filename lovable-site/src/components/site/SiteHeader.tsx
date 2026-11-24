import { useState } from "react";
import { Logo } from "./Logo";
import { NAV } from "./nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-on-navy/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-on-navy-muted transition-colors hover:text-brass">
              {n.label}
            </a>
          ))}
          <a href="#founders" className="btn-brass !px-5 !py-2.5">Submit your startup</a>
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-on-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-on-navy/10 bg-navy px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="border-b border-on-navy/10 py-4 font-serif text-2xl text-on-navy">
                {n.label}
              </a>
            ))}
            <a href="#founders" onClick={() => setOpen(false)} className="btn-brass mt-6">Submit your startup</a>
          </nav>
        </div>
      )}
    </header>
  );
}
