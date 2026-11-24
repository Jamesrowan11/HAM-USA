import { Logo } from "./Logo";
import { NAV } from "./nav";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep on-navy py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm" aria-label="Footer">
            {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-brass">{n.label}</a>)}
            <a href="#founders" className="text-brass hover:text-on-navy">Submit your startup</a>
          </nav>
        </div>
        <div className="mt-12 space-y-4 border-t border-on-navy/10 pt-8 text-xs leading-relaxed text-on-navy/50">
          <p className="max-w-4xl">
            Harborline Asset Management, Inc. is a privately owned company that invests its own capital. It is not a registered investment adviser or broker-dealer, does not manage money for outside clients, and does not provide investment advice. Nothing on this website is an offer to sell, or a solicitation of an offer to buy, any security or investment product. Company descriptions are for general information only.
          </p>
          <p>© 2026 Harborline Asset Management, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
