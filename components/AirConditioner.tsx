import { Box, Grid, Typography } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { HeaderTextLine } from './common';
import PanelFrame from './PanelFrame';

// import CircularSliderNoSSR from './CircularSliderNoSSR';
const CircularSliderNoSSR = dynamic(() => import('./CircularSliderNoSSR'), { ssr: false });
const CustomKnobNoSSR = dynamic(() => import('./CustomKnob'), { ssr: false });

const TemperatureContainer = withTheme(styled(Box)`
  flex-grow: 1;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  // padding: 44px 44px 0 54px;
  padding: ${({ theme }) =>
    `${theme.spacing(44 / 8)}px ${theme.spacing(44 / 8)}px 0 ${theme.spacing(54 / 8)}px`};
`);

const CloseIcon = withTheme(styled(Close)`
  color: ${props => props.theme.palette.secondary.dark};
  position: absolute;
  right: 0;
  font-size: ${({ theme }) => theme.spacing(46 / 8)}px;
`);

const TemperatureContent = withTheme(styled(Box)`
  margin: ${({ theme }) => theme.spacing(80 / 8)}px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  text-transform: uppercase;
  justify-content: flex-start;
`);

const BottomLine = withTheme(styled(Box)`
  height: 2px;
  width: 100%;
  margin-bottom: 3px;
  background: ${props => props.theme.palette.text.primary};
`);

const OkButtonContainer = withTheme(styled(Box)`
  width: ${({ theme }) => theme.spacing(90 / 8)}px;
  height: ${({ theme }) => theme.spacing(90 / 8)}px;
  position: absolute;
  border-radius: 50%;
  margin-top: calc(
    (${({ theme }) => theme.spacing(320 / 8)}px + 10px - ${({ theme }) => theme.spacing(90 / 8)}px) /
      2
  );
  background: ${props =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.info.main
      : props.theme.palette.text.primary};
`);

export interface AirConditionerProps {
  airConditionerId: number;
  currentTemperature: number;
}

const AirConditioner: React.FC<AirConditionerProps> = ({
  airConditionerId,
  currentTemperature
}: AirConditionerProps) => {
  const [temp, setTemp] = useState(currentTemperature);
  const theme = useTheme();
  return (
    <>
      <Grid container direction="row" justify="space-between" style={{ flex: '1 1 auto' }}>
        <Grid container item xs={3} justify="center">
          <TemperatureContent>
            <Typography
              variant="h5"
              component="span"
              style={{ color: theme.palette.secondary.main }}
            >
              Current
            </Typography>

            <Typography variant="h2" component="span" style={{ color: theme.palette.text.primary }}>
              {temp}
              <Typography
                variant="h2"
                component="span"
                style={{ color: theme.palette.text.secondary }}
              >
                &#176;
              </Typography>
            </Typography>
          </TemperatureContent>
        </Grid>
        <Grid
          container
          item
          xs={5}
          justify="center"
          style={{ position: 'relative', marginTop: theme.spacing(64 / 8) }}
        >
          {/* <CustomKnobNoSSR min={16} max={28} progress={temp} setProgress={setTemp} /> */}
          {/* <CircularSliderNoSSR progress={temp} setProgress={setTemp} min={0} max={30} /> */}
          <OkButtonContainer>
            <Box
              fontSize="h4.fontSize"
              component="div"
              color={theme.palette.primary.main}
              fontWeight="fontWeightMedium"
              style={{
                margin: 'auto',
                width: theme.spacing(90 / 8),
                height: theme.spacing(90 / 8),
                textAlign: 'center',
                verticalAlign: 'middle',
                lineHeight: `${theme.spacing(90 / 8)}px`
              }}
            >
              OK
            </Box>
          </OkButtonContainer>
        </Grid>
        <Grid container item xs={4} justify="center">
          <TemperatureContent>
            <Typography variant="h5" component="span" style={{ color: theme.palette.warning.main }}>
              Desired
            </Typography>
            <Typography
              variant="h2"
              component="span"
              style={{ color: theme.palette.text.secondary }}
            >
              +
              <Typography
                variant="h2"
                component="span"
                style={{ color: theme.palette.text.primary }}
              >
                3
                <Typography
                  variant="h2"
                  component="span"
                  style={{ color: theme.palette.text.secondary }}
                >
                  &#176;
                </Typography>
              </Typography>
            </Typography>
            <BottomLine />
            <Typography
              variant="body2"
              component="span"
              style={{ color: theme.palette.text.secondary, lineHeight: 2 }}
            >
              IN
              {` `}
              <Typography
                variant="body2"
                component="span"
                style={{ color: theme.palette.text.primary }}
              >
                15 MIN
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              component="span"
              style={{ color: theme.palette.text.secondary }}
            >
              Potentially
              {` `}
              <Typography
                variant="body2"
                component="span"
                style={{ color: theme.palette.text.primary }}
              >
                4%
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              component="span"
              style={{ color: theme.palette.text.secondary, lineHeight: 1.3 }}
            >
              More expensive
            </Typography>
          </TemperatureContent>
        </Grid>
      </Grid>
    </>
  );
};

const AirConditionerWithFrame: React.FC<AirConditionerProps> = ({
  airConditionerId,
  currentTemperature
}: AirConditionerProps) => {
  const theme = useTheme();
  return (
    <PanelFrame selectedID={0} showBottomBar={false}>
      <TemperatureContainer>
        <Grid container direction="row" justify="space-between">
          <Grid container item xs={10}>
            <HeaderTextLine
              lineColor={theme.palette.secondary.main}
              textColor={theme.palette.text.primary}
              description="Adjust the temperature"
            />
          </Grid>
          <Grid container item xs={1} style={{ position: 'relative' }}>
            <CloseIcon
              onClick={() => {
                Router.push('/');
              }}
            />
          </Grid>
        </Grid>
        <AirConditioner
          airConditionerId={airConditionerId}
          currentTemperature={currentTemperature}
        />
      </TemperatureContainer>
    </PanelFrame>
  );
};
export default AirConditioner;
export { AirConditionerWithFrame };
