/* eslint-disable react/jsx-props-no-spreading */
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { MicRounded, WarningRounded } from '@material-ui/icons';
import Router from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { EventData, Swipeable } from 'react-swipeable';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { setSitemapData, clearHeader } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { WidgetDTO } from '../../src/api';
import NotificationHeaderItem, { NotificationHeaderItemProps } from './NotificationHeaderItem';
import NotificationItem, { NotificationItemProps } from './NotificationItem';

const MicRoundedDiv = withTheme(styled(MicRounded)`
  position: absolute;
  margin-top: ${props => props.theme.spacing(5 / 8)}px;
  right: ${props => props.theme.spacing(64 / 8)}px;
`);

const NotificationText = withTheme(styled.div`
  margin: 0 0 0 ${props => props.theme.spacing(32 / 8)}px;
`);

const WarningRoundedDiv = withTheme(styled(WarningRounded)`
  position: absolute !important;
  margin-top: ${props => props.theme.spacing(5 / 8)}px !important;
`);

const NotificationPanelOverlay = withTheme(styled(Box)`
  width: 100%;
  height: calc(100vh - 64px + ${({ theme }) => (8 - theme.spacing(1)) * 4}px);
  position: absolute;
  z-index: 999;
  // background: ${props => props.theme.palette.text.disabled};
  background: rgb(0, 0, 0, 0.8);
`);

const NotificationPanelContainer = withTheme(styled(Box)`
  width: 100%;
  height: calc(100vh - 64px + ${({ theme }) => (8 - theme.spacing(1)) * 4}px);
  max-height: calc(100vh - 64px + ${({ theme }) => (8 - theme.spacing(1)) * 4}px);
  position: absolute;
  padding: 16px 16px calc(64px - ${({ theme }) => (8 - theme.spacing(1)) * 4}px)
    ${({ theme }) => theme.spacing(32 / 8)}px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.palette.primary.light};
`);

const WrapperNotificationListContainer = withTheme(styled(Box)`
  padding-right: ${props => props.theme.spacing(24 / 8)}px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  max-height: 100%;
`);

const NotificationListContainer = ({ children }: any) => (
  <WrapperNotificationListContainer>
    <ScrollContainer horizontal={false} style={{ maxHeight: '100%' }}>
      {children}
    </ScrollContainer>
  </WrapperNotificationListContainer>
);

const MenuItemsContainer = withTheme(styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(16 / 8)}px ${({ theme }) => theme.spacing(16 / 8)}px
    calc(64px - ${({ theme }) => (8 - theme.spacing(1)) * 4}px)
    ${({ theme }) => theme.spacing(32 / 8)}px;
`);

interface NotificationPanelProps {
  showNotification: boolean;
  swipeHandler: any;
}
const NotificationPanel: React.FC<NotificationPanelProps> = ({
  showNotification,
  swipeHandler
}: NotificationPanelProps) => {
  const theme = useTheme();
  const [swipeDeltaX, setSwipeDeltaX] = useState(0);

  const { panelType } = useSelector((state: RootState) => state.config);
  const { newNotification, pastNotification } = useSelector(
    (state: RootState) => state.notification
  );
  const { allSitemaps, allSitemapsSelected, sitemap, sitemapSelected } = useSelector(
    (state: RootState) => state.sitemap
  );
  const countNotification = newNotification ? 1 : 0;
  const dispatch = useDispatch();

  const notificationHeaderItem = newNotification
    ? {
        ...newNotification,
        icon: (
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{
              fontSize: theme.spacing(52 / 8),
              display: 'block',
              position: 'absolute',
              color: theme.palette.text.secondary
            }}
          />
        )
      }
    : undefined;

  const headerAnimatedProps = useSpring({ transform: `translate(${-swipeDeltaX}px)` });

  return (
    <Grid container>
      <Grid container item xs={3} style={{ position: 'relative' }}>
        {showNotification && (
          <NotificationPanelOverlay>
            <MenuItemsContainer>
              {sitemap?.homepage?.widgets?.map((w: WidgetDTO, id: number) => (
                <Typography
                  key={w.label ?? '--'}
                  variant="body2"
                  style={{
                    textTransform: 'uppercase',
                    marginTop: '16px',
                    color:
                      id === sitemapSelected
                        ? theme.palette.secondary.main
                        : theme.palette.secondary.contrastText
                  }}
                >
                  {w.label ?? '--'}
                </Typography>
              ))}
            </MenuItemsContainer>
          </NotificationPanelOverlay>
        )}
      </Grid>
      <Grid container item xs={9} style={{ position: 'relative' }}>
        <NotificationPanelContainer>
          <NotificationListContainer onTouchMove={(e: any) => e.preventDefault()}>
            {newNotification && notificationHeaderItem && (
              <Swipeable
                onSwiping={({ dir, deltaX }: EventData) => {
                  if (dir === 'Right') {
                    setSwipeDeltaX(deltaX);
                  }
                }}
                onSwipedRight={({ dir, absX }: EventData) => {
                  if (absX > 200) {
                    dispatch(clearHeader());
                  } else {
                    setSwipeDeltaX(0);
                  }
                }}
                trackTouch
                trackMouse
                preventDefaultTouchmoveEvent
              >
                <animated.div style={headerAnimatedProps}>
                  <NotificationHeaderItem {...notificationHeaderItem} />
                </animated.div>
              </Swipeable>
            )}
            <Box
              fontSize="subtitle1.fontSize"
              fontWeight="fontWeightMedium"
              color={theme.palette.text.secondary}
              style={{
                textTransform: 'uppercase',
                marginTop: newNotification ? theme.spacing(32 / 8) : 0
              }}
            >
              Past Notifications
            </Box>
            <List>
              {pastNotification.map(
                ({ description, datetime }: NotificationItemProps, id: number) => (
                  <NotificationItem key={datetime} description={description} datetime={datetime} />
                )
              )}
            </List>
          </NotificationListContainer>
          <Box
            component="span"
            style={{
              position: 'absolute',
              bottom: 0,
              width: `calc(100% - ${theme.spacing(32 / 8)}px)`,
              padding: `16px 0`
            }}
            {...swipeHandler}
          >
            {!showNotification &&
              (newNotification ? (
                <>
                  <WarningRoundedDiv style={{ fontSize: theme.spacing(24 / 8) }} />
                  <MicRoundedDiv
                    style={{ fontSize: theme.spacing(24 / 8) }}
                    onClick={() => {
                      Router.push('/voicecontroller');
                    }}
                  />
                  <NotificationText>
                    <Typography variant="h6" component="span" color="textSecondary">
                      You have got
                      {` `}
                      <Typography variant="h6" component="span" color="textPrimary">
                        {countNotification}
                        {` `}
                        new alert
                      </Typography>
                    </Typography>
                  </NotificationText>
                </>
              ) : (
                <>
                  <MicRoundedDiv
                    fontSize="default"
                    onClick={() => {
                      Router.push('/voicecontroller');
                    }}
                  />
                  <Typography variant="h6" component="span" color="textSecondary">
                    No new notifications
                  </Typography>
                </>
              ))}
          </Box>
        </NotificationPanelContainer>
      </Grid>
    </Grid>
  );
};

export default NotificationPanel;
