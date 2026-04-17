import Image from 'next/image';

import { LoginRegisterCTA } from './LoginRegisterCTA';

function DownArrow() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  return (
    <header className="relative flex min-h-screen shrink-0 flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-center sm:pt-16">
      {/* Remove section-specific background image; now handled globally */}
      <div
        className="absolute inset-0 bg-linear-to-b from-zinc-950/92 via-zinc-950/60 to-zinc-950 animate-hero-gradient-in"
        aria-hidden
      />

      {/* Overlayed Logo */}
      <div className="absolute top-1/8 left-1/2 z-20 flex -translate-x-1/2 justify-center w-full">
        <Image
          src="/FOSHLogo.png"
          alt="FOSH Logo"
          width={950}
          height={350}
          priority
          sizes="(max-width: 640px) 96vw, 560px"
          className="animate-hero-fade-in animate-hero-delay-2 h-auto w-[min(96vw,560px)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl mt-66 flex-col items-center">
        <h1 className="animate-hero-fade-in animate-hero-delay-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
          Real-time discovery for live Philly events.
        </h1>
        <p className="animate-hero-fade-in pl-4 animate-hero-delay-5 mt-8  text-left text-pretty text-lg leading-relaxed text-zinc-400 md:text-xl">
          Everything happening in the city...without checking five different places.
        </p>
        <LoginRegisterCTA className="animate-hero-fade-in animate-hero-delay-6 mt-12" />
        {/* Down-pointing arrow below the buttons */}
        <div className="mt-8 animate-bounce">
          <DownArrow />
        </div>
      </div>
    </header>
  );
}
