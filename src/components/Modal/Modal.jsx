import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      item: { largeImageURL, tags },
    } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImg>
          <img src={largeImageURL} alt={tags} />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import { Overlay,  ModalImg } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// const Modal = ({ onCloseModal, largeImage, tags }) => {
//   const handleKeyDown = (e) => {
//     if (e.code === 'Escape') {
//       onCloseModal();
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.currentTarget === e.target) {
//       onCloseModal();
//     }
//   };

//   return createPortal(

//       <Overlay onClick={handleBackdropClick} onKeyDown={handleKeyDown}>
//         <ModalImg>
//           <img src={largeImage} alt={tags} />
//         </ModalImg>
//       </Overlay>,
//     modalRoot
//   );
// };
