import React from 'react';
import { connect } from 'react-redux';

import DetailsBackdrop from './DetailsBackdrop';
import DetailsOverview from './DetailsOverview';
import DetailsVideos from './DetailsVideos';
import DetailsCast from './DetailsCast';
import DetailsCrew from './DetailsCrew';

import {
  fetchSelectedMovie,
  fetchSelectedMovieCredits,
  setHeaderText
} from '../actions';

class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.setHeaderText('Movie Mania');
    const movieId = this.props.match.params.movieId.split('-')[0];
    this.props.fetchSelectedMovie(movieId);
    this.props.fetchSelectedMovieCredits(movieId);
  }

  render() {
    return (
      <div>
        <DetailsBackdrop />
        <DetailsOverview />
        <DetailsCrew />
        <DetailsVideos />
        <DetailsCast />
      </div>
    );
  }
}

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
    setHeaderText
  }
)(MovieDetails);
