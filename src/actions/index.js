import omdb from '../apis/omdb';

export const fetchMovie = title => async dispatch => {
  const response = await omdb.get(
    `/?t=${title}&apikey=${process.env.REACT_APP_OMDB_KEY}`
  );
  dispatch({
    type: 'FETCH_MOVIE',
    payload: response.data
  });
};
