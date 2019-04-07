import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSelectedMovie, fetchSelectedMovieCredits } from '../actions';
import DetailsBackdrop from './DetailsBackdrop';
import DetailsOverview from './DetailsOverview';
import DetailsVideos from './DetailsVideos';
import DetailsCast from './DetailsCast';
import DetailsCrew from './DetailsCrew';

class MovieDetails extends React.Component {
  componentDidMount() {
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

export default connect(
  null,
  {
    fetchSelectedMovie,
    fetchSelectedMovieCredits
  }
)(MovieDetails);
