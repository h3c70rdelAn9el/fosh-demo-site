import { Section } from './Section'

const cards = [
  {
    title: 'For Users',
    body: 'Stop missing what’s happening around you.',
  },
  {
    title: 'For Organizers',
    body: 'Get your events seen—without needing a massive following.',
  },
] as const

export function AudienceSplit() {
  return (
    <Section id="for-you" className="bg-zinc-900/35" containerClassName="max-w-5xl">
      <h2 className="sr-only">For users and organizers</h2>
      <div className="grid gap-6 md:grid-cols-2">
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
