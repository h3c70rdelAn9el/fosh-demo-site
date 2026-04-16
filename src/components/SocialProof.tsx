import { ScrollReveal } from './ScrollReveal';
import { Section } from './Section';

export function SocialProof() {
  return (
    <Section
      id="community"
      className="border-t border-zinc-800/80 bg-zinc-950 py-20 md:py-28">
      <ScrollReveal variant="prominent">
        <blockquote className="text-center">
          <p className="text-lg leading-relaxed text-zinc-300 md:text-xl md:tracking-[-0.01em]">
            It’s easier to figure out what’s on TV tonight than what’s happening in your own
            neighborhood. Everything’s scattered—Instagram, venue sites, outdated calendars.
          </p>
          <footer className="mt-4 text-sm text-zinc-500">
            FOSH puts what’s actually happening around you in one place—so you can find something
            and get out the door.
          </footer>
        </blockquote>
      </ScrollReveal>
    </Section>
  );
}
