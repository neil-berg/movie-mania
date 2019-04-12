export const sortKeyReducer = (state = 'popularity', action) => {
  switch (action.type) {
    case 'SET_SORT_KEY':
      return action.payload;
    default:
      return state;
  }
};

export const sortTextReducer = (state = 'Most Popular', action) => {
  switch (action.type) {
    case 'SET_SORT_TEXT':
      return action.payload;
    default:
      return state;
  }
};

export const sortMenuOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_SORT_MENU':
      return true;
    case 'CLOSE_SORT_MENU':
      return false;
    default:
      return state;
  }
};
