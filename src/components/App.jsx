import { Component } from 'react';

import '../index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Skeleton } from './Skeleton/Skeleton';
import { Modal } from './Modal/Modal';

import { service } from 'ServiceApi/service';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { Button } from './Button/Button';
import { ImageGalleryItemSkeleton } from './ImageGalleryItem/ImageGalleryItemSkeleton';
import { useEffect, useState } from 'react';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

export function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.Idle);

  const [modalImageUrl, setModalImageUrl] = useState('');
  const [query, setQuery] = useState('');

  const handleChangeModalUrl = Url => {
    setModalImageUrl(Url);
  };
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const onCloseModal = () => {
    setModalImageUrl('');
  };
  const handleSubmit = search => {
    if (search === query) {
      return;
    }
    setImages([]);
    setQuery(search);
  };
  const fetchImages = () => {
    console.log('query', query);

    service(page, query)
      .then(({ data }) => {
        setStatus(STATUS.Success);
        setImages(prevState => [...prevState, ...data.hits]);
      })
      .catch(() => {
        setStatus(STATUS.Error);
        toast.error('Something is wrong!');
      });
  };

  useEffect(() => {
    if (page !== 1 || query !== '') {
      fetchImages();
    }
  }, [page, query]);

  if (status === STATUS.Error) {
    return <>Error</>;
  }
  if (status === STATUS.Idle || status === STATUS.Loading) {
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        <ul className="gallery">
          {[...Array(4)].map((_, index) => (
            <ImageGalleryItemSkeleton key={index} />
          ))}
        </ul>
      </>
    );
  }
  if (!images?.length) {
    return <p>No data</p>;
  }

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <Skeleton />
      <ImageGallery
        query={setQuery}
        images={images}
        handleChangeModalUrl={handleChangeModalUrl}
      />

      <Button
        className="btn"
        type="button"
        textContent="Load more"
        handlerClick={handleLoadMore}
      >
        Load more
      </Button>
      {modalImageUrl && (
        <Modal onClose={onCloseModal}>
          <img src={modalImageUrl} className="imageStyle" alt="" />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
}
