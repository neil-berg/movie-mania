import React from 'react';
import { connect } from 'react-redux';
import { fetchTopRatedMovies } from '../actions';

class TopRated extends React.Component {
  componentDidMount() {
    const genreId = 878;
    this.props.fetchTopRatedMovies(genreId);
  }

  renderList() {
    return this.props.topRatedMovies.map(movie => {
      return <div key={movie.id}>{movie.title}</div>;
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    topRatedMovies: state.topRatedMovies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTopRatedMovies
  }
)(TopRated);
