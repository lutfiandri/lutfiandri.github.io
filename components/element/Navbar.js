import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Container from './Container';
import Link from 'next/link';

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
  return (
    <nav className="bg-gray-light z-50 sticky top-0">
      <Container>
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
      </Container>
    </nav>
  );
}

export default Navbar;
