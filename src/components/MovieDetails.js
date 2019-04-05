import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSelectedMovie, fetchSelectedMovieCredits } from '../actions';

const Backdrop = styled.div`
  height: 350px;
  background-image: url("https://image.tmdb.org/t/p/original${props =>
    props.imgPath}");
  background-position: center 25%;
  background-size: cover;
`;

class MovieDetails extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId.split('-')[0];
    this.props.fetchSelectedMovie(movieId);
    this.props.fetchSelectedMovieCredits(movieId);
  }
  render() {
    const { movie, movieCredits } = this.props;
    return (
      <div>
        <Backdrop imgPath={movie.backdrop_path} />
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
