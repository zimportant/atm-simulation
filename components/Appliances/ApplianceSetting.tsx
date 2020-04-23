import { Box, Grid, GridList } from '@material-ui/core';
import {
  useTheme,
  withTheme,
  makeStyles,
  withStyles,
  lighten,
  darken,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { RectContainer } from '../common';

export interface AppliancesState {
  icon: any;
  model: string;
  modelDetail: string;
  estimatedTime: string;
  progress: number;
  healthStatus: string;
  currentStatus: string;
  paddingTop?: boolean;
}

const ApplianceContainer = styled(Box)`
  margin: 0 0 0px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const colorLinearProgressStyles = (theme: Theme) =>
  createStyles({
    colorPrimary: {
      backgroundColor: theme.palette.text.disabled
    },
    barColorPrimary: {
      backgroundColor: theme.palette.secondary.main
    }
  });

interface DeviceStatusProps {
  theme: Theme;
  title: string;
  status: string;
}
const DeviceStatus: React.FC<DeviceStatusProps> = ({ theme, title, status }: DeviceStatusProps) => {
  return (
    <Box
      flexDirection="row"
      component="span"
      fontWeight="fontWeightMedium"
      fontSize="subtitle2.fontSize"
      style={{ marginBottom: '8px', lineHeight: 1 }}
    >
      {title}
      {`: `}
      <Box
        component="span"
        fontWeight="fontWeightRegular"
        fontSize="subtitle2.fontSize"
        color={theme.palette.text.secondary}
      >
        {status}
      </Box>
    </Box>
  );
};

interface DevicePopupProps {
  title: string;
  description: string;
  progress: number;
}

const DevicePopup: React.FC<DevicePopupProps> = ({
  title,
  description,
  progress
}: DevicePopupProps) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="row"
      height="28px"
      alignContent="flex-start"
      style={{ marginLeft: `${progress}%`, marginBottom: '8px' }}
    >
      <Box
        width="2px"
        height="100%"
        component="span"
        bgcolor={theme.palette.text.disabled}
        style={{ display: 'inline-block' }}
      />
      <Box
        fontSize="subtitle2.fontSize"
        component="span"
        fontWeight="fontWeightMedium"
        style={{ lineHeight: 1, display: 'inline-block', marginLeft: '6px' }}
      >
        {title}
        <Box
          fontSize="subtitle2.fontSize"
          component="span"
          fontWeight="fontWeightRegular"
          color={theme.palette.text.secondary}
          style={{ lineHeight: 1, display: 'inline-block' }}
        >
          {description}
        </Box>
      </Box>
    </Box>
  );
};

const ApplianceSetting: React.FC<AppliancesState> = ({
  icon,
  model,
  modelDetail,
  estimatedTime,
  progress,
  healthStatus,
  currentStatus,
  paddingTop
}: AppliancesState) => {
  const theme = useTheme();
  const ColorLinearProgress = withStyles(colorLinearProgressStyles(theme))(LinearProgress);
  return (
    <ApplianceContainer
      style={{
        paddingTop: paddingTop ? '24px' : '0'
      }}
    >
      <Grid container item direction="column">
        <Grid container item xs={1}>
          {icon}
        </Grid>
        <Grid container item xs={11} direction="row">
          <Grid container item direction="row">
            <Grid
              container
              item
              xs={8}
              direction="column"
              justify="flex-start"
              style={{ marginBottom: '-8px' }}
            >
              <Box fontSize="body2.fontSize" component="span" style={{ lineHeight: 1 }}>
                {model}
              </Box>
              <Box
                fontSize="15px"
                component="span"
                color={theme.palette.text.secondary}
                style={{ lineHeight: 2.8 }}
              >
                {modelDetail}
              </Box>
            </Grid>
            <Grid container item xs={4} justify="flex-end" direction="row">
              <Box
                display="flex"
                flexDirection="column"
                bgcolor={theme.palette.primary.main}
                style={{
                  padding: '6px 8px 6px 8px',
                  height: 'min-content'
                }}
              >
                <Box
                  fontSize="12px"
                  style={{ textTransform: 'uppercase', lineHeight: 1 }}
                  component="span"
                >
                  Estimated time
                </Box>
                <Box
                  fontWeight="fontWeightMedium"
                  fontSize="subtitle1.fontSize"
                  component="span"
                  style={{ lineHeight: 1, padding: '4px 0 3px 0' }}
                >
                  {estimatedTime}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container item justify="flex-start" direction="column">
            <DeviceStatus title="HEALTH STATUS" status={healthStatus} theme={theme} />
            <DeviceStatus title="CURRENT STATUS" status={currentStatus} theme={theme} />
          </Grid>
          <Grid container item justify="flex-start" direction="column">
            <Box flexDirection="row">
              <DevicePopup
                progress={progress}
                title={currentStatus === 'Idle' ? currentStatus : String(progress)}
                description={currentStatus === 'Idle' ? '' : '% completed'}
              />
              <ColorLinearProgress variant="determinate" value={progress} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ApplianceContainer>
  );
};
export default ApplianceSetting;
