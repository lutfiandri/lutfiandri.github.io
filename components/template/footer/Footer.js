import Container from 'components/element/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LINKS = [
  {
    external: false,
    name: 'Article',
    url: '/article',
  },
  {
    external: false,
    name: 'Portfolio',
    url: '/portfolio',
  },
  {
    external: true,
    name: 'Github',
    url: 'https://github.com/lutfiandri',
  },
];

const CONTACTS = [
  {
    external: true,
    name: 'Email',
    url: 'mailto:lutfiandri232@gmail.com',
  },
  {
    external: true,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/lutfiandriyanto',
  },
  {
    external: true,
    name: 'WhatsApp',
    url: 'https://wa.me/6285229490001',
  },
  {
    external: true,
    name: 'Instagram',
    url: 'https://instagram.com/lutfi_andriyanto',
  },
];

function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-blue-light py-10">
      <Container>
        <div className="flex justify-between">
          {/* left */}
          <div className="flex flex-col justify-between">
            <div>
              <div
                role="button"
                onClick={() => router?.push('/')}
                className="text-lg font-bold text-blue"
              >
                Lutfi Andriyanto
              </div>
              <div className="text-sm font-semibold">Webdev Enthusiast!</div>
            </div>
            <div className="text-xs font-semibold text-gray">
              © 2022-present Lutfi Andriyanto. All Rights Reserved.
            </div>
          </div>

          {/* right */}
          <div className="flex">
            <div className="flex space-x-16 text-sm">
              <VerticalMenu title="Links" items={LINKS} />
              <VerticalMenu title="Contact" items={CONTACTS} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

function MenuTitle({ title }) {
  return <div className="mb-3 font-semibold text-gray">{title}</div>;
}

function MenuItem({ item }) {
  return (
    <Link href={item.url} passHref={item.external}>
      <a
        className="mb-2 block font-semibold"
        target={item.external ? '_blank' : ''}
      >
        {item.name}
      </a>
    </Link>
  );
}

function VerticalMenu({ title = 'Menu', items = [] }) {
  return (
    <div className="flex flex-col">
      <MenuTitle title={title} />
      {items.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </div>
  );
}
