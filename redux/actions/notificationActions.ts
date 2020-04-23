export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_HEADER = 'CLEAR_HEADER';
export const CLEAR_ITEM = 'CLEAR_ITEM';

export interface NotificationAction {
  type: string;
  id?: number;
}

export const clearAll = (): NotificationAction => ({
  type: CLEAR_ALL
});

export const clearHeader = (): NotificationAction => ({
  type: CLEAR_HEADER
});

export const clearItem = (i: number): NotificationAction => ({
  type: CLEAR_ITEM,
  id: i
});
