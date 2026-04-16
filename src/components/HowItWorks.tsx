import { ScrollReveal } from './ScrollReveal';
import { Section } from './Section';

const steps = [
  {
    step: '1.',
    title: 'Start with the map',
    body: 'See what’s live near you. Pan the city and see what’s happening. Location-aware listings so tonight’s options are obvious—not scattered across apps.',
  },
  {
    step: '2.',
    title: 'Tune it to your night',
    body: 'Filter by date, genre, venue, or vibe—skip the noise, keep the good stuff.',
  },
  {
    step: '3.',
    title: 'Do It Go',
    body: 'Pick something and head out. Plans change; FOSH updates in real time. Decide, save, and show up.',
  },
] as const;

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-zinc-900/35"
      containerClassName="max-w-5xl">
      <ScrollReveal variant="prominent">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl md:tracking-[-0.02em]">
          How it works
        </h2>
      </ScrollReveal>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map(({ step, title, body }, index) => (
          <li
            key={step}
            className="relative">
            <ScrollReveal
              delay={index * 240}
              amount="md"
              className="flex flex-col items-center text-center">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/10 text-sm font-bold text-amber-400">
                {step}
              </span>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-zinc-400">{body}</p>
            </ScrollReveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
