import _ from 'lodash';
import { GroupItemDTO } from '../../src/api';
import { SET_ITEMS_ACTION, setItems, ItemAction } from '../actions/itemActions';

export interface ItemState {
  selected: number;
  items: Array<GroupItemDTO>;
}

const initialState: ItemState = {
  items: [],
  selected: -1
};

const dashboardReducer = (state: ItemState = initialState, action: ItemAction): ItemState => {
  switch (action.type) {
    case SET_ITEMS_ACTION:
      return {
        ...state,
        selected: state.selected,
        items: state.items
      };
    default:
      return state;
  }
};

export default dashboardReducer;
