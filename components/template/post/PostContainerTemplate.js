import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const Masonry = dynamic(() => import('react-smart-masonry'), { ssr: false });

function PostContainerTemplate({
  title = 'Title',
  smallTitle = false,
  subtitle,
  tagCounts,
  children,
  pathSeeAll,
  extraPaddingY = false,
}) {
  return (
    <div className={clsx('mx-8 lgp:mx-0', extraPaddingY && 'my-32')}>
      <div className="-mx-8 mb-8 flex items-baseline justify-between lgp:mx-0">
        <h1
          className={clsx(
            'font-extrabold',
            smallTitle ? 'text-2xl' : 'text-4xl'
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="hidden text-lg font-semibold text-gray sm:block">
            {children.length} {subtitle}
          </p>
        ) : null}
        {pathSeeAll ? (
          <Link href={pathSeeAll} passHref>
            <a className=" font-semibold transition-all duration-200 hover:text-blue">
              See all →
            </a>
          </Link>
        ) : null}
      </div>

      {/* tags */}
      {tagCounts ? (
        <div className="-mx-8 mb-8 flex w-full flex-wrap gap-2 lgp:-mx-4">
          {tagCounts.map((tag) => (
            <div
              key={tag.name}
              className="cursor-default rounded-full bg-blue-light px-4 py-1 font-semibold text-gray-dark"
            >
              {tag.name} ({tag.count})
            </div>
          ))}
        </div>
      ) : null}

      {/* posts */}
      <div className="-mx-8">
        <Masonry
          gap={{ default: '1rem', lg: '2rem' }}
          autoArrange={true}
          breakpoints={{ default: 0, lg: 800 }}
          columns={{ default: 1, lg: 2 }}
        >
          {children}
        </Masonry>
      </div>
    </div>
  );
}

export default PostContainerTemplate;
