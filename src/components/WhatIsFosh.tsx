import { ScrollReveal } from './ScrollReveal';
import { Section } from './Section';

const bullets = [
  'Discover what’s on near you, not just the headliners',
  'Filter by date, genre, venue, or vibe',
  'Real-time updates when plans change',
  'Save and go without app-hopping',
] as const;

export function WhatIsFosh() {
  return (
    <Section id="local" className="border-t border-zinc-800/80 bg-zinc-950">
      <ScrollReveal variant="prominent">
        <h2 className="text-balance text-3xl text-center font-bold tracking-tight text-white md:text-4xl md:tracking-[-0.02em]">
          Local live events shouldn’t be this hard to find
        </h2>
      </ScrollReveal>
      <ScrollReveal variant="default" delay={360} className="mt-8">
        <div className="space-y-6 text-lg text-left pl-4leading-relaxed text-zinc-400">
          <p>
            It’s easier to figure out what’s on TV tonight than what’s happening in your own
            neighborhood.
            <br />
            Everything’s scattered, Instagram, venue sites, outdated calendars.
            <br />
            FOSH puts what’s actually happening around you in one place; so you can find something
            and get out the door.
          </p>
        </div>
      </ScrollReveal>
      <ul className="mt-12 space-y-4 border-l-6 border-amber-500/40 ml-4 pl-4 text-left text-zinc-300">
        {bullets.map((line, index) => (
          <ScrollReveal key={line} variant="subtle" delay={420 + index * 200} amount="md">
            <li className="leading-relaxed">{line}</li>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
