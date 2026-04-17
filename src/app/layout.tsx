import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const description =
  "FOSH helps you find local events, hidden venues, and the moments you'd otherwise miss.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FOSH — Discover what’s happening around you',
    template: '%s | FOSH',
  },
  description,
  openGraph: {
    title: 'FOSH — Discover what’s happening around you',
    description,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/fosh_logo.png',
        width: 1200,
        height: 630,
        alt: 'FOSH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOSH — Discover what’s happening around you',
    description,
    images: ['/fosh_logo.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        {/* Fixed background image with vignette overlay */}
        <div
          aria-hidden
          className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
          <Image
            src="/bg_copy.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none will-change-transform"
            draggable={false}
            aria-hidden
          />
          {/* Brighten center */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.00) 70%)',
              mixBlendMode: 'screen',
              opacity: 0.7,
              zIndex: 11,
            }}
            aria-hidden
          />
          {/* Brown vignette */}
          <div
            className="absolute inset-0 hero-vignette-overlay"
            aria-hidden
          />
        </div>
        {children}
      </body>
    </html>
  );
}
