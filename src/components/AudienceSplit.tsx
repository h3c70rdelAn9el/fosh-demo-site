import { Section } from './Section'

const cards = [
  {
    title: 'Fans',
    body: 'Music, comedy, trivia, theater—without hunting across feeds and venue sites for tonight’s lineup.',
  },
  {
    title: 'Acts',
    body: 'Get found by the people who’d love your show—without betting everything on a single algorithm.',
  },
  {
    title: 'Venues',
    body: 'Clearer promotion, better turnout, and real-time updates when the night shifts.',
  },
] as const

export function AudienceSplit() {
  return (
    <Section id="for-you" className="bg-zinc-900/35" containerClassName="max-w-5xl">
      <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
        Built for the whole scene
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map(({ title, body }) => (
          <article
            key={title}
            className="rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-8 shadow-lg shadow-black/20 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
