import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn('px-6 py-24 md:py-36', className)}>
      <div className={cn('mx-auto max-w-3xl', containerClassName)}>{children}</div>
    </section>
  )
}
