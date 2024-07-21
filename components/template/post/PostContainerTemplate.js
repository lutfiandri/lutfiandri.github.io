// import Masonry from 'react-smart-masonry';

import dynamic from 'next/dynamic';
import { useState } from 'react';
const Masonry = dynamic(() => import('react-smart-masonry'), { ssr: false });

function PostContainerTemplate({
  title = 'Title',
  subtitle = 'Subtitle',
  tagCounts,
  children,
}) {
  return (
    <div className="mx-8 lgp:mx-0">
      <div className="-mx-8 mb-8 flex items-baseline justify-between lgp:mx-0">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="hidden text-lg font-semibold text-gray sm:block">
          {children.length} {subtitle}
        </p>
      </div>

      {/* tags */}
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
