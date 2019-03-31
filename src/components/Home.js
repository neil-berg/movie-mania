import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import SearchContainer from './SearchContainer';

import { fetchTrendingMovies } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTrendingMovies();
  }

  renderList() {
    return this.props.trendingMovies.map(movie => {
      return <p>{movie.title}</p>;
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
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
)(Home);
