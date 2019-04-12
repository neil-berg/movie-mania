import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SortMenu from './SortMenu';
import GenreMenu from './GenreMenu';
import MovieCard from './MovieCard';
import Spinner from './Spinner';
import { fetchTopRatedMovies, closeSidedrawer } from '../actions';
import { sortedTopRatedSelector } from '../selectors';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1.5em;
  padding: 1.5em 0;
  justify-content: center;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 410px);
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  color: var(--green);
  margin: 0;
  padding-top: 1em;
`;

class TopRated extends React.Component {
  componentDidMount() {
    this.props.fetchTopRatedMovies(this.props.genreKey);
  }

  componentDidUpdate(prevProps) {
    const oldGenre = prevProps.genreKey;
    const newGenre = this.props.genreKey;
    if (oldGenre !== newGenre) {
      this.props.fetchTopRatedMovies(newGenre);
    }
  }

  renderList() {
    return this.props.topRatedMovies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }
  render() {
    if (this.props.isLoading) {
      return <Spinner text="Loading movies" />;
    }
    return (
      <div onClick={() => this.props.closeSidedrawer()}>
        <PageTitle>Top Rated - {this.props.genreText}</PageTitle>
        <GenreMenu />
        <SortMenu />
        <CardGrid>{this.renderList()}</CardGrid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    genreKey: state.genreKey,
    genreText: state.genreText,
    topRatedMovies: sortedTopRatedSelector(state)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTopRatedMovies,
    closeSidedrawer
  }
)(TopRated);
