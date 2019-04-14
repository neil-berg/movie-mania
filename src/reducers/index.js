import { combineReducers } from 'redux';

import {
  nowPlayingMoviesReducer,
  trendingMoviesReducer,
  comingSoonMoviesReducer,
  topRatedMoviesReducer,
  selectedMovieReducer,
  selectedMovieCreditsReducer,
  searchedMovieReducer,
  similarMoviesReducer
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
import { headerReducer } from './headerReducer';
import { personDetailsReducer, personCreditsReducer } from './personReducer';

export default combineReducers({
  comingSoonMovies: comingSoonMoviesReducer,
  genreKey: genreKeyReducer,
  genreMenuOpen: genreMenuOpenReducer,
  genreText: genreTextReducer,
  headerText: headerReducer,
  isLoading: loadingReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
  page: paginationReducer,
  personDetails: personDetailsReducer,
  personCredits: personCreditsReducer,
  searchBarOpen: searchBarReducer,
  searchResults: searchedMovieReducer,
  searchValue: searchValueReducer,
  selectedMovie: selectedMovieReducer,
  selectedMovieCredits: selectedMovieCreditsReducer,
  sidedrawerOpen: sidedrawerReducer,
  similarMovies: similarMoviesReducer,
  sortKey: sortKeyReducer,
  sortMenuOpen: sortMenuOpenReducer,
  sortText: sortTextReducer,
  topRatedMovies: topRatedMoviesReducer,
  trendingMovies: trendingMoviesReducer
});
