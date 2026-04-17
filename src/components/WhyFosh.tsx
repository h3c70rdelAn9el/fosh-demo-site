import { ScrollReveal } from './ScrollReveal';
import { Section } from './Section';

export function WhyFosh() {
  return (
    <Section id="why" className="border-t border-zinc-800/80 bg-zinc-950">
      <ScrollReveal variant="prominent">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-white md:text-4xl md:tracking-[-0.02em]">
          Why FOSH exists
        </h2>
      </ScrollReveal>
      <ScrollReveal variant="default" delay={340} className="mt-8">
        <div className="space-y-6 text-left pl-4 text-lg leading-relaxed text-zinc-400">
          <p>
            Too many great nights never happen because they’re hard to find...while local acts and
            venues fight for attention in feeds that weren’t built for them.
          </p>
          <p className="text-xl font-medium leading-snug text-zinc-200">
            FOSH exists to make going out easier. More people show up. More rooms fill up. More of
            what’s happening gets seen.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
