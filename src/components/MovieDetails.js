import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DetailsBackdrop from './DetailsBackdrop';
import DetailsOverview from './DetailsOverview';
import DetailsVideos from './DetailsVideos';
import DetailsCast from './DetailsCast';
import DetailsCrew from './DetailsCrew';
import DetailsSimilar from './DetailsSimilar';

import {
  fetchSelectedMovie,
  fetchSelectedMovieCredits,
  fetchSimilarMovies,
  setHeaderText
} from '../actions';

class MovieDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderText('Movie Mania');
    const movieId = this.props.match.params.movieId.split('-')[0];
    this.props.fetchSelectedMovie(movieId);
    this.props.fetchSelectedMovieCredits(movieId);
    this.props.fetchSimilarMovies(movieId);
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    const oldMovieId = prevProps.match.params.movieId.split('-')[0];
    const newMovieId = this.props.match.params.movieId.split('-')[0];
    if (oldMovieId !== newMovieId) {
      this.props.fetchSelectedMovie(newMovieId);
      this.props.fetchSelectedMovieCredits(newMovieId);
      this.props.fetchSimilarMovies(newMovieId);
    }
  }

  render() {
    return (
      <div style={{ background: 'var(--black)' }}>
        <DetailsBackdrop />
        <DetailsOverview />
        <DetailsCrew />
        <DetailsVideos />
        <DetailsCast />
        <DetailsSimilar />
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSelectedMovie,
    fetchSelectedMovieCredits,
    fetchSimilarMovies,
    setHeaderText
  }
)(MovieDetails);
