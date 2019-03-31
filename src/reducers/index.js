import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { trendingMoviesReducer } from './movieReducers';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  trendingMovies: trendingMoviesReducer,
  form: formReducer,
  isLoading: loadingReducer
});
