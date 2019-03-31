import omdb from '../apis/omdb';

export const fetchMovie = title => async dispatch => {
  // Show loading state
  dispatch(isLoading());

  // Fetch data
  const response = await omdb.get(
    `/?t=${title}&apikey=${process.env.REACT_APP_OMDB_KEY}`
  );
  dispatch({
    type: 'FETCH_MOVIE',
    payload: response.data
  });

  // Remove loading state
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
