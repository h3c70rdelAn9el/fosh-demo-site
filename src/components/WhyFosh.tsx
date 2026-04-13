import { Section } from './Section'

export function WhyFosh() {
  return (
    <Section id="why" className="border-t border-zinc-800/80 bg-zinc-950">
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
        Why FOSH exists
      </h2>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
        <p>Most platforms focus on big events.</p>
        <p>But that’s not where culture lives.</p>
        <p className="text-xl font-medium leading-snug text-zinc-200">
          FOSH is built for everything else—the small venues, the local artists,
          the moments that don’t get promoted but matter the most.
        </p>
      </div>
    </Section>
  )
}
