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
import { paginationReducer } from './paginationReducer';
import { sectionReducer } from './sectionReducer';

export default combineReducers({
  comingSoonMovies: comingSoonMoviesReducer,
  genreKey: genreKeyReducer,
  genreMenuOpen: genreMenuOpenReducer,
  genreText: genreTextReducer,
  isLoading: loadingReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
  page: paginationReducer,
  searchBarOpen: searchBarReducer,
  searchResults: searchedMovieReducer,
  searchValue: searchValueReducer,
  section: sectionReducer,
  selectedMovie: selectedMovieReducer,
  selectedMovieCredits: selectedMovieCreditsReducer,
  sidedrawerOpen: sidedrawerReducer,
  sortKey: sortKeyReducer,
  sortMenuOpen: sortMenuOpenReducer,
  sortText: sortTextReducer,
  topRatedMovies: topRatedMoviesReducer,
  trendingMovies: trendingMoviesReducer
});
