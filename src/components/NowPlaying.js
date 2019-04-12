import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SortMenu from './SortMenu';
import MovieCard from './MovieCard';
import Spinner from './Spinner';
import Pagination from './Pagination';
import { fetchNowPlayingMovies, closeSidedrawer } from '../actions';
import { nowPlayingDates } from '../helper.js';
import { sortedNowPlayingSelector } from '../selectors';

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

class NowPlaying extends React.Component {
  componentDidMount() {
    // Determine a month window of dates to fetch for 'now playing'
    const [startDate, endDate] = nowPlayingDates();
    this.props.fetchNowPlayingMovies(startDate, endDate, this.props.page);
  }

  componentDidUpdate(prevProps) {
    const [startDate, endDate] = nowPlayingDates();
    const oldPage = prevProps.page;
    const newPage = this.props.page;
    if (oldPage !== newPage) {
      this.props.fetchNowPlayingMovies(startDate, endDate, newPage);
    }
  }

  renderList() {
    return this.props.nowPlayingMovies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }
  render() {
    if (this.props.isLoading) {
      return <Spinner text="Loading movies" />;
    }
    return (
      <div onClick={() => this.props.closeSidedrawer()}>
        <PageTitle>Now Playing</PageTitle>
        <SortMenu />
        <CardGrid>{this.renderList()}</CardGrid>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    nowPlayingMovies: sortedNowPlayingSelector(state),
    page: state.page,
    sortKey: state.sortKey
  };
};

export default connect(
  mapStateToProps,
  {
    fetchNowPlayingMovies,
    closeSidedrawer
  }
)(NowPlaying);
