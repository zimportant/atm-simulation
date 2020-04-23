import {
  faImage,
  faLock,
  faRss,
  faSyncAlt,
  faThList,
  faUnlock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import {
  ControlContentContainer,
  ControlItemContainer,
  NonScrollableControlItemListContainer,
  RectIconButton
} from '../common';

export interface CctvContentProps {
  cameraName: string;
  cameraDescription: string;
  imageUrl: string;
}

const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100%;
  // object-fit: cover;
`;

const ContentDescription = withTheme(styled(Box)`
  padding: ${({ theme }) => theme.spacing(24 / 8)}px;
  background: rgb(0, 0, 0, 0.6);
  position: absolute;
  left: ${({ theme }) => theme.spacing(32 / 8)}px;
  right: ${({ theme }) => theme.spacing(32 / 8)}px;
  bottom: 0;
`);

const ContentDescriptionView = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const CctvContent: React.FC<CctvContentProps> = ({
  cameraName,
  cameraDescription,
  imageUrl
}: CctvContentProps) => {
  const theme = useTheme();
  return (
    <ControlContentContainer>
      <ControlItemContainer
        fontSize="subtitle1.fontSize"
        fontWeight="fontWeightMedium"
        component="h6"
        color={theme.palette.text.secondary}
        style={{ textTransform: 'uppercase', justifyContent: 'flex-start', position: 'absolute' }}
      >
        <Box component="span" style={{ marginRight: '64px' }}>
          <FontAwesomeIcon icon={faThList} color={theme.palette.secondary.main} />
          <Box component="span" style={{ marginLeft: '12px' }}>
            Cycle Cams
          </Box>
        </Box>
        <Box component="span" style={{ marginRight: '64px' }}>
          <FontAwesomeIcon icon={faImage} color={theme.palette.secondary.main} />
          <Box component="span" style={{ marginLeft: '12px' }}>
            Take snapshot
          </Box>
        </Box>
        <Box component="span" style={{ marginRight: '64px' }}>
          <FontAwesomeIcon icon={faSyncAlt} color={theme.palette.secondary.main} />
          <Box component="span" style={{ marginLeft: '12px' }}>
            Enable cloud sync
          </Box>
        </Box>
      </ControlItemContainer>

      {/* Override styles */}
      <NonScrollableControlItemListContainer style={{ overflow: 'hidden', maxHeight: '100%' }}>
        <ContentImage src={imageUrl} />
        <ContentDescription>
          <Grid container>
            <Grid container item xs={5}>
              <ContentDescriptionView>
                <Box
                  fontSize="body2.fontSize"
                  color={theme.palette.secondary.main}
                  fontWeight="fontWeightMedium"
                  component="span"
                  style={{ textTransform: 'uppercase' }}
                >
                  {cameraName}
                </Box>
                <Box
                  fontSize="subtitle2.fontSize"
                  component="span"
                  color={theme.palette.secondary.contrastText}
                >
                  {cameraDescription}
                </Box>
              </ContentDescriptionView>
            </Grid>
            <Grid container direction="row" justify="flex-end" item xs={7}>
              <RectIconButton
                icon={faUnlock}
                color={theme.palette.secondary.contrastText}
                bgcolor={theme.palette.secondary.main}
                title="Unlock door"
              />
              <RectIconButton
                color={theme.palette.secondary.contrastText}
                icon={faRss}
                bgcolor="#DD5B43"
                title="Intercom"
              />
            </Grid>
          </Grid>
        </ContentDescription>
      </NonScrollableControlItemListContainer>
    </ControlContentContainer>
  );
};
export default CctvContent;
