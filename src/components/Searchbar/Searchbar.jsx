import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import {
  SearchbarBox,
  FormSearch,
  FormInput,
  SearchBtn,
  SearchBtnLabel,
} from './Searchbar.styled';

const initialValues = {
  search: '',
};

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.search);
    actions.resetForm();
  };

  return (
    <SearchbarBox>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormSearch>
          <SearchBtn type="submit">
            <BsSearch
              style={{ width: '16px', height: '16px' }}
            />
            <SearchBtnLabel>Search</SearchBtnLabel>
          </SearchBtn>

          <FormInput
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormSearch>
      </Formik>
    </SearchbarBox>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
