import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreBtn, BtnContainer } from './Button.styled';

export default function Button({ onClick }) {
  return (
    <BtnContainer>
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
    </BtnContainer>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};