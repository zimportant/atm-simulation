import React, { useEffect, useState, ReactFragment, ReactNode } from 'react';
import { NextPage } from 'next';
import { Grid, Typography, Box, Icon, useTheme, withTheme } from '@material-ui/core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Badge from '@material-ui/core/Badge';
import {
  faTachometerAlt,
  faFan,
  faLightbulb,
  faTv,
  faBroadcastTower,
  faShieldAlt,
  faVideo,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import FACircularIcon from './FACircularIcon';
import { StyledBadge } from './common';

interface TabItemsType {
  icon: any;
  label: string;
  url: string;
}

const tabItems: Array<TabItemsType> = [
  {
    icon: faTachometerAlt,
    label: 'Dashboard',
    url: '/'
  },
  {
    icon: faFan,
    label: 'Air Conditioning',
    url: '/airconditioning'
  },
  {
    icon: faLightbulb,
    label: 'Lighting',
    url: '/lighting'
  },
  {
    icon: faTv,
    label: 'Appliances',
    url: '/appliances'
  },
  {
    icon: faBroadcastTower,
    label: 'Communication',
    url: '/communication'
  },
  {
    icon: faShieldAlt,
    label: 'Security',
    url: '/security'
  },
  {
    icon: faVideo,
    label: 'CCTV',
    url: '/cctv'
  },
  {
    icon: faTools,
    label: 'Settings',
    url: '/settings'
  }
];

const TabBarWrapper = styled(Box)`
  // position: fixed;
  // bottom: 0;
  width: 100%;
  flex: 1 0 auto;
`;

const TabItemWrapper = withTheme(styled(Box)`
  height: ${props => props.theme.spacing(16)}px;
  margin: auto;
  width: 100%;
  text-align: center;
  cursor: pointer;
`);

const TabItemLine = styled(Box)`
  height: 2px;
`;

const IconContainer = withTheme(styled.div`
  text-align: center;
  margin: ${props => `${props.theme.spacing(3)}px auto 2px auto`};
`);

interface TabItemType {
  item: TabItemsType;
  isSelected: boolean;
  badgeCount: number;
}

const TabItem: React.FC<TabItemType> = ({ item, isSelected, badgeCount }: TabItemType) => {
  const theme = useTheme();
  return (
    <TabItemWrapper bgcolor={isSelected ? 'secondary.main' : 'primary.main'}>
      <TabItemLine bgcolor="secondary.dark" />
      <IconContainer>
        {badgeCount !== 0 ? (
          <StyledBadge badgeContent={badgeCount} color="error">
            <FACircularIcon icon={item.icon} />
          </StyledBadge>
        ) : (
          <FACircularIcon icon={item.icon} />
        )}
      </IconContainer>
      <Typography
        variant="overline"
        component="p"
        color="textPrimary"
        style={{ textTransform: 'uppercase' }}
      >
        {item.label}
      </Typography>
    </TabItemWrapper>
  );
};

interface BottomBarType {
  selectedID: number;
}

const BottomBar: React.FC<BottomBarType> = ({ selectedID }: BottomBarType) => {
  return (
    <TabBarWrapper component="div">
      <Grid container justify="center" alignItems="center" alignContent="center" item xs={12}>
        {tabItems.map(({ icon, label, url }, id) => (
          <Grid key={label} container item xs onClick={() => Router.push(`${url}`)}>
            <TabItem
              item={{ icon, label, url }}
              isSelected={id === selectedID}
              badgeCount={url === '/communication' ? 4 : 0}
            />
          </Grid>
        ))}
      </Grid>
    </TabBarWrapper>
  );
};

export default BottomBar;
