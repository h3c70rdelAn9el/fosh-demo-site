import { cn } from '@/lib/cn';

import { ButtonLink } from './ButtonLink';

type LoginRegisterCTAProps = {
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
};

export function LoginRegisterCTA({
  className,
  primaryClassName,
  secondaryClassName,
}: LoginRegisterCTAProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4',
        className,
      )}>
      <ButtonLink
        href=" http://www.fosh.live/?modal=login"
        variant="primary"
        className={cn('min-w-48 px-10', primaryClassName)}>
        Login
      </ButtonLink>
      <ButtonLink
        href="https://www.fosh.live/?modal=register"
        variant="secondary"
        className={cn('min-w-48 px-10', secondaryClassName)}>
        Register for Free
      </ButtonLink>
    </div>
  );
}
