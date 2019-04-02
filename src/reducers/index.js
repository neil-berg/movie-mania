import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  nowPlayingMoviesReducer,
  trendingMoviesReducer,
  comingSoonMoviesReducer,
  topRatedMoviesReducer
} from './movieReducers';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  nowPlayingMovies: nowPlayingMoviesReducer,
  trendingMovies: trendingMoviesReducer,
  comingSoonMovies: comingSoonMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  form: formReducer,
  isLoading: loadingReducer
});
