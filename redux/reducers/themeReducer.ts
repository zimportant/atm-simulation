import _ from 'lodash';
import { SET_THEME_ACTION, setTheme, ThemeAction } from '../actions/themeActions';

export interface ThemeState {
  paletteType: string;
  colorId: number;
}

const initialState: ThemeState = {
  paletteType: 'dark',
  colorId: 0
};

const themeReducer = (state: ThemeState = initialState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case SET_THEME_ACTION:
      return {
        ...state,
        paletteType: action.props.paletteType,
        colorId: action.props.colorId
      };
    default:
      return state;
  }
};

export default themeReducer;
