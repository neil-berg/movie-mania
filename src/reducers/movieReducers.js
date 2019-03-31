export const trendingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'TRENDING_MOVIES':
      return action.payload;
  }
  return state;
};
