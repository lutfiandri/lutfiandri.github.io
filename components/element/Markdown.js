import clsx from 'clsx';

const globalClassNames = 'mt-4 mb-6 text-lg';

export function P({ children }) {
  return <p className={(globalClassNames, ``)}>{children}</p>;
}

const MarkdownComponents = {
  p: P,
};

export default MarkdownComponents;
