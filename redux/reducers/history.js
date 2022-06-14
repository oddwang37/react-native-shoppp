import { types } from './../actions/history';

const initialState = {
  dateFilter: null,
  items: [],
}

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_HISTORY:
      const date = new Date();
      // first of all need to update previous date 
      // by deleting same item
      const newItems = state.items.filter((item) => item.id !== action.payload.id);
      newItems.push({...action.payload, date});
      return { ...state,
                items: newItems,
              };
    case types.CLEAR_HISTORY:
      return {...state, items: []}
    case types.SET_DATE_FILTER:
      return {...state, dateFilter: action.payload}
    default:
      return state; 
  }
};
