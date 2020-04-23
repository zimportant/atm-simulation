export const SET_WINDOW_WIDTH_HEIGHT = 'SET_WINDOW_WIDTH_HEIGHT';
export const SET_PANEL_TYPE = 'SET_PANEL_TYPE';
export const SET_SUBSCRIPTION_URL = 'SET_SUBSCRIPTION_URL';

export type PanelType = 'master' | 'detail';

export interface ConfigAction {
  type: string;
  props: {
    width?: number;
    height?: number;
    panelType?: PanelType;
    subscriptionUrl?: string;
  };
}

export const setWindowWidthHeight = (width: number, height: number): ConfigAction => ({
  type: SET_WINDOW_WIDTH_HEIGHT,
  props: {
    width,
    height
  }
});

export const setPanelType = (panelType: PanelType): ConfigAction => ({
  type: SET_PANEL_TYPE,
  props: {
    panelType
  }
});

export const setSubscriptionUrl = (subscriptionUrl: string): ConfigAction => ({
  type: SET_SUBSCRIPTION_URL,
  props: {
    subscriptionUrl
  }
});
