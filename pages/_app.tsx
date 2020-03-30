import React from "react";
import GlobalStyles from "../GlobalStyles";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
