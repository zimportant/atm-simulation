import 'reactn';

declare module 'reactn/default' {
  export interface Reducers {
    doNothing: (global: State, dispatch: Dispatch) => null;
  }

  export interface State {
    themeConfig: {
      paletteType: string;
      selectedThemeId: number;
    };
  }
}
