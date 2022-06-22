export const types = {
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_FILTER_VALUE: 'SET_FILTER_VALUE',
  SET_AUTOCOMPLETE_MODE: 'SET_AUTOCOMPLETE_MODE',
  SET_SORT_BY: 'SET_SORT_BY',
  SET_SORT_ORDER: 'SET_SORT_ORDER',
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

export const setFilterValue = string => {
  return {
    type: types.SET_FILTER_VALUE,
    payload: string,
  };
};

export const setSortBy = string => {
  return {
    type: types.SET_SORT_BY,
    payload: string,
  };
};

export const setSortOrder = string => {
  return {
    type: types.SET_SORT_ORDER,
    payload: string,
  };
};
