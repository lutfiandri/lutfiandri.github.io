import Image from 'next/image';
import Link from 'next/link';
import RenderIf from '../RenderIf';

function PostPreviewCard({ meta, baseUrl }) {
  const { title, desc, url, slug, external, tags = [], thumbnailUrl } = meta;
  return (
    <Link passHref={external} href={external ? url : `/${baseUrl}/${slug}`}>
      <a
        className="block w-full bg-white p-8 rounded-lg group"
        target={external ? '_blank' : ''}
      >
        <RenderIf when={thumbnailUrl}>
          <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
            <Image
              src={thumbnailUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="group-hover:scale-105 duration-500"
            />
          </div>
        </RenderIf>
        <div className="mb-2">
          <h2 className="text-lg font-bold group-hover:text-blue">{title}</h2>
          <div className="flex text-gray">
            <style jsx>{`
              .jsx-tag:not(:first-child)::before {
                content: '·';
                font-size: 1em;
                margin: 0 0.25em;
              }
            `}</style>
            {tags.map((tag, index) => (
              <div className="jsx-tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div>{desc}</div>
      </a>
    </Link>
  );
}

export default PostPreviewCard;
