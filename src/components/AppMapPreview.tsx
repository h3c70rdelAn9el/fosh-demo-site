import { AppMapDemoMedia } from './AppMapDemoMedia';
import { ScrollReveal } from './ScrollReveal';

function PhoneFrame() {
  return (
    <div className="relative">
      <AppMapDemoMedia />
    </div>
  );
}

export function AppMapPreview() {
  return (
    <section
      className="relative"
      aria-labelledby="app-preview-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-500/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-16">
        <div className="text-center lg:text-left">
          <ScrollReveal variant="prominent">
            <p className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-400/90">
              INSTALL THE APP
            </p>
            <h2
              id="app-preview-heading"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl md:tracking-[-0.02em]">
              Start with the map—then decide where to go.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400 md:text-xl">
              Bands, art exhibits, open mics, stand-up, plays, drag, karaoke and more—if it's live,
              it's on FOSH.
            </p>

            {/* App store icons row */}
            <div className="mt-8 flex flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/app/id6752311456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store">
                <img
                  src="/appstore.svg"
                  alt="App Store"
                  className="h-42 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.foshapp.app&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play">
                <img
                  src="/googleplay.svg"
                  alt="Google Play"
                  className="h-42 w-auto"
                />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="default"
          delay={200}
          className="flex justify-center lg:justify-end">
          <PhoneFrame />
        </ScrollReveal>
      </div>
    </section>
  );
}
