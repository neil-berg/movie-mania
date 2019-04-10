import { createSelector } from 'reselect';

const nowPlayingSelector = state => state.nowPlayingMovies;
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
