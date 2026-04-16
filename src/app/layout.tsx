import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
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
        url: '/FOSHLogo.png',
        width: 1200,
        height: 630,
        alt: 'FOSH Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOSH — Discover what’s happening around you',
    description,
    images: ['/FOSHLogo.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>{children}</body>
    </html>
  );
}
