import { APP_MAP_DEMO_GIF } from '@/constants/app-preview'

/**
 * Plain `<img>` so `map.gif` animates (next/image often breaks GIF playback).
 */
export function AppMapDemoMedia() {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- animated GIF
    <img
      src={APP_MAP_DEMO_GIF}
      alt="FOSH app: map with nearby events and filters"
      className="aspect-9/19.5 h-auto w-full object-cover object-top"
      loading="lazy"
      decoding="async"
    />
  )
}
