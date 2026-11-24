import { Container, SectionHead } from "./Section";

function Node({ name, role, primary }: { name: string; role: string; primary?: boolean }) {
  return (
    <div className={`rounded-xl px-6 py-5 text-center ${primary ? "bg-brass text-navy-deep" : "border border-on-navy/15 bg-navy-2"}`}>
      <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${primary ? "text-navy-2" : "text-brass"}`}>{role}</p>
      <p className={`mt-1.5 font-serif text-xl ${primary ? "text-navy-deep" : "text-on-navy"}`}>{name}</p>
    </div>
  );
}

function Connector({ second }: { second?: boolean }) {
  return (
    <div className="relative flex h-16 items-center justify-center">
      <svg viewBox="0 0 2 64" className="absolute h-16 w-0.5 overflow-visible" aria-hidden="true">
        <line x1="1" y1="0" x2="1" y2="64" stroke="var(--brass)" strokeWidth="1.5" className={`draw-line ${second ? "second" : ""}`} />
      </svg>
      <span className="relative rounded-full bg-navy px-3 text-[0.65rem] uppercase tracking-[0.2em] text-on-navy-muted">owns</span>
    </div>
  );
}

export function Companies() {
  return (
    <section id="portfolio" className="bg-navy on-navy py-24 md:py-32">
      <Container>
        <SectionHead eyebrow="Our companies" title="The Harborline group"
          sub="The operating businesses Harborline owns. We don't publish our individual public stock positions." />
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="diagram" className="mx-auto w-full max-w-md">
            <Node primary name="Harborline Asset Management, Inc." role="Parent company" />
            <Connector />
            <Node name="Northvale Supply LLC" role="Subsidiary" />
            <Connector second />
            <Node name="Rowan Copy" role="Operating company" />
            <div className="mt-8 rounded-xl border border-dashed border-on-navy/25 px-6 py-4 text-center text-sm">
              Also held: Public stocks &amp; early-stage stakes
            </div>
          </div>
          <div className="grid content-start gap-6">
            <article data-reveal className="card-lift rounded-2xl border border-on-navy/10 bg-navy-2 p-8">
              <span className="inline-block rounded-full border border-brass/40 px-3 py-1 text-xs text-brass">Owned by Harborline</span>
              <h3 className="mt-5 text-3xl">Northvale Supply LLC</h3>
              <p className="mt-3 leading-relaxed">An operating company within the Harborline group and the parent company of Rowan Copy.</p>
            </article>
            <article data-reveal data-delay="120" className="card-lift rounded-2xl border border-on-navy/10 bg-navy-2 p-8">
              <span className="inline-block rounded-full border border-brass/40 px-3 py-1 text-xs text-brass">Owned by Northvale Supply</span>
              <h3 className="mt-5 text-3xl">Rowan Copy</h3>
              <p className="mt-3 leading-relaxed">
                An AI website builder for small businesses. Owners describe their business in plain English and get
                a finished website they can edit, publish and host in one place.
              </p>
              <a href="https://rowancopy.com" target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-block font-medium text-brass transition-colors hover:text-on-navy">
                Visit rowancopy.com →
              </a>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
