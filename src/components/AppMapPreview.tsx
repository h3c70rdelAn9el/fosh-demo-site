import Image from 'next/image';
import Link from 'next/link';
import { AppMapDemoMedia } from './AppMapDemoMedia';
import { ScrollReveal } from './ScrollReveal';

function PhoneFrame() {
  return (
    <div className="relative p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[420px]">
      <AppMapDemoMedia />
    </div>
  );
}

export function AppMapPreview() {
  return (
    <section className="relative bg-black" aria-labelledby="app-preview-heading">
      {/* top gradient line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left px-4">
          <ScrollReveal variant="prominent">
            <p className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-400/90 mt-16 lg:mt-0">
              INSTALL THE APP
            </p>

            <h2
              id="app-preview-heading"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl md:tracking-[-0.02em]"
            >
              Start with the map, then decide where to go.
            </h2>

            <p className="mt-5 max-w-xl mx-auto text-left pl-4 lg:pl-0 lg:mx-0 text-pretty text-lg leading-relaxed text-zinc-400 md:text-xl">
              Bands, art exhibits, open mics, stand-up, plays, drag, karaoke and more...if it&apos;s
              live, it&apos;s on FOSH.
            </p>

            {/* STORE BUTTONS */}
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              {/* Apple */}
              <Link
                href="https://apps.apple.com/app/id6752311456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/appstore.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={148}
                  className="h-42 w-auto transition hover:scale-105"
                />
              </Link>

              {/* Google Play */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.foshapp.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/googleplay.svg"
                  alt="Get it on Google Play"
                  width={160}
                  height={148}
                  className="h-42 w-auto transition hover:scale-105"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* RIGHT CONTENT */}
        <ScrollReveal variant="default" delay={200} className="flex justify-center lg:justify-end">
          <PhoneFrame />
        </ScrollReveal>
      </div>
    </section>
  );
}
