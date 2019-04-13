export const genreMenuOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_GENRE_MENU':
      return true;
    case 'CLOSE_GENRE_MENU':
      return false;
    default:
      return state;
  }
};

export const genreTextReducer = (state = 'action', action) => {
  switch (action.type) {
    case 'SET_GENRE_TEXT':
      return action.payload;
    default:
      return state;
  }
};

export const genreKeyReducer = (state = '28', action) => {
  switch (action.type) {
    case 'SET_GENRE_KEY':
      return action.payload;
    default:
      return state;
  }
};
