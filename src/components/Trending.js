import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import { fetchTrendingMovies } from '../actions';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1.5em;
  margin: 1.5em 0;
  justify-content: center;
`;

class Trending extends React.Component {
  componentDidMount() {
    this.props.fetchTrendingMovies();
  }

  renderList() {
    return this.props.trendingMovies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Trending</h2>
        <CardContainer>{this.renderList()}</CardContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingMovies: state.trendingMovies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTrendingMovies
  }
)(Trending);
