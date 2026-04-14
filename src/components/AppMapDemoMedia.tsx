'use client'

import { useEffect, useState } from 'react'

import { APP_MAP_DEMO_GIF, APP_MAP_DEMO_POSTER } from '@/constants/app-preview'

/**
 * PNG poster first (SSR + first paint), then `/map.gif` when motion is allowed and load succeeds.
 * Skips GIF when `prefers-reduced-motion: reduce`.
 */
export function AppMapDemoMedia() {
  const [src, setSrc] = useState(APP_MAP_DEMO_POSTER)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const probe = new Image()
    probe.onload = () => setSrc(APP_MAP_DEMO_GIF)
    probe.onerror = () => {
      /* keep poster */
    }
    probe.src = APP_MAP_DEMO_GIF
  }, [])

  return (
    // GIF animation requires a plain <img>; next/image is a poor fit for animated GIFs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="FOSH app: map with nearby events and filters"
      className="aspect-9/19.5 h-auto w-full object-cover object-top"
      loading="lazy"
      decoding="async"
    />
  )
}
