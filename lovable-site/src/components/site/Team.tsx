import { Container, SectionHead } from "./Section";

// Edit team members here.
export const TEAM = [
  { initial: "A", name: "[Founder name]", role: "[Title]", bio: "[One or two sentences about this person's background and what they focus on at Harborline.]" },
  { initial: "B", name: "[Founder name]", role: "[Title]", bio: "[One or two sentences about this person's background and what they focus on at Harborline.]" },
  { initial: "C", name: "[Founder name]", role: "[Title]", bio: "[One or two sentences about this person's background and what they focus on at Harborline.]" },
  { initial: "D", name: "[Founder name]", role: "[Title]", bio: "[One or two sentences about this person's background and what they focus on at Harborline.]" },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <Container>
        <SectionHead eyebrow="Our team" title="The people behind Harborline"
          sub="A group of friends who decided to invest together, and who own the company they run." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((p, i) => (
            <article key={p.initial} data-reveal data-delay={i * 100} className="card-lift rounded-2xl bg-card p-7">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy font-serif text-2xl text-brass ring-4 ring-ivory-2">
                {p.initial}
              </div>
              <h3 className="mt-6 text-xl">{p.name}</h3>
              <p className="eyebrow mt-1.5">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed">{p.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
