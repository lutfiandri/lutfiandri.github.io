import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';
import {
  findAllArticleSlugs,
  findOneArticleBySlug,
} from 'utils/service/article';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getMarkdownText } from 'utils/service/getMarkdownText';
import getPaths, { getPortfolioPaths } from 'utils/getPaths';
import gg from 'utils/getMarkdownText';

function ReadArticle({ article }) {
  return (
    <DefaultLayout title={article?.title}>
      <Container>
        <div className="min-h-screen-no-header py-32">
          <div>{article?.title}</div>
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
  const { slugs, error } = await findAllArticleSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug: slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(getPortfolioPaths());
  const data = gg();

  const { slug } = params;
  const { article, error } = await findOneArticleBySlug(slug);

  // const { markdown, error: e } = await getMarkdownText(slug, ['articles']);

  // if (e) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // article.body = markdown.data;

  article.body = data;

  return {
    props: {
      article: article,
    },
  };
}
