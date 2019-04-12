import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SortMenu from './SortMenu';
import GenreMenu from './GenreMenu';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Spinner from './Spinner';
import {
  fetchTopRatedMovies,
  closeSidedrawer,
  setPageNumber
} from '../actions';
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
  margin: 1em;
`;

class TopRated extends React.Component {
  componentDidMount() {
    // Initially load Action page-1
    this.props.fetchTopRatedMovies(this.props.genreKey, 1);
  }

  componentDidUpdate(prevProps) {
    const oldGenre = prevProps.genreKey;
    const newGenre = this.props.genreKey;
    const oldPage = Number(
      prevProps.location.pathname.split('/')[3].split('-')[1]
    );
    const newPage = Number(
      this.props.location.pathname.split('/')[3].split('-')[1]
    );
    if (oldGenre !== newGenre) {
      this.props.fetchTopRatedMovies(newGenre, 1);
      this.props.setPageNumber(1);
    }
    if (oldPage !== newPage) {
      this.props.fetchTopRatedMovies(this.props.genreKey, newPage);
      this.props.setPageNumber(newPage);
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
        <Pagination location={this.props.location} />
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
    closeSidedrawer,
    setPageNumber
  }
)(TopRated);
