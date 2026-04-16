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
      className="relative isolate overflow-hidden border-y border-zinc-800/80 bg-zinc-950 px-6 py-20 md:py-28">
      {/* Same crowd photo as hero; slow drift reads as “alive” without video. */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        aria-hidden>
        <Image
          src={HERO_BG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center animate-photo-ken-burns-alt"
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-linear-to-b from-zinc-950/82 via-zinc-950/72 to-zinc-950/88"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, body }, index) => (
            <ScrollReveal
              key={title}
              delay={index * 260}
              amount="md">
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
