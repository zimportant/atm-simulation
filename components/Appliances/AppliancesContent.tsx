import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import ApplianceSetting, { AppliancesState } from './ApplianceSetting';
import { ControlContentContainer, ControlItemContainer, ControlItemListContainer } from '../common';

export interface AppliancesContentProps {
  title: string;
  appliances: Array<AppliancesState>;
}

const AppliancesContent: React.FC<AppliancesContentProps> = ({
  title,
  appliances
}: AppliancesContentProps) => {
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
        <Box component="span" style={{ display: 'inline-block' }}>
          Total of
          {` `}
          <Box
            component="span"
            style={{ display: 'inline-block' }}
            color={theme.palette.text.primary}
          >
            {appliances.length}
            {` `}
            Appliance
            {`${appliances.length > 1 ? 's' : ''}`}
          </Box>
        </Box>
      </ControlItemContainer>
      <ControlItemListContainer>
        {appliances.map(
          (
            { icon, model, modelDetail, estimatedTime, progress, healthStatus, currentStatus },
            id
          ) => {
            return (
              <ApplianceSetting
                key={model}
                icon={icon}
                model={model}
                modelDetail={modelDetail}
                estimatedTime={estimatedTime}
                progress={progress}
                healthStatus={healthStatus}
                currentStatus={currentStatus}
                paddingTop={id > 0}
              />
            );
          }
        )}
      </ControlItemListContainer>
    </ControlContentContainer>
  );
};
export default AppliancesContent;
