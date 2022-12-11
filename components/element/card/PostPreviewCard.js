import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import RenderIf from '../RenderIf';

function PostPreviewCard({ meta, baseUrl }) {
  const { title, desc, url, slug, external, tags = [], thumbnail } = meta;
  return (
    <Link passHref={external} href={external ? url : `/${baseUrl}/${slug}`}>
      <a
        className="group block w-full rounded-lg bg-white p-8"
        target={external ? '_blank' : ''}
      >
        <RenderIf when={thumbnail}>
          <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-md object-center">
            <Image
              src={`/${baseUrl}/${slug}/${thumbnail}`}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="duration-500 group-hover:scale-105"
            />
          </div>
        </RenderIf>
        <div className="mb-2">
          <h2 className="flex items-center gap-2 text-lg font-bold delay-[0ms] duration-[0ms] group-hover:text-blue">
            <span>{title}</span>
            <RenderIf when={external}>
              <HiOutlineArrowTopRightOnSquare className="-mt-1" />
            </RenderIf>
          </h2>
          <div className="flex flex-wrap text-gray">
            <style jsx>{`
              .jsx-tag:not(:last-child)::after {
                content: '·';
                font-size: 1em;
                margin: 0 0.25em;
              }
            `}</style>
            {tags.map((tag, index) => (
              // eslint-disable-next-line tailwindcss/no-custom-classname
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
