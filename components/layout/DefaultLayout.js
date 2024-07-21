import Footer from 'components/template/footer/Footer';
import Navbar from 'components/template/navbar/Navbar';
import Head from 'next/head';
import { useMemo } from 'react';

function DefaultLayout({ children, title = 'Lutfi Andriyanto' }) {
  const formattedTitle = useMemo(() => {
    return title.includes('Lutfi Andriyanto')
      ? title
      : `${title} | Lutfi Andriyanto`;
  }, [title]);

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
