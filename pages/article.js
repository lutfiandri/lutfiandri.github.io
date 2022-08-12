import ArticleCard from 'components/element/card/ArticleCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/PostsTemplate';

const ARTICLES = [
  {
    title: 'Learn Pandas',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates minus tenetur, voluptas ad at id eum eius repellendus magni recusandae minima veniam magnam nisi quos soluta quam? Nesciunt, laborum?',
    slug: 'learn-pandas',
    external: false,
    url: undefined,
  },
  {
    title: 'Learn Pandas 2',
    desc: 'Lorem ipsum dolor sit amandae minima veniam magnam nisi quos soluta quam? Nesciunt, laborum?',
    slug: 'learn-pandas-2',
    external: false,
    url: undefined,
  },
  {
    title: 'Learn Pandas 3',
    desc: 'Lorem ipsum dolor sit amet conadfs ;alksdfj ;klasdf;l kasdfo jadsf adsflkj sectetur adipisicing elit. Iure voluptates minus tenetur, voluptas ad at id eum eius repellendus magni recusandae minima veniam magnam nisi quos soluta quam? Nesciunt, laborum?',
    slug: 'learn-pandas-3',
    external: false,
    url: undefined,
  },
  {
    title: 'Learn Pandas 4',
    desc: 'Lorem ipsum dolor sit amandae minima veniam magnam nisi quos soluta quam? Nesciunt, laborum?',
    slug: 'learn-pandas-4',
    external: false,
    url: undefined,
  },
  {
    title: 'Learn Pandas 5',
    desc: 'Lorem ipsum dolor sit amet conadfs ;alksdfj ;klasdf;l kasdfo jadsf adsflkj sectetur adipisicing elit. Iure voluptates minus tenetur, voluptas ad at id eum eius repellendus magni recusandae minima veniam magnam nisi quos soluta quam? Nesciunt, laborum?',
    slug: 'learn-pandas-5',
    external: false,
    url: undefined,
  },
];

function Article() {
  return (
    <DefaultLayout title="Article - Lutfi Andriyanto">
      <Container>
        <div className="min-h-screen-no-header py-32">
          <PostsTemplate title="Latest Content" subtitle="Articles">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </PostsTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Article;
