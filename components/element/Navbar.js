import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Container from './Container';

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
          <div
            role="button"
            onClick={() => router?.push('/')}
            className="text-lg font-bold text-blue py-3"
          >
            Lutfi Andriyanto
          </div>
          <div className="w-12"></div>
          <div className="flex">
            {ROUTES.map((route) => (
              <div
                key={route.name}
                role="button"
                onClick={() => router?.push(route.url)}
                className={clsx(
                  'p-3 m-1',
                  router?.pathname === route.url ? 'font-bold' : 'font-semibold'
                )}
              >
                {route.name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
