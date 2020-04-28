import { Box, Button, Grid, Typography } from '@material-ui/core';
import { withTheme, useTheme } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { animated, useSpring } from 'react-spring';
import { EventData, useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import NotificationPanel from './Notification/NotificationPanel';

const ClearBtn = withTheme(styled(Button)`
  position: absolute;
  top: 11px;
  right: ${props => props.theme.spacing(32 / 8)}px;
`);

const AppBarWrapper = withTheme(styled.div`
  background: ${props => props.theme.palette.primary.main};
  text-color: ${props => props.theme.palette.primary.contrastText};
  flex: 1 0 auto;
`);

const GridTimeContainer = withTheme(styled(Grid)`
  background: ${props => props.theme.palette.primary.dark};
  padding: 16px 0;
`);

const TimeContent = withTheme(styled.div`
  margin-left: ${props => props.theme.spacing(6.75)}px;
`);

const NotificationContent = withTheme(styled.div`
  width: 100%;
  padding: 16px 0 16px ${props => props.theme.spacing(32 / 8)}px;
  background: ${props => props.theme.palette.primary.light};
`);

const AppBar: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBarWrapper>
      <Grid container>
        <GridTimeContainer container item xs={3}>
          <Grid container item xs={5}>
            <TimeContent>
              <Typography
                variant="body2"
                component="span"
                style={{ color: theme.palette.text.primary, fontWeight: 500 }}
              >
                <Moment format="h:mmA" />
              </Typography>
            </TimeContent>
          </Grid>
          <Grid container item xs={7}>
            <Typography
              variant="body2"
              component="span"
              style={{
                color: theme.palette.text.primary,
                textTransform: 'uppercase',
                margin: 'auto'
              }}
            >
              <Moment format="DD MMM YYYY" />
            </Typography>
          </Grid>
        </GridTimeContainer>
        <Grid container item xs={9}>
          <NotificationContent>
            <>
              <ClearBtn color="secondary" size="small" onClick={() => {}}>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: theme.palette.text.primary, fontWeight: 500 }}
                >
                  Clear
                </Typography>
              </ClearBtn>
              <Typography
                variant="body2"
                component="span"
                style={{
                  color: theme.palette.text.primary,
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                Notifications and Alert Center
              </Typography>
            </>
          </NotificationContent>
        </Grid>
      </Grid>
    </AppBarWrapper>
  );
};

export default AppBar;
