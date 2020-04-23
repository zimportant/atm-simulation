export const SET_THEME_ACTION = 'SET_THEME_ACTION';

export interface ThemeAction {
  type: string;
  props: {
    paletteType: string;
    colorId: number;
  };
}

export const setTheme = (paletteType: string, colorId: number): ThemeAction => ({
  type: SET_THEME_ACTION,
  props: {
    paletteType,
    colorId
  }
});
