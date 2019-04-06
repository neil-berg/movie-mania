import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSelectedMovie, fetchSelectedMovieCredits } from '../actions';
import DetailsBackdrop from './DetailsBackdrop';
import DetailsOverview from './DetailsOverview';
import DetailsVideos from './DetailsVideos';

class MovieDetails extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId.split('-')[0];
    this.props.fetchSelectedMovie(movieId);
    this.props.fetchSelectedMovieCredits(movieId);
  }
  render() {
    const { movie } = this.props;
    // if (!releaseYear) {
    //   return null;
    // }
    return (
      <div>
        <DetailsBackdrop />
        <DetailsOverview />
        <DetailsVideos />
        {/* <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          style={{ maxWidth: '600px' }}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
    movieCredits: state.selectedMovieCredits
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSelectedMovie,
    fetchSelectedMovieCredits
  }
)(MovieDetails);
