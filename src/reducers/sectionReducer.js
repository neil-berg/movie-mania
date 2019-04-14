export const sectionReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SECTION':
      return action.payload;
    default:
      return state;
  }
};
