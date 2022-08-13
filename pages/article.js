import ArticleCard from 'components/element/card/ArticleCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/PostsTemplate';
import { findAllArticles } from 'utils/service/article';

function Article({ articles }) {
  return (
    <DefaultLayout title="Article">
      <Container>
        <div className="min-h-screen-no-header py-32">
          <PostsTemplate title="Latest Content" subtitle="Articles">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </PostsTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Article;

export async function getStaticProps() {
  const { articles, error } = await findAllArticles();

  return {
    props: {
      articles,
      error,
    },
  };
}
