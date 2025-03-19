const initState = {
  themeId: 1,
};

const SET_THEME_ID = "SET_THEME_ID";

interface SetThemeIdAction {
  type: typeof SET_THEME_ID;
  payload: number;
}

interface ThemeState {
  themeId: number;
}

export const themeReducer = (
  state = initState,
  action: SetThemeIdAction
): ThemeState => {
  // fix any
  switch (action.type) {
    // дописать
    case SET_THEME_ID:
      return { ...state, themeId: action.payload };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): SetThemeIdAction => ({
  type: "SET_THEME_ID",
  payload: id,
}); // fix any
