/* eslint-disable jsx-a11y/anchor-is-valid */
import { faFan, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { Box, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { HorizontalBox } from '../common';
import { FACircularIconBig, FACircularIconSmall } from '../FACircularIcon';
import TopReportList from './TopReport';
import { TopReportCommonType } from './TopReportCommon';

const TopReportAirCondition: React.FC<TopReportCommonType> = ({
  description,
  actionUrl
}: TopReportCommonType) => {
  const theme = useTheme();
  return (
    <TopReportList
      description={description}
      actionUrl={actionUrl}
      components={{
        left: <FACircularIconBig icon={faFan} />,
        mid: (
          <HorizontalBox>
            <Typography
              variant="h1"
              component="span"
              style={{ color: theme.palette.secondary.contrastText }}
            >
              21
              <Typography
                variant="h1"
                component="span"
                style={{ color: theme.palette.secondary.dark }}
              >
                &#176;C
              </Typography>
            </Typography>
          </HorizontalBox>
        ),
        right: (
          <Link href="/devices/airconditioner/[airconditioner]" as="/devices/airconditioner/1">
            <a>
              <FACircularIconSmall icon={faSlidersH} color={theme.palette.secondary.contrastText} />
            </a>
          </Link>
        )
      }}
    />
  );
};

export default TopReportAirCondition;
