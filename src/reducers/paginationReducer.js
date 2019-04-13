export const paginationReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_PAGE_NUMBER':
      return action.payload;
    default:
      return state;
  }
};
