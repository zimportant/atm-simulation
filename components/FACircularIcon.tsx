import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';

interface FACircularIconType {
  icon: any;
  color?: string;
  margin?: string;
}

export const FAWrapper = withTheme(styled.div`
  width: ${props => (props.style ? props.style.width : `${props.theme.spacing(56 / 8)}px`)};
  height: ${props => (props.style ? props.style.height : `${props.theme.spacing(56 / 8)}px`)};
  text-align: center;
  margin: ${props => (props.style ? props.style.margin : 'auto')};
  position: relative;
`);

export const FAContainer = withTheme(styled.div`
  margin-left: ${props => `-${props.theme.spacing(1)}px`};
`);

const FACircularIcon: React.FC<FACircularIconType> = ({ icon }: FACircularIconType) => {
  const theme = useTheme();
  return (
    <FAWrapper
      style={{
        width: theme.spacing(56 / 8),
        height: theme.spacing(56 / 8),
        margin: 'auto'
      }}
    >
      <FAContainer>
        <FontAwesomeIcon
          fixedWidth
          icon={icon}
          mask={faCircle}
          transform="shrink-8"
          style={{
            fontSize: theme.spacing(56 / 8),
            display: 'block',
            position: 'absolute',
            color:
              theme.palette.type === 'dark'
                ? theme.palette.primary.contrastText
                : theme.palette.text.secondary
          }}
        />
      </FAContainer>
    </FAWrapper>
  );
};

const FACircularIconBig: React.FC<FACircularIconType> = ({ icon }: FACircularIconType) => {
  const theme = useTheme();
  return (
    <FAWrapper
      style={{ width: theme.spacing(116 / 8), height: theme.spacing(116 / 8), margin: 'auto' }}
    >
      <FAContainer>
        <FontAwesomeIcon
          fixedWidth
          icon={icon}
          mask={faCircle}
          transform="shrink-6"
          style={{
            fontSize: theme.spacing(116 / 8),
            display: 'block',
            position: 'absolute',
            color: theme.palette.secondary.dark
          }}
        />
      </FAContainer>
    </FAWrapper>
  );
};

const FACircularIconSmall: React.FC<FACircularIconType> = ({
  icon,
  color,
  margin
}: FACircularIconType) => {
  const theme = useTheme();
  return (
    <FAWrapper
      style={{
        width: theme.spacing(52 / 8),
        height: theme.spacing(52 / 8),
        margin: margin ?? 'auto'
      }}
    >
      <FAContainer>
        <FontAwesomeIcon
          fixedWidth
          icon={icon}
          mask={faCircle}
          transform="shrink-8"
          style={{
            fontSize: theme.spacing(52 / 8),
            display: 'block',
            position: 'absolute',
            color: color ?? theme.palette.secondary.dark
          }}
        />
      </FAContainer>
    </FAWrapper>
  );
};

export default FACircularIcon;
export { FACircularIconBig, FACircularIconSmall };
