import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import SortMenu from './SortMenu';
import Pagination from './Pagination';
import Spinner from './Spinner';
import {
  fetchTrendingMovies,
  closeSidedrawer,
  setPageNumber
} from '../actions';
import { sortedTrendingSelector } from '../selectors';

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

class Trending extends React.Component {
  componentDidMount() {
    this.props.fetchTrendingMovies(1);
  }

  componentDidUpdate(prevProps) {
    const oldPage = Number(
      prevProps.location.pathname.split('/')[2].split('-')[1]
    );
    const newPage = Number(
      this.props.location.pathname.split('/')[2].split('-')[1]
    );
    if (oldPage !== newPage) {
      this.props.fetchTrendingMovies(newPage);
      this.props.setPageNumber(newPage);
    }
  }

  renderList() {
    return this.props.trendingMovies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }

  render() {
    if (this.props.isLoading) {
      return <Spinner text="Loading movies" />;
    }
    return (
      <div onClick={() => this.props.closeSidedrawer()}>
        <PageTitle>Trending</PageTitle>
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
    trendingMovies: sortedTrendingSelector(state)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTrendingMovies,
    closeSidedrawer,
    setPageNumber
  }
)(Trending);
