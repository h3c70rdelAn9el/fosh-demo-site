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
            Most people don’t stay home from lack of interest—they stay home because what’s
            happening tonight is buried across feeds, flyers, and outdated calendars.
          </p>
          <footer className="mt-4 text-sm text-zinc-500">
            FOSH is an AI-powered, real-time local discovery layer: one place to see what’s live
            around you, built for how people actually decide to go out.
          </footer>
        </blockquote>
      </ScrollReveal>
    </Section>
  );
}
