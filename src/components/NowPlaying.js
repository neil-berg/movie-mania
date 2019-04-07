import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import { fetchNowPlayingMovies } from '../actions';
import { nowPlayingDates } from '../helper.js';

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

class NowPlaying extends React.Component {
  componentDidMount() {
    // Determine a month window of dates to fetch for 'now playing'
    const [startDate, endDate] = nowPlayingDates();
    this.props.fetchNowPlayingMovies(startDate, endDate);
  }

  renderList() {
    return this.props.nowPlayingMovies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }
  render() {
    return (
      <div>
        <PageTitle>Now Playing</PageTitle>
        <CardGrid>{this.renderList()}</CardGrid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nowPlayingMovies: state.nowPlayingMovies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchNowPlayingMovies
  }
)(NowPlaying);
