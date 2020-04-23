import React, { useState } from 'react';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Knob from '../lib/Knob';

interface CustomKnobProps {
  min: number;
  max: number;
  progress: number;
  setProgress?: (value: number) => any;
}
const CustomKnob: React.FC<CustomKnobProps> = ({
  min,
  max,
  progress,
  setProgress
}: CustomKnobProps) => {
  const theme = useTheme();

  return (
    <Knob
      min={min}
      max={max}
      value={progress}
      onChange={(value: number): any => {
        if (setProgress) {
          setProgress(value);
        }
      }}
      displayInput={false}
      thickness={0.25}
      bgColor={theme.palette.primary.main}
      fgColor={theme.palette.secondary.main}
      width={theme.spacing(340 / 8)}
      height={theme.spacing(340 / 8)}
    />
  );
};
export default CustomKnob;
