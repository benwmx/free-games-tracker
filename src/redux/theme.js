/* eslint-disable no-unused-vars */
const TOGGLE_THEME = 'TOGGLE_THEME';
const ADD_USER_THEME = 'ADD_USER_THEME';

const initialState = {
  darkTheme: false,
};

const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

const addUserTheme = (payload) => ({
  type: ADD_USER_THEME,
  payload,
});

const getUserTheme = () => (dispatch) => {
  const userTheme = JSON.parse(localStorage.getItem('userTheme'));
  if (userTheme !== null) dispatch(addUserTheme(userTheme));
  else {
    localStorage.setItem('userTheme', JSON.stringify(initialState));
  }
};

const updateUserTheme = () => (dispatch, getState) => {
  const userTheme = getState().theme;
  localStorage.setItem('userTheme', JSON.stringify(userTheme));
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: return { darkTheme: !state.darkTheme };
    case ADD_USER_THEME: return action.payload;
    default: return state;
  }
};

export {
  themeReducer as default,
  toggleTheme,
  getUserTheme,
  updateUserTheme,
};
