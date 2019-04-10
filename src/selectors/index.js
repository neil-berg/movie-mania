import { createSelector } from 'reselect';

const nowPlayingSelector = state => state.nowPlayingMovies;
const trendingSelector = state => state.trendingMovies;
const comingSoonSelector = state => state.comingSoonMovies;
const topRatedSelector = state => state.topRatedMovies;
const searchResultsSelector = state => state.searchResults;
const sortKeySelector = state => state.sortKey;

export const sortedNowPlayingSelector = createSelector(
  nowPlayingSelector,
  sortKeySelector,
  (movies, sortKey) => {
    if (sortKey === 'popularity' || sortKey === 'vote_average') {
      return [...movies].sort((a, b) => b[sortKey] - a[sortKey]);
    } else if (sortKey === 'release_date') {
      return [...movies].sort(
        (a, b) => new Date(b[sortKey]) - new Date(a[sortKey])
      );
    } else {
      return movies;
    }
  }
);
export const sortedTrendingSelector = createSelector(
  trendingSelector,
  sortKeySelector,
  (movies, sortKey) => {
    if (sortKey === 'popularity' || sortKey === 'vote_average') {
      return [...movies].sort((a, b) => b[sortKey] - a[sortKey]);
    } else if (sortKey === 'release_date') {
      return [...movies].sort(
        (a, b) => new Date(b[sortKey]) - new Date(a[sortKey])
      );
    } else {
      return movies;
    }
  }
);
export const sortedComingSoonSelector = createSelector(
  comingSoonSelector,
  sortKeySelector,
  (movies, sortKey) => {
    if (sortKey === 'popularity' || sortKey === 'vote_average') {
      return [...movies].sort((a, b) => b[sortKey] - a[sortKey]);
    } else if (sortKey === 'release_date') {
      return [...movies].sort(
        (a, b) => new Date(b[sortKey]) - new Date(a[sortKey])
      );
    } else {
      return movies;
    }
  }
);
export const sortedTopRatedSelector = createSelector(
  topRatedSelector,
  sortKeySelector,
  (movies, sortKey) => {
    if (sortKey === 'popularity' || sortKey === 'vote_average') {
      return [...movies].sort((a, b) => b[sortKey] - a[sortKey]);
    } else if (sortKey === 'release_date') {
      return [...movies].sort(
        (a, b) => new Date(b[sortKey]) - new Date(a[sortKey])
      );
    } else {
      return movies;
    }
  }
);
export const sortedSearchResultsSelector = createSelector(
  searchResultsSelector,
  sortKeySelector,
  (movies, sortKey) => {
    if (sortKey === 'popularity' || sortKey === 'vote_average') {
      return [...movies].sort((a, b) => b[sortKey] - a[sortKey]);
    } else if (sortKey === 'release_date') {
      return [...movies].sort(
        (a, b) => new Date(b[sortKey]) - new Date(a[sortKey])
      );
    } else {
      return movies;
    }
  }
);
