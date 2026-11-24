import type { ReactNode } from "react";
import { Container, SectionHead } from "./Section";

const PRINCIPLES = [
  ["Owners, not traders.", "We buy what we would be happy to hold for years."],
  ["Small checks, close attention.", "We would rather know five founders well than fifty in passing."],
  ["Plain dealing.", "Simple terms, straight answers, and decisions made quickly."],
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div data-reveal>
          <p className="eyebrow">About us</p>
          <p className="mt-6 max-w-4xl font-serif text-3xl font-light leading-snug text-navy sm:text-4xl md:text-[2.75rem]">
            Harborline is a small investment company owned by the people who run it. We put our own money to
            work, and <em className="italic text-brass-dark">we stay with the companies we back.</em>
          </p>
        </div>
        <div data-reveal className="mt-12 grid gap-6 text-lg leading-relaxed md:ml-auto md:max-w-3xl md:grid-cols-2 md:gap-10">
          <p>
            We started Harborline Asset Management to do two things well: hold shares in good public companies
            for the long run, and back tiny companies early, when a modest amount of money and real help can
            make a difference.
          </p>
          <p>
            We also own operating businesses. Northvale Supply LLC and its company Rowan Copy are part of the
            Harborline group, and we help run them day to day.
          </p>
        </div>
        <ol className="mt-20 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {PRINCIPLES.map(([t, d], i) => (
            <li key={t} data-reveal data-delay={i * 120} className="bg-ivory p-8">
              <span className="font-serif text-sm text-brass-dark">0{i + 1}</span>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3">{d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const WAYS = [
  {
    title: "Public stocks",
    icon: icon(<><path d="M4 26h24" /><path d="M6 20l6-6 5 4 9-10" /><path d="M21 8h5v5" /></>),
    text: "Long-term positions in listed companies whose businesses we understand and whose prices we think are fair.",
    bullets: ["Businesses we can explain in a sentence", "Bought to hold for years", "Sized so no single position can sink us"],
  },
  {
    title: "Early-stage companies",
    icon: icon(<><path d="M16 28V14" /><path d="M16 18c-6 0-9-4-9-9 5 0 9 3 9 9z" /><path d="M16 15c0-5 3-8 9-8 0 5-3 8-9 8z" /><path d="M9 28h14" /></>),
    text: "Small investments in tiny companies, often before anyone else has backed them, where our capital and help matter most.",
    bullets: ["Founders who are already building", "Real customers, or a clear path to them", "Hands-on support after we invest"],
  },
  {
    title: "Companies we own",
    icon: icon(<><path d="M4 28h24" /><path d="M7 28V12l7-5v21" /><path d="M14 28V14l11 4v10" /><path d="M10 15v2M10 20v2M19 21v2M22 21v2" /></>),
    text: "Businesses Harborline owns outright or controls, which we help run and grow alongside their teams.",
    bullets: ["Majority or full ownership", "Shared operations and know-how", "Profits reinvested across the group"],
  },
];

export function Approach() {
  return (
    <section id="approach" className="bg-ivory-2 py-24 md:py-32">
      <Container>
        <SectionHead eyebrow="Our approach" title="Three ways we invest"
          sub="Every investment is made with Harborline's own capital and held with a long view." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WAYS.map((w, i) => (
            <article key={w.title} data-reveal data-delay={i * 120} className="card-lift rounded-2xl bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-brass">{w.icon}</div>
              <h3 className="mt-7 text-2xl">{w.title}</h3>
              <p className="mt-3 leading-relaxed">{w.text}</p>
              <ul className="mt-6 space-y-3 border-t pt-6 text-sm">
                {w.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span className="text-navy">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
