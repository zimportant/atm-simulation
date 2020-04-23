import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, Typography } from '@material-ui/core';
import { useTheme, withTheme, lighten } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';

export interface ControlItemDescription {
  title: string;
  numberHighlight?: number;
  description?: string;
  imageUrl?: string;
}

export interface ControlItemProps extends ControlItemDescription {
  isSelected: boolean;
}

const ControlItemImageContainer = withTheme(styled(Box)`
  margin-right: ${({ theme }) => theme.spacing(54 / 8)}px;
  position: relative;
  padding-top: 56.25%;
`);

const ControlItemImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const ControlItemImageDescriptionBg = withTheme(styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${({ theme }) => theme.spacing(30 / 8)}px;
  opacity: 0.6;
  background: ${props => props.theme.palette.secondary.dark};
`);

const ControlItemImageDescription = withTheme(styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${({ theme }) => theme.spacing(30 / 8)}px;
  margin: auto;
  padding: 3px 14px;
`);

const ControlItemImage: React.FC<ControlItemProps> = ({
  title,
  imageUrl,
  isSelected
}: ControlItemProps) => {
  const theme = useTheme();
  const selectedColor =
    theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.main;
  return (
    <ControlItemImageContainer>
      <ControlItemImageBackground src={imageUrl} alt={title} />
      <ControlItemImageDescriptionBg />
      <ControlItemImageDescription
        fontSize="subtitle2.fontSize"
        component="span"
        color={theme.palette.secondary.contrastText}
      >
        {title}
      </ControlItemImageDescription>
    </ControlItemImageContainer>
  );
};

const ControlItem: React.FC<ControlItemProps> = ({
  title,
  numberHighlight,
  description,
  isSelected
}: ControlItemProps) => {
  const theme = useTheme();
  const selectedColor =
    theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.main;
  return (
    <Grid container>
      <Grid container item xs={10} direction="column">
        <Typography
          variant="body2"
          component="span"
          style={{
            color: isSelected ? selectedColor : theme.palette.text.primary,
            lineHeight: 1.8,
            fontWeight: 500
          }}
        >
          {title}
        </Typography>
        <Box
          fontSize="subtitle1.fontSize"
          component="span"
          color={theme.palette.text.secondary}
          style={{ display: 'inline-block', lineHeight: 1 }}
        >
          <Box
            fontSize="subtitle1.fontSize"
            component="span"
            color={theme.palette.text.primary}
            style={{ display: 'inline-block', lineHeight: 1 }}
          >
            {numberHighlight}
          </Box>
          {numberHighlight !== undefined ? ` ` : ''}
          {description}
        </Box>
      </Grid>
      {isSelected ? (
        <Grid component="div" container item xs={2} alignContent="center">
          <FontAwesomeIcon icon={faAngleRight} size="1x" color={theme.palette.secondary.main} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default ControlItem;
export { ControlItemImage };
