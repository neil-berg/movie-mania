export const nowPlayingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'NOWPLAYING_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export const trendingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'TRENDING_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export const comingSoonMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'COMINGSOON_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export const topRatedMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOPRATED_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export const selectedMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export const selectedMovieCreditsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_MOVIE_CREDITS':
      return action.payload;
    default:
      return state;
  }
};

export const searchedMovieReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return action.payload;
    default:
      return state;
  }
};
