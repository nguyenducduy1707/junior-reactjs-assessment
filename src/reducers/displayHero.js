const displayHeroReducer = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default displayHeroReducer;
