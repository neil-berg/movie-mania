export const paginationReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_PAGE_NUMBER':
      return action.payload;
    case 'SET_PREVIOUS_PAGE':
      return state - 1;
    case 'SET_NEXT_PAGE':
      return state + 1;
    default:
      return state;
  }
};
