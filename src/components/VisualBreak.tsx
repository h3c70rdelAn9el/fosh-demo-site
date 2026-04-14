'use client'

import Image from 'next/image'

import { ScrollReveal } from './ScrollReveal'

/** Distinct from hero: intimate room / stage energy (not same crop as hero). */
const BREAK_IMAGE =
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80'

export function VisualBreak() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-zinc-800/80 bg-zinc-950"
      aria-label="Atmosphere"
    >
      <ScrollReveal amount="md">
        <div className="relative min-h-[32vh] w-full md:min-h-[38vh] lg:min-h-[42vh]">
          <Image
            src={BREAK_IMAGE}
            alt=""
            fill
            className="object-cover object-center animate-photo-ken-burns-slow"
            sizes="100vw"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-linear-to-b from-zinc-950/55 via-zinc-950/70 to-zinc-950"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 py-10 text-center">
            <p className="max-w-xl text-balance text-lg font-semibold tracking-tight text-white drop-shadow-md md:text-xl">
              The good stuff happens in real rooms—not only on the feed.
            </p>
            <p className="max-w-md text-sm text-zinc-300/95 md:text-base">
              Small venues, open mics, last-minute lineups—the nights worth leaving home for.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
