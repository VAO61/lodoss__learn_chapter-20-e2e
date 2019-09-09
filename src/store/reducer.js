import {
  UPDATE_SEARCH_LIST,
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  SET_THEME
} from './constants';

const initialState = {
  searchList: [],
  myList: [],
  theme: 'list' // 'list' or 'tile'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_LIST:
      return {
        ...state,
        searchList: action.payload
      };
    case ADD_TO_MY_LIST:
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case REMOVE_FROM_MY_LIST:
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
