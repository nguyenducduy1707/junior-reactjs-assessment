/* eslint-disable no-case-declarations */
const initialState = {
  list: [],
  isLoading: false,
};
const displayAllHeros = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_DATA_SUCCESS':
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
        isLoading: false,
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default displayAllHeros;
