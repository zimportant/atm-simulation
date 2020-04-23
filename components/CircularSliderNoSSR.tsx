// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import CircularSlider from '@fseehawer/react-circular-slider';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';

interface CircularSliderNoSSRProps {
  min: number;
  max: number;
  progress: number;
  setProgress?: (value: number) => any;
}
const CircularSliderNoSSR: React.FC<CircularSliderNoSSRProps> = ({
  min,
  max,
  progress,
  setProgress
}: CircularSliderNoSSRProps) => {
  const theme = useTheme();
  return (
    <CircularSlider
      min={min}
      max={max}
      dataIndex={progress}
      hideLabelValue
      knobColor={theme.palette.secondary.dark}
      progressColorFrom={theme.palette.secondary.main}
      progressColorTo={theme.palette.secondary.main}
      progressSize={theme.spacing(30 / 8)}
      trackColor={theme.palette.primary.main}
      progressLineCap="flat"
      trackSize={theme.spacing(30 / 8)}
      width={theme.spacing(340 / 8)}
      height={theme.spacing(340 / 8)}
      onChange={(_value: number) => {
        if (setProgress) {
          setProgress(_value);
        }
      }}
    />
  );
};

export default CircularSliderNoSSR;
