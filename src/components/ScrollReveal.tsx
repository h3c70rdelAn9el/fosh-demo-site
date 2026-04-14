'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

import { cn } from '@/lib/cn'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Extra delay after the element enters view (ms). */
  delay?: number
  /** Slightly smaller movement for dense blocks */
  amount?: 'md' | 'lg'
}

export function ScrollReveal({ children, className, delay = 0, amount = 'lg' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      queueMicrotask(() => {
        setVisible(true)
      })
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const offset = amount === 'md' ? 'translate-y-5' : 'translate-y-8'

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]',
        visible ? 'translate-y-0 opacity-100' : cn('opacity-0', offset),
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
