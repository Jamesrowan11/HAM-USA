import type { ReactNode } from "react";
import { Container, SectionHead } from "./Section";

function Honeypot() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
      <label>Leave this field empty<input type="text" name="_hp" tabIndex={-1} autoComplete="off" /></label>
    </div>
  );
}

function F({ label, id, children, optional }: { label: string; id: string; children: ReactNode; optional?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label} {optional && <span className="font-normal text-slate">(optional)</span>}
      </label>
      {children}
    </div>
  );
}

const CHECKS = [
  ["Tiny is fine.", "Side projects that already have customers are welcome."],
  ["You're already building.", "A product, a pilot, or first sales, not just an idea."],
  ["A business we can understand.", "Clear customers and a clear way to earn money."],
  ["Room for help.", "Beyond capital, we help with the practical work: websites, operations and first customers."],
];

export function Founders() {
  return (
    <section id="founders" className="bg-ivory-2 py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="For founders" title="Building something small that could grow?"
            sub="We like to meet companies early. Tell us what you're building, and someone on our team will read it." />
          <ul data-reveal className="mt-10 space-y-5">
            {CHECKS.map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass text-navy-deep">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" /></svg>
                </span>
                <p><strong className="font-semibold text-navy">{t}</strong> {d}</p>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-10 rounded-xl border-l-2 border-brass bg-card p-6 text-sm leading-relaxed">
            We read every submission, but we can't reply to all of them. If it's a fit, we'll reach out to set up a call.
          </div>
        </div>
        <div data-reveal className="relative rounded-2xl bg-card p-7 shadow-[var(--shadow-lift)] sm:p-10">
          <h3 className="text-3xl">Submit your startup</h3>
          <p className="mt-2">A few details are enough to start.</p>
          <form method="post" action="{{FORM_ACTION}}" className="relative mt-8 grid gap-5">
            <input type="hidden" name="Form" value="Startup submission" />
            <Honeypot />
            <div className="grid gap-5 sm:grid-cols-2">
              <F label="Your name" id="s-name"><input id="s-name" name="Name" required autoComplete="name" className="field" /></F>
              <F label="Email" id="s-email"><input id="s-email" name="Email" type="email" required autoComplete="email" className="field" /></F>
              <F label="Company name" id="s-company"><input id="s-company" name="Company" required className="field" /></F>
              <F label="Website" id="s-web" optional><input id="s-web" name="Website" placeholder="example.com" className="field" /></F>
            </div>
            <F label="Stage" id="s-stage">
              <select id="s-stage" name="Stage" required defaultValue="" className="field">
                <option value="">Choose one</option>
                <option>Building, no revenue yet</option>
                <option>First customers</option>
                <option>Growing revenue</option>
                <option>Profitable</option>
              </select>
            </F>
            <F label="Looking for" id="s-look" optional><input id="s-look" name="Looking for" placeholder="e.g. $25,000 to hire a first employee" className="field" /></F>
            <F label="What does your company do?" id="s-about">
              <textarea id="s-about" name="About the company" required rows={5} placeholder="Who are your customers, what do you sell, and how is it going so far?" className="field" />
            </F>
            <button type="submit" className="btn-navy justify-self-start">Send submission</button>
            <p className="text-xs leading-relaxed">
              Please don't include confidential information. Sending a submission doesn't create any agreement or obligation on either side.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Contact" title="Get in touch"
            sub="Questions, partnerships, or a business you think we should know about. Send us a note." />
          <dl data-reveal className="mt-10 divide-y border-y text-sm">
            {[
              ["Company", <span key="c">Harborline Asset Management, Inc.</span>],
              ["Web", <span key="w">ham-usa.com</span>],
              ["Founders", <a key="f" href="#founders" className="text-brass-dark hover:text-navy">Submit your startup →</a>],
            ].map(([k, v]) => (
              <div key={String(k)} className="flex justify-between gap-4 py-4">
                <dt className="eyebrow !text-slate">{k}</dt>
                <dd className="text-right text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div data-reveal className="relative rounded-2xl bg-card p-7 shadow-[var(--shadow-lift)] sm:p-10">
          <h3 className="text-3xl">Send a message</h3>
          <p className="mt-2">We usually reply within a few business days.</p>
          <form method="post" action="{{FORM_ACTION}}" className="relative mt-8 grid gap-5">
            <input type="hidden" name="Form" value="General contact" />
            <Honeypot />
            <div className="grid gap-5 sm:grid-cols-2">
              <F label="Name" id="c-name"><input id="c-name" name="Name" required autoComplete="name" className="field" /></F>
              <F label="Email" id="c-email"><input id="c-email" name="Email" type="email" required autoComplete="email" className="field" /></F>
            </div>
            <F label="Topic" id="c-topic">
              <select id="c-topic" name="Topic" className="field">
                <option>General question</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </F>
            <F label="Message" id="c-msg"><textarea id="c-msg" name="Message" required rows={6} className="field" /></F>
            <button type="submit" className="btn-navy justify-self-start">Send message</button>
          </form>
        </div>
      </Container>
    </section>
  );
}
