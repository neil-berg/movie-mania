import moviedb from '../apis/moviedb';

export const fetchTrendingMovies = () => async dispatch => {
  dispatch(isLoading());
  const response = await moviedb.get(
    `/trending/movie/week?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`
  );
  dispatch({
    type: 'TRENDING_MOVIES',
    payload: response.data.results
  });
  dispatch(isNotLoading());
};

export const isLoading = () => {
  return {
    type: 'IS_LOADING',
    payload: true
  };
};

export const isNotLoading = () => {
  return {
    type: 'IS_NOT_LOADING',
    payload: false
  };
};
