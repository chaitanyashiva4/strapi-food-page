    import React from "react";
    import App from "next/app";
    import Head from "next/head";
    import Layout from "../components/Layout";
    import withData from "../lib/apollo";
    class MyApp extends App {
      render() {
        const { Component, pageProps } = this.props;
        return (
          <>
            <Head>
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
              />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        );
      }
    }
    export default withData({ ssr: true })(MyApp)