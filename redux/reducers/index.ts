import { combineReducers } from 'redux';
import configReducer from './configReducer';
import notificationReducer from './notificationReducer';
import dashboardReducer from './dashboardReducer';
import itemReducer from './itemReducer';
import toastReducer from './toastReducer';
import sitemapReducer from './sitemapReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  config: configReducer,
  notification: notificationReducer,
  dashboard: dashboardReducer,
  item: itemReducer,
  toast: toastReducer,
  sitemap: sitemapReducer,
  themeConfig: themeReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
