import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import { fetchComingSoonMovies } from '../actions';
import { comingSoonDates } from '../helper';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1.5em;
  margin: 1.5em 0;
  justify-content: center;
`;

class ComingSoon extends React.Component {
  componentDidMount() {
    const [startDate, endDate] = comingSoonDates();
    this.props.fetchComingSoonMovies(startDate, endDate);
  }

  renderList() {
    return this.props.comingSoonMovies.map(movie => (
      <MovieCard movie={movie} />
    ));
  }
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Coming Soon</h2>
        <CardContainer>{this.renderList()}</CardContainer>
      </div>
    );
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
