export const DASHBOARD_ADD_ACTION = 'DASHBOARD_ADD_ACTION';
export const DASHBOARD_REMOVE_ACTION = 'DASHBOARD_REMOVE_ACTION';
export const DASHBOARD_SELECT_ACTION = 'DASHBOARD_SELECT_ACTION';

export interface DashboardAction {
  type: string;
  props?: {
    id?: number;
    name?: string;
  };
}

export const dashboardAddAction = (name: string): DashboardAction => ({
  type: DASHBOARD_ADD_ACTION,
  props: {
    name
  }
});

export const dashboardRemoveAction = (i: number): DashboardAction => ({
  type: DASHBOARD_REMOVE_ACTION,
  props: {
    id: i
  }
});

export const dashboardSelectAction = (i: number): DashboardAction => ({
  type: DASHBOARD_SELECT_ACTION,
  props: {
    id: i
  }
});
