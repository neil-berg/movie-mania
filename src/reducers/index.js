import { combineReducers } from 'redux';

import {
  nowPlayingMoviesReducer,
  trendingMoviesReducer,
  comingSoonMoviesReducer,
  topRatedMoviesReducer,
  selectedMovieReducer,
  selectedMovieCreditsReducer,
  searchedMovieReducer
} from './movieReducers';
import { loadingReducer } from './loadingReducer';
import { sidedrawerReducer } from './sidedrawerReducer';
import { searchBarReducer, searchValueReducer } from './searchReducer';
import {
  sortKeyReducer,
  sortTextReducer,
  sortMenuOpenReducer
} from './sortMenuReducer';
import {
  genreKeyReducer,
  genreTextReducer,
  genreMenuOpenReducer
} from './genreMenuReducer';

export default combineReducers({
  nowPlayingMovies: nowPlayingMoviesReducer,
  trendingMovies: trendingMoviesReducer,
  comingSoonMovies: comingSoonMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  selectedMovie: selectedMovieReducer,
  selectedMovieCredits: selectedMovieCreditsReducer,
  isLoading: loadingReducer,
  sidedrawerOpen: sidedrawerReducer,
  searchBarOpen: searchBarReducer,
  searchValue: searchValueReducer,
  searchResults: searchedMovieReducer,
  sortKey: sortKeyReducer,
  sortMenuOpen: sortMenuOpenReducer,
  sortText: sortTextReducer,
  genreMenuOpen: genreMenuOpenReducer,
  genreText: genreTextReducer,
  genreKey: genreKeyReducer
});
