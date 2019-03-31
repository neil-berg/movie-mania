import React from 'react';
import { connect } from 'react-redux';

//import { fetchMovie } from '../actions';
import Header from './Header';
//import SearchContainer from './SearchContainer';
import Spinner from './Spinner';

class MovieDetails extends React.Component {
  render() {
    //const { isLoading, movie } = this.props;
    return <div>Movie Details</div>;
    // return isLoading ? (
    //   <Spinner text="Loading" />
    // ) : (
    //   <div>
    //     <SearchContainer {...this.props} />
    //     <span style={{ fontSize: '2em' }}>{isLoading}</span>
    //     <p>{movie.Title}</p>
    //     <p>{movie.Runtime}</p>
    //   </div>
    // );
  }
}

export default MovieDetails;

// const mapStateToProps = state => {
//   return {
//     isLoading: state.isLoading,
//     movie: state.movie
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     fetchMovie
//   }
// )(MovieDetails);
