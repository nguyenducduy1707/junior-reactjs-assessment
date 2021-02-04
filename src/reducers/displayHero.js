const initialState = {
  list: [],
};
const displayHeroReducer = (state = initialState, action) => {
  const newList = [...state.list];
  switch (action.type) {
    case 'DISPLAY':
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default displayHeroReducer;
