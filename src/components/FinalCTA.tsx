import { ButtonLink } from './ButtonLink';
import { ScrollReveal } from './ScrollReveal';
import { Section } from './Section';

export function FinalCTA() {
  return (
    <Section
      id="join"
      className="relative overflow-hidden  bg-gradient-to-br from-amber-950 via-zinc-950 to-amber-950 py-28 md:py-40"
      containerClassName="relative z-50 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden>
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />
      </div>
      <ScrollReveal variant="prominent">
        <h2 className="relative text-balance text-3xl font-bold tracking-tight text-white md:text-4xl md:tracking-[-0.02em] lg:text-5xl">
          Stop searching. Start going out.
        </h2>
      </ScrollReveal>
      <ScrollReveal
        variant="default"
        delay={420}
        className="relative mt-10">
        <ButtonLink
          href="#how-it-works"
          variant="primary"
          className="min-w-48 px-10">
          Login
        </ButtonLink>
      </ScrollReveal>
    </Section>
  );
}
