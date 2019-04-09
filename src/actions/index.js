import moviedb from '../apis/moviedb';

export const fetchNowPlayingMovies = (startDate, endDate) => async dispatch => {
  dispatch(isLoading());
  const response = await moviedb.get(
    `/discover/movie?api_key=${
      process.env.REACT_APP_MOVIEDB_KEY
    }&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&with_original_language=en`
  );
  dispatch({
    type: 'NOWPLAYING_MOVIES',
    payload: response.data.results
  });
  dispatch(isNotLoading());
};

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

export const fetchComingSoonMovies = (startDate, endDate) => async dispatch => {
  dispatch(isLoading());
  const response = await moviedb.get(`/discover/movie?api_key=${
    process.env.REACT_APP_MOVIEDB_KEY
  }&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}
  &with_original_language=en`);
  dispatch({
    type: 'COMINGSOON_MOVIES',
    payload: response.data.results
  });
  dispatch(isNotLoading());
};

export const fetchTopRatedMovies = genreId => async dispatch => {
  dispatch(isLoading());
  const response = await moviedb.get(
    `/discover/movie?api_key=${
      process.env.REACT_APP_MOVIEDB_KEY
    }&language=en-US&sort_by=vote_average.desc&certification_country=US&include_adult=false&include_video=false&page=1&vote_count.gte=100&with_genres=${genreId}&with_original_language=en`
  );
  dispatch({
    type: 'TOPRATED_MOVIES',
    payload: response.data.results
  });
  dispatch(isNotLoading());
};

export const fetchSelectedMovie = movieId => async dispatch => {
  dispatch(isLoading());

  const response = await moviedb.get(
    `/movie/${movieId}?api_key=${
      process.env.REACT_APP_MOVIEDB_KEY
    }&language=en-US&append_to_response=videos,release_dates`
  );

  dispatch({
    type: 'SELECTED_MOVIE',
    payload: response.data
  });

  dispatch(isNotLoading());
};

export const fetchSelectedMovieCredits = movieId => async dispatch => {
  const response = await moviedb.get(
    `/movie/${movieId}/credits?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`
  );
  dispatch({
    type: 'SELECTED_MOVIE_CREDITS',
    payload: response.data
  });
};

export const fetchSearchedMovie = value => async dispatch => {
  dispatch(isLoading());

  const response = await moviedb.get(
    `/search/movie?api_key=${
      process.env.REACT_APP_MOVIEDB_KEY
    }&language=en-US&query=${value}&page=1&include_adult=false`
  );
  dispatch({
    type: 'SEARCH_RESULTS',
    payload: response.data.results
  });

  dispatch(isNotLoading());
};

export const openSidedrawer = () => {
  return {
    type: 'OPEN_SIDEDRAWER'
  };
};

export const closeSidedrawer = () => {
  return {
    type: 'CLOSE_SIDEDRAWER'
  };
};

export const openSearchBar = () => {
  return {
    type: 'OPEN_SEARCHBAR'
  };
};

export const closeSearchBar = () => {
  return {
    type: 'CLOSE_SEARCHBAR'
  };
};

export const setSearchValue = value => {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: value
  };
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
