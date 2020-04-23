import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AirConditioningContent from '../components/AirConditioning/AirConditioningContent';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import ControlComponent from '../components/ControlComponent';
import { ControlItemDescription } from '../components/ControlItem';
import PanelFrame from '../components/PanelFrame';
import { RootState } from '../redux/reducers';
import { WidgetDTO } from '../src/api';

const controlItems: Array<ControlItemDescription> = [
  {
    title: 'Living Room',
    numberHighlight: 25,
    description: '°C - Power Save mode'
  },
  {
    title: 'Bedroom',
    numberHighlight: 23,
    description: '°C - Cool mode'
  },
  {
    title: 'Kids room',
    numberHighlight: 26,
    description: '°C - Dry mode'
  },
  {
    title: 'Kitchen',
    description: 'Air Conditioners turned off'
  }
];

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const { allSitemaps, allSitemapsSelected, sitemap, sitemapSelected } = useSelector(
    (state: RootState) => state.sitemap
  );
  const dispatch = useDispatch();

  return (
    <PanelFrame selectedID={1}>
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
            titleDescription="Air Conditioning"
            setSelected={id => setSelectedId(id)}
          />
        </SectionContainerGrid>
        <ControlContainerGrid container item xs={9}>
          <AirConditioningContent
            title={controlItems[selectedId].title}
            conditionerId={selectedId}
            currentTemp={controlItems[selectedId].numberHighlight ?? 0}
          />
        </ControlContainerGrid>
      </Grid>
    </PanelFrame>
  );
};

export default App;
