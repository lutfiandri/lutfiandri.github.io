import clsx from 'clsx';
import { useMemo } from 'react';

function OpenNavbarTogglerButton({ isOpen, className }) {
  const rectBaseClassName = useMemo(() => {
    return clsx('origin-center duration-500 ease-bounce-out');
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      className={clsx(
        'h-6 w-6 duration-500 ease-bounce-out',
        isOpen ? 'rotate-[135deg]' : '',
        className
      )}
    >
      <rect
        width="16"
        height="1.8"
        x="1"
        y={isOpen ? 8 : 3}
        fill="currentColor"
        rx="1"
        className={clsx(rectBaseClassName)}
      ></rect>
      <rect
        width="12"
        height="1.8"
        x="3"
        y="8"
        fill="currentColor"
        rx="1"
        className={clsx(rectBaseClassName, isOpen ? 'rotate-[270px]' : '')}
      ></rect>
      <rect
        width="16"
        height="1.8"
        x="1"
        y={isOpen ? 8 : 13}
        fill="currentColor"
        rx="1"
        className={clsx(rectBaseClassName, isOpen ? 'rotate-90' : '')}
      ></rect>
    </svg>
  );
}

export default OpenNavbarTogglerButton;
