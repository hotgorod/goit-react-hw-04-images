import { useState, useEffect } from 'react';
import css from './ImageGallery.module.css';
import { getImages } from 'services/getImages';
import Modal from 'components/Modal/Modal';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

const ImageGallery = ({onLoadMoreClick, searchText, currentPage }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );
  const [showModal, setShowModal] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');
  
  const [totalImages, setTotalImages] = useState(0);


  useEffect(() => {
     if (searchText === '') {
       return;
    }
      const loadMoreImages = (searchText, currentPage) => {
        setIsLoading(true);
        getImages(searchText, currentPage)
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              return Promise.reject(new Error('ErrorDetected'));
            }
          })
          .then(data => {
            if (data.hits.length === 0) {
              setError(true);
              setErrorMessage('No results found');
              return;
            }
            if (currentPage === 1) {
              setImages(data.hits);
            } else {
              setImages(prevImages => [...prevImages,...data.hits]);
            }
            setTotalImages(data.total);
          })
          .catch(() => setError(true))
          .finally(() => setIsLoading(false));
      };
    loadMoreImages(searchText, currentPage);
  }, [searchText, currentPage]);


  const openModal = imageURL => {
    setShowModal(true);
    setModalImageURL(imageURL);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalImageURL('');
  };
  const onImageClick = imageURL => {
    openModal(imageURL);
  };

  return (
    <>
      {error && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {isLoading && (
        <div className={css.loader}>
          <p>Loading...</p>
        </div>
      )}
      <ul className={css.ImageGallery}>
        {images &&
          images.map(el => {
            return (
              <ImageGalleryItem
                key={el.id}
                src={el.webformatURL}
                alt={el.tags}
                onClick={() => onImageClick(el.largeImageURL)}
              />
            );
          })}
      </ul>
      {showModal && <Modal imageURL={modalImageURL} onClose={closeModal} />}
      {totalImages > (images || []).length && (
        <Button onClick={onLoadMoreClick} />
      )}
    </>
  );
};


export default ImageGallery;
