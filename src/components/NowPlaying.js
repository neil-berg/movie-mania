import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SortMenu from './SortMenu';
import MovieCard from './MovieCard';
import Spinner from './Spinner';
import Pagination from './Pagination';
import {
  fetchNowPlayingMovies,
  closeSidedrawer,
  setPageNumber,
  setHeaderText
} from '../actions';
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

class NowPlaying extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderText('Now Playing');
    // Determine a 1 month window of dates to fetch for 'now playing'
    const [startDate, endDate] = nowPlayingDates();
    const page = Number(this.props.location.pathname.slice(-1));
    this.props.fetchNowPlayingMovies(startDate, endDate, page);
    this.props.setPageNumber(page);
  }

  componentDidUpdate(prevProps) {
    const [startDate, endDate] = nowPlayingDates();
    const oldPage = Number(prevProps.location.pathname.slice(-1));
    const newPage = Number(this.props.location.pathname.slice(-1));
    if (oldPage !== newPage) {
      this.props.fetchNowPlayingMovies(startDate, endDate, newPage);
      this.props.setPageNumber(newPage);
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
        <SortMenu />
        <CardGrid>{this.renderList()}</CardGrid>
        <Pagination location={this.props.location} />
      </div>
    );
  }
}

NowPlaying.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  nowPlayingMovies: PropTypes.array.isRequired,
  sortKey: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    nowPlayingMovies: sortedNowPlayingSelector(state),
    sortKey: state.sortKey
  };
};

export default connect(
  mapStateToProps,
  {
    fetchNowPlayingMovies,
    closeSidedrawer,
    setPageNumber,
    setHeaderText
  }
)(NowPlaying);
