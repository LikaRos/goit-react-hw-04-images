import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({
  largeImageURL,
  webformatURL,
  tags,
  handleChangeModalUrl,
}) {
  return (
    <li className={styles.galleryItem}>
      <button onClick={() => handleChangeModalUrl(largeImageURL)}>
        <img className={styles.picture} src={webformatURL} alt={tags} />
      </button>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
