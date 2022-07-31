import styles from './ImageGallery.module.css';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

export function ImageGallery({ images, handleChangeModalUrl }) {
  return (
    <>
      <ul className={styles.gallery}>
        {images.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            tags={tags}
            handleChangeModalUrl={handleChangeModalUrl}
          />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  handleChangeModalUrl: PropTypes.func.isRequired,
};
