import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import { fetchTopRatedMovies } from '../actions';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1.5em;
  margin: 1.5em 0;
  justify-content: center;
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
        <CardContainer>{this.renderList()}</CardContainer>
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
