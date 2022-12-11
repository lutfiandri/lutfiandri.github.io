import clsx from 'clsx';
import { useMemo } from 'react';

function ThemeTogglerButton({ isDark, className }) {
  const circleBaseClassName = useMemo(() => {
    return clsx(
      'origin-center ease-bounce-out',
      isDark ? 'scale-0' : 'scale-1',
      isDark ? 'duration-0' : 'duration-500'
    );
  }, [isDark]);

  return (
    <button
      aria-label={`Activate ${isDark ? 'light' : 'dark'} mode`}
      title={`Activate ${isDark ? 'light' : 'dark'} mode`}
    >
      <svg
        className={clsx(
          'w-5 h-5 overflow-visible duration-500',
          isDark ? 'rotate-[40deg]' : 'rotate-[150deg] !delay-[0ms]',
          // isDark ? 'rotate-[40deg] delay-500' : 'rotate-[150deg]',
          className
        )}
        viewBox="0 0 18 18"
      >
        <mask id="moon-mask-main-nav">
          <path fill="#FFF" d="M0 0H18V18H0z"></path>
          <circle
            cx={isDark ? 10 : 25}
            cy={isDark ? 2 : 0}
            r="8"
            // className={isDark ? 'delay-500' : ''}
          ></circle>
        </mask>
        <circle
          cx="9"
          cy="9"
          r={isDark ? '8' : '5'}
          className={clsx(
            'ease-bounce-out duration-500'
            // isDark ? 'delay-500' : ''
          )}
          fill="currentColor"
          mask="url(#moon-mask-main-nav)"
        ></circle>
        <g fill="var(--color-text)">
          <circle
            fill="currentColor"
            cx="13"
            cy="15.928"
            r="1.5"
            className={clsx(circleBaseClassName, 'delay-[200ms]')}
          ></circle>
          <circle
            fill="currentColor"
            cx="5"
            cy="15.928"
            r="1.5"
            className={clsx(circleBaseClassName, 'delay-[300ms]')}
          ></circle>
          <circle
            fill="currentColor"
            cx="1"
            cy="9"
            r="1.5"
            className={clsx(circleBaseClassName, 'delay-[400ms]')}
          ></circle>
          <circle
            fill="currentColor"
            cx="5"
            cy="2.072"
            r="1.5"
            className={clsx(circleBaseClassName, 'delay-[500ms]')}
          ></circle>
          <circle
            fill="currentColor"
            cx="13"
            cy="2.072"
            r="1.5"
            className={clsx(circleBaseClassName, 'delay-[000ms]')}
          ></circle>
          <circle
            fill="currentColor"
            cx="17"
            cy="9"
            r="1.5"
            className={clsx(circleBaseClassName, 'delay-[100ms]')}
          ></circle>
        </g>
      </svg>
    </button>
  );
}

export default ThemeTogglerButton;
