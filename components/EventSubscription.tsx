/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { RootState } from '../redux/reducers';
import { setSitemapData } from '../redux/actions';
import { WidgetDTO, SitemapDTO, ServicesApi, SitemapsApi } from '../src/api';

export const createNewSitemap = (
  sitemap: SitemapDTO | undefined,
  sitemapSelected: number,
  data: WidgetDTO,
  pageId: string
): any => {
  const parentWidgetId = parseInt(pageId.slice(0, 2), 10);
  const childWidgets =
    sitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.[parentWidgetId]?.linkedPage?.widgets ??
    [];
  const wIndex = childWidgets.findIndex((w: WidgetDTO) => w.widgetId === data.widgetId);
  if (wIndex !== -1) {
    // eslint-disable-next-line no-multi-assign
    const updatedSitemap = _.cloneDeep(sitemap);
    const updatedChildWidgets =
      updatedSitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.[parentWidgetId]?.linkedPage
        ?.widgets ?? [];

    updatedChildWidgets[wIndex] = {
      ...childWidgets[wIndex],
      ...data
    };
    return setSitemapData(updatedSitemap);
  }
  return undefined;
};

export interface EventSubscriptionType {
  pageId: string;
}

const EventSubscription: React.FC<EventSubscriptionType> = ({ pageId }: EventSubscriptionType) => {
  const { sitemap, sitemapSelected } = useSelector((state: RootState) => state.sitemap);
  const [eventSource, setEventSource] = useState<EventSource>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!sitemap) {
      return () => {};
    }

    new SitemapsApi().createEventSubscription(sitemap?.homepage?.id).then((value: any) => {
      if (value.status !== 'CREATED') {
        return;
      }

      if (eventSource) {
        eventSource.close();
      }

      const subscriptionUrl = value.context.headers.Location[0];
      console.log(`${subscriptionUrl}?sitemap=${sitemap?.homepage?.id}&pageid=${pageId}`);
      setEventSource(
        new EventSource(`${subscriptionUrl}?sitemap=${sitemap?.homepage?.id}&pageid=${pageId}`)
      );
    });
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [sitemap?.homepage?.id, pageId]);

  useEffect(() => {
    // Sitemap Subscription
    if (!eventSource) {
      return () => {};
    }

    const tempCalback = (payload: any) => {
      console.log(payload);
      if (!payload || !payload.data) {
        return;
      }
      const data = JSON.parse(payload.data);
      if (!data) {
        return;
      }
      if (data.TYPE === 'ALIVE') {
        return;
      }

      if (data.TYPE === 'SITEMAP_CHANGED') {
        window.location.reload();
        return;
      }

      console.log('create', sitemap);
      const newSitemap = createNewSitemap(sitemap, sitemapSelected, data, pageId);
      if (newSitemap) {
        dispatch(newSitemap);
      }
    };

    eventSource.addEventListener('event', tempCalback);

    return () => {
      eventSource.removeEventListener('event', tempCalback);
    };
  }, [eventSource, sitemap, sitemapSelected]);
  return null;
};

export default EventSubscription;
