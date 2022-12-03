import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

function Container({ children, maxW = '5xl', hFull = false }) {
  const maxWidth = useMemo(() => {
    switch (maxW) {
      case '3xl':
        return 'max-w-3xl';
      case '4xl':
        return 'max-w-4xl';
      case '5xl':
        return 'max-w-5xl';
      default:
        return 'max-w-5xl';
    }
  }, [maxW]);
  return (
    <div className={clsx('container', maxWidth, hFull ? 'h-full' : '')}>
      {children}
    </div>
  );
}

export default Container;
