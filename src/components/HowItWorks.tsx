import { Section } from './Section'

const steps = [
  {
    step: '1',
    title: 'Browse events near you',
    body: 'Find what’s happening in your city right now.',
  },
  {
    step: '2',
    title: 'Discover something new',
    body: 'Skip the noise. Find the stuff you actually want to go to.',
  },
  {
    step: '3',
    title: 'Show up',
    body: 'That’s it. No friction. Just go experience it.',
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
