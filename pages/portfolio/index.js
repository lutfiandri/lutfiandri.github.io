import PostPreviewCard from 'components/element/card/PostPreviewCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/post/PostContainerTemplate';
import { getPortfolioData } from 'utils/getMarkdownData';
import { getPortfolioSlugs } from 'utils/getSlugs';

function Portfolio({ portfolios, tagCounts }) {
  return (
    <DefaultLayout title="Portfolio">
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <PostsTemplate
            title="My Portfolio"
            subtitle="Projects"
            tagCounts={tagCounts}
          >
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

  const tagCountMap = new Map();
  filteredPortfolios.forEach((portfolio) => {
    portfolio?.meta?.tags?.forEach((tag) => {
      if (tagCountMap.has(tag)) {
        tagCountMap.set(tag, tagCountMap.get(tag) + 1);
      } else {
        tagCountMap.set(tag, 1);
      }
    });
  });

  const tagCounts = Array.from(tagCountMap.entries())
    .map((t) => ({ name: t[0], count: t[1] }))
    .sort((a, b) => {
      if (b.count - a.count !== 0) {
        return b.count - a.count;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

  return {
    props: {
      portfolios: filteredPortfolios,
      tagCounts: tagCounts,
    },
  };
}
