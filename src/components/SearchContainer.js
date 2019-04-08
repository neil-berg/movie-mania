import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './SearchBar';

class SearchContainer extends React.Component {
  handleSubmit = () => {
    const movie = this.props.movie;
    const title = movie.values.title.replace(/\s/, '+');
    console.log(title);
  };

  render() {
    // if (!this.props.searchBarOpen) {
    //   return null;
    // }
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
