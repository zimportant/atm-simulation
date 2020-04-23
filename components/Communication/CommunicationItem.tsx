import { faFileAlt, faVoicemail, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Box, Grid, Paper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { FACircularIconSmall } from '../FACircularIcon';

const CommunicationContainer = styled(Box)`
  margin: 0 0 0px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export interface CommunicationItemProps {
  title: string;
  datetime: string;
  length: string;
  isRead: boolean;
  content: string;
  messageType: 'voice' | 'cctv' | 'text';
  paddingTop?: boolean;
}

const CommunicationItem: React.FC<CommunicationItemProps> = ({
  title,
  datetime,
  length,
  isRead,
  content,
  messageType,
  paddingTop
}: CommunicationItemProps) => {
  const theme = useTheme();
  const color = isRead ? theme.palette.secondary.main : theme.palette.text.disabled;

  const icon = (type: string): any => {
    if (type === 'voice') {
      return <FACircularIconSmall icon={faVoicemail} margin="" color={color} />;
    }
    if (type === 'cctv') {
      return <FACircularIconSmall icon={faVideo} margin="" color={color} />;
    }
    if (type === 'text') {
      return <FACircularIconSmall icon={faFileAlt} margin="" color={color} />;
    }
    return <span />;
  };

  const labelType = (type: string): any => {
    if (type === 'voice') return 'Audio length';
    if (type === 'cctv') return 'Video length';
    if (type === 'text') return 'Read time';
    return '';
  };

  const itemDescription = (type: string, _content: string): any => {
    if (type === 'voice') {
      return <ReactAudioPlayer controls src={_content} />;
    }
    if (type === 'cctv') {
      return <ReactPlayer url={_content} />;
    }
    if (type === 'text') {
      return (
        <Paper variant="outlined" style={{ minHeight: '200px', padding: '15px' }}>
          <Box fontSize="subtitle1.fontSize">{_content}</Box>
        </Paper>
      );
    }
    return <span />;
  };

  return (
    <CommunicationContainer
      style={{
        paddingTop: paddingTop ? '24px' : '0'
      }}
    >
      <Grid container item direction="column">
        <Grid container item xs={1}>
          {icon(messageType)}
        </Grid>
        <Grid container item xs={11} direction="row">
          <Grid container item direction="row">
            <Grid
              container
              item
              xs={8}
              direction="column"
              justify="flex-start"
              style={{ marginBottom: '-8px' }}
            >
              <Box fontSize="body2.fontSize" component="span" style={{ lineHeight: 1 }}>
                {title}
              </Box>
              <Box
                fontSize="subtitle1.fontSize"
                component="span"
                color={theme.palette.text.primary}
                style={{ lineHeight: 2.4 }}
              >
                {`Recorded at: `}
                <Box
                  fontSize="subtitle1.fontSize"
                  component="span"
                  color={theme.palette.text.secondary}
                  style={{ lineHeight: 2.4 }}
                >
                  {datetime}
                </Box>
              </Box>
            </Grid>
            <Grid container item xs={4} justify="flex-end" direction="row">
              <Box
                display="flex"
                flexDirection="column"
                bgcolor={theme.palette.primary.main}
                style={{
                  padding: '6px 8px 6px 8px',
                  height: 'min-content'
                }}
              >
                <Box
                  fontSize="12px"
                  style={{ textTransform: 'uppercase', lineHeight: 1 }}
                  component="span"
                >
                  {labelType(messageType)}
                </Box>
                <Box
                  fontWeight="fontWeightMedium"
                  fontSize="subtitle1.fontSize"
                  component="span"
                  style={{ lineHeight: 1, padding: '4px 0 3px 0' }}
                >
                  {length}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container item justify="flex-start" direction="column">
            <Box flexDirection="row">
              {messageType === 'voice' ? (
                <ReactAudioPlayer controls src={content} />
              ) : (
                <Paper variant="outlined" style={{ minHeight: '200px', padding: '15px' }}>
                  <Box fontSize="subtitle1.fontSize">{content}</Box>
                </Paper>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </CommunicationContainer>
  );
};
export default CommunicationItem;
