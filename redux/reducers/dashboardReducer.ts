import _ from 'lodash';
import {
  faHome,
  faCaretSquareUp,
  faCaretSquareDown,
  faWineBottle,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
import {
  DASHBOARD_ADD_ACTION,
  DASHBOARD_REMOVE_ACTION,
  DASHBOARD_SELECT_ACTION,
  DashboardAction
} from '../actions/dashboardActions';

export interface AirConditioningState {
  name: string;
}

export interface DashboardItemState {
  name: string;
}

export interface DashboardState {
  name: string;
  lastEdited: string;
  totalDevices: number;
  icon: any;
}

export interface DashboardListState {
  items: Array<DashboardState>;
  selectedId: number;
}

const initialState: DashboardListState = {
  selectedId: 0,
  items: [
    {
      name: 'Main dashboard',
      lastEdited: '1:30am 09 MAR 2020',
      totalDevices: 12,
      icon: faHome
    },
    {
      name: 'First floor',
      lastEdited: '2:23am 09 MAR 2020',
      totalDevices: 3,
      icon: faCaretSquareUp
    },
    {
      name: 'Ground floor',
      lastEdited: '2:33am 09 MAR 2020',
      totalDevices: 5,
      icon: faCaretSquareDown
    },
    {
      name: 'Cellar',
      lastEdited: '4:33pm 09 MAR 2020',
      totalDevices: 8,
      icon: faWineBottle
    },
    {
      name: 'Garden',
      lastEdited: '8:48am 10 MAR 2020',
      totalDevices: 3,
      icon: faLeaf
    }
  ]
};

const dashboardReducer = (
  state: DashboardListState = initialState,
  action: DashboardAction
): DashboardListState => {
  switch (action.type) {
    case DASHBOARD_ADD_ACTION:
      return {
        ...state,
        items: _.concat(state.items, {
          name: action.props?.name ?? '--',
          lastEdited: '1:30am 09 MAR 2020',
          totalDevices: 0,
          icon: faHome
        })
      };
    case DASHBOARD_REMOVE_ACTION:
      return {
        ...state,
        items: state.items.filter((item, id) => id !== action.props?.id)
      };
    case DASHBOARD_SELECT_ACTION:
      return { ...state, selectedId: action.props?.id ?? 0 };
    default:
      return state;
  }
};

export default dashboardReducer;
