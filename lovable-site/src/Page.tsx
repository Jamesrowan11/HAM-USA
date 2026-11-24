// The whole page, as in Lovable's src/routes/index.tsx (without the TanStack router).
import { SiteHeader } from "./components/site/SiteHeader";
import { Hero } from "./components/site/Hero";
import { About, Approach } from "./components/site/AboutApproach";
import { Companies } from "./components/site/Companies";
import { Team } from "./components/site/Team";
import { Founders, Contact } from "./components/site/Forms";
import { SiteFooter } from "./components/site/SiteFooter";
import { useReveal } from "./components/site/useReveal";

export function Page() {
  useReveal();
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Approach />
        <Companies />
        <Team />
        <Founders />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
