type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const links: FooterLink[] = [
  { label: 'Contact', href: 'mailto:admin@fosh.live' },
  { label: 'Instagram', href: 'https://www.instagram.com/tsglider/', external: true },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '#' },
];

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold tracking-tight text-white">FOSH</p>
            <p className="mt-1 max-w-xs text-sm text-zinc-500">
              Local events, hidden venues, real moments.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
              {links.map(({ label, href, external }) => (
                <li key={label}>
                  {href.startsWith('/') && !external ? (
                    <Link
                      href={href}
                      className="transition-colors hover:text-zinc-100">
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="transition-colors hover:text-zinc-100"
                      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}>
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} FOSH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
