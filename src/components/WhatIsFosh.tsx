import { ScrollReveal } from './ScrollReveal'
import { Section } from './Section'

const bullets = [
  'Discover what’s on near you—not just the headliners',
  'Filter by date, genre, venue, or vibe',
  'Real-time updates when plans change',
  'Save and go without app-hopping',
] as const

export function WhatIsFosh() {
  return (
    <Section id="local" className="border-t border-zinc-800/80 bg-zinc-950">
      <ScrollReveal variant="prominent">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl md:tracking-[-0.02em]">
          Local live events shouldn’t be this hard to find
        </h2>
      </ScrollReveal>
      <ScrollReveal variant="default" delay={360} className="mt-8">
        <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
          <p>
            Most people don’t stay home from lack of interest—they stay home because what’s happening tonight is buried
            across feeds, flyers, and outdated calendars.
          </p>
          <p>
            FOSH is an AI-powered, real-time local discovery layer: one place to see what’s live around you, built for how
            people actually decide to go out.
          </p>
        </div>
      </ScrollReveal>
      <ul className="mt-12 space-y-4 border-l-2 border-amber-500/40 pl-6 text-left text-zinc-300">
        {bullets.map((line, index) => (
          <ScrollReveal key={line} variant="subtle" delay={420 + index * 200} amount="md">
            <li className="leading-relaxed">{line}</li>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  )
}
