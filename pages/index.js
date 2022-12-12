import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SOCMEDS = [
  {
    name: 'Github',
    icon: FaGithub,
    url: 'https://github.com/lutfiandri',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: 'https://linkedin.com/in/lutfiandriyanto',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/lutfi_andriyanto',
  },
];

export default function Home() {
  return (
    <DefaultLayout>
      <Container>
        <div className="flex min-h-screen-no-header flex-col items-center justify-center md:flex-row md:justify-start">
          <div className="relative mr-0 h-[200px] w-[200px] overflow-hidden rounded-lg md:mr-8">
            <Image
              src="/images/lutfi-andriyanto.webp"
              alt="Lutfi Andriyanto"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          <div className="flex flex-col space-y-1 pt-8 text-center md:mt-0 md:text-left">
            <div className="text-3xl font-bold ">Hi, it&apos;s me</div>
            <h1 className="text-4xl font-bold text-gray-dark dark:text-gray-light">
              Lutfi Andriyanto
            </h1>
            <h2 className="text-lg font-bold">a Webdev Enthusiast!</h2>
            <div className="flex justify-center gap-4 pt-6 md:justify-start">
              <Socmeds socmeds={SOCMEDS} />
            </div>
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
}

function Socmeds({ socmeds = [] }) {
  return (
    <>
      {socmeds.map((socmed) => (
        <a
          key={socmed.name}
          href={socmed.url}
          target="_blank"
          rel="noreferrer"
          title={socmed.name}
        >
          <socmed.icon className="h-auto w-6 duration-200 hover:text-blue" />
        </a>
      ))}
    </>
  );
}
