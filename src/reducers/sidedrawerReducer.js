export const sidedrawerReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_SIDEDRAWER':
      return true;
    case 'CLOSE_SIDEDRAWER':
      return false;
    default:
      return state;
  }
};
