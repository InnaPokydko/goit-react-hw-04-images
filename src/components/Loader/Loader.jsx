import React from 'react';
import { Dna } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  return (
    <div className="loader">
      <Dna color="#3f51b5" size={50} loading={loading} />
    </div>
  );
};

export default Loader;

