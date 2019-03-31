import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { fetchMovie } from '../actions';

class MovieSearch extends React.Component {
  handleSubmit = () => {
    const movie = this.props.movie;
    const title = movie.values.title.replace(/\s/, '+');
    this.props.fetchMovie(title);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.form.movie
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovie
  }
)(MovieSearch);
