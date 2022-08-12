import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Article() {
  return (
    <DefaultLayout title="Article - Lutfi Andriyanto">
      <Container>
        <div className="min-h-screen-no-header py-32">
          <div className="flex justify-between items-baseline mb-8">
            <h1 className="text-4xl font-extrabold">Latest Content</h1>
            <div className="text-lg font-semibold text-gray">5 Articles</div>
          </div>
          <div className="-mx-8">
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 1024: 2 }}>
              <Masonry gutter="2rem">
                <ArticleCard
                  article={{
                    title: 'coba 1',
                    desc: 'desc 1',
                    url: 'https://google.com',
                    external: true,
                  }}
                />
                <ArticleCard
                  article={{
                    title: 'Basic of Pandas',
                    desc: `Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.`,
                    slug: 'basic-of-pandas',
                  }}
                />
                <ArticleCard
                  article={{
                    title: 'Basic of Pandas',
                    desc: `Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.`,
                    slug: 'basic-of-pandas',
                  }}
                />
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Article;

function ArticleCard({ article }) {
  const router = useRouter();
  const { title, desc, url, slug, external } = article;
  return (
    <Link passHref={external} href={external ? url : `/article/${slug}`}>
      <a
        className="block w-full bg-white p-8 rounded-lg group"
        target={external ? '_blank' : ''}
      >
        <h2 className="text-lg font-bold group-hover:text-blue mb-2">
          {title}
        </h2>
        <div>{desc}</div>
      </a>
    </Link>
  );
}
