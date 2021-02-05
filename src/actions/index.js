export const fetchDataPending = () => ({
  type: 'FETCH_DATA_PENDING',
});
export const fetchDataSuccess = (heroes) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: heroes,
});
export const fetchDataError = (error) => ({
  type: 'FETCH_DATA_ERROR',
  payload: error,
});
export const getHeroDetail = (data) => ({
  type: 'GET_HERO_DETAIL',
  payload: data,
});
