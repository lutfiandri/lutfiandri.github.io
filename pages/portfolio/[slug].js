import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';
import Carousel from 'components/element/Carousel';
import RenderIf from 'components/element/RenderIf';
import PostMarkdown from 'components/template/post/PostMarkdown';

import { getPortfolioData } from 'utils/getMarkdownData';
import { getPortfolioSlugs } from 'utils/getSlugs';
import { Img } from 'components/element/img/Img';

function ReadPortfolio({ portfolio }) {
  return (
    <DefaultLayout title={portfolio.meta.title}>
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <h1 className="text-3xl font-bold mb-8">{portfolio?.meta?.title}</h1>
          <RenderIf when={portfolio?.meta?.hero?.length > 1}>
            <Carousel
              imageSrcs={portfolio?.meta?.hero?.map(
                (src) => `/portfolio/${portfolio?.meta?.slug}/${src}`
              )}
            />
          </RenderIf>

          <RenderIf when={portfolio?.meta?.hero?.length === 1}>
            <Img
              src={`/portfolio/${portfolio?.meta?.slug}/${portfolio?.meta?.hero}`}
            />
          </RenderIf>

          <PostMarkdown>{portfolio?.body}</PostMarkdown>
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
