import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SortMenu from './SortMenu';
import MovieCard from './MovieCard';
import { closeSidedrawer, fetchSearchedMovie, setHeaderText } from '../actions';
import { sortedSearchResultsSelector } from '../selectors';

const NoResultsWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const NoResultsText = styled.p`
  margin: 2em 0 0 0;
  padding: 0;
  font-size: 1.25em;
  color: var(--green);
`;

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
  color: white;
  margin-top: 1em;
`;

class MovieSearchResults extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderText('Movie Mania');
    const value =
      this.props.searchValue || localStorage.getItem('movie-search-term');
    this.props.fetchSearchedMovie(value.split(' ').join('%20'));
  }

  componentDidUpdate(prevProps) {
    const oldValue = prevProps.match.params.searchId;
    const newValue = this.props.match.params.searchId;
    if (oldValue !== newValue) {
      this.props.fetchSearchedMovie(
        this.props.searchValue.split(' ').join('%20')
      );
    }
  }

  renderList() {
    return this.props.searchResults
      .filter(movie => movie.vote_count > 100)
      .map(movie => <MovieCard movie={movie} key={movie.id} />);
  }
  render() {
    if (this.renderList().length === 0) {
      return (
        <NoResultsWrapper>
          <NoResultsText>
            Oops, no results for {localStorage.getItem('movie-search-term')}.
          </NoResultsText>
          <NoResultsText>Try another search!</NoResultsText>
        </NoResultsWrapper>
      );
    }
    return (
      <div onClick={() => this.props.closeSidedrawer()}>
        <PageTitle>
          Results for {localStorage.getItem('movie-search-term')}
        </PageTitle>
        <SortMenu />
        <CardGrid>{this.renderList()}</CardGrid>
      </div>
    );
  }
}

MovieSearchResults.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue,
    searchResults: sortedSearchResultsSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { closeSidedrawer, fetchSearchedMovie, setHeaderText }
)(MovieSearchResults);
