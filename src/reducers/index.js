import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  nowPlayingMoviesReducer,
  trendingMoviesReducer,
  comingSoonMoviesReducer,
  topRatedMoviesReducer,
  selectedMovieReducer,
  selectedMovieCreditsReducer
} from './movieReducers';
import { loadingReducer } from './loadingReducer';
import { sidedrawerReducer } from './sidedrawerReducer';
import { searchBarReducer, searchValueReducer } from './searchBarReducer';

export default combineReducers({
  nowPlayingMovies: nowPlayingMoviesReducer,
  trendingMovies: trendingMoviesReducer,
  comingSoonMovies: comingSoonMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  selectedMovie: selectedMovieReducer,
  selectedMovieCredits: selectedMovieCreditsReducer,
  form: formReducer,
  isLoading: loadingReducer,
  sidedrawerOpen: sidedrawerReducer,
  searchBarOpen: searchBarReducer,
  searchValue: searchValueReducer
});
