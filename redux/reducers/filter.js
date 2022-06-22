import {types} from './../actions/filter';

const initialState = {
  searchValue: '',
  filterValue: '',
  sortBy: '',
  sortOrder: '',
  isAutocompleteEnabled: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_VALUE:
      return {...state, searchValue: action.payload};
    case types.SET_FILTER_VALUE:
      return {...state, filterValue: action.payload};
    case types.SET_AUTOCOMPLETE_MODE:
      return {...state, isAutocompleteEnabled: action.payload};
    case types.SET_SORT_BY:
      return {...state, sortBy: action.payload};
    case types.SET_SORT_ORDER:
      return {...state, sortOrder: action.payload};
    default:
      return state;
  }
};
