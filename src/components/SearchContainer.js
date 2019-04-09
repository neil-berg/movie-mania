import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import SearchBar from './SearchBar';
import { closeSearchBar, setSearchValue } from '../actions';
import { getSearchValue } from '../helper';

class SearchContainer extends React.PureComponent {
  handleSubmit = () => {
    // If successful submission, close search bar and fetch results
    const searchValue = getSearchValue(this.props.movie);
    this.props.setSearchValue(searchValue);
    console.log(searchValue);
    //dispatch(reset('movieForm'));
    // const movie = this.props.movie;
    // if (movie.values) {
    //   const title = movie.values.title.replace(/\s/, '+');
    //   console.log(title);
    // }
  };

  render() {
    // if (this.props.searchValue !== '') {
    //   return <Redirect to="/search/my-movie-title" />;
    // }
    return <SearchBar onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.form.movieForm,
    searchBarOpen: state.searchBarOpen,
    searchValue: state.searchValue
  };
};

export default connect(
  mapStateToProps,
  { closeSearchBar, setSearchValue }
)(SearchContainer);
