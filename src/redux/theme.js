const TOGGLE_THEME = 'TOGGLE_THEME';

const initialState = {
  darkTheme: false,
};

const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: return { darkTheme: !state.darkTheme };
    default: return state;
  }
};

export {
  themeReducer as default,
  toggleTheme,
};
