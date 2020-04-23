import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import moment from 'moment';
import { Grid, Typography, Box } from '@material-ui/core';
import { WarningRounded } from '@material-ui/icons';
import DashBoardReport from './DashBoardReport';
import DashBoardEvent from './DashBoardEvent';
import PeopleStatus, { PeopleStatusType, PeopleStatusInfo } from './PeopleStatus';

const DashBoardContainer = styled(Box)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const peopleList: Array<PeopleStatusInfo> = [
  {
    name: 'Adam',
    avatarUrl: 'https://i.imgur.com/McEfQLa.png',
    isInside: true,
    status: ''
  },
  {
    name: 'Ryan',
    avatarUrl: 'https://i.imgur.com/f8gg8Tt.png',
    isInside: true,
    status: ''
  },
  {
    name: 'Jessica',
    avatarUrl: 'https://i.imgur.com/Ad1vhlK.png',
    isInside: false,
    status: 'For 2h now'
  },

  {
    name: 'Jimmy',
    avatarUrl: 'https://i.imgur.com/0mFt0bA.png',
    isInside: false,
    status: 'For 1h now'
  }
];

const DashBoard: React.FC = () => {
  return (
    <DashBoardContainer bgcolor="secondary.main">
      <Grid container>
        <Grid container item xs={7}>
          <DashBoardReport />
        </Grid>
        <Grid container item xs={5}>
          <DashBoardEvent />
        </Grid>
      </Grid>
      <PeopleStatus people={peopleList} />
    </DashBoardContainer>
  );
};

export default DashBoard;
