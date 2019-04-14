export const headerReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_HEADER_TEXT':
      return action.payload;
    default:
      return state;
  }
};
