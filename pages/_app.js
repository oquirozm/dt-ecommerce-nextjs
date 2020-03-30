import React from "react";
import App from "next/app";
import GlobalStyles from "../GlobalStyles";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <GlobalStyles />
      </>
    );
  }
}

export default MyApp;
