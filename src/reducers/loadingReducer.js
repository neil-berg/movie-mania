export const loadingReducer = (state = '', action) => {
  switch (action.type) {
    case 'IS_LOADNG':
      return action.payload;
    case 'IS_NOT_LOADING':
      return action.payload;
    default:
      return state;
  }
};
