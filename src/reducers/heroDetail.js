/* eslint-disable no-case-declarations */
const initialState = {
  list: {},
};
const displayHeroDetail = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HERO_DETAIL':
      return {
        ...state,
        selectedHeroesId: action.payload,
      };
    default:
      return state;
  }
};

export default displayHeroDetail;
