import PostPreviewCard from 'components/element/card/PostPreviewCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/post/PostContainerTemplate';
import { getPortfolioData } from 'utils/getMarkdownData';
import { getPortfolioSlugs } from 'utils/getSlugs';

function Portfolio({ portfolios }) {
  return (
    <DefaultLayout title="Portfolio">
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <PostsTemplate title="My Portfolio" subtitle="Projects">
            {portfolios.map((portfolio) => (
              <PostPreviewCard
                key={portfolio.meta.slug}
                meta={portfolio.meta}
                baseUrl="portfolio"
              />
            ))}
          </PostsTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Portfolio;

export async function getStaticProps() {
  const slugs = getPortfolioSlugs();
  const portfolios = slugs.map((slug) => getPortfolioData(slug));
  const filteredPortfolios = portfolios.filter((p) => !p?.meta?.draft);

  return {
    props: {
      portfolios: filteredPortfolios,
    },
  };
}
