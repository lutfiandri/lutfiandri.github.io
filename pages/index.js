import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
      <Container maxW="4xl">
        <div className="min-h-screen-no-header flex items-center">
          <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden mr-8">
            <Image
              src="/images/lutfi-andriyanto.webp"
              alt="Lutfi Andriyanto"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-3xl font-bold">Hi, it&apos;s me</div>
            <h1 className="text-4xl font-bold text-blue">Lutfi Andriyanto</h1>
            <h2 className="text-lg font-bold">a Webdev Enthusiast!</h2>
            <div className="h-6"></div>
            <div className="flex">
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
        <a key={socmed.name} href={socmed.url} target="_blank" rel="noreferrer">
          <socmed.icon className="w-6 h-auto mr-4" />
        </a>
      ))}
    </>
  );
}
