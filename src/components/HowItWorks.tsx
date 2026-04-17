import { ScrollReveal } from './ScrollReveal';
import { Section } from './Section';

const steps = [
  {
    step: '1.',
    title: 'Start with the map',
    body: "Pan the city and see what's happening.",
  },
  {
    step: '2.',
    title: 'Tune it to your night',
    body: "Filter by day, neighborhood, or what you're into.",
  },
  {
    step: '3.',
    title: 'Do it',
    body: 'Pick something, share it with your friends, and head out.',
  },
] as const;

export function HowItWorks() {
  return (
    <div className="relative rounded-xl p-[2px] overflow-hidden">
      {/* Spinning conic gradient border */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            'conic-gradient(from var(--angle), #92400e, #fbbf24, #f59e0b, #d97706, #92400e)',
          animation: 'spin-border 3s linear infinite',
        }}
      />

      {/* Inner surface — must be opaque to hide the gradient behind it */}
      <div className="relative z-10 rounded-[10px] overflow-hidden bg-zinc-900">
        <Section
          id="how-it-works"
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
      </div>
    </div>
  );
}
