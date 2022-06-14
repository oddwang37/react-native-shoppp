import {types} from './../actions/filter';

const initialState = {
  filterSearch: '',
  isAutocompleteEnabled: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER_TEXT:
      return {...state, filterSearch: action.payload};
    case types.SET_AUTOCOMPLETE_MODE:
      return {...state, isAutocompleteEnabled: action.payload};
    default:
      return state;
  }
};
