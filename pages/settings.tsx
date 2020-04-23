import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PanelType, setPanelType, showToast } from '../redux/actions';
import { RootState } from '../redux/reducers';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import ControlComponent from '../components/ControlComponent';
import { ControlItemDescription } from '../components/ControlItem';
import PanelFrame from '../components/PanelFrame';
import SettingsPaletteContent from '../components/Settings/SettingsPaletteContent';
import SettingsPanelContent from '../components/Settings/SettingsPanelContent';
import SettingsSitemapContent from '../components/Settings/SettingsSitemapContent';
import SettingsFloorContent from '../components/Settings/SettingsFloorContent';
import { ServicesApi } from '../src/api';
import { colorKey, paletteTypeKey } from '../src/constants';

const controlItems: Array<ControlItemDescription> = [
  {
    title: 'Theming',
    description: 'Customize the panel look'
  },
  {
    title: 'Panel',
    description: 'Select the panel type'
  },
  {
    title: 'Sitemap',
    description: 'Select default sitemap'
  },
  {
    title: 'Floor',
    description: 'Select default home floor'
  }
];

const App: NextPage = () => {
  const { panelType } = useSelector((state: RootState) => state.config);
  const [selectedId, setSelectedId] = useState(0);

  const controlContent: Array<React.ReactNode> = [
    <SettingsPaletteContent key={0} title={controlItems[0].title} />,
    <SettingsPanelContent key={1} title={controlItems[1].title} />,
    <SettingsSitemapContent key={2} title={controlItems[2].title} />,
    <SettingsFloorContent key={3} title={controlItems[3].title} />
  ];

  return (
    <PanelFrame selectedID={7}>
      <Grid container>
        <SectionContainerGrid container item xs={3}>
          <ControlComponent
            categories={controlItems.slice(0, panelType === 'detail' ? 2 : undefined)}
            selectedId={selectedId}
            titleDescription="Settings"
            setSelected={id => setSelectedId(id)}
          />
        </SectionContainerGrid>

        <ControlContainerGrid container item xs={9}>
          {controlContent.slice(0, panelType === 'detail' ? 2 : undefined)[selectedId]}
        </ControlContainerGrid>
      </Grid>
    </PanelFrame>
  );
};

export default App;
