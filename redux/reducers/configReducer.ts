import {
  SET_WINDOW_WIDTH_HEIGHT,
  SET_PANEL_TYPE,
  SET_SUBSCRIPTION_URL,
  ConfigAction,
  PanelType
} from '../actions/configActions';

export interface ConfigState {
  width: number;
  height: number;
  panelType: PanelType;
  subscriptionUrl: string;
}
const initialState: ConfigState = {
  width: 0,
  height: 1000,
  panelType: 'master',
  subscriptionUrl: ''
};

const configReducer = (state: ConfigState = initialState, action: ConfigAction): ConfigState => {
  switch (action.type) {
    case SET_WINDOW_WIDTH_HEIGHT:
      return {
        ...state,
        width: action.props.width ?? state.width,
        height: action.props.height ?? state.height
      };
    case SET_PANEL_TYPE:
      return {
        ...state,
        panelType: action.props.panelType ?? state.panelType
      };
    case SET_SUBSCRIPTION_URL:
      return {
        ...state,
        subscriptionUrl: action.props.subscriptionUrl ?? state.subscriptionUrl
      };
    default:
      return state;
  }
};

export default configReducer;
