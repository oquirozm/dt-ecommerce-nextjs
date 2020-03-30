import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Main } from "../layouts";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
