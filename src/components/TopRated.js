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
  setPageNumber,
  setGenreText,
  setGenreKey,
  setHeaderText
} from '../actions';
import { sortedTopRatedSelector } from '../selectors';
import { getGenreKey } from '../helper';

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

class TopRated extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderText('Top Rated');
    const genreText = this.props.location.pathname.split('/')[2];
    const genreKey = getGenreKey(genreText);
    const page = Number(this.props.location.pathname.slice(-1));
    this.props.fetchTopRatedMovies(genreKey, page);
    this.props.setGenreKey(genreKey);
    this.props.setGenreText(genreText);
    this.props.setPageNumber(page);
  }

  componentDidUpdate(prevProps) {
    const oldGenre = prevProps.location.pathname.split('/')[2];
    const newGenre = this.props.location.pathname.split('/')[2];
    const newGenreKey = getGenreKey(newGenre);
    const oldPage = Number(prevProps.location.pathname.slice(-1));
    const newPage = Number(this.props.location.pathname.slice(-1));
    if (oldGenre !== newGenre || oldPage !== newPage) {
      this.props.fetchTopRatedMovies(newGenreKey, newPage);
      this.props.setPageNumber(newPage);
      this.props.setGenreKey(newGenreKey);
      this.props.setGenreText(newGenre);
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
    setPageNumber,
    setGenreKey,
    setGenreText,
    setHeaderText
  }
)(TopRated);
