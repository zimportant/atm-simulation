import { Box, Tooltip } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { createStyles, Theme, useTheme, withTheme, withStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import IndicatorDark from '../SVG/indicator_dark.svg';
import IndicatorLight from '../SVG/indicator_light.svg';

export interface LightingState {
  widgetId: string;
  pageId: string;
  name: string;
  enabled: boolean;
  autoControl: boolean;
  progress: number;
  paddingTop?: boolean;
}

const LightingContainer = withTheme(styled(Box)`
  margin: 0 0 ${({ theme }) => theme.spacing(64 / 8)}px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`);

const AutoControlContainer = styled(Box)`
  text-transform: uppercase;
`;

interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelContainer(props: Props) {
  const { children, open, value } = props;
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          left: `${Math.min(91, value)}%`,
          position: 'absolute',
          marginTop: `-${theme.spacing(50 / 8)}px`,
          marginLeft: `${theme.spacing(6 / 8)}px`,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          fontSize="subtitle2.fontSize"
          component="span"
          color={theme.palette.text.primary}
          fontWeight="fontWeightMedium"
          style={{ lineHeight: 1.3, display: 'inline-block', width: '100%', textAlign: 'right' }}
        >
          {value}
          <Box
            fontSize="subtitle2.fontSize"
            component="span"
            fontWeight="fontWeightRegular"
            color={theme.palette.text.secondary}
            style={{ lineHeight: 1.3, display: 'inline-block' }}
          >
            %
          </Box>
        </Box>
        <img
          src={theme.palette.type === 'light' ? IndicatorLight : IndicatorDark}
          alt="indicator"
          style={{ width: theme.spacing(70 / 8), height: theme.spacing(25 / 8) }}
        />
      </div>
      {children}
    </>
  );
}

function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <>
      <ValueLabelContainer open={open} value={value}>
        {children}
      </ValueLabelContainer>
    </>
  );
}

const prettoSliderStyle = (theme: Theme) =>
  createStyles({
    root: {
      height: 4
    },
    thumb: {
      height: 32,
      width: 32,
      backgroundColor: theme.palette.secondary.main,
      border: '4px solid currentColor',
      borderColor: theme.palette.primary.light,
      marginTop: -(32 - 4 * 2) / 2 - 2,
      marginLeft: -(32 + 4 * 2) / 2,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit'
      }
    },
    active: {},
    valueLabel: {
      left: `calc(-50% + 16px)`,
      top: -30,
      '& *': {
        background: 'transparent',
        color: theme.palette.text.primary
      }
    },
    track: {
      height: 4,
      borderRadius: 4
    },
    rail: {
      height: 4,
      borderRadius: 4
    }
  });

let timeOutSendRequestHandler = 0;

const LightingSetting: React.FC<LightingState> = ({
  name,
  enabled,
  widgetId,
  pageId,
  autoControl,
  progress,
  paddingTop
}: LightingState) => {
  const theme = useTheme();
  const [tempProgress, setTempProgress] = useState(progress);
  const PrettoSlider = withStyles(prettoSliderStyle(theme))(Slider);

  useEffect(() => {
    console.log(progress, tempProgress);
    if (tempProgress !== progress) {
      setTempProgress(progress);
    }
  }, [progress]);

  const handleNewValue = (newValue: number): any => {
    clearTimeout(timeOutSendRequestHandler);
    timeOutSendRequestHandler = setTimeout(() => {
      setTempProgress(newValue);
      // const newSitemap = createNewSitemap(
      //   sitemap,
      //   sitemapSelected,
      //   { widgetId, item: { state: String(newValue) } },
      //   pageId
      // );
      // console.log(newSitemap);
      // dispatch(newSitemap);
    }, 200);
  };

  return (
    <>
      <LightingContainer
        style={{
          paddingTop: paddingTop ? theme.spacing(86 / 8) : '0'
        }}
      >
        <Box fontSize="body2.fontSize" component="span">
          {name}
        </Box>
        <AutoControlContainer>
          <Box
            component="span"
            fontSize="subtitle1.fontSize"
            style={{ display: 'inline-block' }}
            color={theme.palette.text.secondary}
          >
            Auto Control
            {` `}
            <Box
              component="span"
              fontSize="subtitle1.fontSize"
              fontWeight="fontWeightMedium"
              style={{ display: 'inline-block' }}
              color={autoControl ? 'secondary.main' : theme.palette.primary.contrastText}
            >
              {autoControl ? 'ON' : 'OFF'}
            </Box>
          </Box>
        </AutoControlContainer>
      </LightingContainer>
      <PrettoSlider
        style={{
          color: autoControl ? theme.palette.secondary.main : theme.palette.text.disabled
        }}
        valueLabelDisplay="on"
        aria-label="slider"
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={tempProgress}
        onChange={(e: any, newValue: number | number[]) => {
          if (typeof newValue === 'number') {
            handleNewValue(newValue);
          }
        }}
      />
    </>
  );
};
export default LightingSetting;
