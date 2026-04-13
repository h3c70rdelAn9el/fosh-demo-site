import type { ComponentProps } from 'react'
import { cn } from '../lib/cn'

type ButtonLinkProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'secondary'
}

export function ButtonLink({
  className,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-lg px-7 py-3 text-center text-sm font-semibold tracking-tight transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variant === 'primary' &&
          'bg-amber-500 text-zinc-950 hover:bg-amber-400 focus-visible:outline-amber-400',
        variant === 'secondary' &&
          'border border-zinc-500/80 bg-zinc-950/30 text-zinc-100 backdrop-blur-sm hover:border-zinc-400 hover:bg-zinc-900/40 focus-visible:outline-zinc-400',
        className,
      )}
      {...props}
    />
  )
}
