import _ from 'lodash';
import { ToastAction, SeverityProps, SHOW_TOAST, HIDE_TOAST } from '../actions/toastActions';

export interface ToastState {
  open: boolean;
  severity: SeverityProps;
  message: string;
}

const initialState: ToastState = {
  open: false,
  severity: 'info',
  message: ''
};

const toastReducer = (state: ToastState = initialState, action: ToastAction): ToastState => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        open: true,
        severity: action.props.severity,
        message: action.props.message
      };
    case HIDE_TOAST:
      return { ...state, open: false };
    default:
      return state;
  }
};

export default toastReducer;
