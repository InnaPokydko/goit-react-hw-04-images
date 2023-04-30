import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { AppContainer, IdleMessage } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '34168491-a08a19ec58377d1b70d25ff83';
const PER_PAGE = 12;

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImgModal] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(false);

  const onFormSubmit = input => {
    if (input.trim() === '') {
      return toast.error('Type something!');
    } else if (input === query) {
      return;
    }
    setQuery(input.toLowerCase());
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const onShowModal = item => {
    setImgModal(item);
    toggleModal();
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    setStatus('pending');
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=${PER_PAGE}`
      )
      .then(response => {
        setImages(prevImages =>
          page === 1
            ? response.data.hits
            : [...prevImages, ...response.data.hits]
        );
        setStatus('resolved');
        setShowLoadMore(response.data.hits.length === PER_PAGE);
      })
      .catch(error => {
        console.log(error);
        setError(error);
        setStatus('rejected');
      });
  }, [query, page]);

  return (
    <AppContainer>
      <Searchbar onSubmit={onFormSubmit} />
      {status === 'idle' && <IdleMessage>Enter a search query</IdleMessage>}
      {status === 'pending' && <Loader loading={true} />}
      {status === 'rejected' && <h2>{error.message}</h2>}
      {images.length > 0 && (
        <div>
          <ImageGallery images={images} onShowModal={onShowModal} />
          {showLoadMore ? <Button onClick={handleLoadMore} /> : null}
          <ToastContainer />
          {showModal && <Modal onClose={toggleModal} item={imgModal} />}
        </div>
      )}
    </AppContainer>
  );
}

export default App;
