import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getTheme } from '../src/theme';
import '../src/fonts';

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    console.log('______________________________COMPONENT_DID_MOUNT______________________________');
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  };

  render() {
    // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;
    const theme = getTheme('light', 0);

    return (
      <>
        <style jsx global>
          {`
            @media (max-width: 960px) {
              html {
                font-size: 16px;
              }
            }

            audio {
              // filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
              width: 50%;
              // height: 50px;
            }

            .slick-dots {
              bottom: -${theme.spacing(60 / 8)}px !important;
            }

            .slick-dots li {
              margin: 0 !important;
              width: ${theme.spacing(160 / 8)}px !important;
              height: 5px !important;
              cursor: pointer;
              background: ${theme.palette.secondary.dark};
            }

            .slick-dots li.slick-active {
              background: ${theme.palette.secondary.contrastText} !important;
            }

            /* Customize website's scrollbar like Mac OS
            Not supports in Firefox and IE */

            /* total width */
            body::-webkit-scrollbar {
              background-color: #fff;
              width: 16px;
            }

            /* background of the scrollbar except button or resizer */
            body::-webkit-scrollbar-track {
              background-color: #fff;
            }

            /* scrollbar itself */
            body::-webkit-scrollbar-thumb {
              background-color: #babac0;
              border-radius: 16px;
              border: 4px solid #fff;
            }

            /* set button(top and bottom of the scrollbar) */
            body::-webkit-scrollbar-button {
              display: none;
            }
          `}
        </style>
        <Head>
          <title>Home Panel</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
