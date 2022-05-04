import Head from "next/head";
import Router from "next/router";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import MuiTheme from "theme/MuiTheme";
import "simplebar/dist/simplebar.min.css";
import OpenGraphTags from "utils/OpenGraphTags";
import React, { Fragment, useEffect } from "react";
import GoogleAnalytics from "utils/GoogleAnalytics";
import { AppProvider } from "contexts/app/AppContext";
import createEmotionCache from "../src/createEmotionCache";
import { CacheProvider } from "@emotion/react"; // Client-side cache, shared for the whole session of the user in the browser.
import axios from "axios";

const clientSideEmotionCache = createEmotionCache();
// export const cache = createCache({ key: 'css', prepend: true })
//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false,
});

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  const Layout = Component.layout || Fragment;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <GoogleAnalytics />
        <OpenGraphTags />
      </Head>
      <AppProvider themedata={pageProps.themedata}>
        <MuiTheme themedata={pageProps.themedata}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MuiTheme>
      </AppProvider>
    </CacheProvider>
  );
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

App.getInitialProps = async appctx => {
  const { ctx, Component } = appctx
  // const banners = await axios.get("http://localhost:1819/getbanners");
  const banners = {
    data:{
      data:{
        primary_bg: "#E63E58",
        secondary_bg: "#0F3460",
        footer_text: "#E3E9EF",
        logo: "",
        phone: "+88012 3456 7894",
        email: "support@ui-lib.com",
        fb: "",
        twitter: "",
        youtube: "",
        instagram: "",
        googleplus: "",
        primary_text: "#2B3445",
        secondary_text: "#373F50",
        sections: ['Section3', "sections2", 'Section1', "sections4"]
    }
    }
  }
  const appProps = { showActions: false, themedata:banners.data.data }

  if (Component.getServerSideProps) {
      Object.assign(appProps, await Component.getServerSideProps(ctx))
  }

  return { pageProps: { ...appProps }, mobxstore: appctx.ctx.store }
}

export default App;
