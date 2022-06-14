export const types = {
  SET_FILTER_TEXT: 'SET_FILTER_TEXT',
  SET_AUTOCOMPLETE_MODE: 'SET_AUTOCOMPLETE_MODE',
};

export const setFilterText = text => {
  return {
    type: types.SET_FILTER_TEXT,
    payload: text,
  };
};

export const setAutocompleteMode = bool => {
  return {
    type: types.SET_AUTOCOMPLETE_MODE,
    payload: bool,
  };
};
