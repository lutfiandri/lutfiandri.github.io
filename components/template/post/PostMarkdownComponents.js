import RenderIf from 'components/element/RenderIf';
import { Img as NImage } from 'components/element/img/Img';

const P = ({ children }) => {
  return (
    <p className="my-4 leading-8 text-lg md:text-b-2xl text-justify">
      {children}
    </p>
  );
};

const Img = ({ src, alt, title }) => {
  return (
    <figure className="my-4 w-full max-w-[600px] mx-auto">
      <NImage src={src} alt={alt} unoptimized />
      <RenderIf when={title}>
        <figcaption className="italic text-[0.7em] text-center text-neutral-700">
          {title}
        </figcaption>
      </RenderIf>
    </figure>
  );
};

const H1 = ({ children }) => {
  return <h1 className="mt-8 mb-4 leading-8 text-2xl font-bold">{children}</h1>;
};

const H2 = ({ children }) => {
  return <h2 className="mt-6 mb-4 leading-8 text-xl font-bold">{children}</h2>;
};

const H3 = ({ children }) => {
  return <h3 className="mt-6 mb-4 leading-8 text-lg font-bold">{children}</h3>;
};

const A = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-c-blue-500 hover:text-c-blue-900 hover:underline transition-all"
    >
      {children}
    </a>
  );
};

const Ul = ({ children }) => {
  return (
    <ul className="my-4 leading-8 text-b-2xl text-justify list-outside list-disc ml-6">
      {children}
    </ul>
  );
};

const Ol = ({ children }) => {
  return (
    <ol className="my-4 leading-8 text-b-2xl text-justify list-outside list-decimal ml-6">
      {children}
    </ol>
  );
};

const Li = ({ children }) => {
  return <li className="mt-1 mb-1">{children}</li>;
};

const Blockquote = ({ children }) => {
  return (
    <blockquote className="bg-blue-light px-6 pt-2 py-[0.1px] rounded-lg border-l-4 border-blue my-4">
      {children}
    </blockquote>
  );
};

const Code = ({ children }) => (
  <span className="text-[0.9em] font-mono">{children}</span>
);

const Hr = () => (
  <div className="text-center my-8 select-none text-xl space-x-4">
    <span>•</span>
    <span>•</span>
    <span>•</span>
  </div>
);

const PostMarkdownComponents = {
  p: P,
  img: Img,
  h1: H1,
  h2: H2,
  h3: H3,
  a: A,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  code: Code,
  hr: Hr,
};

export default PostMarkdownComponents;
