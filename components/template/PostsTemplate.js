// import Masonry from 'react-smart-masonry';

import dynamic from 'next/dynamic';
const Masonry = dynamic(() => import('react-smart-masonry'), { ssr: false });

function PostsTemplate({ title = 'Title', subtitle = 'Subtitle', children }) {
  // console.log(children);
  return (
    <div className="mx-8 lgp:mx-0">
      <div className="flex justify-between items-baseline mb-8">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <div className="text-lg font-semibold text-gray">
          {children.length} {subtitle}
        </div>
      </div>
      <div className="-mx-8">
        <Masonry
          gap="2rem"
          autoArrange={true}
          breakpoints={{ default: 0, lg: 800 }}
          columns={{ default: 1, lg: 2 }}
          // columns={2}
        >
          {children}
        </Masonry>
      </div>
    </div>
  );
}

export default PostsTemplate;
