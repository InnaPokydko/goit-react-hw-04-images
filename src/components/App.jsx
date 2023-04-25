import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { AppContainer, IdleMessage } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '34168491-a08a19ec58377d1b70d25ff83';
const PER_PAGE = 12;

class App extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    query: '',
    page: 1,
    showModal: false,
    imgModal: '',
    showLoadMore: false,
  };

  onFormSubmit = input => {
    if (input.trim() === '') {
      return toast.error('Type something!');
    } else if (input === this.state.input) {
      return;
    }
    this.setState({
      query: input.toLowerCase(),
      page: 1,
      images: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      axios
        .get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.query}&page=${this.state.page}&per_page=${PER_PAGE}`
        )
        .then(response => {
          this.setState(prevState => ({
            images:
              prevState.page === 1
                ? response.data.hits
                : [...prevState.images, ...response.data.hits],
            status: 'resolved',
            showLoadMore: response.data.hits.length === PER_PAGE,
          }));
        })
        .catch(error => {
          console.log(error);
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onShowModal = item => {
    this.setState({ imgModal: item, showModal: this.toggleModal });
  };

  render() {
    const { images, error, status, showModal, imgModal, showLoadMore } =
      this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.onFormSubmit} />
        {status === 'idle' && <IdleMessage>Enter a search query</IdleMessage>}
        {status === 'pending' && <Loader loading={true} />}
        {status === 'rejected' && <h2>{error.message}</h2>}
        {images.length > 0 && (
          <div>
            <ImageGallery images={images} onShowModal={this.onShowModal} />
            {showLoadMore ? <Button onClick={this.handleLoadMore} /> : null}
            <ToastContainer />
            {showModal && <Modal onClose={this.toggleModal} item={imgModal} />}
          </div>
        )}
      </AppContainer>
    );
  }
}

export default App;

