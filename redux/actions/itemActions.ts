import { GroupItemDTO } from '../../src/api';

export const SET_ITEMS_ACTION = 'SET_ITEMS_ACTION';

export interface ItemAction {
  type: string;
  props: {
    selected: number;
    items: Array<GroupItemDTO>;
  };
}

export const setItems = (items: Array<GroupItemDTO>, selected: number): ItemAction => ({
  type: SET_ITEMS_ACTION,
  props: {
    selected,
    items
  }
});
