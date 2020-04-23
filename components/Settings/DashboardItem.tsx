import { faEdit, faMinusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Box, Grid, Typography } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import { RectIconButtonSmall } from '../common';
import { FAContainer, FAWrapper } from '../FACircularIcon';

const DashboardItemContainer = withTheme(styled(Grid)`
  background: ${props => props.theme.palette.primary.dark};
  padding: ${({ theme }) => theme.spacing(24 / 8)}px;
`);

export interface DashboardItemProps {
  name: string;
  prompt1?: string;
  description1?: string;
  prompt2?: string;
  description2?: string;
  icon: React.ReactNode;
  handleRemove?: () => any;
}

const DashboardItem: React.FC<DashboardItemProps> = ({
  name,
  prompt1,
  description1,
  prompt2,
  description2,
  icon,
  handleRemove
}: DashboardItemProps) => {
  const theme = useTheme();
  return (
    <DashboardItemContainer container>
      <Grid container item xs={1} direction="row" style={{ margin: '0 16px' }}>
        <FAWrapper style={{ width: '56px', height: '56px', margin: '10px auto' }}>
          <FAContainer>{icon}</FAContainer>
        </FAWrapper>
      </Grid>
      <Grid container item xs={8} direction="column">
        <Typography
          variant="body2"
          component="span"
          style={{ color: theme.palette.text.primary, fontWeight: 500, lineHeight: 1.5 }}
        >
          {name}
        </Typography>
        {prompt1 && description1 && (
          <Box
            color={theme.palette.text.primary}
            component="span"
            fontSize="subtitle1.fontSize"
            style={{ lineHeight: 2.3 }}
          >
            {`${prompt1}: `}
            <Box color={theme.palette.text.secondary} component="span">
              {description1}
            </Box>
          </Box>
        )}
        {prompt2 && description2 && (
          <Box
            color={theme.palette.text.primary}
            component="span"
            fontSize="subtitle1.fontSize"
            style={{ lineHeight: 1.2 }}
          >
            {`${prompt2}: `}
            <Box color={theme.palette.text.secondary} component="span">
              {description2}
            </Box>
          </Box>
        )}
      </Grid>

      {/* <Grid container item xs={2} direction="column">
        <RectIconButtonSmall
          icon={faEdit}
          color={theme.palette.secondary.contrastText}
          bgcolor={theme.palette.secondary.main}
          title="Edit"
        />
        <Box
          onClick={e => {
            if (handleRemove) {
              handleRemove();
            }
            e.preventDefault();
          }}
        >
          <RectIconButtonSmall
            color={theme.palette.secondary.contrastText}
            icon={faMinusCircle}
            bgcolor="#DD5B43"
            title="Delete"
          />
        </Box> 
      </Grid> */}
    </DashboardItemContainer>
  );
};

export default DashboardItem;
