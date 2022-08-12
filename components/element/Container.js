import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

function Container({ children, maxW = '5xl' }) {
  const maxWidth = useMemo(() => {
    switch (maxW) {
      case '4xl':
        return 'max-w-4xl';

      case '5xl':
        return 'max-w-5xl';

      default:
        return 'max-w-5xl';
    }
  }, [maxW]);
  return <div className={clsx('container', maxWidth)}>{children}</div>;
}

export default Container;
