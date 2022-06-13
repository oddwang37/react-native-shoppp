import { types } from './../actions/filter';

const initialState = {
  filterSearch: '',
  isFocused: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER_TEXT:
      return { ...state,
                filterSearch: action.payload,
              };
    case types.SET_SEARCH_FOCUS:
      return {...state, isFocused: action.payload}
    default:
      return state; 
  }
};
