import clsx from 'clsx';
import Container from 'components/element/Container';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import ROUTES from './ROUTES';
import Image from 'next/image';

function DesktopNavbar({ show = false }) {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const isDark = useMemo(() => theme === 'dark', [theme]);
  const setIsDark = useCallback(
    (value) => setTheme(value ? 'dark' : 'light'),
    [setTheme]
  );

  return (
    <nav className="sticky top-0 z-50 grid h-[64px] place-items-center bg-gray-light text-gray-dark">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex flex-row items-center gap-2">
                <Image src="/logo-upi.svg" alt="upi" height={40} width={40} />
                <div role="button" className="py-4 text-lg font-bold text-blue">
                  Lutfi Andriyanto
                </div>
              </div>
            </Link>
            <div className="w-12"></div>
            <div className="flex">
              {ROUTES.map((route) => (
                <Link key={route.name} href={route.url}>
                  <div
                    role="button"
                    className={clsx(
                      'm-1 py-4 px-3',
                      router?.pathname === route.url
                        ? 'font-bold'
                        : 'font-semibold'
                    )}
                  >
                    {route.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* <div role="button" onClick={() => setIsDark(!isDark)}>
            <SunIcon2 isDark={isDark} />
          </div> */}
        </div>
      </Container>
    </nav>
  );
}

export default DesktopNavbar;
