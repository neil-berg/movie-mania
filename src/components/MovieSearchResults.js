import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import { closeSidedrawer } from '../actions';

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

class MovieSearchResults extends React.Component {
  renderList() {
    return this.props.searchResults
      .filter(movie => movie.vote_count > 100)
      .map(movie => <MovieCard movie={movie} key={movie.id} />);
  }
  render() {
    return (
      <div onClick={() => this.props.closeSidedrawer()}>
        <PageTitle>Search Results</PageTitle>
        <CardGrid>{this.renderList()}</CardGrid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};

export default connect(
  mapStateToProps,
  { closeSidedrawer }
)(MovieSearchResults);
