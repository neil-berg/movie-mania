import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import { fetchMovie } from '../actions';

class MovieSearch extends React.Component {
  handleSubmit = () => {
    const movie = this.props.movie;
    const title = movie.values.title.replace(/\s/, '+');
    this.props.fetchMovie(title);
    this.props.history.push('/search');
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <SearchResults />
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
