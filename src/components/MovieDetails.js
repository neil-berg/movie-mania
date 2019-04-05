import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSelectedMovie, fetchSelectedMovieCredits } from '../actions';
import DetailsBackdrop from './DetailsBackdrop';
import DetailsOverview from './DetailsOverview';

import {
  getReleaseYear,
  getCertification,
  getGenres,
  getVideos
} from '../helper';

class MovieDetails extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId.split('-')[0];
    this.props.fetchSelectedMovie(movieId);
    this.props.fetchSelectedMovieCredits(movieId);
  }
  render() {
    const { movie } = this.props;
    // const releaseYear = getReleaseYear(movie);
    // const certification = getCertification(movie);
    // const genres = getGenres(movie);
    // const videos = getVideos(movie);

    // if (!releaseYear) {
    //   return null;
    // }
    return (
      <div>
        <DetailsBackdrop />
        <DetailsOverview />
        {/* <Backdrop imgPath={movie.backdrop_path} />
        <div className="header">
          <p>
            {movie.title} ({releaseYear})
          </p>
          <span>{certification}</span>
          <span>{movie.runtime} min</span>
          <span>{genres}</span>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Movie poster for ${movie.title}`}
        />
        <p className="overview">{movie.overview}</p>
        <p>{movie.vote_average}/10</p>
        <p>{movie.vote_count} votes</p> */}
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
