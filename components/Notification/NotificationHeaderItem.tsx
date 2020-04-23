/* eslint-disable prettier/prettier */
import { Box, Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { RectButton } from '../common';
import { FAWrapper, FAContainer } from '../FACircularIcon';

const HeaderContainer = withTheme(styled(Grid)`
  background: ${props => props.theme.palette.primary.dark};
  padding: ${({ theme }) => theme.spacing(24 / 8)}px;
`);

const RectButtonContainer = withTheme(styled(Grid)`
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.spacing(32 / 8)}px 0 0 0;
`);

export interface NotificationHeaderItemProps {
  name: string;
  model: string;
  report: string;
  datetime: string;
  category: string;
  errorCode?: string;
  icon: React.ReactNode;
}

const NotificationHeaderItem: React.FC<NotificationHeaderItemProps> = ({
  name,
  model,
  report,
  datetime,
  category,
  errorCode,
  icon
}: NotificationHeaderItemProps) => {
  const theme = useTheme();
  return (
    <HeaderContainer container>
      <Grid container item xs={1} direction="row" style={{ margin: '0 16px' }}>
        <FAWrapper style={{ width: '56px', height: '56px', margin: '10px auto' }}>
          <FAContainer>{icon}</FAContainer>
        </FAWrapper>
      </Grid>
      <Grid container item xs={10} direction="column">
        <Typography
          variant="body2"
          component="span"
          style={{ color: theme.palette.text.primary, lineHeight: 1.5 }}
        >
          {name}
          {` `}
          <Typography
            variant="body2"
            component="span"
            style={{ color: theme.palette.secondary.light }}
          >
            {model}
          </Typography>
          {` `}
          {report}
        </Typography>
        <Box
          color={theme.palette.text.secondary}
          component="span"
          fontSize="subtitle1.fontSize"
          style={{ lineHeight: 2.4 }}
        >
          Time and Date:
          {' '}
          <Box color={theme.palette.text.primary} component="span">
            {datetime}
          </Box>
          {' '}
          / Category:
          {' '}
          <Box color={theme.palette.text.primary} component="span">
            {category}
          </Box>
          {' '}
          / Error code:
          {' '}
          <Box color={theme.palette.text.primary} component="span">
            {errorCode}
          </Box>
        </Box>

        <RectButtonContainer>
          <RectButton
            title="Remind me later"
            bgcolor={theme.palette.secondary.light}
            color={theme.palette.secondary.contrastText}
          />

          <Box style={{ marginLeft: '32px' }}>
            <RectButton
              title="Call a specialist"
              bgcolor={theme.palette.error.light}
              color={theme.palette.secondary.contrastText}
            />
          </Box>
        </RectButtonContainer>
      </Grid>
    </HeaderContainer>
  );
};

export default NotificationHeaderItem;
