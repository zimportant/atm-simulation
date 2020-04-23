import _ from 'lodash';
import {
  CLEAR_HEADER,
  CLEAR_ALL,
  CLEAR_ITEM,
  NotificationAction
} from '../actions/notificationActions';

export interface NotificationHeaderState {
  name: string;
  model: string;
  report: string;
  datetime: string;
  category: string;
  errorCode?: string;
}

export interface NotificationItemState {
  description: string;
  datetime: string;
}

export interface NotificationState {
  newNotification?: NotificationHeaderState;
  pastNotification: Array<NotificationItemState>;
}

const initialState: NotificationState = {
  newNotification: {
    name: 'Dishwasher',
    model: 'BOSCH SMV69T30GB',
    report: 'returned a diagnostics error',
    datetime: '10:23pm 08 MAR 2020',
    category: 'Kitchen',
    errorCode: 'TR 12554'
  },
  pastNotification: [
    {
      description: 'Overall temperature has been automatically risen to 23C',
      datetime: '1:30am 09 MAR 2020'
    },
    {
      description: 'The washing machine was left on while nobody was home',
      datetime: '1:00am 09 MAR 2020'
    },
    {
      description: 'Dishwasher has finished the cycle',
      datetime: '11:30pm 08 MAR 2020'
    },
    {
      description: 'CCTV has 1 pending entry for you',
      datetime: '11:00pm 08 MAR 2020'
    },
    {
      description: 'Voice message from Olivia',
      datetime: '10:00pm 08 MAR 2020'
    }
  ]
};

const notificationReducer = (
  state: NotificationState = initialState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case CLEAR_ALL:
      return { newNotification: undefined, pastNotification: [] };
    case CLEAR_HEADER:
      return { ...state, newNotification: undefined };
    case CLEAR_ITEM:
      return {
        ...state,
        pastNotification: _.remove(state.pastNotification, (v, i) => i === action.id)
      };
    default:
      return state;
  }
};

export default notificationReducer;
