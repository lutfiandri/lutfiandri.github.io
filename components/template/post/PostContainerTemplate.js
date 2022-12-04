// import Masonry from 'react-smart-masonry';

import dynamic from 'next/dynamic';
const Masonry = dynamic(() => import('react-smart-masonry'), { ssr: false });

function PostContainerTemplate({
  title = 'Title',
  subtitle = 'Subtitle',
  children,
}) {
  // console.log(children);
  return (
    <div className="mx-8 lgp:mx-0">
      <div className="flex justify-between items-baseline mb-8 -mx-8 lgp:mx-0">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="text-lg font-semibold text-gray hidden sm:block">
          {children.length} {subtitle}
        </p>
      </div>
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
