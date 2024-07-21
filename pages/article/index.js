import PostPreviewCard from 'components/element/card/PostPreviewCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/post/PostContainerTemplate';
import { getArticleData } from 'utils/getMarkdownData';
import { getArticleSlugs } from 'utils/getSlugs';

function Article({ articles, tagCounts }) {
  return (
    <DefaultLayout title="Article">
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <PostsTemplate
            title="Latest Content"
            subtitle="Articles"
            tagCounts={tagCounts}
          >
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
  const filteredArticles = articles.filter((p) => !p?.meta?.draft);

  const tagCountMap = new Map();
  filteredArticles.forEach((article) => {
    article?.meta?.tags?.forEach((tag) => {
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
      articles: filteredArticles,
      tagCounts: tagCounts,
    },
  };
}
