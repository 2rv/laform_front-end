import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../main/store';
import { setAutorization, setCurrentAuthCookie } from '../main/auth';
import { Router } from '../main/router';

import { langServerDetection, langBrowserDetection } from '../lib/common/lang';
import { authSetData, authGetCookieToken } from '../lib/common/auth';

import { NavigationObserver } from '../lib/common/navigation';

import '../asset/css/main.css';

import '../core/auth-signup';
import '../core/auth-login';

class MyApp extends App {
  componentDidMount() {
    langBrowserDetection();

    setCurrentAuthCookie();
  }

  static async getInitialProps({ Component, ctx }) {
    langServerDetection(ctx);

    const token = authGetCookieToken(ctx);

    setAutorization(token);

    await Router({ ...ctx, token });

    ctx.store.dispatch(authSetData(token));

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...ctx, token })
      : { token };

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ReduxProvider store={store}>
        <Head>
          <title>La'forme Patterns</title>
          <link
            rel="icon"
            href="/static/image/laforme-favicon.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="/static/image/laforme-favicon.png"
            sizes="192x192"
          />
        </Head>
        <NavigationObserver />
        <Component {...pageProps} />
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: false })(MyApp);
