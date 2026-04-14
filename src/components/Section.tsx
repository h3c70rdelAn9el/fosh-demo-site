'use client'

import type { ReactNode } from 'react'

import { cn } from '../lib/cn'
import { ScrollReveal } from './ScrollReveal'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  /** Fade content in when scrolled into view (default true). Set false to compose custom ScrollReveal layouts. */
  reveal?: boolean
}

export function Section({ id, children, className, containerClassName, reveal = true }: SectionProps) {
  return (
    <section id={id} className={cn('px-6 py-20 md:py-28', className)}>
      <div className={cn('mx-auto max-w-3xl', containerClassName)}>
        {reveal ? <ScrollReveal>{children}</ScrollReveal> : children}
      </div>
    </section>
  )
}
