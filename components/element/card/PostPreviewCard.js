import Image from 'next/image';
import Link from 'next/link';
import RenderIf from '../RenderIf';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

function PostPreviewCard({ meta, baseUrl }) {
  const { title, desc, url, slug, external, tags = [], thumbnail } = meta;
  return (
    <Link passHref={external} href={external ? url : `/${baseUrl}/${slug}`}>
      <a
        className="block w-full bg-white p-8 rounded-lg group"
        target={external ? '_blank' : ''}
      >
        <RenderIf when={thumbnail}>
          <div className="relative aspect-[4/3] object-center mb-4 rounded-md overflow-hidden">
            <Image
              src={`/${baseUrl}/${slug}/${thumbnail}`}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="group-hover:scale-105 duration-500"
            />
          </div>
        </RenderIf>
        <div className="mb-2">
          <h2 className="text-lg font-bold group-hover:text-blue delay-0 duration-0 flex items-center gap-2">
            <span>{title}</span>
            <RenderIf when={external}>
              <HiOutlineArrowTopRightOnSquare className="-mt-1" />
            </RenderIf>
          </h2>
          <div className="flex text-gray flex-wrap">
            <style jsx>{`
              .jsx-tag:not(:last-child)::after {
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
