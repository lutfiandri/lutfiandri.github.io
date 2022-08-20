import PortfolioCard from 'components/element/card/PortfolioCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/PostsTemplate';

const portfolios = [
  {
    title: 'URL Shortener API',
    desc: 'Sebuah URL shortener.',
    external: false,
    slug: 'url-shortener-api',
    tags: ['Backend', 'Golang', 'Gin', 'Gorm'],
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/lutfiandri-github-io.appspot.com/o/portfolios%2Furl-shortener-api%2Fassets%2Furl-shortener-api.png?alt=media&token=c2ae7102-574e-4bba-ae32-61dccdfce881',
  },
  {
    title: 'PPSMB UGM 2022',
    desc: 'Website untuk orienstasi mahasiswa baru UGM tahun 2022.',
    external: false,
    slug: '',
    tags: ['Next.js', 'Tailwind', 'Strapi'],
  },
  {
    title: 'PPSMB UGM 2022',
    desc: 'Website untuk orienstasi mahasiswa baru UGM tahun 2022.',
    external: false,
    slug: '',
    tags: ['Next.js', 'Strapi'],
  },
];

function Portfolio() {
  return (
    <DefaultLayout title="Portfolio">
      <Container>
        <div className="min-h-screen-no-header py-32">
          <PostsTemplate title="Latest Content" subtitle="Projects">
            {portfolios.map((portfolio) => (
              <PortfolioCard
                key={portfolio.slug}
                portfolio={portfolio}
                tags={['Backend', 'Golang', 'Gin', 'Gorm']}
              />
            ))}
          </PostsTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Portfolio;

// export async function getStaticProps() {
//   const { articles, error } = await findAllArticles();

//   return {
//     props: {
//       articles,
//       error,
//     },
//   };
// }
