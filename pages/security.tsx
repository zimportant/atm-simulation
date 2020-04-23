import { Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import { ControlItemDescription } from '../components/ControlItem';
import PanelFrame from '../components/PanelFrame';
import { ControlComponentCctv } from '../components/ControlComponent';
import SecurityContent, { SecurityContentProps } from '../components/Security/SecurityContent';

const controlItems: Array<ControlItemDescription> = [
  {
    title: 'Backyard',
    imageUrl: 'https://i.imgur.com/ddtnl7a.jpg'
  },
  {
    title: 'Hallway',
    imageUrl: 'https://i.imgur.com/uAfpusj.jpg'
  },
  {
    title: 'Kids room',
    imageUrl: 'https://i.imgur.com/o0r3cKo.jpg'
  },
  {
    title: 'Kitchen',
    imageUrl: 'https://i.imgur.com/rMEwvMK.jpg'
  }
];

const contentItems: Array<SecurityContentProps> = [
  {
    title: 'Backyard',
    items: [
      {
        title: 'Motion detection alarm',
        length: '0:04 minutes',
        datetime: '10:23pm 08 MAR 2020',
        content: 'https://www.youtube.com/watch?v=2OerRpq_OQQ',
        messageType: 'cctv',
        isRead: true
      },
      {
        title: 'Doorlock alarm',
        length: '0:07 minutes',
        datetime: '10:20pm 09 MAR 2020',
        content: 'https://www.youtube.com/watch?v=6iIUNo3oKGQ',
        messageType: 'cctv',
        isRead: false
      }
    ]
  },
  {
    title: 'Hallway',
    items: [
      {
        title: 'Heat alarm',
        length: '0:03 minutes',
        datetime: '11:20pm 09 MAR 2020',
        content: 'https://www.youtube.com/watch?v=6iIUNo3oKGQ',
        messageType: 'cctv',
        isRead: false
      },
      {
        title: 'Doorlock alarm',
        length: '0:07 minutes',
        datetime: '10:20pm 09 MAR 2020',
        content: 'https://www.youtube.com/watch?v=6iIUNo3oKGQ',
        messageType: 'cctv',
        isRead: false
      }
    ]
  },
  {
    title: 'Kids room',
    items: []
  },
  {
    title: 'Kitchen',
    items: [
      {
        title: 'Heat alarm',
        length: '0:03 minutes',
        datetime: '11:20pm 09 MAR 2020',
        content: 'https://www.youtube.com/watch?v=6iIUNo3oKGQ',
        messageType: 'cctv',
        isRead: false
      }
    ]
  }
];

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const theme = useTheme();
  return (
    <PanelFrame selectedID={5}>
      <Grid container>
        <SectionContainerGrid container item xs={3}>
          <ControlComponentCctv
            categories={controlItems}
            selectedId={selectedId}
            titleDescription="Security"
            setSelected={id => setSelectedId(id)}
          />
        </SectionContainerGrid>
        <ControlContainerGrid container item xs={9}>
          <SecurityContent
            title={controlItems[selectedId].title}
            items={contentItems[selectedId].items}
          />
        </ControlContainerGrid>
      </Grid>
    </PanelFrame>
  );
};

export default App;
