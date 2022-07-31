import { Skeleton } from '../Skeleton/Skeleton';
import styles from './ImageGalleryItem.module.css';
export function ImageGalleryItemSkeleton() {
  return (
    <li className={styles.galleryItem}>
      <Skeleton className={styles.picture} />
    </li>
  );
}
