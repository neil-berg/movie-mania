export const searchBarReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_SEARCHBAR':
      return true;
    case 'CLOSE_SEARCHBAR':
      return false;
    default:
      return state;
  }
};

export const searchValueReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return action.payload;
    default:
      return state;
  }
};
