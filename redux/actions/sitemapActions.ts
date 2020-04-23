import { SitemapDTO, PageDTO } from '../../src/api';

export const SET_SITEMAPS_ACTION = 'SET_SITEMAPS_ACTION';
export const SET_SITEMAP_DATA_ACTION = 'SET_SITEMAP_DATA_ACTION';
export const SET_SITEMAP_PAGE_ACTION = 'SET_SITEMAP_PAGE_ACTION';

// Array<SitemapDTO>
export interface SitemapsAction {
  type: string;
  props: {
    selected?: number;
    sitemaps?: Array<SitemapDTO>;
  };
}

// SitemapDTO
export interface SitemapDataAction {
  type: string;
  props: {
    selected?: number;
    sitemap?: SitemapDTO;
  };
}

// PageDTO
export interface SitemapPageAction {
  type: string;
  props: {
    selected?: number;
    page?: PageDTO;
  };
}

export const setSitemaps = (sitemaps?: Array<SitemapDTO>, selected?: number): SitemapsAction => ({
  type: SET_SITEMAPS_ACTION,
  props: {
    selected,
    sitemaps
  }
});

export const setSitemapData = (sitemap?: SitemapDTO, selected?: number): SitemapDataAction => ({
  type: SET_SITEMAP_DATA_ACTION,
  props: {
    selected,
    sitemap
  }
});

export const setSitemapPage = (page?: PageDTO, selected?: number): SitemapPageAction => ({
  type: SET_SITEMAP_PAGE_ACTION,
  props: {
    selected,
    page
  }
});

export type AllSitemapAction = SitemapsAction | SitemapDataAction | SitemapPageAction;
