import PostPreviewCard from 'components/element/card/PostPreviewCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/post/PostContainerTemplate';
import { getArticleData } from 'utils/getMarkdownData';
import { getArticleSlugs } from 'utils/getSlugs';

function Article({ articles }) {
  return (
    <DefaultLayout title="Article">
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <PostsTemplate title="Latest Content" subtitle="Articles">
            {articles.map((article) => (
              <PostPreviewCard
                key={article.meta.slug}
                meta={article.meta}
                baseUrl="article"
              />
            ))}
          </PostsTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Article;

export async function getStaticProps() {
  const slugs = getArticleSlugs();
  const articles = slugs.map((slug) => getArticleData(slug));

  return {
    props: {
      articles,
    },
  };
}
