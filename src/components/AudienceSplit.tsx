import Image from 'next/image';

import { HERO_BG } from '@/constants/site-images';

import { ScrollReveal } from './ScrollReveal';

const cards = [
  {
    title: 'Fans',
    body: 'Finding something you want to do now is now much easier.',
  },
  {
    title: 'Acts',
    body: 'Worry less about filling up rooms and getting invited back.',
  },
  {
    title: 'Venues',
    body: 'Show what’s happening, bring people in, and build on what works.',
  },
] as const;

export function AudienceSplit() {
  return (
    <section
      id="for-you"
      className="relative isolate overflow-hidden border-y px-6 py-20 md:py-28">
      {/* Same crowd photo as hero; slow drift reads as “alive” without video. */}
      {/* Remove section-specific background image; now handled globally */}
      <div
        className="absolute inset-0 z-[1] bg-linear-to-b from-zinc-950/82 via-zinc-950/72 to-zinc-950/88"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Left card: slide in from left */}
          <ScrollReveal
            delay={0}
            amount="md"
            className="transition-transform duration-1000 will-change-transform"
            variant="default"
            direction="left">
            <article className="h-full rounded-2xl border  border-gray-700  bg-zinc-950/60 p-8 shadow-lg shadow-amber-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">{cards[0].title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">{cards[0].body}</p>
            </article>
          </ScrollReveal>
          {/* Middle card: fade/scale in (default) */}
          <ScrollReveal
            delay={260}
            amount="md"
            className="transition-transform duration-1000 will-change-transform"
            variant="default"
            direction="center">
            <article className="h-full rounded-2xl border  border-gray-700  bg-zinc-950/60 p-8 shadow-lg shadow-amber-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">{cards[1].title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">{cards[1].body}</p>
            </article>
          </ScrollReveal>
          {/* Right card: slide in from right */}
          <ScrollReveal
            delay={520}
            amount="md"
            className="transition-transform duration-1000 will-change-transform"
            variant="default"
            direction="right">
            <article className="h-full rounded-2xl border  border-gray-700  bg-zinc-950/60 p-8 shadow-lg shadow-amber-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">{cards[2].title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">{cards[2].body}</p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
