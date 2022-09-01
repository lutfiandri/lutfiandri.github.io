import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';
import Carousel from 'components/element/Carousel';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getPortfolioData } from 'utils/getMarkdownData';
import { getPortfolioSlugs } from 'utils/getSlugs';
import RenderIf from 'components/element/RenderIf';

function ReadPortfolio({ portfolio }) {
  return (
    <DefaultLayout title={portfolio.meta.title}>
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <h1 className="text-4xl font-bold">{portfolio.meta.title}</h1>
          <div>
            <div></div>
          </div>
          <RenderIf when={portfolio?.meta?.hero?.length > 1}>
            <div className="h-8"></div>
            <Carousel
              imageSrcs={portfolio.meta.hero.map(
                (src) => `/portfolio/${portfolio.meta.slug}/${src}`
              )}
            />
          </RenderIf>

          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {portfolio?.body}
          </ReactMarkdown>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default ReadPortfolio;

export async function getStaticPaths() {
  const slugs = getPortfolioSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug: slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const portfolio = getPortfolioData(slug);

  return {
    props: {
      portfolio: portfolio,
    },
  };
}
