import { combineReducers } from 'redux';

import { movieReducer } from './movieReducer';
import { reducer as formReducer } from 'redux-form';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  movie: movieReducer,
  form: formReducer,
  isLoading: loadingReducer
});
