import clsx from 'clsx';
import Container from 'components/element/Container';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

const ROUTES = [
  {
    name: 'Article',
    url: '/article',
  },
  {
    name: 'Portfolio',
    url: '/portfolio',
  },
];

function Navbar() {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const isDark = useMemo(() => theme === 'dark', [theme]);
  const setIsDark = useCallback(
    (value) => setTheme(value ? 'dark' : 'light'),
    [setTheme]
  );

  return (
    <nav className="bg-gray-light dark:bg-gray-dark text-gray-dark dark:text-gray-light z-50 sticky top-0">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <Link href="/">
              <div role="button" className="text-lg font-bold text-blue py-4">
                Lutfi Andriyanto
              </div>
            </Link>
            <div className="w-12"></div>
            <div className="flex">
              {ROUTES.map((route) => (
                <Link key={route.name} href={route.url}>
                  <div
                    role="button"
                    className={clsx(
                      'py-4 px-3 m-1',
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

export default Navbar;
