import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import ControlComponent from '../components/ControlComponent';
import { ControlItemDescription } from '../components/ControlItem';
import LightingContent, { LightingContentProps } from '../components/Lighting/LightingContent';
import { LightingState } from '../components/Lighting/LightingSetting';
import PanelFrame from '../components/PanelFrame';
import { RootState } from '../redux/reducers';
import { WidgetDTO } from '../src/api';
import EventSubscription, { createNewSitemap } from '../components/EventSubscription';

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const { sitemap, sitemapSelected, page, pageSelected } = useSelector(
    (state: RootState) => state.sitemap
  );
  const dispatch = useDispatch();
  const pageId = sitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.[selectedId]?.widgetId;

  return (
    <PanelFrame selectedID={2}>
      <EventSubscription pageId={pageId ?? '0000'} />
      <Grid container>
        <SectionContainerGrid container item xs={3}>
          <ControlComponent
            categories={
              sitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.map(
                (w: WidgetDTO): ControlItemDescription => ({
                  title: w.label ?? '--',
                  description: w.icon ?? '--'
                })
              ) ?? []
            }
            selectedId={selectedId}
            titleDescription="Lighting control"
            setSelected={id => setSelectedId(id)}
          />
        </SectionContainerGrid>
        <ControlContainerGrid container item xs={9}>
          <LightingContent
            title={
              sitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.[selectedId]?.label ?? '--'
            }
            lights={(
              sitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.[selectedId]?.linkedPage
                ?.widgets ?? []
            )
              .filter((w: WidgetDTO) => w.type === 'Slider' || w.type === 'Dimmer')
              .map(
                (w: WidgetDTO): LightingState => ({
                  name: w.label ?? '--',
                  enabled: true,
                  autoControl: true,
                  widgetId: w.widgetId ?? '',
                  pageId: pageId ?? '0000',
                  progress: parseInt(w.item?.state ?? '0', 10)
                })
              )}
          />
        </ControlContainerGrid>
      </Grid>
    </PanelFrame>
  );
};

export default App;
