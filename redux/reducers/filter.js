import {types} from './../actions/filter';

const initialState = {
  searchValue: '',
  isAutocompleteEnabled: false,
  filterType: null,
  sortBy: null,
  orderBy: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_VALUE:
      return {...state, searchValue: action.payload};
    case types.SET_AUTOCOMPLETE_MODE:
      return {...state, isAutocompleteEnabled: action.payload};
    case types.SET_FILTER_TYPE:
      return {...state, filterType: action.payload};
    case types.SET_SORT_BY:
      return {...state, sortBy: action.payload};
    case types.SET_ORDER_BY:
      return {...state, orderBy: action.payload};
    default:
      return state;
  }
};
