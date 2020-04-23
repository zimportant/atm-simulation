import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Box, Grid } from '@material-ui/core';
import { createStyles, Theme, useTheme, withStyles, withTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

const HorizontalBox = styled(Box)({
  margin: 'auto'
});

const CenterBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '100%'
});

const CircularImage = withTheme(
  styled.img`
    width: ${props => props.theme.spacing(70 / 8)}px;
    height: ${props => props.theme.spacing(70 / 8)}px;
    border-radius: '50%';
    display: 'block';
    margin: 'auto';
  `
);

const PlusBtnContainer = withTheme(styled(Box)`
  width: ${props => props.theme.spacing(44 / 8)}px;
  height: ${props => props.theme.spacing(44 / 8)}px;
  padding: calc((${props => props.theme.spacing(44 / 8)}px - 26px) / 2);
  text-align: right;
`);

const PlusBtnComponent: React.FC = () => {
  const theme = useTheme();
  return (
    <PlusBtnContainer bgcolor="secondary.dark">
      <AddIcon style={{ color: theme.palette.secondary.contrastText }} />
    </PlusBtnContainer>
  );
};

const RectBtnContainer = styled(Box)`
  margin-top: -24px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  min-width: 100px;
`;

const RectContainer = withTheme(styled(Box)`
  padding: ${({ theme }) => `${theme.spacing(14 / 8)}px ${theme.spacing(26 / 8)}px`};
  text-align: center;
`);

const RectContainerSmall = withTheme(styled(Box)`
  padding: ${({ theme }) => `${theme.spacing(12 / 8)}px ${theme.spacing(26 / 8)}px`};
`);

interface RectIconButtonProps {
  icon: any;
  title: string;
  bgcolor: string;
  color: string;
}

