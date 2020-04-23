import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import LightingSetting, { LightingState } from './LightingSetting';
import { ControlContentContainer, ControlItemContainer, ControlItemListContainer } from '../common';

export interface LightingContentProps {
  title: string;
  lights: Array<LightingState>;
}

const LightingContent: React.FC<LightingContentProps> = ({
  title,
  lights
}: LightingContentProps) => {
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
            {lights.length}
            {` `}
            light source
            {`${lights.length > 1 ? 's' : ''}`}
          </Box>
        </Box>
      </ControlItemContainer>
      <ControlItemListContainer>
        {lights.map(({ name, enabled, widgetId, pageId, progress, autoControl }, id) => (
          <LightingSetting
            key={name}
            name={name}
            enabled={enabled}
            progress={progress}
            autoControl={autoControl}
            widgetId={widgetId}
            pageId={pageId}
            paddingTop={id > 0}
          />
        ))}
      </ControlItemListContainer>
    </ControlContentContainer>
  );
};
export default LightingContent;
