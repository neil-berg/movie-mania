import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  nowPlayingMoviesReducer,
  trendingMoviesReducer
} from './movieReducers';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  nowPlayingMovies: nowPlayingMoviesReducer,
  trendingMovies: trendingMoviesReducer,
  form: formReducer,
  isLoading: loadingReducer
});
