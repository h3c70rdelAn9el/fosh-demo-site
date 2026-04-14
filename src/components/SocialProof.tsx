import { ScrollReveal } from './ScrollReveal'
import { Section } from './Section'

export function SocialProof() {
  return (
    <Section id="community" className="border-t border-zinc-800/80 bg-zinc-950 py-20 md:py-28">
      <ScrollReveal variant="prominent">
        <blockquote className="text-center">
          <p className="text-lg leading-relaxed text-zinc-300 md:text-xl md:tracking-[-0.01em]">
            FOSH is live in Philadelphia—beta users are already using it to decide what to do tonight.
          </p>
          <footer className="mt-4 text-sm text-zinc-500">
            More cities and stories as we grow.
          </footer>
        </blockquote>
      </ScrollReveal>
    </Section>
  )
}
