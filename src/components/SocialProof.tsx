import { Section } from './Section'

export function SocialProof() {
  return (
    <Section id="community" className="border-t border-zinc-800/80 bg-zinc-950 py-16 md:py-20">
      <blockquote className="text-center">
        <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
          FOSH is live in Philadelphia—beta users are already using it to decide what to do tonight.
        </p>
        <footer className="mt-4 text-sm text-zinc-500">
          More cities and stories as we grow.
        </footer>
      </blockquote>
    </Section>
  )
}
