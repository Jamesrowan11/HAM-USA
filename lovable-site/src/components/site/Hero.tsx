const FACTS = [
  ["Privately owned", "Founded in 2026 by a group of friends."],
  ["Our own capital", "We don't manage money for outside clients."],
  ["Long horizon", "We buy to hold, not to trade."],
];

function HarborArt() {
  const lines = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <svg viewBox="0 0 600 500" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brass)" />
          <stop offset="70%" stopColor="var(--brass-dark)" />
          <stop offset="100%" stopColor="var(--brass-dark)" stopOpacity=".9" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brass)" stopOpacity=".45" />
          <stop offset="100%" stopColor="var(--brass)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fade" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--brass)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--brass)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--brass)" stopOpacity="0" />
        </linearGradient>
        <clipPath id="sky"><rect width="600" height="290" /></clipPath>
      </defs>
      <circle cx="300" cy="290" r="220" fill="url(#halo)" className="anim-glow" />
      <g clipPath="url(#sky)" fill="none" stroke="var(--brass)">
        {[90, 130, 175, 225, 280].map((r, i) => (
          <circle key={r} cx="300" cy="290" r={r} strokeWidth="1" opacity={0.45 - i * 0.07}
            className="anim-ring" style={{ animationDelay: `${i * 0.8}s` }} />
        ))}
        <circle cx="300" cy="290" r="62" fill="url(#sun)" stroke="none" />
      </g>
      <line x1="0" y1="290" x2="600" y2="290" stroke="url(#fade)" strokeWidth="1.5" />
      {lines.map((i) => {
        const y = 306 + i * i * 2.6 + i * 10;
        const w = 260 - i * 22;
        return (
          <g key={i} opacity={0.9 - i * 0.09}>
            <line x1="0" y1={y} x2="600" y2={y} stroke="var(--on-navy)" strokeOpacity=".07" />
            <rect x={300 - w / 2} y={y - 1} width={w} height="2" rx="1" fill="url(#fade)"
              className="anim-shimmer" style={{ animationDelay: `${i * 0.6}s` }} />
          </g>
        );
      })}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-hero grain on-navy relative overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
        <div>
          <p className="eyebrow">Harborline Asset Management, Inc.</p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            Patient capital for public markets and{" "}
            <em className="font-light italic text-brass">small companies</em>.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed">
            We are a privately owned investment company. We invest our own money in public stocks and in
            small, early-stage businesses, and we own and help run companies we believe in.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#founders" className="btn-brass">Submit your startup</a>
            <a href="#approach" className="btn-ghost-light">How we invest</a>
          </div>
        </div>
        <div className="relative -mx-5 aspect-[6/5] sm:mx-0">
          <HarborArt />
        </div>
      </div>
      <div className="relative z-10 border-t border-on-navy/10">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-3">
          {FACTS.map(([t, d], i) => (
            <div key={t} className={`px-5 py-7 sm:px-8 ${i ? "border-t border-on-navy/10 sm:border-l sm:border-t-0" : ""}`}>
              <h3 className="font-serif text-xl">{t}</h3>
              <p className="mt-1.5 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
