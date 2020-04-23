/* eslint-disable no-shadow */
import { faImage, faLock, faRss, faSyncAlt, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import {
  ControlContentContainer,
  ControlItemContainer,
  ControlItemListContainer,
  RectIconButton
} from '../common';
import CommunicationItem, { CommunicationItemProps } from './CommunicationItem';

export interface CommunicationContentProps {
  title: string;
  items: Array<CommunicationItemProps>;
}

const CommunicationContent: React.FC<CommunicationContentProps> = ({
  title,
  items
}: CommunicationContentProps) => {
  const theme = useTheme();
  return (
    <ControlContentContainer>
      <ControlItemContainer
        fontSize="subtitle1.fontSize"
        fontWeight="fontWeightMedium"
        component="h6"
        color={theme.palette.text.secondary}
        style={{ textTransform: 'uppercase' }}
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
            {items.length}
            {` `}
            recorded message
            {`${items.length > 1 ? 's' : ''}`}
          </Box>
        </Box>
      </ControlItemContainer>

      <ControlItemListContainer>
        {items.map(
          (
            { title, datetime, isRead, messageType, content, length }: CommunicationItemProps,
            id: number
          ) => (
            <CommunicationItem
              key={title}
              title={title}
              messageType={messageType}
              datetime={datetime}
              isRead={isRead}
              content={content}
              length={length}
              paddingTop={id > 0}
            />
          )
        )}
      </ControlItemListContainer>
    </ControlContentContainer>
  );
};
export default CommunicationContent;
