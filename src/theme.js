import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const colorOptions = [
  '#02ebc2',
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#f1c40f',
  '#e67e22',
  '#e74c3c'
];
const backgroundOptions = {
  light: {
    main: '#ecf0f1',
    light: '#fafafa',
    dark: '#D6D9DE'
  },
  dark: {
    main: '#3C3C3C',
    light: '#494949',
    dark: '#333333'
  }
};

function scaleWindow([sm, md, lg]) {
  if (typeof window === 'undefined') {
    return lg;
  }
  if (window.innerWidth >= 1280) {
    return lg;
  }
  if (window.innerWidth >= 960) {
    return md;
  }
  return sm;
}

function getTheme(paletteType, colorOptionId) {
  const fontScale = scaleWindow([1.6, 1.2, 1]);
  const theme = createMuiTheme({
    spacing: factor => scaleWindow([5, 7, 8]) * factor,
    typography: {
      fontSize: 16,
      h1: {
        fontSize: 134 / fontScale,
        fontWeight: 500
      },
      h2: {
        fontSize: 108 / fontScale,
        fontWeight: 500
      },
      h3: {
        fontSize: 84 / fontScale,
        fontWeight: 500
      },
      h4: {
        fontSize: 42 / fontScale
      },
      h5: {
        fontSize: 32 / fontScale
      },
      h6: {
        fontSize: 20 / fontScale
      },
      body1: {
        fontSize: 28 / fontScale
      },
      body2: {
        fontSize: 23 / fontScale
      },
      subtitle1: {
        fontSize: 18 / fontScale
      },
      subtitle2: {
        fontSize: 16 / fontScale
      },
      button: {
        fontSize: 14 / fontScale
      },
      caption: {
        fontSize: 12 / fontScale
      },
      overline: {
        fontSize: 12 / fontScale
      }
    },
    palette: {
      type: paletteType,
      background: {
        default: paletteType === 'dark' ? '#303030' : '#fafafa',
        paper: paletteType === 'dark' ? '#424242' : '#fff'
      },
      primary: {
        ...backgroundOptions[paletteType]
      },
      secondary: {
        main: colorOptions[colorOptionId],
        contrastText: '#fff'
      }
    }
  });

  return theme;
}

const defaultTheme = getTheme('dark', 0);
export default defaultTheme;
export { getTheme, colorOptions, backgroundOptions };
