import React, { useEffect, useState, ReactFragment, ReactNode } from 'react';
import { NextPage } from 'next';
import { Grid, Typography, Box, Icon } from '@material-ui/core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { withTheme, useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Slider from 'react-slick';
import TopReportAirCondition from './TopReportAirCondition';
import TopReportOutside from './TopReportOutside';
import TopReportWashing from './TopReportWashing';

const ReportContainer = withTheme(styled(Box)`
  padding: ${props =>
    `${props.theme.spacing(5.5)}px ${props.theme.spacing(6.75)}px ${props.theme.spacing(
      11
    )}px ${props.theme.spacing(6.75)}px`};
  width: 100%;
`);

const DashBoardReport: React.FC = () => {
  return (
    <ReportContainer>
      <Slider dots infinite speed={300} slidesToScroll={1} slidesToShow={1} arrows={false}>
        <TopReportAirCondition description="Temperature inside now" actionUrl="#" />
        <TopReportOutside description="Temperature outside now" actionUrl="#" />
        <TopReportWashing description="Appliances status" actionUrl="#" />
      </Slider>
    </ReportContainer>
  );
};

export default DashBoardReport;
