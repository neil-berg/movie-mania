import React from 'react';
import { connect } from 'react-redux';

import { fetchComingSoonMovies } from '../actions';
import { comingSoonDates } from '../helper';

class ComingSoon extends React.Component {
  componentDidMount() {
    const [startDate, endDate] = comingSoonDates();
    this.props.fetchComingSoonMovies(startDate, endDate);
  }

  renderList() {
    return this.props.comingSoonMovies.map(movie => {
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
    comingSoonMovies: state.comingSoonMovies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchComingSoonMovies
  }
)(ComingSoon);
