import Navbar from 'components/element/Navbar';
import Head from 'next/head';

function DefaultLayout({ children, title = 'Lutfi Andriyanto' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default DefaultLayout;
