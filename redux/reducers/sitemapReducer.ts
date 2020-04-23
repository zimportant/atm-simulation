import _ from 'lodash';
import { SitemapDTO, PageDTO } from '../../src/api';
import {
  SET_SITEMAPS_ACTION,
  SET_SITEMAP_DATA_ACTION,
  SET_SITEMAP_PAGE_ACTION,
  setSitemaps,
  AllSitemapAction,
  SitemapsAction,
  SitemapPageAction,
  SitemapDataAction
} from '../actions/sitemapActions';

export interface SitemapState {
  allSitemaps: Array<SitemapDTO>;
  allSitemapsSelected: number;
  sitemap?: SitemapDTO;
  sitemapSelected: number;
  page?: PageDTO;
  pageSelected: number;
}

const initialState: SitemapState = {
  allSitemaps: [],
  allSitemapsSelected: 0,
  sitemap: undefined,
  sitemapSelected: 0,
  page: undefined,
  pageSelected: 0
};

const sitemapReducer = (
  state: SitemapState = initialState,
  action: AllSitemapAction
): SitemapState => {
  switch (action.type) {
    case SET_SITEMAPS_ACTION:
      return {
        ...state,
        allSitemaps: (action as SitemapsAction).props.sitemaps ?? state.allSitemaps,
        allSitemapsSelected: (action as SitemapsAction).props.selected ?? state.allSitemapsSelected
      };
    case SET_SITEMAP_DATA_ACTION:
      return {
        ...state,
        sitemap: (action as SitemapDataAction).props.sitemap ?? state.sitemap,
        sitemapSelected: (action as SitemapDataAction).props.selected ?? state.sitemapSelected
      };
    case SET_SITEMAP_PAGE_ACTION:
      return {
        ...state,
        page: (action as SitemapPageAction).props.page ?? state.page,
        pageSelected: (action as SitemapPageAction).props.selected ?? state.pageSelected
      };
    default:
      return state;
  }
};

export default sitemapReducer;
