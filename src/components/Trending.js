import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTrendingMovies } from '../actions';

class Trending extends React.Component {
  componentDidMount() {
    this.props.fetchTrendingMovies();
  }

  renderList() {
    return this.props.trendingMovies.map(movie => {
      return (
        <div key={movie.id}>
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
    trendingMovies: state.trendingMovies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTrendingMovies
  }
)(Trending);
