import { faRecycle, faFireAlt, faStarOfLife, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import AppliancesContent from '../components/Appliances/AppliancesContent';
import { AppliancesState } from '../components/Appliances/ApplianceSetting';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import { ControlComponentAppliances } from '../components/ControlComponent';
import { ControlItemDescription } from '../components/ControlItem';
import { FACircularIconSmall } from '../components/FACircularIcon';
import PanelFrame from '../components/PanelFrame';

const controlItems: Array<ControlItemDescription> = [
  {
    title: 'Air Conditioning',
    numberHighlight: 1
  },
  {
    title: 'CCTV',
    numberHighlight: 9
  },
  {
    title: 'Cleaning',
    numberHighlight: 1
  },
  {
    title: 'Kitchen',
    numberHighlight: 1
  }
];

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const theme = useTheme();

  const contentItems: Array<Array<AppliancesState>> = [
    [
      {
        icon: (
          <FACircularIconSmall icon={faStarOfLife} margin="" color={theme.palette.text.disabled} />
        ),
        model: 'Air conditioner',
        modelDetail: 'Samsung AR09HSFSBWK',
        estimatedTime: '1 H 20 MIN',
        progress: 60,
        healthStatus: 'No errors',
        currentStatus: 'Air freshening'
      }
    ],
    [
      {
        icon: <FACircularIconSmall icon={faVideo} margin="" color={theme.palette.secondary.main} />,
        model: 'Front door',
        modelDetail: 'GoPro HERO7 Silver',
        estimatedTime: '-- H -- MIN',
        progress: 0,
        healthStatus: 'No errors',
        currentStatus: 'Idle'
      },
      {
        icon: <FACircularIconSmall icon={faVideo} margin="" color={theme.palette.secondary.main} />,
        model: 'Backyard',
        modelDetail: 'GoPro HERO7 Silver',
        estimatedTime: '-- H -- MIN',
        progress: 0,
        healthStatus: 'No errors',
        currentStatus: 'Idle'
      },
      {
        icon: <FACircularIconSmall icon={faVideo} margin="" color={theme.palette.text.disabled} />,
        model: 'Kitchen',
        modelDetail: 'GoPro HERO7 Silver',
        estimatedTime: '-- H -- MIN',
        progress: 0,
        healthStatus: 'No errors',
        currentStatus: 'Idle'
      }
    ],
    [
      {
        icon: (
          <FACircularIconSmall icon={faRecycle} margin="" color={theme.palette.secondary.main} />
        ),
        model: 'Washing machine',
        modelDetail: 'Hoover Dynamic DYN11146P8CH',
        estimatedTime: '0 H 15 MIN',
        progress: 80,
        healthStatus: 'No errors',
        currentStatus: 'Washing cycle, Programme 6'
      },
      {
        icon: (
          <FACircularIconSmall icon={faFireAlt} margin="" color={theme.palette.text.disabled} />
        ),
        model: 'Tumble dryer',
        modelDetail: 'Bosch WTE843S1GB',
        estimatedTime: '-- H -- MIN',
        progress: 0,
        healthStatus: 'No errors',
        currentStatus: 'Idle'
      }
    ],
    [
      {
        icon: (
          <FACircularIconSmall icon={faFireAlt} margin="" color={theme.palette.text.disabled} />
        ),
        model: 'Tumble dryer',
        modelDetail: 'Bosch WTE843S1GB',
        estimatedTime: '-- H -- MIN',
        progress: 0,
        healthStatus: 'No errors',
        currentStatus: 'Idle'
      }
    ]
  ];

  return (
    <PanelFrame selectedID={3}>
      <Grid container>
        <SectionContainerGrid container item xs={3}>
          <ControlComponentAppliances
            categories={controlItems}
            selectedId={selectedId}
            titleDescription="Appliances"
            setSelected={id => setSelectedId(id)}
          />
        </SectionContainerGrid>
        <ControlContainerGrid container item xs={9}>
          <AppliancesContent
            title={controlItems[selectedId].title}
            appliances={contentItems[selectedId]}
          />
        </ControlContainerGrid>
      </Grid>
    </PanelFrame>
  );
};

export default App;
