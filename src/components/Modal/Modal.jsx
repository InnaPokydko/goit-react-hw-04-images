import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ item, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalImg>
        <img src={item.largeImageURL} alt={item.tags} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

