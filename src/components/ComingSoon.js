import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SortMenu from './SortMenu';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Spinner from './Spinner';
import {
  fetchComingSoonMovies,
  closeSidedrawer,
  setPageNumber
} from '../actions';
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
  margin: 1em;
`;

class ComingSoon extends React.Component {
  componentDidMount() {
    const [startDate, endDate] = comingSoonDates();
    const page = Number(this.props.location.pathname.slice(-1));
    this.props.fetchComingSoonMovies(startDate, endDate, page);
    this.props.setPageNumber(page);
  }
  componentDidUpdate(prevProps) {
    const [startDate, endDate] = comingSoonDates();
    const oldPage = Number(prevProps.location.pathname.slice(-1));
    const newPage = Number(this.props.location.pathname.slice(-1));
    if (oldPage !== newPage) {
      this.props.fetchComingSoonMovies(startDate, endDate, newPage);
      this.props.setPageNumber(newPage);
    }
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
        <Pagination location={this.props.location} />
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
    closeSidedrawer,
    setPageNumber
  }
)(ComingSoon);
