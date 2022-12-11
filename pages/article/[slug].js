import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';
import PostMarkdown from 'components/template/post/PostMarkdown';

import { getArticleData } from 'utils/getMarkdownData';
import { getArticleSlugs } from 'utils/getSlugs';
import RenderIf from 'components/element/RenderIf';
import Carousel from 'components/element/Carousel';
import { Img } from 'components/element/img/Img';

function ReadArticle({ article }) {
  return (
    <DefaultLayout title={article?.meta?.title}>
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <h1 className="mb-8 text-3xl font-bold">{article?.meta?.title}</h1>
          <RenderIf when={article?.meta?.hero?.length > 1}>
            <Carousel
              imageSrcs={article?.meta?.hero?.map(
                (src) => `/article/${article?.meta?.slug}/${src}`
              )}
            />
          </RenderIf>

          <RenderIf when={article?.meta?.hero?.length === 1}>
            <Img
              src={`/article/${article?.meta?.slug}/${article?.meta?.hero}`}
            />
          </RenderIf>

          <PostMarkdown>{article?.body}</PostMarkdown>
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
