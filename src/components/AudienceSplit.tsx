import { HERO_BG } from '@/constants/site-images';

import { ScrollReveal } from './ScrollReveal';

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
] as const;

export function AudienceSplit() {
  return (
    <section
      id="for-you"
      className="relative isolate overflow-hidden border-y border-zinc-800/80 bg-zinc-950 px-6 py-20 md:py-28"
    >
      {/* Same hero photo, viewport-fixed (does not scroll with the section) — clipped to this band */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-1 bg-linear-to-b from-zinc-950/82 via-zinc-950/72 to-zinc-950/88"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built for the whole scene
          </h2>
        </ScrollReveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, body }, index) => (
            <ScrollReveal key={title} delay={index * 100} amount="md">
              <article className="h-full rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-8 shadow-lg shadow-black/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
