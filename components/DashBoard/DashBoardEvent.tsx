import React, { useEffect, useState, ReactFragment, ReactNode } from 'react';
import { NextPage } from 'next';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Icon } from '@material-ui/core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import TopEventScheduled from './TopEventScheduled';

const ReportContainer = withTheme(styled(Box)`
  padding: ${props =>
    `${props.theme.spacing(44 / 8)}px ${props.theme.spacing(54 / 8)}px ${props.theme.spacing(
      44 / 8
    )}px 0`};
  width: 100%;
`);

const DashBoardEvent: React.FC = () => {
  return (
    <ReportContainer>
      <TopEventScheduled description="Next scheduled event" actionUrl="#" />
    </ReportContainer>
  );
};

export default DashBoardEvent;
