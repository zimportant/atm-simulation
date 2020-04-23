/* eslint-disable no-shadow */
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { ControlContentContainer, ControlItemContainer, ControlItemListContainer } from '../common';
import SecurityItem, { SecurityItemProps } from './SecurityItem';

export interface SecurityContentProps {
  title: string;
  items: Array<SecurityItemProps>;
}

const SecurityContent: React.FC<SecurityContentProps> = ({
  title,
  items
}: SecurityContentProps) => {
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
            recorded alarm
            {`${items.length > 1 ? 's' : ''}`}
          </Box>
        </Box>
      </ControlItemContainer>

      <ControlItemListContainer>
        {items.map(
          (
            { title, datetime, isRead, messageType, content, length }: SecurityItemProps,
            id: number
          ) => (
            <SecurityItem
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
export default SecurityContent;
