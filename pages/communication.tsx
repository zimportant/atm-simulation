import { Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import { ControlItemDescription } from '../components/ControlItem';
import PanelFrame from '../components/PanelFrame';
import { ControlComponentCctv } from '../components/ControlComponent';
import CommunicationContent, {
  CommunicationContentProps
} from '../components/Communication/CommunicationContent';

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

const contentItems: Array<CommunicationContentProps> = [
  {
    title: 'Backyard',
    items: [
      {
        title: 'Voice message',
        length: '0:27 minutes',
        datetime: '10:23pm 08 MAR 2020',
        content: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
        messageType: 'voice',
        isRead: true
      },
      {
        title: 'Text message',
        length: '2:23 minutes',
        datetime: '10:23pm 08 MAR 2020',
        content:
          "Hello, this is Adam, I come to talk about your child but you're not home. So please call me back.",
        messageType: 'text',
        isRead: true
      },
      {
        title: 'Text message',
        length: '1:12 minutes',
        content: 'This is Alex, please call me back when you are home',
        datetime: '11:23pm 09 MAR 2020',
        messageType: 'text',
        isRead: false
      },
      {
        title: 'Voice message',
        length: '0:27 minutes',
        datetime: '13:23pm 09 MAR 2020',
        content: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3',
        messageType: 'voice',
        isRead: false
      }
    ]
  },
  {
    title: 'Hallway',
    items: [
      {
        title: 'Voice message',
        length: '3:00 minutes',
        datetime: '10:23pm 08 MAR 2020',
        content: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3',
        messageType: 'voice',
        isRead: true
      }
    ]
  },
  {
    title: 'Kids room',
    items: [
      {
        title: 'Voice message',
        length: '3:00 minutes',
        datetime: '10:23pm 08 MAR 2020',
        messageType: 'voice',
        content: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3',
        isRead: true
      },
      {
        title: 'Voice message',
        length: '0:23 minutes',
        datetime: '13:23pm 09 MAR 2020',
        content: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3',
        messageType: 'voice',
        isRead: false
      }
    ]
  },
  {
    title: 'Kitchen',
    items: [
      {
        title: 'Voice message',
        length: '0:23 minutes',
        datetime: '13:23pm 09 MAR 2020',
        content: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3',
        messageType: 'voice',
        isRead: false
      }
    ]
  }
];

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const theme = useTheme();
  return (
    <PanelFrame selectedID={4}>
      <Grid container>
        <SectionContainerGrid container item xs={3}>
          <ControlComponentCctv
            categories={controlItems}
            selectedId={selectedId}
            titleDescription="Communication"
            setSelected={id => setSelectedId(id)}
          />
        </SectionContainerGrid>
        <ControlContainerGrid container item xs={9}>
          <CommunicationContent
            title={controlItems[selectedId].title}
            items={contentItems[selectedId].items}
          />
        </ControlContainerGrid>
      </Grid>
    </PanelFrame>
  );
};

export default App;
