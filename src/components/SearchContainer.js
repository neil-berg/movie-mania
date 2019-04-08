import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

class SearchContainer extends React.Component {
  handleSubmit = () => {
    const movie = this.props.movie;
    if (movie.values) {
      const title = movie.values.title.replace(/\s/, '+');
      console.log(title);
    }
  };

  render() {
    return <SearchBar onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.form.movie,
    searchBarOpen: state.searchBarOpen
  };
};

export default connect(mapStateToProps)(SearchContainer);
