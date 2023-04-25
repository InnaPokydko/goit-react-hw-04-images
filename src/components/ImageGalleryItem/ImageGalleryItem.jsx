import PropTypes from 'prop-types';
import { ImageGalleryItemStyle, ImgStyle } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  item: { largeImageURL, webformatURL, tags },
  onShowModal,
}) => {
  return (
    <ImageGalleryItemStyle>
      <ImgStyle
        src={webformatURL}
        alt={tags}
        onClick={() => onShowModal({ largeImageURL, tags })}
      />
    </ImageGalleryItemStyle>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onShowModal: PropTypes.func.isRequired,
};
