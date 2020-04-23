import React, { useEffect, useState, ReactFragment, ReactNode, ReactElement } from 'react';
import { NextPage } from 'next';
import { Grid, Typography, Box, Icon, Button, IconButton, Fab, Container } from '@material-ui/core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faPlus, faRecycle, faFan, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { FACircularIconBig, FACircularIconSmall } from '../FACircularIcon';
import { TopReportCommonType } from './TopReportCommon';
import TopReportList from './TopReport';
import { HorizontalBox } from '../common';

const TopReportOutside: React.FC<TopReportCommonType> = ({
  description,
  actionUrl
}: TopReportCommonType) => {
  const theme = useTheme();
  return (
    <TopReportList
      description={description}
      actionUrl={actionUrl}
      components={{
        left: (
          <FontAwesomeIcon
            icon={faCloudSun}
            style={{
              fontSize: theme.spacing(116 / 8),
              color: theme.palette.secondary.dark
            }}
          />
        ),
        mid: (
          <HorizontalBox>
            <Typography
              variant="h1"
              component="span"
              style={{ color: theme.palette.secondary.contrastText }}
            >
              25
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
          <Box width="100%" style={{ display: 'inline-block' }}>
            <Typography
              variant="body2"
              component="span"
              style={{ color: theme.palette.secondary.dark }}
            >
              NIGHT
            </Typography>
            <br />
            <Typography
              variant="h4"
              component="span"
              style={{ color: theme.palette.secondary.contrastText }}
            >
              9
              <Typography
                variant="h4"
                component="span"
                style={{ color: theme.palette.secondary.dark }}
              >
                &#176;C
              </Typography>
            </Typography>
          </Box>
        )
      }}
    />
  );
};

export default TopReportOutside;
