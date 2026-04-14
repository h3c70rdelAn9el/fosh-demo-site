import { Section } from './Section'

const steps = [
  {
    step: '1',
    title: 'See what’s live near you',
    body: 'Location-aware listings so tonight’s options are obvious—not scattered across apps.',
  },
  {
    step: '2',
    title: 'Tune it to your night',
    body: 'Filter by date, genre, venue, or vibe—skip the noise, keep the good stuff.',
  },
  {
    step: '3',
    title: 'Go',
    body: 'Plans change; FOSH updates in real time. Decide, save, and show up.',
  },
] as const

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-zinc-900/35"
      containerClassName="max-w-5xl"
    >
      <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
        How it works
      </h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map(({ step, title, body }) => (
          <li key={step} className="relative flex flex-col items-center text-center">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/10 text-sm font-bold text-amber-400">
              {step}
            </span>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-pretty leading-relaxed text-zinc-400">{body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