const RectIconButton: React.FC<RectIconButtonProps> = ({
  icon,
  title,
  bgcolor,
  color
}: RectIconButtonProps) => {
  const theme = useTheme();
  return (
    <RectContainer
      bgcolor={bgcolor}
      style={{
        width: theme.spacing(200 / 8),
        margin: `${theme.spacing(4 / 8)}px ${theme.spacing(16 / 8)}px 0 ${theme.spacing(16 / 8)}px`
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        size="sm"
        color={color}
        style={{ display: 'inline-block', marginBottom: '2px' }}
      />
      <Box
        component="span"
        fontSize="subtitle2.fontSize"
        color={color}
        fontWeight="fontWeightBold"
        style={{ textTransform: 'uppercase', marginLeft: '8px' }}
      >
        {title}
      </Box>
    </RectContainer>
  );
};

const RectIconButtonSmall: React.FC<RectIconButtonProps> = ({
  icon,
  title,
  bgcolor,
  color
}: RectIconButtonProps) => {
  return (
    <RectContainerSmall bgcolor={bgcolor} style={{ margin: '0px 16px 8px 0', width: '160px' }}>
      <FontAwesomeIcon
        icon={icon}
        size="sm"
        color={color}
        style={{ display: 'inline-block', marginBottom: '2px' }}
      />
      <Box
        component="span"
        fontSize="subtitle2.fontSize"
        color={color}
        fontWeight="fontWeightBold"
        style={{ textTransform: 'uppercase', marginLeft: '14px' }}
      >
        {title}
      </Box>
    </RectContainerSmall>
  );
};

interface RectButtonProps {
  title: string;
  bgcolor: string;
  color: string;
}

const RectButton: React.FC<RectButtonProps> = ({ title, bgcolor, color }: RectButtonProps) => {
  const theme = useTheme();
  return (
    <RectContainer bgcolor={bgcolor} style={{ width: theme.spacing(230 / 8) }}>
      <Box
        component="span"
        fontSize="subtitle2.fontSize"
        color={color}
        fontWeight="fontWeightBold"
        style={{ textTransform: 'uppercase' }}
      >
        {title}
      </Box>
    </RectContainer>
  );
};

const ThickLine = withTheme(styled(Box)`
  width: ${({ theme }) => theme.spacing(140 / 8)}px;
  height: 7px;
`);

const TopTypography = styled(Box)({
  textTransform: 'uppercase',
  marginTop: '6px'
});

interface HeaderTextLineProps {
  description: string;
  lineColor: string;
  textColor: string;
}
const HeaderTextLine: React.FC<HeaderTextLineProps> = ({
  description,
  lineColor,
  textColor
}: HeaderTextLineProps) => {
  const theme = useTheme();
  return (
    <Box style={{ marginBottom: theme.spacing(5) }}>
      <ThickLine bgcolor={lineColor} />
      <TopTypography
        fontSize="subtitle1.fontSize"
        color={textColor}
        fontWeight="fontWeightMedium"
        component="div"
      >
        {description}
      </TopTypography>
    </Box>
  );
};

const SettingContentTitleContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface SettingContentTitleProps {
  title: string;
}
const SettingContentTitle: React.FC<SettingContentTitleProps> = ({
  title
}: SettingContentTitleProps) => {
  return (
    <SettingContentTitleContainer>
      <Box fontSize="body2.fontSize" component="span">
        {title}
      </Box>
    </SettingContentTitleContainer>
  );
};

const SectionContainerGrid = withTheme(styled(Grid)`
  background: ${props => props.theme.palette.primary.main};
  padding: ${({ theme }) => `${theme.spacing(44 / 8)}px 0 0 ${theme.spacing(54 / 8)}px`};
  max-height: 100%;
`);

const ControlContainerGrid = withTheme(styled(Grid)`
  background: ${props => props.theme.palette.primary.light};
  padding: ${({ theme }) => `${theme.spacing(44 / 8)}px 0 0 ${theme.spacing(54 / 8)}px`};
  max-height: 100%;
`);

const ControlContentContainer = withTheme(styled(Box)`
  flex-grow: 0;
  width: 100%;
  padding-right: ${({ theme }) => theme.spacing(54 / 8)}px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
`);

const ControlItemContainer = styled(Box)`
  margin: 13px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  max-height: 100%;
`;

const WrapperControlItemListContainer = withTheme(styled(Box)`
  overflow-y: visible;
  overflow-x: visible;
  position: relative;
`);

const WrapperScrollContainer = withTheme(styled(ScrollContainer)`
  margin: ${({ theme }) => theme.spacing(64 / 8)}px -${({ theme }) => theme.spacing(32 / 8)}px ${({
      theme
    }) => theme.spacing(64 / 8)}px -${({ theme }) => theme.spacing(32 / 8)}px !important;
  padding-right: ${({ theme }) => theme.spacing(32 / 8)}px !important;
  padding-left: ${({ theme }) => theme.spacing(32 / 8)}px !important;
  max-height: 100%;
`);

const ControlItemListContainer = ({ children }: any) => (
  <WrapperScrollContainer horizontal={false}>
    <WrapperControlItemListContainer>{children}</WrapperControlItemListContainer>
  </WrapperScrollContainer>
);

const NonScrollableControlItemListContainer = withTheme(styled(Box)`
  margin: ${({ theme }) => theme.spacing(64 / 8)}px -${({ theme }) => theme.spacing(32 / 8)}px ${({
      theme
    }) => theme.spacing(64 / 8)}px -${({ theme }) => theme.spacing(32 / 8)}px !important;
  padding-right: ${({ theme }) => theme.spacing(32 / 8)}px !important;
  padding-left: ${({ theme }) => theme.spacing(32 / 8)}px !important;
  max-height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
`);

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 3,
      top: 8,
      border: `0px solid ${theme.palette.primary.main}`,
      padding: '0 4px'
    }
  })
)(Badge);

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export {
  HorizontalBox,
  CircularImage,
  CenterBox,
  PlusBtnComponent,
  ThickLine,
  HeaderTextLine,
  RectBtnContainer,
  SettingContentTitle,
  SectionContainerGrid,
  ControlContainerGrid,
  ControlContentContainer,
  ControlItemContainer,
  NonScrollableControlItemListContainer,
  ControlItemListContainer,
  RectContainer,
  RectIconButton,
  RectButton,
  RectIconButtonSmall,
  StyledBadge,
  Alert
};
