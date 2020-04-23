export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

export type SeverityProps = 'error' | 'warning' | 'info' | 'success';

export interface ShowToastAction {
  type: typeof SHOW_TOAST;
  props: {
    severity: SeverityProps;
    message: string;
  };
}

export interface HideToastAction {
  type: typeof HIDE_TOAST;
}

export const showToast = (severity: SeverityProps, message: string): ShowToastAction => ({
  type: SHOW_TOAST,
  props: {
    severity,
    message
  }
});

export const hideToast = (): HideToastAction => ({
  type: HIDE_TOAST
});

export type ToastAction = ShowToastAction | HideToastAction;
