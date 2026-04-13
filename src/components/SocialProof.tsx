import { Section } from './Section'

export function SocialProof() {
  return (
    <Section id="community" className="border-t border-zinc-800/80 bg-zinc-950 py-16 md:py-20">
      <blockquote className="text-center">
        <p className="text-lg italic leading-relaxed text-zinc-500 md:text-xl">
          People are already discovering their local scene with FOSH.
        </p>
        <footer className="mt-4 text-sm text-zinc-600">
          — Real stories and stats coming soon
        </footer>
      </blockquote>
    </Section>
  )
}
