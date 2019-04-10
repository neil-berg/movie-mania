import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SortMenu from './SortMenu';
import MovieCard from './MovieCard';
import Spinner from './Spinner';
import { fetchComingSoonMovies, closeSidedrawer } from '../actions';
import { comingSoonDates } from '../helper';
import { sortedComingSoonSelector } from '../selectors';

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
    if (this.props.isLoading) {
      return <Spinner text="Loading movies" />;
    }
    return (
      <div onClick={() => this.props.closeSidedrawer()}>
        <PageTitle>Coming Soon</PageTitle>
        <SortMenu />
        <CardGrid>{this.renderList()}</CardGrid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    comingSoonMovies: sortedComingSoonSelector(state)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchComingSoonMovies,
    closeSidedrawer
  }
)(ComingSoon);
