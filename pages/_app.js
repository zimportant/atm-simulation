import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  setItems,
  setTheme,
  setWindowWidthHeight,
  setPanelType,
  setSubscriptionUrl
} from '../redux/actions';
import { setSitemapData, setSitemaps, setSitemapPage } from '../redux/actions/sitemapActions';
import store from '../redux/store';
import { ItemsApi, ServicesApi, SitemapsApi, BASE_PATH } from '../src/api';
import { getTheme } from '../src/theme';
import { configurationIdentifier } from '../src/constants';
import '../src/fonts';

class MyApp extends App {
  unsubscribe = () => {};

  constructor(props) {
    super(props);
    this.state = {
      paletteType: props.store.getState().themeConfig.paletteType,
      colorId: props.store.getState().themeConfig.colorId,
      isDataLoaded: false
    };
    this.unsubscribe = props.store.subscribe(this.handleStoreChange);
    console.log('______________________________INITIALIZING_APP______________________________');
  }

  handleStoreChange = () => {
    const { paletteType, colorId, isDataLoaded } = this.state;
    if (
      this.props.store.getState().themeConfig.paletteType !== paletteType ||
      this.props.store.getState().themeConfig.colorId !== colorId
    ) {
      this.setState({
        isDataLoaded,
        paletteType: this.props.store.getState().themeConfig.paletteType,
        colorId: this.props.store.getState().themeConfig.colorId
      });
    }
  };

  componentDidMount = async () => {
    console.log('______________________________COMPONENT_DID_MOUNT______________________________');
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const { innerWidth: width, innerHeight: height } = window;
    this.props.store.dispatch(setWindowWidthHeight(width, height));

    const { colorId, paletteType, isDataLoaded } = this.state;

    if (!isDataLoaded) {
      const {
        colorId2,
        paletteType2,
        sitemaps,
        sitemapData,
        allSitemapsSelected,
        sitemapSelected,
        panelType,
        store,
        subscriptionUrl
      } = await this.loadServerData();

      this.setState(s => ({ ...s, isDataLoaded: true }));
      this.setState({ isDataLoaded: true, colorId: colorId2, paletteType: paletteType2 });

      this.props.store.dispatch(setSubscriptionUrl(subscriptionUrl));
      this.props.store.dispatch(setPanelType(panelType));
      this.props.store.dispatch(setTheme(paletteType2, colorId2));
      this.props.store.dispatch(setSitemaps(sitemaps, allSitemapsSelected));
      this.props.store.dispatch(setSitemapData(sitemapData, sitemapSelected));
    }
  };

  componentWillUnmount = () => {
    console.log(
      '______________________________COMPONENT_WILL_UNMOUNT______________________________'
    );
    this.unsubscribe();
  };

  loadServerData = async () => {
    console.log('loading data SSR');
    // Only fetch first time here
    // Configuration
    const config = await new ServicesApi().getConfiguration(configurationIdentifier);
    const colorId = parseInt(config?.colorKey ?? 0, 10);
    const paletteType = config?.paletteTypeKey ?? 'dark';
    const panelType = config?.panelTypeKey ?? 'master';

    // Sitemaps
    const sitemaps = await (await new SitemapsApi().getSitemaps()).json();
    console.log(sitemaps);
    const allSitemapsSelected = parseInt(config?.allSitemapsSelectedKey ?? 0, 10);
    const sitemapData = await (
      await new SitemapsApi().getSitemapData(sitemaps[allSitemapsSelected].name)
    ).json();
    const sitemapSelected = parseInt(config?.sitemapSelectedKey ?? 0, 10);

    return {
      colorId2: colorId,
      paletteType2: paletteType,
      sitemaps,
      sitemapData,
      allSitemapsSelected,
      sitemapSelected,
      panelType,
      subscriptionUrl: '', // : eventSubscription.context.headers.Location[0],
      subscriptionId: ''
    };
  };

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    // Anything returned here can be access by the client
    return { pageProps, Component };
  }

  render() {
    // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;
    const { colorId, paletteType, isDataLoaded } = this.state;

    const theme = getTheme(paletteType, colorId);

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
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
