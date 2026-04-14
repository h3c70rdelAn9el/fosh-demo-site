import Image from 'next/image';

import { HERO_BG } from '@/constants/site-images';

import { ButtonLink } from './ButtonLink';

export function Hero() {
  return (
    <header className="relative flex min-h-screen shrink-0 flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-center sm:pt-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {/* Ken Burns on the image; fade-in on a wrapper so it doesn’t fight the transform animation. */}
        <div className="absolute inset-0 animate-hero-gradient-in">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center animate-photo-ken-burns"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/92 via-zinc-950/78 to-zinc-950 animate-hero-gradient-in" />
      </div>

      {/* Overlayed Logo */}
      <div className="absolute top-12 left-1/2 z-20 flex -translate-x-1/2 justify-center">
        <Image
          src="/FOSH_logo_beta.png"
          alt="FOSH Logo"
          width={1400}
          height={240}
          style={{ height: 'auto' }}
          priority
          className="animate-hero-fade-in animate-hero-delay-2"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center md:mt-40">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/90 animate-hero-fade-in animate-hero-delay-3">
          Get up · Get out · Have fun
        </p>
        <h1 className="animate-hero-fade-in animate-hero-delay-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
          Real-time discovery for local live events.
          <span className="mt-2 block text-zinc-300 md:mt-3">Fans, artists, and venues—finally in one place.</span>
        </h1>
        <p className="animate-hero-fade-in animate-hero-delay-5 mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400 md:text-xl">
          FOSH pulls fragmented listings into a single, location-smart feed—so choosing a night out is faster than
          scrolling three apps and a dozen venue sites.
        </p>
        <div className="animate-hero-fade-in animate-hero-delay-6 mt-12 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <ButtonLink
            href="#how-it-works"
            variant="primary">
            Explore Events
          </ButtonLink>
          <ButtonLink
            href="#join"
            variant="secondary">
            Join FOSH
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
