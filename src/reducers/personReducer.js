export const personDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PERSON_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export const personCreditsReducer = (state = [], action) => {
  switch (action.type) {
    case 'PERSON_CREDITS':
      return action.payload;
    default:
      return state;
  }
};
