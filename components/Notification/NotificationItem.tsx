/* eslint-disable prettier/prettier */
import { Box, Typography } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';

export interface NotificationItemProps {
  description: string;
  datetime: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  description,
  datetime
}: NotificationItemProps) => {
  const theme = useTheme();
  return (
    <ListItemText
      primary={(
        <Typography
          variant="body2"
          component="span"
          style={{ color: theme.palette.text.primary, lineHeight: 1.5 }}
        >
          {description}
        </Typography>
      )}
      secondary={(
        <Box
          fontSize="subtitle1.fontSize"
          color={theme.palette.text.secondary}
          style={{ lineHeight: 2.4 }}
        >
          {datetime}
        </Box>
      )}
      style={{ margin: `${theme.spacing(24 / 8)}px 0 ${theme.spacing(24 / 8)}px 0` }}
    />
  );
};

export default NotificationItem;
