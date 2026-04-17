import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const linkClass = 'transition-colors hover:text-zinc-100';

type SocialOrContactLink = {
  label: string;
  href: string;
  social?: 'instagram' | 'linkedin' | 'facebook';
};

const socialIcon: Record<NonNullable<SocialOrContactLink['social']>, IconDefinition> = {
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  facebook: faFacebook,
};

/** Social + contact — order: Instagram, Facebook, LinkedIn, then Contact */
const socialAndContact: SocialOrContactLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fosh.live/',
    social: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61575689137247',
    social: 'facebook',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/foshapp/',
    social: 'linkedin',
  },
  { label: 'Contact', href: 'mailto:admin@fosh.live' },
];

/** Always plain internal routes — kept separate so they never get lost in social/mailto logic */
const legalLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold tracking-tight text-white">FOSH</p>
            <p className="mt-1 max-w-xs text-sm text-zinc-500">Get Up. Get Out. Have Fun.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
              {socialAndContact.map(({ label, href, social }) => (
                <li key={label}>
                  {social ? (
                    <a
                      href={href}
                      className={`flex items-center ${linkClass}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}>
                      <FontAwesomeIcon icon={socialIcon[social]} className="h-5 w-5" aria-hidden />
                    </a>
                  ) : (
                    <a href={href} className={linkClass}>
                      {label}
                    </a>
                  )}
                </li>
              ))}
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
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
