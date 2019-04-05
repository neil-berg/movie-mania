import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import { fetchTopRatedMovies } from '../actions';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1.5em;
  margin: 1.5em 0;
  justify-content: center;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 410px);
  }
`;

class TopRated extends React.Component {
  componentDidMount() {
    // Genre ID codes:
    // Action - 28, Comedy - 35, Documentary - 99,
    // Drama - 18, Horror - 27, SciFi - 898
    const genreId = 878;
    this.props.fetchTopRatedMovies(genreId);
  }

  renderList() {
    return this.props.topRatedMovies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Top Rated</h2>
        <CardGrid>{this.renderList()}</CardGrid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topRatedMovies: state.topRatedMovies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTopRatedMovies
  }
)(TopRated);
