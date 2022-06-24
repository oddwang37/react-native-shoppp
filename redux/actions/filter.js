export const types = {
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_AUTOCOMPLETE_MODE: 'SET_AUTOCOMPLETE_MODE',
  SET_FILTER_TYPE: 'SET_FILTER_TYPE',
  SET_SORT_BY: 'SET_SORT_BY',
  SET_ORDER_BY: 'SET_ORDER_BY',
};

export const setSearchValue = text => {
  return {
    type: types.SET_SEARCH_VALUE,
    payload: text,
  };
};

export const setAutocompleteMode = bool => {
  return {
    type: types.SET_AUTOCOMPLETE_MODE,
    payload: bool,
  };
};

export const setFilterType = text => {
  return {
    type: types.SET_FILTER_TYPE,
    payload: text,
  };
};

export const setSortBy = text => ({
  type: types.SET_SORT_BY,
  payload: text,
});

export const setOrderBy = text => ({
  type: types.SET_ORDER_BY,
  payload: text,
});
