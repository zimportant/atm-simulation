import { Box, Typography } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import { TopReport } from './TopReport';
import { TopReportCommonType } from './TopReportCommon';

const TimeContainer = withTheme(styled(Box)`
  align-content: center;
  margin-top: ${props => props.theme.spacing(36 / 8)}px;
`);

const TopEventScheduled: React.FC<TopReportCommonType> = ({
  description,
  actionUrl
}: TopReportCommonType) => {
  const theme = useTheme();
  return (
    <>
      <TopReport description={description} actionUrl={actionUrl} />
      <TimeContainer>
        <Typography variant="h5" component="span" style={{ color: theme.palette.secondary.dark }}>
          TODAY
        </Typography>
        <br />
        <Typography
          variant="h3"
          component="span"
          style={{ color: theme.palette.secondary.contrastText }}
        >
          7:30
          <Typography variant="h3" component="span" style={{ color: theme.palette.secondary.dark }}>
            PM
          </Typography>
        </Typography>
      </TimeContainer>

      <Typography
        variant="h5"
        component="h5"
        style={{ color: theme.palette.secondary.contrastText, marginTop: '32px' }}
      >
        Full system check
      </Typography>
    </>
  );
};

export default TopEventScheduled;
