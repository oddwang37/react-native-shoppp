export const types = {
  ADD_PRODUCT_TO_HISTORY: 'ADD_PRODUCT_TO_HISTORY',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
  SET_DATE_FILTER: 'SET_DATE_FILTER',
}

export const addProductToHistory = (itemObj) => {
  return {
    type: types.ADD_PRODUCT_TO_HISTORY,
    payload: itemObj,
  }
};
export const clearHistory = () => {
  return {
    type: types.CLEAR_HISTORY,
  }
};
export const setDateFilter = (date) => {
  return {
    type: types.SET_DATE_FILTER,
    payload: date,
  }
}