import React, { useEffect, useState, ReactFragment, ReactNode, ReactElement } from 'react';
import { NextPage } from 'next';
import { Grid, Typography, Box, Container, Icon, Button, IconButton, Fab } from '@material-ui/core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { TopReport, TopReportType } from './TopReport';
import { TopReportCommonType } from './TopReportCommon';
import { CircularImage, HorizontalBox, CenterBox, PlusBtnComponent } from '../common';

export interface PeopleStatusInfo {
  name: string;
  avatarUrl: string;
  isInside: boolean;
  status: string;
}

export interface PeopleStatusType {
  people: Array<PeopleStatusInfo>;
}

const AvatarImageContainer = styled(CircularImage)``;

const PeopleStatusComponent: React.FC<PeopleStatusInfo> = ({
  name,
  avatarUrl,
  isInside,
  status
}: PeopleStatusInfo) => {
  const theme = useTheme();
  return (
    <CenterBox
      flexDirection="row"
      display="flex"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      <Box
        flexDirection="column"
        style={{
          width: theme.spacing(70 / 8),
          height: theme.spacing(70 / 8),
          opacity: isInside ? 1 : 0.5
        }}
        component="span"
      >
        <CircularImage src={avatarUrl} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        component="div"
        style={{ display: 'inline-block', lineHeight: '1', marginLeft: '24px' }}
      >
        <Typography
          variant="body2"
          component="span"
          style={{ color: 'rgb(0,0,0, 0.87)', lineHeight: 1 }}
        >
          {name}
        </Typography>
        <br />
        <Typography
          variant="body2"
          component="span"
          style={{ color: theme.palette.secondary.main, fontWeight: 500, lineHeight: 1.2 }}
        >
          {isInside ? 'IN' : 'OUT'}
        </Typography>
        <br />
        <Box
          fontSize="subtitle1.fontSize"
          component="span"
          color="rgb(73, 73, 73)"
          fontWeight={500}
          style={{ display: 'inline-block', lineHeight: '1.5' }}
        >
          {status}
        </Box>
      </Box>
    </CenterBox>
  );
};

const PeopleStatus: React.FC<PeopleStatusType> = ({ people }: PeopleStatusType) => {
  const theme = useTheme();
  return (
    <HorizontalBox
      bgcolor={theme.palette.secondary.contrastText}
      style={{ paddingRight: theme.spacing(64 / 8), flex: '1 1 auto', width: '100%' }}
      component="div"
    >
      <Grid
        direction="row"
        alignItems="center"
        alignContent="center"
        container
        component="div"
        style={{ height: '100%' }}
      >
        <Grid
          direction="row"
          alignItems="center"
          alignContent="center"
          container
          item
          component="div"
          style={{ height: '100%' }}
          xs={11}
        >
          {people.slice(0, 4).map(({ name, avatarUrl, isInside, status }: PeopleStatusInfo, i) => (
            <Grid key={name} xs={3} item>
              <PeopleStatusComponent
                name={name}
                isInside={isInside}
                avatarUrl={avatarUrl}
                status={status}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={1} style={{ justifyContent: 'flex-end' }}>
          <PlusBtnComponent />
        </Grid>
      </Grid>
    </HorizontalBox>
  );
};

export default PeopleStatus;
