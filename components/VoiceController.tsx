import { Box, Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import {
  faMicrophone,
  faCircle,
  faLightbulb,
  faDoorOpen,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useSpring, useTransition } from 'react-spring';
import { HeaderTextLine } from './common';
import PanelFrame from './PanelFrame';
import FACircularIcon, { FAContainer } from './FACircularIcon';

const VoiceControllerContainer = withTheme(styled(Box)`
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

const VoiceController: React.FC = () => {
  const theme = useTheme();
  const [recording, setRecording] = useState(0);
  const [scale1, setScale1] = useState(1);
  const [scale2, setScale2] = useState(1);
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    let repeater = 0;
    let changeState = 0;
    let countDownInterval = 0;

    if (recording === 1) {
      repeater = setInterval(() => {
        setScale1(Math.random() * 2 + 0.5);
        setScale2(Math.random() * 2 + 0.5);
      }, 200);
      changeState = setTimeout(() => {
        if (recording === 1) {
          setRecording(2);
        }
      }, 8000);
    } else if (recording === 2) {
      countDownInterval = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
      if (countDown === 0) {
        Router.push('/');
      }
    }
    return () => {
      clearInterval(repeater);
      clearTimeout(changeState);
      clearTimeout(countDownInterval);
    };
  }, [recording, countDown]);

  const textAnimation = useSpring({
    config: { duration: 5000 },
    width: recording === 0 ? '0%' : `100%`,
    overflow: 'hidden',
    height: theme.spacing(32 / 8)
  });

  const radioWaveProps1 = useSpring({
    transform: `scale(${scale1}, ${scale1})`,
    width: theme.spacing(96 / 8),
    height: theme.spacing(96 / 8),
    background: theme.palette.text.disabled,
    borderRadius: '50%',
    margin: '1px 0 0 0px',
    position: 'absolute',
    lineHeight: theme.spacing(96 / 8),
    verticalAlign: 'middle',
    textAlign: 'center'
  });

  const radioWaveProps2 = useSpring({
    transform: `scale(${scale2}, ${scale2})`,
    width: theme.spacing(96 / 8),
    height: theme.spacing(96 / 8),
    background: theme.palette.text.disabled,
    borderRadius: '50%',
    margin: '1px 0 0 0px',
    position: 'absolute',
    lineHeight: theme.spacing(96 / 8),
    verticalAlign: 'middle',
    textAlign: 'center'
  });
  return (
    <Grid
      container
      direction="column"
      justify="center"
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      <Box
        style={{
          width: theme.spacing(100 / 8),
          height: theme.spacing(100 / 8),
          margin: '0 auto',
          position: 'relative'
        }}
        onClick={() => {
          if (recording === 2) {
            Router.push('/');
          } else {
            setRecording(recording + 1);
          }
        }}
      >
        <Box
          style={{
            width: theme.spacing(96 / 8),
            height: theme.spacing(96 / 8),
            background: theme.palette.text.primary,
            borderRadius: '50%',
            margin: '1px 0 0 0px',
            position: 'absolute'
          }}
        />
        {recording === 1 && (
          <>
            <animated.div style={radioWaveProps1} />
            <animated.div style={radioWaveProps2} />
          </>
        )}
        <FontAwesomeIcon
          fixedWidth
          icon={faMicrophone}
          mask={faCircle}
          transform="shrink-9"
          style={{
            fontSize: theme.spacing(100 / 8),
            display: 'block',
            position: 'absolute',
            color: theme.palette.secondary.light,
            marginLeft: `-${theme.spacing(14 / 8)}px`
          }}
        />
      </Box>
      {((): any => {
        if (recording === 0) {
          // Waiting screen
          return (
            <Box
              component="span"
              fontWeight="fontWeightMedium"
              fontSize="h5.fontSize"
              color={theme.palette.text.primary}
              textAlign="center"
              style={{ marginTop: theme.spacing(64 / 8) }}
            >
              {`Tap the mic or say `}
              <Box
                component="span"
                fontWeight="fontWeightMedium"
                fontSize="h5.fontSize"
                color={theme.palette.secondary.light}
              >
                &ldquo;Ok SELTEC&rdquo;
              </Box>
              {` to begin`}
            </Box>
          );
        }
        if (recording === 1) {
          // Recording screen
          return (
            <>
              <Grid container style={{ marginTop: theme.spacing(128 / 8), position: 'relative' }}>
                <Grid container item xs={1} />
                <Grid container item xs={10} alignItems="center">
                  <Grid container item xs={3}>
                    <Box
                      component="span"
                      fontWeight="fontWeightMedium"
                      fontSize="h5.fontSize"
                      color={theme.palette.secondary.light}
                      style={{ textAlign: 'end', width: '100%' }}
                    >
                      &ldquo;Ok SELTEC,&rdquo;
                    </Box>
                  </Grid>
                  <Grid container item xs={9}>
                    <animated.div style={textAnimation}>
                      <Box
                        component="span"
                        fontWeight="fontWeightMedium"
                        fontSize="body2.fontSize"
                        color={theme.palette.text.primary}
                        textAlign="center"
                        style={{ marginLeft: theme.spacing(24 / 8) }}
                      >
                        Switch off the lights in the hallway and lock all of the doors
                      </Box>
                    </animated.div>
                    <Box
                      height="5px"
                      bgcolor={theme.palette.text.disabled}
                      width={theme.spacing(700 / 8)}
                      bottom="-10px"
                      style={{ position: 'absolute' }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Box
                component="span"
                fontWeight="fontWeightMedium"
                fontSize="h5.fontSize"
                color={theme.palette.text.primary}
                textAlign="center"
                style={{
                  position: 'absolute',
                  bottom: theme.spacing(50 / 8),
                  left: '0',
                  right: '0'
                }}
                onClick={() => {
                  Router.push('/');
                }}
              >
                CANCEL
              </Box>
            </>
          );
        }
        if (recording === 2) {
          return (
            <>
              <Grid
                direction="row"
                style={{
                  marginTop: theme.spacing(64 / 8),
                  marginBottom: theme.spacing(200 / 8),
                  position: 'relative',
                  width: '100%'
                }}
                component="div"
                container
              >
                <Grid container item xs={6}>
                  <Box
                    component="span"
                    fontSize="body1.fontSize"
                    color={theme.palette.text.primary}
                    textAlign="end"
                    width="100%"
                    style={{ marginRight: theme.spacing(24 / 8) }}
                  >
                    Please confirm
                  </Box>
                </Grid>
                <Grid container item xs={6}>
                  <Box component="span" display="flex" flexDirection="row">
                    <Box width="5px" height="100%" bgcolor={theme.palette.text.disabled} />
                    <Box style={{ marginLeft: theme.spacing(60 / 8) }}>
                      <Box
                        component="span"
                        fontSize="body1.fontSize"
                        color={theme.palette.text.primary}
                      >
                        <FontAwesomeIcon
                          icon={faLightbulb}
                          mask={faCircle}
                          transform="shrink-8"
                          style={{
                            fontSize: theme.spacing(26 / 8),
                            display: 'block',
                            position: 'absolute',
                            color: theme.palette.text.disabled,
                            margin: `5px 0 0 -${theme.spacing(42 / 8)}px`
                          }}
                        />
                        Lights
                      </Box>
                      <Box
                        fontSize="body2.fontSize"
                        color={theme.palette.text.secondary}
                        style={{ lineHeight: 2 }}
                      >
                        Turn Off in Hallway
                      </Box>
                      <Box
                        component="span"
                        fontSize="body1.fontSize"
                        color={theme.palette.text.primary}
                      >
                        <FontAwesomeIcon
                          icon={faLock}
                          mask={faCircle}
                          transform="shrink-8"
                          style={{
                            fontSize: theme.spacing(26 / 8),
                            display: 'block',
                            position: 'absolute',
                            color: theme.palette.text.disabled,
                            margin: `5px 0 0 -${theme.spacing(42 / 8)}px`
                          }}
                        />
                        Doors
                      </Box>
                      <Box
                        fontSize="body2.fontSize"
                        color={theme.palette.text.secondary}
                        style={{ lineHeight: 2 }}
                      >
                        Lock All
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Box
                component="span"
                fontWeight="fontWeightMedium"
                fontSize="h5.fontSize"
                color={theme.palette.secondary.light}
                textAlign="center"
                style={{
                  position: 'absolute',
                  bottom: theme.spacing(50 / 8),
                  left: '0',
                  right: theme.spacing(240 / 8)
                }}
                onClick={() => {
                  Router.push('/');
                }}
              >
                {`CONFIRM `}
                <Box
                  component="span"
                  fontWeight="fontWeightMedium"
                  fontSize="h5.fontSize"
                  color={theme.palette.text.secondary}
                  style={{ marginLeft: '5px' }}
                >
                  {countDown}
                </Box>
              </Box>

              <Box
                component="span"
                fontWeight="fontWeightMedium"
                fontSize="h5.fontSize"
                color={theme.palette.text.primary}
                textAlign="center"
                style={{
                  position: 'absolute',
                  bottom: theme.spacing(50 / 8),
                  left: theme.spacing(240 / 8),
                  right: '0'
                }}
                onClick={() => {
                  Router.push('/');
                }}
              >
                CANCEL
              </Box>
            </>
          );
        }
        return <div />;
      })()}
    </Grid>
  );
};

const VoiceControllerWithFrame: React.FC = () => {
  const theme = useTheme();
  return (
    <PanelFrame selectedID={0} showBottomBar={false}>
      <VoiceControllerContainer>
        <Grid container direction="row" justify="space-between">
          <Grid container item xs={10} />
          <Grid container item xs={1} style={{ position: 'relative' }}>
            <CloseIcon
              onClick={() => {
                Router.push('/');
              }}
            />
          </Grid>
        </Grid>
        <VoiceController />
      </VoiceControllerContainer>
    </PanelFrame>
  );
};
export default VoiceController;
export { VoiceControllerWithFrame };
