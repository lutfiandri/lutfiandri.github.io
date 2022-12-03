import rehypeRaw from 'rehype-raw';
import PostMarkdownComponents from 'components/template/post/PostMarkdownComponents';

import dynamic from 'next/dynamic';
const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const PostMarkdown = ({ children }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={PostMarkdownComponents}
    >
      {children}
    </ReactMarkdown>
  );
};

export default PostMarkdown;
