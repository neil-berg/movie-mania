import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSelectedMovie, fetchSelectedMovieCredits } from '../actions';
import {
  getReleaseYear,
  getCertification,
  getGenres,
  getTrailerYouTubeKey
} from '../helper';

const Backdrop = styled.div`
  height: 350px;
  background-image: url("https://image.tmdb.org/t/p/original${props =>
    props.imgPath}");
  background-position: center 25%;
  background-size: cover;
  //filter: grayscale(70%);

`;

class MovieDetails extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId.split('-')[0];
    this.props.fetchSelectedMovie(movieId);
    this.props.fetchSelectedMovieCredits(movieId);
  }
  render() {
    const { movie } = this.props;
    const releaseYear = getReleaseYear(movie);
    const certification = getCertification(movie);
    const genres = getGenres(movie);
    const trailerKey = getTrailerYouTubeKey(movie);

    if (!releaseYear) {
      return null;
    }
    return (
      <div>
        <Backdrop imgPath={movie.backdrop_path} />
        <div className="header">
          <p>
            {movie.title} ({releaseYear})
          </p>
          <span>{movie.runtime} min</span>
          <span>{certification}</span>
          <span>{genres}</span>
        </div>
        <p className="overview">{movie.overview}</p>
        <p>{movie.vote_average}/10</p>
        <p>{movie.vote_count} votes</p>
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          style={{ maxWidth: '600px' }}
        />
        <div className="videos">
          <h3>Videos</h3>
        </div>
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
