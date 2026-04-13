type FooterLink = {
  label: string
  href: string
  external?: boolean
}

const links: FooterLink[] = [
  { label: 'About', href: '#local' },
  { label: 'Contact', href: 'mailto:hello@fosh.app' },
  { label: 'Instagram', href: 'https://instagram.com', external: true },
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
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
                <a
                  href={href}
                  className="transition-colors hover:text-zinc-100"
                  {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-5xl text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} FOSH. All rights reserved.
      </p>
    </footer>
  )
}
