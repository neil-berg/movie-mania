import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faVideo,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

import HighlightedMovie from './HighlightedMovie';
import MiniMovieCard from './MiniMovieCard';

import {
  fetchNowPlayingMovies,
  fetchComingSoonMovies,
  fetchTrendingMovies,
  setHeaderText
} from '../actions';

import { nowPlayingDates, comingSoonDates } from '../helper';

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  align-items: start;
  grid-gap: 1em;
`;

const MovieList = styled.div`
  margin: 1em auto;
  width: 350px;
  border: 1px grey solid;
  border-radius: 3px;
  box-shadow: 1px 2px 2px grey;
  background: var(--black);

  .link a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    transition: all 0.3s ease-out;
  }

  .link a:hover {
    color: var(--yellow);
  }
`;

const SectionHeader = styled.h2`
  color: white;
  margin: 0;
  padding: 0.75em;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;

  .header-icon {
    margin-right: 1em;
  }
`;

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderText('Home');
    // Fetch NowPlaying, ComingSoon, and Trending movies
    const [startDateNow, endDateNow] = nowPlayingDates();
    this.props.fetchNowPlayingMovies(startDateNow, endDateNow, 1);

    const [startDateSoon, endDateSoon] = comingSoonDates();
    this.props.fetchComingSoonMovies(startDateSoon, endDateSoon, 1);

    this.props.fetchTrendingMovies(1);
  }

  renderNowPlayingList() {
    return this.props.nowPlayingMovies
      .slice(0, 8)
      .map(movie => (
        <MiniMovieCard key={movie.id} movie={movie} section="now-playing" />
      ));
  }

  renderComingSoonList() {
    return this.props.comingSoonMovies
      .slice(0, 8)
      .map(movie => (
        <MiniMovieCard key={movie.id} movie={movie} section="coming-soon" />
      ));
  }

  render() {
    return (
      <HomeGrid>
        <HighlightedMovie movie={this.props.trendingMovies[0]} />

        <MovieList>
          <SectionHeader>
            <FontAwesomeIcon className="header-icon" icon={faVideo} />
            <span className="header-text">Now Playing</span>
          </SectionHeader>
          {this.renderNowPlayingList()}
          <div className="link">
            <Link to="/nowplaying/page-1">
              <span className="link-text">View all now playing</span>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Link>
          </div>
        </MovieList>

        <MovieList>
          <SectionHeader>
            <FontAwesomeIcon className="header-icon" icon={faCalendarAlt} />
            <span className="header-text">Coming Soon</span>
          </SectionHeader>
          {this.renderComingSoonList()}
          <div className="link">
            <Link to="/comingsoon/page-1">
              <span className="link-text">View all coming soon</span>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Link>
          </div>
        </MovieList>
      </HomeGrid>
    );
  }
}

Home.propTypes = {
  comingSoonMovies: PropTypes.array.isRequired,
  nowPlayingMovies: PropTypes.array.isRequired,
  trendingMovies: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    comingSoonMovies: state.comingSoonMovies,
    nowPlayingMovies: state.nowPlayingMovies,
    trendingMovies: state.trendingMovies.sort(
      (a, b) => b.popularity - a.popularity
    )
  };
};

export default connect(
  mapStateToProps,
  {
    fetchNowPlayingMovies,
    fetchComingSoonMovies,
    fetchTrendingMovies,
    setHeaderText
  }
)(Home);
