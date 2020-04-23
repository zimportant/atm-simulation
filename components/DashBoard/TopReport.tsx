import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { HeaderTextLine, PlusBtnComponent } from '../common';
import { TopReportCommonType } from './TopReportCommon';

export interface TopReportType {
  description: string;
  actionUrl: string;

  components: {
    left: React.ReactNode;
    mid: React.ReactNode;
    right: React.ReactNode;
  };
}

const TopReport: React.FC<TopReportCommonType> = ({
  description,
  actionUrl
}: TopReportCommonType) => {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      style={{ width: '100%' }}
    >
      <Grid container item xs={11}>
        <HeaderTextLine
          lineColor={theme.palette.secondary.dark}
          textColor={theme.palette.secondary.contrastText}
          description={description}
        />
      </Grid>
      <Grid container item xs={1} style={{ justifyContent: 'flex-end' }}>
        <PlusBtnComponent />
      </Grid>
    </Grid>
  );
};

const TopReportList: React.FC<TopReportType> = ({
  description,
  actionUrl,
  components
}: TopReportType) => {
  const theme = useTheme();
  return (
    <>
      <TopReport description={description} actionUrl={actionUrl} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          width: '100%',
          marginTop: theme.spacing(30 / 8)
        }}
        xs={11}
        item
      >
        <Grid container item xs={3}>
          {components.left}
        </Grid>
        <Grid container item xs={8}>
          {components.mid}
        </Grid>
        <Grid container item xs={1}>
          {components.right}
        </Grid>
      </Grid>
    </>
  );
};

export default TopReportList;
export { TopReport };
