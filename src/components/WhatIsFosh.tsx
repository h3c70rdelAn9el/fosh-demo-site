import { Section } from './Section'

const bullets = [
  'Local venues, not just stadiums',
  'Small events that actually matter',
  'Real communities, not mass listings',
] as const

export function WhatIsFosh() {
  return (
    <Section id="local" className="border-t border-zinc-800/80 bg-zinc-950">
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
        What is FOSH?
      </h2>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
        <p>
          FOSH is built for the events you don’t see on big platforms.
        </p>
        <p>
          From open mics and local shows to pop-ups and underground scenes—this
          is where real things happen.
        </p>
      </div>
      <ul className="mt-12 space-y-4 border-l-2 border-amber-500/40 pl-6 text-left text-zinc-300">
        {bullets.map((line) => (
          <li key={line} className="leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
    </Section>
  )
}
