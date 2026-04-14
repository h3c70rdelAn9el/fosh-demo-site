import Image from 'next/image';
import { ButtonLink } from './ButtonLink';

const HERO_BG =
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80';

export function Hero() {
  return (
    <header className="relative flex min-h-screen shrink-0 flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden>
        <div className="relative h-full w-full">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/92 via-zinc-950/78 to-zinc-950" />
      </div>

      {/* Overlayed Logo */}
      <div className="absolute top-12 left-1/2 z-20 -translate-x-1/2 flex justify-center">
        <Image
          src="/FOSH_logo_beta.png"
          alt="FOSH Logo"
          width={1400}
          height={240}
          style={{ height: 'auto' }}
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center md:mt-40">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/90">
          Local-first · Real scenes
        </p>
        <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
          Discover what’s happening around you.
          <span className="mt-2 block text-zinc-300 md:mt-3">Not the big shows—the real ones.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400 md:text-xl">
          FOSH helps you find local events, hidden venues, and the moments you’d otherwise miss.
        </p>
        <div className="mt-12 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
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
