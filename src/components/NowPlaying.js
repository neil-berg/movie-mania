import React from 'react';
import { connect } from 'react-redux';

import { fetchNowPlayingMovies } from '../actions';
import { nowPlayingDates } from '../helper.js';

class NowPlaying extends React.Component {
  componentDidMount() {
    // Determine a month window of dates to fetch for 'now playing'
    const [startDate, endDate] = nowPlayingDates();
    this.props.fetchNowPlayingMovies(startDate, endDate);
  }

  renderList() {
    return this.props.nowPlayingMovies.map(movie => {
      return (
        <div>
          <p>{movie.title}</p>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
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
