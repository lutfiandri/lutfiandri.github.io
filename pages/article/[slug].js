import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getArticleData } from 'utils/getMarkdownData';
import { getArticleSlugs } from 'utils/getSlugs';

function ReadArticle({ article }) {
  return (
    <DefaultLayout title={article?.meta?.title}>
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <div>{article?.meta?.title}</div>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {article?.body}
          </ReactMarkdown>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default ReadArticle;

export async function getStaticPaths() {
  const slugs = getArticleSlugs();

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
  const article = getArticleData(slug);

  return {
    props: {
      article: article,
    },
  };
}
