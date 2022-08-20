import Link from 'next/link';

function ArticleCard({ article }) {
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

export default ArticleCard;
