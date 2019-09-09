import {
  UPDATE_SEARCH_LIST,
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  SET_THEME
} from './constants';

export const updateSearchList = payload => ({
  type: UPDATE_SEARCH_LIST,
  payload
});

export const addToMyList = item => ({
  type: ADD_TO_MY_LIST,
  payload: item
});

export const removeFromMyList = id => ({
  type: REMOVE_FROM_MY_LIST,
  payload: id
});

export const setTheme = theme => ({
  type: SET_THEME,
  payload: theme
});
