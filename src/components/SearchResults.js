import React from 'react';
import { connect } from 'react-redux';

import Spinner from './Spinner';

const SearchResults = ({ isLoading, movie }) => {
  return isLoading ? (
    <Spinner text="Loading" />
  ) : (
    <div>
      <span style={{ fontSize: '2em' }}>{isLoading}</span>
      <p>{movie.Title}</p>
      <p>{movie.Runtime}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    movie: state.movie
  };
};

export default connect(mapStateToProps)(SearchResults);
