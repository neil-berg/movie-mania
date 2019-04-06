import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import { fetchComingSoonMovies } from '../actions';
import { comingSoonDates } from '../helper';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 1.5em;
  padding: 1.5em 0;
  justify-content: center;
  background: var(--black);

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 410px);
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  background: var(--black);
  color: var(--green);
  margin: 0;
  padding-top: 1em;
`;

class ComingSoon extends React.Component {
  componentDidMount() {
    const [startDate, endDate] = comingSoonDates();
    this.props.fetchComingSoonMovies(startDate, endDate);
  }

  renderList() {
    return this.props.comingSoonMovies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
  }
  render() {
    return (
      <div>
        <PageTitle>Coming Soon</PageTitle>
        <CardGrid>{this.renderList()}</CardGrid>
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
