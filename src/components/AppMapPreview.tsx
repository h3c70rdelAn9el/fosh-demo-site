import { AppMapDemoMedia } from './AppMapDemoMedia';
import { ScrollReveal } from './ScrollReveal';

function PhoneFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,320px)]">
      <div
        className="pointer-events-none absolute inset-[-18%] rounded-[3rem] bg-amber-500/12 blur-3xl"
        aria-hidden
      />
      <div className="relative rounded-[2.75rem] border border-zinc-600/50 bg-linear-to-b from-zinc-700/50 via-zinc-900 to-zinc-950 p-[10px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.9)]">
        <div className="relative overflow-hidden rounded-[2.35rem] bg-black ring-1 ring-inset ring-white/10">
          <div
            className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-[88px] -translate-x-1/2 rounded-full bg-zinc-950/95 shadow-sm"
            aria-hidden
          />
          <AppMapDemoMedia />
        </div>
      </div>
    </div>
  );
}

export function AppMapPreview() {
  return (
    <section
      id="app-preview"
      className="relative overflow-hidden border-t border-zinc-800/80 bg-zinc-950 px-6 py-20 md:py-28"
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
              Bands, art exhibits, open mics, stand-up, plays, drag, karaoke and more—if it’s live,
              it’s on FOSH.
            </p>
            {/* App store icon */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1c0M6mPUNW6XxZB6DeFb6KS1jfciRij-7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="/icons.svg"
                  alt="App Store Icon"
                  className="h-12 w-auto"
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
