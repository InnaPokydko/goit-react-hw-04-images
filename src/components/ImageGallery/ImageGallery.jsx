import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

const ImageGallery = ({ images, onShowModal }) => {
  return (
      <ImageGalleryStyle>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            item={image}
            onShowModal={onShowModal}
          />
        ))}
      </ImageGalleryStyle>
    );
  };

export default ImageGallery

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onShowModal: PropTypes.func.isRequired,
};


// const API_KEY = '34168491-a08a19ec58377d1b70d25ff83';
// const PER_PAGE = 12;

// export default class ImageGallery extends Component {
// state = {
// images: [],
// error: null,
// status: 'idle',
// page: 1,
// };

// componentDidUpdate(prevProps, prevState) {
// if (prevProps.query !== this.props.query) { // перевірка на оновлення запиту
// this.setState({ status: 'pending' });
// this.fetchImages(this.props.query, 1); // викликаємо функцію для запиту з першої сторінки
// }
// if (prevState.page !== this.state.page) { // перевірка на зміну сторінки
// this.fetchImages(this.props.query, this.state.page); // викликаємо функцію для запиту зі сторінки, що змінилась
// }
// }

// fetchImages = (query, page) => {
// axios
// .get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=${PER_PAGE}`)
// .then((response) => {
// this.setState((prevState) => ({
// images: [...prevState.images, ...response.data.hits], // додаємо нові дані до існуючих
// status: 'resolved', // змінюємо статус на resolved
// }));
// })
// .catch((error) => {
// console.log(error);
// this.setState({ error, status: 'rejected' }); // змінюємо статус на rejected в разі помилки
// });
// };

// handleLoadMore = () => {
// this.setState((prevState) => ({ page: prevState.page + 1 })); // збільшуємо значення сторінки при завантаженні наступних зображень
// };
//   render() {
//     const { images, error, status } = this.state;

//     if (status === 'idle') {
//       return <div>Enter a search query</div>;
//     }

//     if (status === 'pending') {
//       return <Loader loading={true} />;
//     }

//     if (status === 'rejected') {
//       return <h2>{error.message}</h2>;
//     }

//     if (status === 'resolved') {
//       return (
//         <div>
//           <ul className="ImageGallery">
//             {images.map(img => (
//               <ImageGalleryItem
//                 key={img.id}
//                 item={img}
//                 onImageClick={this.onClick}
//               />
//             ))}
//           </ul>
//           <Button onClick={this.handleLoadMore}/>
//         </div>
//       );
//     }
//   }
// }
