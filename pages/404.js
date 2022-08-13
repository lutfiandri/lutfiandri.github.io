import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Link from 'next/link';

function Custom404() {
  return (
    <DefaultLayout title="Not Found - Lutfi Andriyanto">
      <Container>
        <div className="min-h-screen-no-header-footer flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Not Found</h1>
          <h2 className="text-lg font-semibold">
            Sorry, there&apos;s nothing in this url.
          </h2>
          <div className="h-8"></div>
          <Link href="/">
            <div role="button" className="text-lg font-bold">
              Back to Home
            </div>
          </Link>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Custom404;
