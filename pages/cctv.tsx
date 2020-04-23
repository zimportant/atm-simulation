import { Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import { ControlItemDescription } from '../components/ControlItem';
import PanelFrame from '../components/PanelFrame';
import { ControlComponentCctv } from '../components/ControlComponent';
import CctvContent from '../components/CCTV/CctvContent';
import { RootState } from '../redux/reducers';
import { WidgetDTO } from '../src/api';
import EventSubscription, { createNewSitemap } from '../components/EventSubscription';

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const theme = useTheme();

  const { sitemap, sitemapSelected, page, pageSelected } = useSelector(
    (state: RootState) => state.sitemap
  );
  const dispatch = useDispatch();
  const pageId = sitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.[selectedId]?.widgetId;

  const controlItems = sitemap?.homepage?.widgets?.[sitemapSelected]?.widgets?.map(
    (w: WidgetDTO): ControlItemDescription => {
      console.log(w.linkedPage?.widgets ?? '');
      const wItem = w.linkedPage?.widgets?.find(
        (_w: WidgetDTO) => _w.widgetId?.includes('SnapshotFromCamera') === true
      );
      return {
        title: w.label ?? '--',
        imageUrl: wItem?.item?.state ?? 'https://i.imgur.com/npq3S0i.jpg'
      };
    }
  );

  return (
    <PanelFrame selectedID={6}>
      <EventSubscription pageId={pageId ?? '0000'} />
      <Grid container>
        <SectionContainerGrid container item xs={3}>
          <ControlComponentCctv
            categories={controlItems ?? []}
            selectedId={selectedId}
            titleDescription="CCTV Cameras"
            setSelected={id => setSelectedId(id)}
          />
        </SectionContainerGrid>
        <ControlContainerGrid container item xs={9}>
          <CctvContent
            cameraName={`${controlItems?.[selectedId]?.title ?? '--'} cam`}
            cameraDescription="Camera 3"
            imageUrl={controlItems?.[selectedId]?.imageUrl ?? ''}
          />
        </ControlContainerGrid>
      </Grid>
    </PanelFrame>
  );
};

export default App;
