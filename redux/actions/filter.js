export const types = {
  SET_FILTER_TEXT: 'SET_FILTER_TEXT',
  SET_SEARCH_FOCUS: 'SET_SEARCH_FOCUS',
};

export const setFilterText = text => {
  return {
    type: types.SET_FILTER_TEXT,
    payload: text,
  };
};

export const setSearchFocus = bool => {
  return {
    type: types.SET_SEARCH_FOCUS,
    payload: bool,
  };
};
