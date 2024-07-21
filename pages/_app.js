import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`}
          ></Script>
          <Script strategy="lazyOnload" id="firebase-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      <Head>
        <link rel="icon" href="/logo-upi.svg" type="image/svg+xml" />
      </Head>

      <ThemeProvider enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
