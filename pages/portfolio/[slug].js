import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getPortfolioData } from 'utils/getMarkdownData';
import { getPortfolioSlugs } from 'utils/getSlugs';

function ReadPortfolio({ article }) {
  return (
    <DefaultLayout title={article?.meta?.title}>
      <Container>
        <div className="min-h-screen-no-header py-32">
          <div>{article?.meta?.title}</div>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {article?.body}
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
  const article = getPortfolioData(slug);

  return {
    props: {
      article: article,
    },
  };
}
