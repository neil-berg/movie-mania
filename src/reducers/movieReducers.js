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
