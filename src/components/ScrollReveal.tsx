'use client'

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

import { cn } from '@/lib/cn'

/** “Apple-like” scroll storytelling: soft fade + drift + slight scale; eases in over ~1s. */
type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Extra delay after the element enters view (ms). */
  delay?: number
  /** Slightly smaller movement for dense blocks (only for variant `default`). */
  amount?: 'md' | 'lg'
  /**
   * `prominent` — large headlines (more travel + scale).
   * `default` — body copy / cards.
   * `subtle` — list lines and tight stacks.
   */
  variant?: 'default' | 'prominent' | 'subtle'
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 'lg',
  variant = 'default',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      queueMicrotask(() => {
        setVisible(true)
      })
      return
    }

    const inViewport = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      return rect.top < vh && rect.bottom > 0
    }

    if (inViewport()) {
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
      { threshold: 0.01, rootMargin: '0px 0px 25% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenByVariant =
    variant === 'prominent'
      ? 'translate-y-14 scale-[0.94] opacity-0 md:translate-y-[4.5rem]'
      : variant === 'subtle'
        ? amount === 'md'
          ? 'translate-y-6 opacity-0'
          : 'translate-y-8 opacity-0'
        : amount === 'md'
          ? 'translate-y-8 scale-[0.98] opacity-0'
          : 'translate-y-12 scale-[0.98] opacity-0'

  const durationClass =
    variant === 'prominent'
      ? 'duration-[1350ms]'
      : variant === 'subtle'
        ? 'duration-[1050ms]'
        : 'duration-[1200ms]'

  return (
    <div
      ref={ref}
      className={cn(
        'will-change-[opacity,transform]',
        'transition-[opacity,transform] ease-apple',
        durationClass,
        visible ? 'translate-y-0 scale-100 opacity-100' : hiddenByVariant,
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
