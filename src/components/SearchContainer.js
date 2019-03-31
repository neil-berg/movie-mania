import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { fetchTrendingMovies } from '../actions';

class SearchContainer extends React.Component {
  handleSubmit = () => {
    const movie = this.props.movie;
    const title = movie.values.title.replace(/\s/, '+');
    //this.props.fetchMovie(title);
    //this.props.history.push(`/search/${title}`);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default SearchContainer;

// const mapStateToProps = state => {
//   return {
//     movie: state.form.movie
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     fetchMovie
//   }
// )(SearchContainer);
