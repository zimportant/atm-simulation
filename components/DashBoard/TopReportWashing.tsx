import { faBell, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { Box, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { HorizontalBox } from '../common';
import { FACircularIconBig, FACircularIconSmall } from '../FACircularIcon';
import TopReportList from './TopReport';
import { TopReportCommonType } from './TopReportCommon';

const TopReportWashing: React.FC<TopReportCommonType> = ({
  description,
  actionUrl
}: TopReportCommonType) => {
  const theme = useTheme();
  return (
    <TopReportList
      description={description}
      actionUrl={actionUrl}
      components={{
        left: <FACircularIconBig icon={faRecycle} />,
        mid: (
          <HorizontalBox>
            <Grid container alignItems="center">
              <Grid container item xs={6} justify="center">
                <Typography
                  variant="h1"
                  component="span"
                  style={{ color: theme.palette.secondary.contrastText }}
                >
                  15
                </Typography>
              </Grid>
              <Grid container item xs={6} style={{ display: 'inline-block' }}>
                <Typography variant="h3" style={{ color: theme.palette.secondary.contrastText }}>
                  MIN
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: theme.palette.secondary.dark,
                    paddingLeft: '3px',
                    marginRight: '-5px'
                  }}
                >
                  UNTIL FINISHED
                </Typography>
              </Grid>
            </Grid>
          </HorizontalBox>
        ),
        right: <FACircularIconSmall icon={faBell} />
      }}
    />
  );
};

export default TopReportWashing;
