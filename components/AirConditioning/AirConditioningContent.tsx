import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import { ControlContentContainer, ControlItemContainer, ControlItemListContainer } from '../common';
import AirConditioner from '../AirConditioner';

export interface AirConditioningContentProps {
  title: string;
  conditionerId: number;
  currentTemp: number;
}

const AirConditioningContent: React.FC<AirConditioningContentProps> = ({
  title,
  conditionerId,
  currentTemp
}: AirConditioningContentProps) => {
  const theme = useTheme();
  return (
    <ControlContentContainer>
      <ControlItemContainer
        fontSize="subtitle1.fontSize"
        fontWeight="fontWeightMedium"
        component="h6"
        color={theme.palette.text.secondary}
      >
        <Box>{title}</Box>
      </ControlItemContainer>
      <AirConditioner airConditionerId={conditionerId} currentTemperature={currentTemp} />
    </ControlContentContainer>
  );
};
export default AirConditioningContent;
