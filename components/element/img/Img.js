import Image from 'next/image';
import styles from './img.module.css';

/**
 * @returns next/image with full width and auto height
 */
export function Img({ src, alt, unoptimized = false }) {
  return (
    <div className={styles['unset-img']}>
      <Image
        alt={alt}
        src={src}
        layout="fill"
        className={styles['custom-img']}
        unoptimized={unoptimized}
      />
    </div>
  );
}
